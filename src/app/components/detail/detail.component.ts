import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { Comment } from '../../models/comment';
import { ProjectService } from '../../services/project.service';
import { CommentService } from '../../services/comment.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService, CommentService],
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: Project;
  public comment: Comment;
  public save_comment;
  public confirm: boolean;
  public TOKEN_STRING: string;
  public role: string;
  public userloged: string;
  public status: string;
  public payload: object;
  public comments: [];
  public confirmDeleteComment: string;

  constructor(
    private _projectService: ProjectService,
    private _commentService: CommentService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.url = Global.url;
    this.confirm= false;
    this.comment = new Comment('','','','','','');
    this.confirmDeleteComment="cancel";
  }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      let id = params.id;
      this.getProject(id);
     

      this.getComments(id);

    });

    let payload= JSON.parse(localStorage.getItem("payload"));
    if(payload){
      this.role=payload["role"];
      console.log(payload);
      console.log(this.role);
      this.TOKEN_STRING = localStorage.getItem("token");
      this.payload=payload;
      console.log(this.payload);
      
    }
  }

  





  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  setConfirmEraseComment(comment_id){
    this.confirmDeleteComment = comment_id;
    console.log(this.confirmDeleteComment);
    
  }


  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response.project){
          this._router.navigate(['/proyectos']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }



  onSubmit(form){
  
    this.comment.userId=this.payload['id'];
    this.comment.projectId=this.project._id;
    this.comment.userName=this.payload['name'];
    this.comment.userEmail=this.payload['email'];
    this.comment.comment=form.value.comment;
    console.log(this.comment);
    this._commentService.saveComment(this.comment).subscribe(
      response=>{
        console.log(response);
        if(!response.comment){
          this.save_comment= response.comment;
          this.status = 'succes';
          
        }else{
          status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
    form.reset();
    window.location.reload();
  }


  
  getComments(id){
    
    
    this._commentService.getComments(id).subscribe(
      response => {
        if(response.comment){
          this.comments = response.comment;
          this.status='failed';
          console.log(this.comments);
          this.userloged=this.payload["name"];
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}


