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
  title = 'proyecto-angular';
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
        console.log(payload);
        console.log(this.role);
        this.TOKEN_STRING = localStorage.getItem("token");
      }

      $(".mat-drawer-backdrop").click(function(){
        console.log("Me llega el click");
        
      });


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
      console.log("Clic en el button");

      $('#transparentWall').attr('style','background:red; width: 100%; height: 100vh; ');
      $('mat-toolbar').attr('style','background:red;');
     // $('mat-sidenav').removeAttr('style','display:none');
     //$('mat-sidenav-container').addClass('mat-drawer-container-has-open');
     //$('mat-sidenav-container').attr('class','mat-drawer-container-has-open');
      

    }

/*
    transparentwallOn(){
      $('mat-nav-list').removeAttr('style','background:red');
      //$('mat-toolbar').attr('style','height:500px');
      $('mat-toolbar').removeAttr('style','background:black; height:100vh; position:fixed; z-index:1;');
      
    
    
    }
*/
   

}
