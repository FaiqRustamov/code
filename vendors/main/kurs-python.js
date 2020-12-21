
let currentPage = 1;
let con = 0;
// $(document).ready(function () {
//   $.ajax({
//     method: "GET",
//     url: "http://161.97.113.89/api/v1/topic/?course_id=1",
//     dataType: "json",
//     success: function (data) {
//       console.log(data);
//     },
//   });
// });



$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "http://161.97.113.89/api/v1/topic/?course_id=1",
    dataType: "json",
    success: function (data2) {dataAccardionname1
      console.log(data2[0].name);
      const dataaccord1 = document.querySelector('#dataAccardionname1');
      const dataaccord2 = document.querySelector('#dataAccardionname2');
      dataaccord1.innerHTML = `${data2[0].name}`
      dataaccord2.innerHTML = `${data2[1].name}`
    },
  });
});


$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "http://161.97.113.89/api/v1/pod_topic/?topic_id=1",
    dataType: "json",
    success: function (data3) {
      const dataaccord1 = document.querySelector('#accardion1');
      const dataaccord2 = document.querySelector('#accardion2');
      const dataaccord3 = document.querySelector('#accardion21');
    
      console.log(data3);
      dataaccord1.innerHTML = `${data3[0].name}`
      dataaccord2.innerHTML = `${data3[1].name}`
      dataaccord3.innerHTML = `${data3[0].name}`
   
    },
  });
});