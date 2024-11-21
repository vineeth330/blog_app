import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';

import { BlogCreateComponent } from './blog-create/blog-create.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';




@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogCreateComponent,
    RegisterComponent,
    LoginComponent,
    EditComponent,
    IndexComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
