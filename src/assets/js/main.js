"use strict"

$(window).scroll(function(){
    let scrollTop = document.documentElement.scrollTop;
    videoIntro.currentTime = scrollTop/500;

    //console.log({scrollTop});
});