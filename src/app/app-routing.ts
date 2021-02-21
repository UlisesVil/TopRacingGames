import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule>=  RouterModule.forRoot(appRoutes);