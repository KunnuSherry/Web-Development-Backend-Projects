let duration = prompt("Write The Duration of the video");
let videoTitle = prompt("Write The title of the video");
let channelName = prompt("Write The channel name");
let viewsCount = prompt("Write The exact number of views");
let monthsOld = prompt("Write how old is the video(in months)");

if(viewsCount>1000){
    views = viewsCount/1000 + "K";
}

else if(viewsCount>1000000){
    views = viewsCount/1000000 + "M";
}
else{
    views = viewsCount;
}


let html = `<div class="main">
<div class="img">
    <img src="thumbnail.webp" alt="image">
    <div class="time">
        ${duration}
    </div>
</div>
<div class="text">
    <div class="t1">
        ${videoTitle}
    </div>
    <div class="t2">
        <div class="channelName">
            ${channelName}
        </div>
        <div class="views">
            ${views} views
        </div>
        <div class="timeuploaded">
            ${monthsOld} months ago
        </div>
    </div>
</div>
</div>` ;
document.body.innerHTML = html ;