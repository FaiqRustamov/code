

let currentPage = 1;
let con=0;
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "http://127.0.0.1:8000/api/v1/topic/",
    dataType: "json",
    success: function (data) {
    const element=document.querySelector('#Feature_id');
    console.log(data);

  element.innerHTML=`
      <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="single_feature_2">
          <center>
            <img class="img-fluid" style="padding" src="img/kkkkk.png" alt="" />
          </center>
          <a href="course-details.html">
          <div class="desc">
          <h2 class="card-title corse_h2">${data[0].courses.name}</h2>
          <p class="card-text corse_p">${data[0].courses.description}</p>
          </div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="single_feature_2">
          <center>
            <img class="img-fluid" src="img/kkkkk.png" alt="" />
          </center>
          <a href="">
          <div class="desc">
          <h2 class="card-title corse_h2">${data[1].courses.name}</h2>
          <p class="card-text corse_p">${data[1].courses.description}</p>
          </div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6">
        <div class="single_feature_2">
          <center>
            <img class="img-fluid" src="${data[2].courses.photo}" alt="" />
          </center>
          <a href="">
          <div class="desc">
          <h2 class="card-title corse_h2">${data[2].courses.name}</h2>
          <p class="card-text corse_p">${data[2].courses.description}</p>
          </div>
          </a>
        </div>
      </div>

    </div>
  `
  
    },
  });
});




// http://127.0.0.1:8000/api/v1/course/ - list courses
// http://127.0.0.1:8000/api/v1/topic/ - list topics
// http://127.0.0.1:8000/api/v1/pod_topic/ - list pod topics(topiclerin alt metinleri)
// http://127.0.0.1:8000/api/v1/studies/?content_id=1 - kontentlere gore tapsiriglar (http://127.0.0.1:8000/api/v1/pod_topic/  icinde  "topic_content": [ {«id»:int}] var content_id hemin adi ye gore gotrulur )
// http://127.0.0.1:8000/api/v1/content/?topic_id=1 - topiclere gore contentleri filter etmek ucun (topic_id=1  bu id http://127.0.0.1:8000/api/v1/pod_topic/  burdaki listlerin id sine gore filter edit)

// http://127.0.0.1:8000/api/v1/main_test/ - Hans topiclerde test tapsirigin olmasi listi

// http://127.0.0.1:8000/api/v1/test/?main_id=1 - testler topicler uzre filterlenmesi main_id yuxardaki main_test in id sine beraberdi


// yeni gelen
// http://127.0.0.1:8000/api/v1/pod_topic/ 
//  http://127.0.0.1:8000/api/v1/topic/ 
//  http://127.0.0.1:8000/api/v1/content/?topic_id=1