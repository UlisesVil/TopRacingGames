import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; //para que el Observable no marque error hay que ejecutar npm install --save rxjs-compat en el proyecto de angular 
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
    public url: string;
   

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
        
    }

    testService(){
        return 'Probando el servicio de angular';
    }

    saveProject( project: Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-project', params, {headers:headers});
    }

    getProjects(): Observable<any>{
        console.log(localStorage.getItem("token"));
        //let TOKEN_STRING= ' '+localStorage.getItem("token");
        /*
        let headers = new HttpHeaders({
            'Authorization': 'Bearer'+' '+TOKEN_STRING
        });
        */
        //headers.set("Authorization", "Bearer"+ localStorage.getItem("token"));
        //console.log(headers);
        //let headers=new HttpHeaders().set("Authorization", "Bearer"+TOKEN_STRING);
        //let token=localStorage.getItem("token");
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'projects', {headers:headers});
        
    }

    getProject(id): Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'project/'+id, {headers:headers}); 
    } 

    deleteProject(id): Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'project/'+id, {headers:headers});
    } 

    updateProject(project): Observable<any>{
        let params = JSON.stringify(project);
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'project/'+project._id, params, {headers:headers});
    }
} 