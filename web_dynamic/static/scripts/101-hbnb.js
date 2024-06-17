#!/usr/bin/node
// The 1-hbnb script
const backendURL = 'http://0.0.0.0:5001/api/v1';
const checkedAmenities = {};
const checkedStates = {};
const checkedCities = {};
$.get(backendURL + '/status/', function (data, status) {
  if (data.status === 'OK') {
    $('DIV#api_status').addClass('available');
  } else {
    $('DIV#api_status').removeClass('available');
  }
});

fetch(backendURL + '/places_search/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({})
}).then(response => {
  return response.json();
}).then(data => {
  data.forEach(place => {
    $.get(backendURL + '/users/' + place.user_id, function (user, status) {
      $('SECTION.places').append(createArticle(place, user));
    });
  });
});

function createArticle (place, user) {
  const article = document.createElement('article');
  const div1 = document.createElement('div');
  div1.setAttribute('class', 'title_box');
  const h2 = document.createElement('h2');
  h2.innerHTML = place.name;
  const div11 = document.createElement('div');
  div11.setAttribute('class', 'price_by_night');
  div11.innerHTML = '$' + place.price_by_night;
  div1.appendChild(h2);
  div1.appendChild(div11);
  article.appendChild(div1);

  const div2 = document.createElement('div');
  div2.setAttribute('class', 'information');
  const div21 = document.createElement('div');
  div21.setAttribute('class', 'max_guest');
  div21.innerHTML = place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '');
  const div22 = document.createElement('div');
  div22.setAttribute('class', 'number_rooms');
  div22.innerHTML = place.number_rooms + ' Room' + (place.number_rooms !== 1 ? 's' : '');
  const div23 = document.createElement('div');
  div23.setAttribute('class', 'number_bathrooms');
  div23.innerHTML = place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '');
  div2.appendChild(div21);
  div2.appendChild(div22);
  div2.appendChild(div23);
  article.appendChild(div2);

  const div3 = document.createElement('div');
  div3.setAttribute('class', 'user');
  if (user) {
    div3.innerHTML = '<b>Owner:</b> ' + (user.first_name ? user.first_name : '') + ' ' + (user.last_name ? user.last_name : '');
  }
  article.appendChild(div3);

  const div4 = document.createElement('div');
  div4.setAttribute('class', 'description');
  div4.innerHTML = place.description ? place.description : '';
  article.appendChild(div4);

  const div5 = document.createElement('div');
  div5.setAttribute('class', 'reviews');
  const div51 = document.createElement('h2');
  div51.innerHTML = 'Reviews';
  const div52 = document.createElement('ul');
  div5.appendChild(div51);
  div5.appendChild(div52);
  article.appendChild(div5);

  return article;
}

window.onload = function () {
  $('DIV.amenities DIV.popover UL LI INPUT').on('click', function () {
    const dataId = this.getAttribute('data-id');
    const dataName = this.getAttribute('data-name');
    if (dataId in checkedAmenities) {
      delete checkedAmenities[dataId];
    } else {
      checkedAmenities[dataId] = dataName;
    }
    const content = [];
    for (const key of Object.keys(checkedAmenities)) {
      content.push(checkedAmenities[key]);
    }
    $('DIV.amenities H4').text(content.join(', '));
  });

  $('DIV.locations DIV.popover UL LI H2 INPUT').on('click', function () {
    const dataId = this.getAttribute('data-id');
    const dataName = this.getAttribute('data-name');
    if (dataId in checkedStates) {
      delete checkedStates[dataId];
    } else {
      checkedStates[dataId] = dataName;
    }
    const contentState = [];
    for (const key of Object.keys(checkedStates)) {
      contentState.push(checkedStates[key]);
    }
    const contentCity = [];
    for (const key of Object.keys(checkedCities)) {
      contentCity.push(checkedCities[key]);
    }
    $('DIV.locations H4').empty();
    $('DIV.locations H4').append(formatStateCity(contentState.join(', '), contentCity.join(', ')));
  });

  $('DIV.locations DIV.popover UL LI UL LI INPUT').on('click', function () {
    const dataId = this.getAttribute('data-id');
    const dataName = this.getAttribute('data-name');
    if (dataId in checkedCities) {
      delete checkedCities[dataId];
    } else {
      checkedCities[dataId] = dataName;
    }
    const contentState = [];
    for (const key of Object.keys(checkedStates)) {
      contentState.push(checkedStates[key]);
    }
    const contentCity = [];
    for (const key of Object.keys(checkedCities)) {
      contentCity.push(checkedCities[key]);
    }
    $('DIV.locations H4').empty();
    $('DIV.locations H4').append(formatStateCity(contentState.join(', '), contentCity.join(', ')));
  });

  $('SECTION.filters BUTTON').on('click', function () {
    fetch(backendURL + '/places_search/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amenities: checkedAmenities, cities: checkedCities, states: checkedStates })
    }).then(response => {
      return response.json();
    }).then(data => {
      $('SECTION.places').empty();
      data.forEach(place => {
        $.get(backendURL + '/users/' + place.user_id, function (user, status) {
          $('SECTION.places').append(createArticle(place, user));
        });
      });
    });
  });
};

function formatStateCity (states, cities) {
  const st = document.createElement('div');
  st.innerHTML = states;
  const ct = document.createElement('div');
  ct.innerHTML = cities;

  const div = document.createElement('div');
  div.append(st);
  div.append(ct);
  return div;
}
