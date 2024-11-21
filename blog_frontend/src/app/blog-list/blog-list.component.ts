import { Component,OnInit } from '@angular/core';
import { BlogService, Post } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private blogService: BlogService,public r:Router) {}

  ary:any = []
  ngOnInit(): void {
    this.blogService.view().subscribe(
      (res:any)=>{
        console.log(res)
        this.ary=res['data']

      }
    )
  }
  editdata(data:any){
    this.blogService.setdata(data)
    this.r.navigate(['edit'])
  }
  deletedata(data:any){
    console.log(data)
    this.blogService.delete(data).subscribe(
      (res:any)=>{
        if(res['status']==1){
          alert('deleted')
          this.blogService.view().subscribe(
            (res:any)=>{
              console.log(res)
              this.ary=res['data']
            }
          )
        }
        else if(res['status']==2){
          alert('failed')
        }
        else{
          alert('variable not set')
        }
      }
    )
  }
}
