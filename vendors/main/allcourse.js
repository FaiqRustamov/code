

// let currentPage = 1;
// let con=0;
// $(document).ready(function () {
//   $.ajax({
//     method: "GET",
//     url: "http://161.97.113.89/api/v1/topic/",
//     dataType: "json",
//     success: function (data) {
//     const element=document.querySelector('#Feature_id');
//     console.log(data);

//   element.innerHTML=`
//       <div class="row">
//       <div class="col-lg-4 col-md-6">
//         <div class="single_feature_2">
//           <center>
//             <img class="img-fluid" style="padding" src="img/kkkkk.png" alt="" />
//           </center>
//           <a href="course-details.html">
//           <div class="desc">
//           <h2 class="card-title corse_h2">${data[0].courses.name}</h2>
//           <p class="card-text corse_p">${data[0].courses.description}</p>
//           </div>
//           </a>
//         </div>
//       </div>

//       <div class="col-lg-4 col-md-6">
//         <div class="single_feature_2">
//           <center>
//             <img class="img-fluid" src="img/kkkkk.png" alt="" />
//           </center>
//           <a href="">
//           <div class="desc">
//           <h2 class="card-title corse_h2">${data[1].courses.name}</h2>
//           <p class="card-text corse_p">${data[1].courses.description}</p>
//           </div>
//           </a>
//         </div>
//       </div>

//       <div class="col-lg-4 col-md-6">
//         <div class="single_feature_2">
//           <center>
//             <img class="img-fluid" src="${data[2].courses.photo}" alt="" />
//           </center>
//           <a href="">
//           <div class="desc">
//           <h2 class="card-title corse_h2">${data[2].courses.name}</h2>
//           <p class="card-text corse_p">${data[2].courses.description}</p>
//           </div>
//           </a>
//         </div>
//       </div>

//     </div>
//   `
  
//     },
//   });
// });




