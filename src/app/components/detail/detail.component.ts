import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { Comment } from '../../models/comment';
import { ProjectService } from '../../services/project.service';
import { CommentService } from '../../services/comment.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from '../../components/comment-dialog/comment-dialog.component';
import { DialogCommentDisabledComponent } from '../../components/dialog-comment-disabled/dialog-comment-disabled.component';
declare var $:any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService, CommentService ]
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
  public commentInd: [];
  public confirmDeleteComment: string;

  constructor(
    private _projectService: ProjectService,
    private _commentService: CommentService,
    private _router: Router,
    private _route: ActivatedRoute,
    public dialog: MatDialog
    ){ 
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
      this.TOKEN_STRING = localStorage.getItem("token");
      this.payload=payload;
      this.userloged=this.payload["name"];
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
    );
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  setConfirmEraseComment(comment_id){
    this.confirmDeleteComment = comment_id;  
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
    this._commentService.saveComment(this.comment).subscribe(
      response=>{
        if(response.comment){
          this.save_comment= response.comment;
          this.status = 'succes';
          window.location.reload();
        }else{
          status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
 
  getComments(id){
    this._commentService.getComments(id).subscribe(
      response => {
        if(response.comment){
          this.comments = response.comment;
          this.status='failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  deleteComment(id){
    this._commentService.deleteComment(id).subscribe(
      response=>{
        if(response){
          window.location.reload();
        }
      },
      error=>{
        console.log(<any>error); 
      }
    );
  }

  openDialog(comment, commentId){
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      data:{ 
        comment: comment,
        commentId: commentId
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        console.log('openDialog');
      }
    });
  }

  commentDisabled(id){
    let projectId=id;
    let commentArea= document.getElementById('commentArea');
    let atribute=$('#commentArea').attr('ng-reflect-is-disabled');
    let atributeDisabled=$('#commentArea').attr('disabled');

    if(atribute=='true'||atributeDisabled=='disabled'){
      const dialogRef = this.dialog.open(DialogCommentDisabledComponent,{
        data: {
          message:'You Must be Logged in to post a comment!!!!',
          projectId: projectId
        }
      });

      dialogRef.afterClosed().subscribe(res=>{
        if(res){
          console.log('commentDisabled'); 
        }
      });
    }
  }

}


