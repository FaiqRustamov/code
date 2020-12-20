
let currentPage = 1;
let con = 0;
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "http://161.97.113.89/api/v1/course/?format=json",
    dataType: "json",
    success: function (data) {
      // const element = document.querySelector('#datacourse');
      // const element2 = document.querySelector('#datacorse2');
      // const element3 = document.querySelector('#datacurse3');
      console.log(data);
      // element.innerHTML = `${data[0].title}`
      // element2.innerHTML = `${data[0].topic.name}`
      // element3.innerHTML = `${data[0].text}`


    },
  });
});


