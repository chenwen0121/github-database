//監聽器與事件
var logo=document.getElementById("logo");              //取得logo元件
logo.addEventListener("click",function(){              //設定logo監聽器
      if(logo.hasAttribute("class")){                  //設定class屬性切換
            logo.removeAttribute("class");
         }else{
            logo.setAttribute("class","color_blue");
       }
})
//回到頂部
var backTop = document.getElementById('backTop');
var html = document.documentElement;
backTop.addEventListener('click',function(){
    html.scrollTo({
        top: 0,
        behavior:'smooth'
    })
})
window.addEventListener('scroll',function(){
    // console.log(html.scrollTop);
    if(html.scrollTop > 800){
        backTop.style.display = 'block';
    }else{
        backTop.style.display = 'none';
    }
})
//window物件的運用
var w_w=window.innerWidth;                                     //取得螢幕寬度
var w_h=window.innerHeight;                                    //取得螢幕高度
var header=document.querySelector("header");                   //取得header
header.style.height=w_h+'px';                                  //設定header為螢幕高度  

//視窗捲動效果
var header_cta=document.getElementById("header_cta");          
window.addEventListener("scroll",function(){
      var w_positionY=window.scrollY;
      if(w_positionY==400){
          var keyframe=[
            {top:"1000px"},
            {top:"600px"}
          ]  
          header_cta.animate(keyframe,1000);
          header_cta.style.top="600px";
      }  
})

// 更換頁首照片
var photo_set=document.getElementById("photo_set");
var photo_set_li="";
fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=347a706f965c48e14a90f50e1b7be008&photoset_id=72177720317380564&user_id=199424248%40N02&format=json&nojsoncallback=1")
.then(function(response){
    return response.json();
}).then(function(data){
    var photo_array=data.photoset.photo;
    console.log(photo_array);
    var photo_id=photo_array[0].id;
    var server_id=photo_array[0].server;
    var secret=photo_array[0].secret;
    var src="https://live.staticflickr.com/"+server_id+"/"+photo_id+"_"+secret+"_b.jpg"
    console.log(src);
    header.style.backgroundImage="url("+src+")";
});

// 攝影作品照片
var photogr=document.getElementById("photogr");
var photogr_li="";
fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=347a706f965c48e14a90f50e1b7be008&photoset_id=72177720317030879&user_id=199424248%40N02&format=json&nojsoncallback=1")
.then(function(response){
    return response.json();
}).then(function(data){
    var photo_array=data.photoset.photo;
    console.log(photo_array);
    for(i=0;i<8;i++){
       var photo_id=photo_array[i].id;
       var server_id=photo_array[i].server;
       var secret=photo_array[i].secret;
       var src="https://live.staticflickr.com/"+server_id+"/"+photo_id+"_"+secret+"_b.jpg"
       photogr_li+="<li><img src='"+src+"'></li>";
    }
    console.log(photogr_li);
    photogr.innerHTML=photogr_li;
});

// 設計作品照片
var design_img=document.getElementById("design_img");
console.log(design_img);
var design_img_li="";
fetch("  https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=347a706f965c48e14a90f50e1b7be008&photoset_id=72177720312310016&user_id=199424248%40N02&format=json&nojsoncallback=1")
.then(function(response){
    return response.json();
}).then(function(data){
    var photo_array=data.photoset.photo;
    console.log(photo_array);
    for(i=0;i<8;i++){
       var photo_id=photo_array[i].id;
       var server_id=photo_array[i].server;
       var secret=photo_array[i].secret;
       var src="https://live.staticflickr.com/"+server_id+"/"+photo_id+"_"+secret+"_b.jpg"
       design_img_li+="<li><img src='"+src+"'></li>";
    }
    console.log(design_img_li);
    design_img.innerHTML=design_img_li;
});

























