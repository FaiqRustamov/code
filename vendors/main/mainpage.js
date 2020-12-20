
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
      const elementdata=document.querySelector('#Feature_id');
      console.log(data[0]);



        elementdata.innerHTML=`
      <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="single_feature_2">
          <center>
            <img class="img-fluid" style="padding" src="${data[0].photo}" alt="" />
          </center>
          <a href="course-details.html">
          <div class="desc">
          <h2 class="card-title corse_h2">${data[0].name}</h2>
          <p class="card-text corse_p">${data[0].description}</p>
          </div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="single_feature_2">
          <center>
            <img class="img-fluid" src="${data[0].photo}" alt="" />
          </center>
          <a href="">
          <div class="desc">
          <h2 class="card-title corse_h2">${data[1].name}</h2>
          <p class="card-text corse_p">${data[1].description}</p>
          </div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="single_feature_2">
          <center>
            <img class="img-fluid" src="" alt="" />
          </center>
          <a href="">
          <div class="desc">
          <h2 class="card-title corse_h2"></h2>
          <p class="card-text corse_p"></p>
          </div>
          </a>
        </div>
      </div>

    </div>
  `
      // element.innerHTML = `${data[0].title}`
      // element2.innerHTML = `${data[0].topic.name}`
      // element3.innerHTML = `${data[0].text}`


    },
  });
});


