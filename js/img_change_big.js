// 圖片放大效果
var ul_img=document.querySelectorAll(".ul_img>li>img");
var body=document.querySelector("body");
var bg_div=document.createElement("div");
ul_img.forEach(function(item){
  item.addEventListener("click",function(){
      var ul_img_src=item.getAttribute("src");
      console.log(ul_img_src);
      bg_div.setAttribute("id","bg_div");
      body.insertBefore(bg_div,body.firstElementChild);
      console.log(bg_div);
      bg_div.innerHTML='<div id="img_div"><img src="'+ul_img_src+'"></div>';     
  })
  bg_div.addEventListener("click",function(){
      bg_div.remove();
  })
})