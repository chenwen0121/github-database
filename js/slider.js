//相片輪播器
// var slide=document.querySelector(".slide");    
// var slide_ul=document.querySelector("#slide_ul");
// var slide_ul_li=document.querySelectorAll("#slide_ul>li");
// var slide_time=setInterval(slide_fun,3000)
// function slide_fun(){
//       var frame_slide=[
//             {left:"0%"},
//             {left:"-100%"}
//       ]
//       slide_ul.animate(frame_slide,3000);
//       slide_ul.style.left="-100%";
//       slide_ul.appendChild(slide_ul.firstElementChild);
// }
document.addEventListener('DOMContentLoaded', () => {
      var slide = document.querySelector(".slide");
      var slide_ul = document.querySelector("#slide_ul");
      var slide_ul_li = document.querySelectorAll("#slide_ul>li");
      var totalSlides = slide_ul_li.length;
      var currentIndex = 0;
      var slideInterval = 3000;
      var slideAnimationDuration = 1000;
  
      // 克隆第一张图片并追加到列表末尾，实现无缝过渡
      var firstClone = slide_ul_li[0].cloneNode(true);
      slide_ul.appendChild(firstClone);
  
      function slide_fun() {
          currentIndex++;
          updateSlidePosition();
      }
  
      function updateSlidePosition() {
          // 设置过渡动画样式
          slide_ul.style.transition = `left ${slideAnimationDuration}ms ease`;
          // 更新图片的左边距
          slide_ul.style.left = `-${currentIndex * 100}%`;
  
          // 在动画结束后执行无缝切换
          slide_ul.addEventListener('transitionend', handleTransitionEnd);
      }
  
      function handleTransitionEnd() {
          // 如果到达克隆的第一张图片，立即无缝跳转到实际第一张图片
          if (currentIndex === totalSlides) {
              slide_ul.style.transition = 'none';
              slide_ul.style.left = '0';
              currentIndex = 0;
          }
      }
  
      // 设置轮播定时器，每隔指定时间调用一次slide_fun
      var slide_time = setInterval(slide_fun, slideInterval);
  
      // 添加过渡结束事件监听器
      slide_ul.addEventListener('transitionend', handleTransitionEnd);
  });