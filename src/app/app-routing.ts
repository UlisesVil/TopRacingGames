import { ModuleWithProviders } from '@angular/core'; //este import esta deprecated al final de este archivo se añade ModuleWithProviders<RouterModule> para que funcione
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; 

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const appRoutes: Routes = [

  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent, pathMatch: "full"},
  {path: 'register', component: RegisterComponent, pathMatch: "full"},
  {path: 'main', component: MainComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'crear-proyecto', component: CreateComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'proyecto/:id', component: DetailComponent},
  {path: 'editar-proyecto/:id', component: EditComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: '**', component: ErrorComponent}


];



//Exportar el modulo del router a app.module.ts

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule>=  RouterModule.forRoot(appRoutes);
//
//en la leccion 186 de Udemy ModuleWithProviders como lo enseñan ya esta Deprecated 
//por lo que se debe colocar un modulo, en la pagina https://www.w3resource.com/angular/frequently-used-module.php
//vienen ejemplos y con el <RouterModule> Funciona correctamente


//en el archivo app.module.ts se debe importar las const esportadas
