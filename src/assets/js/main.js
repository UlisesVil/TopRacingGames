"use strict"


$(document).ready(function() {
   
     //Button Upload Personalized 
    $('input[type=file]').change(function(){
        var filename = $(this).val().split('\\').pop();
        var idname = $(this).attr('id');
        console.log($(this));
        console.log(filename);
        console.log(idname);
        $('span.'+idname).next().find('span').html(filename);
    
    
    }); 
    
});  





$(window).scroll(function(){
    let scrollTop = document.documentElement.scrollTop;
    let videoIntro = document.querySelector("#videoIntro"); 
    
    if(videoIntro){
        videoIntro.currentTime = scrollTop/500;
        
    }
});




