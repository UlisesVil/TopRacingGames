import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../../models/register';


@Component({
  selector: 'app-dialog-comment-disabled',
  templateUrl: './dialog-comment-disabled.component.html',
  styleUrls: ['./dialog-comment-disabled.component.css'],
  providers:[LoginService]
})

export class DialogCommentDisabledComponent implements OnInit {
  public email: string;
  public register: Register;
  public status: string;
  public username: string;
  public myname: string;

  constructor(
    public dialogRef:MatDialogRef<DialogCommentDisabledComponent>,
    private _loginService: LoginService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: {message: string, projectId: string}
    ) {
    this.register = new Register('','','','','','','');
  }

  ngOnInit(): void {
  }

  onClickNO(){
    this.dialogRef.close();
  }

  onSubmit(form){
     
    this.email= this.register.email;
    var projectId=this.data.projectId;

    this._loginService.getLogin(this.register).subscribe(
      response=>{
        if(response.token){
          this.register.name=response.payload.name;
          this.status = 'success';
          this.username = response.payload.name;
          this.myname= response.payload.role;
          localStorage.setItem('payload',JSON.stringify(response.payload));
          localStorage.setItem('token',response.token);
          
          this._router.navigate(['/proyecto/'+projectId])
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
