import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { LoginService } from '../../services/login.service';
import { Global } from '../../services/global';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ){
    this.register = new Register('','','','','','','');
  }

  ngOnInit(): void {
  }


  onSubmit(form){
      console.log(this.register.email);
      this.email= this.register.email;

      this._loginService.getLogin(this.register).subscribe(
        response=>{
          console.log(response);
          if(response.register){
            this.register=response.register;
            this.status = 'success';
            this._router.navigate(['/proyectos']);
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
