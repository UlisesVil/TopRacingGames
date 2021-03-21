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
  }

  ngOnInit(): void {

    $(document).ready(this.adjustHeight);
    window.addEventListener('resize', this.adjustHeight);
   
  }

  adjustHeight(){        
    var width = $(window).width();
    $('#title').height(width*.575);  
  }
  
}
