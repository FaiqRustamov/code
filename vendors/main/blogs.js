// test = () => {
//   const req = new XMLHttpRequest();
//   req.open("GET", "http://127.0.0.1:8000/blog/allblog", false);
//   req.send();
// };
// test();
let currentPage = 1;
$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "http://127.0.0.1:8000/blog/allblog",
    dataType: "json",
    success: function (data) {
      const blog_items_container = document.querySelector(".blog_left_sidebar");
      blog_items_container.innerHTML = "";
      console.log(JSON.parse(JSON.stringify(data.results)));
      data.results.forEach((article) => {
        let blog_item = document.createElement("article");
        blog_item.className = "row blog_item";
        let col_md_3 = document.createElement("div");
        col_md_3.className = "col-md-3";
        let blog_sidebar = document.createElement("div");
        blog_sidebar.className = "blog_info text-right";
        let blog_tags = document.createElement("div");
        blog_tags.className = "post_tag";
        /* Dinamik teqler olarsa article.tags.foreach ve sayr kimi
          indi sadece innerHTML Edecem
        */
        blog_tags.innerHTML =
          ' <a href="#">Python,</a> <a class="active" href="#">Alqoritmlər,</a> <a href="#">Data strukturları,</a> <a href="#">OOP</a>';
        let blog_meta_list = document.createElement("ul");
        blog_meta_list.className = "blog_meta list";
        blog_meta_list.innerHTML =
          ' <li><a href="#">İkan<i class="ti-user"></i></a></li><li><a href="#">12 Dec, 2017<i class="ti-calendar"></i></a></li><li><a href="#">1.2M baxış<i class="ti-eye"></i></a></li><li><a href="#">06 şərh<i class="ti-comment"></i></a></li>';
        blog_sidebar.appendChild(blog_tags);
        blog_sidebar.appendChild(blog_meta_list);

        col_md_3.appendChild(blog_sidebar);

        let col_md_9 = document.createElement("div");
        col_md_9.className = "col-md-9";

        let blog_post = document.createElement("div");
        blog_post.className = "blog_post";
        let img = document.createElement("img");
        //Burda backda sekil yoxdu deye url qoyacam sonra article.image ye evezleyersen
        img.src = "img/blog/blog-installing-python.png";
        blog_post.appendChild(img);
        let blog_details = document.createElement("div");
        blog_details.className = "blog_details";
        let blog_title = document.createElement("a");
        blog_title.className = "blog_title";
        blog_title.href = "./single_page.html";
        blog_title.innerHTML = "<h2>" + article.title + "</h2>";
        blog_details.appendChild(blog_title);
        let blog_subcontent = document.createElement("p");
        blog_subcontent.innerHTML = article.article;
        blog_details.appendChild(blog_subcontent);
        let read_more = document.createElement("a");
        read_more.className = "blog_btn";
        read_more.innerHTML = "Ətraflı";
        read_more.href = "./single-blog.html";
        blog_details.appendChild(read_more);
        blog_post.appendChild(blog_details);
        col_md_9.appendChild(blog_post);
        blog_item.appendChild(col_md_3);
        blog_item.appendChild(col_md_9);
        blog_items_container.appendChild(blog_item);
      });
    },
  });
});
