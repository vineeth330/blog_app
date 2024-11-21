import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { BlogCreateComponent } from './blog-create/blog-create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'create', component: BlogCreateComponent },
  { path: 'list', component: BlogListComponent },
  
  { path:'reg',component:RegisterComponent },
  { path:'log',component:LoginComponent },
  { path:'edit',component:EditComponent },
  { path:'index',component:IndexComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
