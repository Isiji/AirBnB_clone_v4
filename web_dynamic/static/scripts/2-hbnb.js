function init() {

  const amenityObj = {};
  $('amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenityObj[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenityObj[$(this).attr('data-id')];
    }
    if (Object.values(amenityObj).length > 0) {
      $('div.amenities h4').text(Object.values(amenityObj).join(', '));
    } else {
      $('div.amenities h4').html('&nbsp;');
    }
  });

  apiStatus();
}

function apiStatus() {

  const url = 'http://$(HOST):5001/api/v1/status/';

  $.get(url, function (data, status) {
    if (status === 'success') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  }
}