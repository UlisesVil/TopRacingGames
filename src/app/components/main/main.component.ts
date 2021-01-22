import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public email: string;

  constructor() { 
    this.title = "Ulises Villa";
    this.subtitle="Desarrollador Web";
    this.email="ulisesvil5@hotmail.com";
  }

  ngOnInit(): void {
  }

}
