import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { RegisterService } from '../../services/register.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})

export class RegisterComponent implements OnInit {

  public register: Register;
  public save_register;
  public status: string;

  constructor(
    private _registerService: RegisterService,
  ) { 
    this.register = new Register('','','','','user','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){

    this._registerService.saveRegister(this.register).subscribe(
      response=>{
        console.log(response);
        if(response.register){
          this.save_register= response.register;
          this.status = 'success';
          form.reset();
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
