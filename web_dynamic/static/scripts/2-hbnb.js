$.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
  if (textStatus === 'success') {
    $('div#api_status').addClass('available');
  }
}).fail(function () {
  $('div#api_status').removeClass('available');
});