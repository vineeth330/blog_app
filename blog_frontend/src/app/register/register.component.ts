import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
      constructor(private m:BlogService,public rout:Router) {}
      regdata(data:any){
        console.log(data);
        this.m.sentdata(data).subscribe(
          (res:any)=>{
            console.log(res);
            if (res['status']==1){
              alert("successfully registered")
              this.rout.navigate(['log'])
            }
            else if(res['status']==2){
              alert("failed")
            }
            else{
              alert("already exists")
            } 
          }
        )
      }
}