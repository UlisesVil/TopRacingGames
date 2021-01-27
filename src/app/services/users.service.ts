import{ Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Global } from './global';

@Injectable({
    providedIn: "root"
})

export class UsersService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    login(user): Observable<any>{
        return this._http.post("this.url"+'save-user', user);
    } 
}