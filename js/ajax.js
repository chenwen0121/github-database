var xhr=new XMLHttpRequest;
xhr.open("get","data/stephen.json");
xhr.send();
xhr.onload=function(){
 var text=xhr.responseText;
 var obj=JSON.parse(text);
 var st=document.getElementById("st");
 var st_li="";
 obj.forEach(element => {
    var img_src=element.src;
    var name=element.名稱;
    var pr=element.價格;
    st_li+="<li><img src='images/work/design/"+img_src+"'></li>";
    st_li+="<li>"+ name+"</li>";
    st_li+="<li>"+ pr+"</li>";
 });
 console.log(st_li);
 st.innerHTML=st_li;




}