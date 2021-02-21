import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})

export class LoginComponent implements OnInit {
  public email: string;
  public register: Register;
  public get_login;
  public status: string;
  public username: string;
  public myname: string;

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ){
    this.register = new Register('','','','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
     
    this.email= this.register.email;

    this._loginService.getLogin(this.register).subscribe(
      response=>{
        if(response.token){
          this.register.name=response.payload.name;
          this.status = 'success';
          this.username = response.payload.name;
          this.myname= response.payload.role;
          localStorage.setItem('payload',JSON.stringify(response.payload));
          localStorage.setItem('token',response.token);
          
          this._router.navigate(['/proyectos'])
            .then(() => {
              window.location.reload();
            });
          form.reset();
        }else{
          this.status= 'failed';
        } 
      },
      error=>{
        console.log(<any>error);
      }
    );    
  }

}
