import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;
  public TOKEN_STRING: string;
  public role: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router
  ) {
    this.title = "Crear Articulo";
    this.project = new Project('','','','',null,'','');

   }

  ngOnInit(): void {
    let payload= JSON.parse(localStorage.getItem("payload"));
    if(payload){
      this.role=payload["role"];
      console.log(payload);
      console.log(this.role);
      this.TOKEN_STRING = localStorage.getItem("token");
    }

    
   
      
    



  }

  onSubmit(form){
   
//console.log(this.project);

    //Guardar los datos basicos
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        console.log(response);
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
      error=> {
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
      } 
    } 

    
  }





}
