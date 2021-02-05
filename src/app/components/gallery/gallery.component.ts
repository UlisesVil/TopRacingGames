import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;  
  @ViewChild('textos') textos;

  constructor() { 
    this.captions = true;
  }

  ngOnInit(): void {
    //var opcion_clasica= document.querySelector('#texto').innerHTML;
    //alert(opcion_clasica);
    var opcion_viewChild=this.textos; //undefined hay que revisar
    console.log(opcion_viewChild);
    
    this.anchuraToSlider=1200;
   
  }

  cargarSlider(){
    
    this.anchuraToSlider = this.widthSlider;
    console.log(this.anchuraToSlider);
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
