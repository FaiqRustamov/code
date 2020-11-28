
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/pod_topic/?format=json",
    dataType: "json",
    success: function (data) {
    
    console.log(data);
   

 
  
    },
  });
});
