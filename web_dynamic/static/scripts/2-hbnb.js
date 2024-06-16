#!/usr/bin/node
// The 1-hbnb script
let checkedAmenities = {};
$.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
  if (data.status == 'OK') {
    $('DIV#api_status').addClass('available');
  } else {
    $('DIV#api_status').removeClass('available');
  }
});

window.onload = function () {
  $('DIV.amenities DIV.popover UL LI INPUT').on('click', function () {
    let dataId = this.getAttribute('data-id');
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
};
