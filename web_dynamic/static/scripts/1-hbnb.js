#!/usr/bin/node
// The 1-hbnb script
const checkedAmenities = {};
const content = [];
window.onload = function () {
  $('DIV.amenities DIV.popover UL LI INPUT').on('click', function () {
    const dataId = this.getAttribute('data-id');
    const dataName = this.getAttribute('data-name');
    if (dataId in checkedAmenities) {
      delete checkedAmenities[dataId];
    } else {
      checkedAmenities[dataId] = dataName;
    }
    for (const key of Object.keys(checkedAmenities)) {
      content.push(checkedAmenities[key]);
    }
    $('DIV.amenities H4').text(content.join(', '));
  });
};
