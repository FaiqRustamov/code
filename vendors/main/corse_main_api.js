// let currentPage = 1;
// $(document).ready(function () {
//   $.ajax({
//     method: "GET",
//     url: "http://127.0.0.1:8000/api/v1/topic/",
//     dataType: "json",
//     success: function (data) {
//       const course_items_container = document.querySelector(".course_item");
//       course_items_container.innerHTML = "";
//       console.log(data);
//       data.results.forEach((course) => {
       
//         let col_md_4= document.createElement("div");
//         col_md_4.className="col-md-4";
//         let single_course=document.createElement("div");
//         single_course.className="single_course";
//         let course_head=document.createElement("div");
//         course_head.className="course_head";
//         let img = document.createElement("img");
//         img.className="course_img";
//         img.src=course.photo
//         course_head.appendChild(img);
//         let course_content=document.createElement("div");
//         course_content.className="course_content";
//         let course_title=document.createElement("a");
//         course_title.className="course_title";
//         course_title.href="course-details.html";
//         course_title.innerHTML="<h4>"+course.name+"</h4>";
//         course_content.appendChild(course_title);
//         single_course.appendChild(course_head);
//         single_course.appendChild(course_content);
//         col_md_4.appendChild(single_course);
//         course_items_container.appendChild(col_md_4);


    
//       });
//     },
//   });
// });


