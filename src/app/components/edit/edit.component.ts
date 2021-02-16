import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;
  public TOKEN_STRING: string;
  public role: string;


  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Editar Articulo";
    this.url = Global.url;
   }

   ngOnInit() {
    this._route.params.subscribe(params=>{
      let id = params.id;

      this.getProject(id);
    });

    let payload= JSON.parse(localStorage.getItem("payload"));
    if(payload){
      this.role=payload["role"];
      console.log(payload);
      console.log(this.role);
      this.TOKEN_STRING = localStorage.getItem("token");
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

  onSubmit(form){
    this._projectService.updateProject(this.project).subscribe(
      response=>{
        if(response.project){
            
            //Subir la imagen
          if(this.filesToUpload){
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
            .then((result:any)=>{
              this.save_project= result.project;
              this.status = 'success';
              this._router.navigate(['/proyectos']);
              form.reset();
            });
          }else{
            this.save_project= response.project;
            this.status = 'success';
            this._router.navigate(['/proyectos']);
            form.reset();
          }
        }else{
          this.status = 'failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  
  fileChangeEvent(fileInput: any){

    this.filesToUpload= <Array<File>>fileInput.target.files;
    
   
    if (this.filesToUpload && this.filesToUpload[0]) { 
      console.log(this.filesToUpload);
      var reader = new FileReader(); 
      reader.readAsDataURL(this.filesToUpload[0]); 
      console.log(reader);

      reader.onload = function (e) { 
        $('#preview + img').remove(); 
        $('#preview').after('<img src="'+e.target.result+'" width="100%" />');
        var URLactual = window.location.href;
        if(URLactual.indexOf('crear')<=-1){
          $("#actual").text('Actual Image');
          $("#last").text('New Image');
          $("#actual").attr('style',"padding:5px 10px");
          $("#last").attr('style',"padding:5px 10px");
        } 
        
      } 
    } 

  }




}
