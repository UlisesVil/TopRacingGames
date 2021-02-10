import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 
  public currentTime: string;
  public title: string;
  public subtitle: string;
  public email: string;
  public src: string;


  constructor() { 
    this.title = "Ulises Villa";
    this.subtitle="Desarrollador Web";
    this.email="ulisesvil5@hotmail.com";
  }

  ngOnInit(): void {
    /*
    $(window).scroll(function(){
      let scrollTop = document.documentElement.scrollTop;
    this.src='assets/video/FzeroIntro.mp4#t=';
    this.currentTime=(scrollTop/500).toString();
    
    let srcScroll=this.src+this.currentTime;
     // console.log(this.currentTime);
      console.log(this.currentTime);
      console.log(this.src);
      console.log(srcScroll);
      
      let videoIntro = document.getElementById("videoIntro"); 
      $("video").attr("src", srcScroll);
     console.log(videoIntro);
       
      
  });*/
   
  }

/*
  setCurrentTime(value){
    console.log(value.target.currentTime);

    $(window).scroll(function(){
      let scrollTop = document.documentElement.scrollTop;
      //let videoIntro = document.querySelector("#videoIntro"); 
      console.log(scrollTop);
      
      
      value.target.currentTime = scrollTop/500;
      
     });

  }
*/
  

}
