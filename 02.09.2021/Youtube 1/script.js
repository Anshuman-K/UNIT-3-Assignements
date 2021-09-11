var count = 0;


let maindiv = document.getElementById("content-box");

async function SearchVideos(){
    if(count>0){
        remove_predata();
    }
    let inputB = document.getElementById("searchbox").value;
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${inputB}&type=Video&key=AIzaSyBr6cJLsDCjHkGOArtGkad0T7hUU_VZARw&maxResults=20`);
    let data = await res.json();
    console.log('data:', data);

    for({id: { videoId }} of data.items){
    console.log('videoId:', videoId)
    let innerdiv = document.createElement("div");
    innerdiv.setAttribute("class","innerdiv");
    let video_frame = document.createElement("iframe");

    video_frame.src = `https://www.youtube.com/embed/${videoId}`;
    video_frame.allow = `fullscreen`;
    innerdiv.appendChild(video_frame);
    maindiv.append(innerdiv);
    }
    document.getElementById("searchbox").value = "";
    count++;
}

function remove_predata(){
    let video_frame = document.querySelectorAll("#content-box>div")
    console.log('video_frame:', video_frame)
    for(var i = 0; i< video_frame.length; i++){
        video_frame[i].remove();
    }
}