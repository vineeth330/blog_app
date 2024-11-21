import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor(public m:BlogService,public r:Router){}
  id=0
  obj={id:0,title:'',content:'',author:''}

  ngOnInit(): void {
    
    this.id=this.m.id
    this.m.getbyid(this.id).subscribe(
      (res:any)=>{
        console.log(res['data'][0])
        this.obj.id=res['data'][0]['id']
        this.obj.title=res['data'][0]['title']
        this.obj.content=res['data'][0]['content']
        this.obj.author=res['data'][0]['author']

        
      }
    )
  }
  updatedata(data:any){
    console.log(data)
    this.m.update(data).subscribe(
      (res:any)=>{
        console.log(res)
        if(res['status']==1){
          alert('success')
          this.r.navigate(['list'])
        }
        else if(res['status']==0){
          alert('failed')
        }
        else{
          alert('variable not set')
        }
      }
    )
  }
}
