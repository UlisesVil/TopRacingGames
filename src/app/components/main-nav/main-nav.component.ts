import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
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

    $(document).ready(this.navMenu);
    
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
    $('#pngmenu').attr('style','width: 100%; margin-top: 150px; display: inline;');
  }

  navMenu(){
    $(".mat-drawer-backdrop").click(function(){
      $('#transparentWall').removeAttr('style','background:black; width: 100%; height: 100vh; ');
      $('mat-toolbar').removeAttr('style','background:black;');
      $('#pngmenu').removeAttr('style','width: 100%; margin-top: 150px; display: inline;');
      $('#pngmenu').attr('style','display: none;');
    });
    $(".linkNav").click(function(){
        $('#transparentWall').removeAttr('style','background:black; width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:black; display:none');
        $('#pngmenu').removeAttr('style','width: 100%; margin-top: 150px; display: inline;');  
        $('#pngmenu').attr('style','display: none;');
    });
    $("#buttonNav2").click(function(){
        $('#transparentWall').removeAttr('style','background:black; width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:black; display:none');
        $('#pngmenu').removeAttr('style','width: 100%; margin-top: 150px; display: inline;');
        $('#pngmenu').attr('style','display: none;');
    });

    function rezise(){
      let width=$(window).width();
      if(width>=600){
        $("#transparentWall").attr('style','display:none;');
        $(".mat-drawer-backdrop").attr('style','display:none;');
      }else{
        $("#transparentWall").removeAttr('style','display:none;');
        $(".mat-drawer-backdrop").removeAttr('style','display:none;');
      }
    }
    window.addEventListener('resize',rezise);
  }

}
