import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Register } from '../models/register';
import { Global } from './global';

@Injectable()
export class RegisterService{
    public url: string;
    

    constructor(
        private _http: HttpClient
        
    ){
        this.url = Global.url;
        
    }

    saveRegister( register: Register): Observable<any>{
        let params = JSON.stringify(register);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-register', params, {headers:headers});
    }









}
