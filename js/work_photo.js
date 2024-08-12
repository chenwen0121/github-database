var photo_set=document.getElementById("photo_set");
var photo_set_li="";
fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=347a706f965c48e14a90f50e1b7be008&photoset_id=72177720317030879&user_id=199424248%40N02&format=json&nojsoncallback=1")
.then(function(response){
    return response.json();
}).then(function(data){
    var photo_array=data.photoset.photo;
    console.log(photo_array);
    for(i in photo_array){
       var photo_id=photo_array[i].id;
       var server_id=photo_array[i].server;
       var secret=photo_array[i].secret;
       var src="https://live.staticflickr.com/"+server_id+"/"+photo_id+"_"+secret+"_b.jpg"
       photo_set_li+="<li><img src='"+src+"'></li>";
    }
    console.log(photo_set_li);
    photo_set.innerHTML=photo_set_li;
});