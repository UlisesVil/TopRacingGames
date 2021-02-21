import { Component, OnInit } from '@angular/core';
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
  public newcaptions: boolean;

  constructor() { 
    this.captions = true;
  }

  ngOnInit(): void {
  }

}
