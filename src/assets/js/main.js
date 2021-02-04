"use strict"



$(window).scroll(function(){
    let scrollTop = document.documentElement.scrollTop;
    let videoIntro = document.querySelector("#videoIntro"); 
    
    if(videoIntro){
        videoIntro.currentTime = scrollTop/500;
    }
});

