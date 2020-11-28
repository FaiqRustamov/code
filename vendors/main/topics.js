let currentPage=1;
$(document).ready(function(){
   
    $.ajax({
        method:"GET",
        url:"http://127.0.0.1:8000/course/topics/1/",
        dataType:"json",
        success:function(data){
            request.setRequestHeader("content-type", "application/json");
            request.send(JSON.stringify(userdata));
           if(userdata){
            const course_items_container = document.querySelector(".course_item");
            course_items_container.innerHTML = "";
            console.log(JSON.parse(JSON.stringify(data.results)));
           }
        }
    })
})