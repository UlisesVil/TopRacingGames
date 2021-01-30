import{ Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Register } from '../models/register'
import { Global } from './global';

@Injectable()
export class LoginService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
/*
    getLogin(email): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'login/'+email, {headers: headers});
    } 
    */
    getLogin(login: Register): Observable<any>{
        let params = JSON.stringify(login);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'login', params, {headers: headers});
    } 
}