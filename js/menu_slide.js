//下拉式選單
var w_w=window.innerWidth;
var main_menu_li=document.querySelectorAll("#main_menu>li");    //取得main_menu_li的nodelist
if(w_w>=600){
  main_menu_li.forEach(function(item){                            //利用forEach迴圈尋訪nodelist
    item.addEventListener("mouseover",function(){                 //設定監聽器
        item.lastElementChild.classList.add("display_block");     //增加display_block類別
      })
    item.addEventListener("mouseout",function(){
        item.lastElementChild.classList.remove("display_block");  //移除display_block類別
    })
  })
}


//手機滑入選單
var ham=document.getElementById("ham");
var menu=document.getElementById("main_menu");
menu.style.left ="100%";                                     //設定menu的css left為100%(螢幕寬度)
ham.addEventListener("click",function(){                     //設定ham監聽器
    menu_slide();                                            //執行選單滑動函式
})

  function menu_slide(){                                     //選單滑動函式
    var menu_position=window.getComputedStyle(menu, null);   //取得menu所有css值的集合
    var left_star = menu_position.getPropertyValue("left");  //取得menu css left目前的值 
        left_star=left_star.split("p");                      //拆解left_star字串
        left_star=Math.floor(left_star[0]);                  //取left_star字串為整數
    if(left_star>=100){                                  //若menu css left的值大於螢幕寬度-100相同時
      menu_animate(100,0);                                   //執行menu滑動動畫函式
    }else if(left_star==0){                                  //若menu css left的值為0px時
      menu_animate(0,100);                                   //執行menu滑動動畫函式
    }
  }
 
  function menu_animate(left_star,left_end){                 //設定menu滑動動畫函式
    var frame_1 = [                                          //設定關鍵禎
    { left:left_star+"%"},
    { left:left_end+"%" },
     ];
    menu.animate(                                            //設定menu動畫
      frame_1, { 
        duration: 1000,
        iterations: 1,
      },
    );
    menu.style.left =left_end+"%";                            //固定menu移動後位置
  }

//手機次選單展開動畫
if(w_w<600){
      main_menu_li.forEach(function (item) {                               //以forEach函式遍訪#menu>li的集合
          item.addEventListener("click", function (e) {               //設定監聽器，監聽集合中的每個li，啟動事件為滑鼠點擊
          this.lastElementChild.classList.toggle("display_block");    //設定li的最後一個子元素動畫
          })
      })
  //完成超連結後選單移出
  var menu_li_a = document.querySelectorAll("#main_menu>li a");    //取得所有#menu>li a的集合
      menu_li_a.forEach(function (item) {                     //以forEach函式遍訪#menu>li a的集合
      item.addEventListener("click", function (e) {           //設定監聽器，監聽集合中的每個a，啟動事件為滑鼠點擊
      console.log(item);
        menu_slide()                                          //執行選單滑動函式
    })
  })
}
