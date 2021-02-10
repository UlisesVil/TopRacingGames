import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../models/comment';
import { Global } from './global';


@Injectable()
export class CommentService{
    public url: string;


    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    saveComment( comment: Comment): Observable<any>{
        let params = JSON.stringify(comment);
        console.log(comment);
        
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'save-comment', params, {headers:headers});
    }



    getComments(id): Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'comments/'+id,{headers:headers});
    }


}