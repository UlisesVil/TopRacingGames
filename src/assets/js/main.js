"use strict"

$(document).ready(function() {

    //Nav-Bar
    $(".mat-drawer-backdrop").click(function(){
        $('#transparentWall').removeAttr('style','background:red; width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:red;');
    });
    $(".linkNav").click(function(){
        $('#transparentWall').removeAttr('style','background:red; width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:red; display:none');
           
    });
    $("#buttonNav2").click(function(){
        $('#transparentWall').removeAttr('style','background:red; width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:red; display:none');
    });
   
    //Personalized Button Upload  
    $('input[type=file]').change(function(){
        var filename = $(this).val().split('\\').pop();
        var idname = $(this).attr('id');
        $('span.'+idname).next().find('span').html(filename);
    }); 

});  

//Resize #titleContent main.component.html
$(window).ready(function(){
    var width = $(window).width();
    $('#title').height(width*.575);
});

//Video progress-control with scroll main.component
$(window).scroll(function(){
    let scrollTop = document.documentElement.scrollTop;
    let videoIntro = document.querySelector("#videoIntro"); 
    if(videoIntro){
        videoIntro.currentTime = scrollTop/500;
    }
});




