import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment';



@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css'],
  providers:[ CommentService ]
})
export class CommentDialogComponent implements OnInit {
  public comment: Comment;
  public edit_comment;
  public status: string;

  constructor(
    private _commentService: CommentService,
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {comment: string , commentId: string}
  ) { 
    this.comment = new Comment('','','','','','');
  }

  ngOnInit(): void {
  }

  onclickNo(){
    this.dialogRef.close();
    
  }


  onSubmit(form){
    
    this.comment.comment=form.value.comment;
    this.comment._id=form.value.commentId;
    console.log(this.comment.comment);
    console.log(this.comment._id);
    console.log(this.comment);
    this._commentService.editComment(this.comment).subscribe(
      response=>{
        console.log(response);
        if(response.comment){
          this.edit_comment= response.comment;
          this.status = 'succes';
        }
            
      },
      error=>{
        console.log(<any>error);
      }
      

    );
    window.location.reload();





  }

  getComment(commentId){
    console.log('get comment on dialog works');
    console.log(commentId);
    
  }


}
