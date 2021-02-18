import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog-comment-disabled',
  templateUrl: './dialog-comment-disabled.component.html',
  styleUrls: ['./dialog-comment-disabled.component.css']
})
export class DialogCommentDisabledComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<DialogCommentDisabledComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }

  onClickNO(){
    console.log('seleccionaste no');
    this.dialogRef.close();
    
    
  }

}
