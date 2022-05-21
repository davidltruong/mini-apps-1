$(document).ready(function () {
  $('form').on('submit', function(e){
    e.preventDefault();
    var data = new FormData();
    var file = e.target[0].files[0]
    data.append('file', file)

    $.ajax({
      method: "POST",
      url: "/",
      data: data,
      processData: false,
      contentType: false,
      success: function(data) {
        $('#csv').html('<br>' + data)
        $('body').append('<br>')
        $('body').append('<form id=download method="GET" action="/download"></form>')
        $('#download').append('<input id="submit" type="submit" value="Download"></input>')
      },
      error: function() {console.log('error')}
    })
  });
});

var download = () => {
  $.ajax({
    method: "GET",
    url: "/",
    success: function(file) {
      console.log(file)

    }
  })
}