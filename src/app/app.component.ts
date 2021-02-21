import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'proyecto-angular';
  public TOKEN_STRING: string;
  public role: string;
  
  constructor(
    private _router: Router
  ){}

  ngOnInit(): void {

    let payload= JSON.parse(localStorage.getItem("payload"));
    if(payload){
      this.role=payload["role"];
      this.TOKEN_STRING = localStorage.getItem("token");
    }

  }

  logout(){
    localStorage.clear();
    location.reload();
    this._router.navigate(['/'])
      .then(() => {
        window.location.reload();
    });
  } 
  
}   