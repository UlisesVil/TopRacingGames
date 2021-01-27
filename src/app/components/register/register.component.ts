import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.name);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);
  }

}
