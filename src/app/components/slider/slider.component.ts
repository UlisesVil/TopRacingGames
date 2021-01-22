import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any; //import * as $ from 'jquery'; funciona parcialmente
//ya que solo reconoce los signos $ pero no los plugins como bxSlider

@Component({
  selector: 'slider', //tenia app-slider por default
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number; 
  @Input('etiquetas') captions: boolean; //para cambiar un nombre a una variable que viene de un componente padre se pasa como argumento en input(etiquetas) y se da nuevo nombre fuera en este caso captions
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() { 

    this.autor={
      nombre: "Ulises Villa",
      website: "https://github.com/UlisesVil",
      twitter: "https://twitter.com/ulivelanky"


    }

  }

  
  ngOnInit() {
  
    $("#logo").click(function(e){
      e.preventDefault();     //si le quitamos esta linea por default nos redirecciona y no surte efecto el codigo de las siguientes lineas
      $("header").css("background","red")
                .css("height","50px");
                
    });

    $('.galeria').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      mode: 'horizontal',
      adaptiveHeight: true,
      responsive:true,
      touchEnabled:true,
      preventDefaultSwipeX:true,
      maxSlides:2,
      slideWidth: this.anchura, //viene de contact.component.ts "padre"
      captions: this.captions // viene de contact.component.ts "padre" y se le cambio el nombre en decorador @Input de etiquetas a captions 
    });

    //this.conseguirAutor.emit(this.autor); //al cargarlo en el onInit tendremos la informacion disponible desde el principio y le quita la funcionalidad al boton
  }


  lanzar(event){
    console.log(event);
    
    this.conseguirAutor.emit(this.autor);
  }

}
