import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

  
  @Input('etiquetas') captions: boolean;

  constructor() {
  }
  
  ngOnInit() {

    $('.bxslider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      mode: 'horizontal',
      adaptiveHeight: true,
      responsive:true,
      touchEnabled:true,
      preventDefaultSwipeX:true,
      maxSlides:1,
      slideWidth: 1470,
      captions: this.captions  
      
    });
  }

}
