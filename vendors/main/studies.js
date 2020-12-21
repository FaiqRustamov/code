let currentPage = 1;
let con = 0;
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "http://161.97.113.89/api/v1/studies/?content_id=1",
    dataType: "json",
    success: function (data) {
      console.log(data);
    },
  });
});