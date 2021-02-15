"use strict"




$(document).ready(function() {

    //Nav-Bar
    $(".mat-drawer-backdrop").click(function(){
        console.log("Me llega el click del wall");
        $('#transparentWall').removeAttr('style','background:red; width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:red;');
    });

    $(".linkNav").click(function(){
        console.log("Me llega el click del link");
        $('#transparentWall').removeAttr('style','background:red; width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:red; display:none');
        //$('mat-sidenav').attr('style','display:none');

        //$('mat-sidenav').removeAttr('style','display:none');

        //mat-sidenav-container
        //mat-drawer-container-has-open
        //$('mat-sidenav-container').removeClass('mat-drawer-container-has-open');
        
        //div
        //mat-drawer-shown
           // $('div').removeClass('mat-drawer-shown');

            //$('mat-sidenav-container').removeClass('mat-drawer-transition');
        


           
    });
    $("#buttonNav2").click(function(){
        console.log('recibo el clic del 2do botton');
        $('#transparentWall').removeAttr('style','background:red; width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:red; display:none');
    });
   
    //Personalized Button Upload  
    $('input[type=file]').change(function(){
        var filename = $(this).val().split('\\').pop();
        var idname = $(this).attr('id');
        console.log($(this));
        console.log(filename);
        console.log(idname);
        $('span.'+idname).next().find('span').html(filename);
    
    
    }); 
    
});  



$(window).ready(function(){
    
    var width = $(window).width();   
    console.log(width);
    $('#title').height(width*.568);
    
});



$(window).scroll(function(){
    let scrollTop = document.documentElement.scrollTop;
    let videoIntro = document.querySelector("#videoIntro"); 
    
    if(videoIntro){
        videoIntro.currentTime = scrollTop/500;
        
    }
});




