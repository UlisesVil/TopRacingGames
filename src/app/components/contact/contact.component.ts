
import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;  
  @ViewChild('textos') textos;

  constructor() { 
    this.captions = true;
  }



  ngOnInit() {
    //var opcion_clasica= document.querySelector('#texto').innerHTML;
    //alert(opcion_clasica);
    var opcion_viewChild=this.textos; //undefined hay que revisar
    console.log(opcion_viewChild);
    
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
    
  }

  resetearSlider(){
    this.anchuraToSlider = false;
  }

  getAutor(event){
     this.autor=event;
    console.log(event);
    console.log(this.autor.nombre);
  }

  
  

}
