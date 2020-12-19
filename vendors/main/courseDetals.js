
let currentPage = 1;
let con = 0;
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "http://161.97.113.89/api/v1/content/?topic_id=1",
    dataType: "json",
    success: function (data) {
      const element = document.querySelector('#datacourse');
      const element2 = document.querySelector('#datacorse2');
      const element3 = document.querySelector('#datacurse3');
      // console.log(data[0].title);
      element.innerHTML = `${data[0].title}`
      element2.innerHTML = `${data[0].topic.name}`
      element3.innerHTML = `${data[0].text}`


    },
  });
});

let currentPage2 = 1;
let con3 = 0;
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "http://161.97.113.89/api/v1/pod_topic/?format=json&topic_id=1",
    dataType: "json",
    success: function (data2) {
      const element4 = document.querySelector('#accardion1');
      const element5 = document.querySelector('#accardion2');
      const element6 = document.querySelector('#accardion3');
      // console.log(data2[1].name);
      element4.innerHTML = `${data2[1].name}`
      element5.innerHTML = `${data2[2].name}`
      element6.innerHTML = `${data2[3].name}`


    },
  });
});
