import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { RegisterService } from '../../services/register.service';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService, LoginService]
})

export class RegisterComponent implements OnInit {
  public register: Register;
  public save_register;
  public status: string;
  public email: string;
  public username: string;
  public myname: string;

  constructor(
    private _registerService: RegisterService,
    private _loginService: LoginService,
    private _router: Router
    ) { 
    this.register = new Register('','','','','regular','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this.email= this.register.email;
    this._registerService.saveRegister(this.register).subscribe(
      response=>{
        if(response.register){
          this.save_register= response.register;
          this.status = 'success';
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
        }else{
          this.status = 'failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
  
}
