import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

export class MainNavComponent {

  events: string[] = [];
  opened: boolean;
  public TOKEN_STRING: string;
  public role: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _router: Router
  ) {}

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

  transparentwallOff(){
    $('#transparentWall').attr('style','background:black; width: 100%; height: 100vh; ');
    $('mat-toolbar').attr('style','background:black;');
    /*$('#pngmenu').attr('src','../../../../assets/img/car2.png');*//*../assets/img/car2.png*/ 
    $('#pngmenu').attr('style','width: 100%; margin-top: 150px; display: inline;');
  }

}
