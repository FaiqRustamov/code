
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "http://161.97.113.89/api/v1/content/?topic_id=1",
    dataType: "json",
    success: function (data) {
    
    console.log(data[0].topic.topic_content);

 
  
    },
  });
});
