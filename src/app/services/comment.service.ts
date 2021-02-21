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
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'save-comment', params, {headers:headers});
    }

    getComments(id): Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'comments/'+id,{headers:headers});
    }

    getComment(id): Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'comment/'+id,{headers:headers});
    }

    editComment( comment: Comment): Observable<any>{
        let params = JSON.stringify(comment);
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.put(this.url+'edit-comment', params, {headers: headers});
    }

    deleteComment(id): Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'comment/'+id, {headers:headers});
    }
}