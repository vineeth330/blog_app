import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  constructor(public m:BlogService,private route:ActivatedRoute,public r:Router){}
  data = {id: "",email: "",first_name: "",gender: "",last_name: "",mobilenumber: "",password: "",username: ""}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params); 
      this.data['id']=params['id']
      this.data['email']=params['email']
      this.data['first_name']=params['first_name']
      this.data['last_name']=params['last_name']
      this.data['mobilenumber']=params['mobilenumber']
      this.data['password']=params['password']
      this.data['username']=params['username']
      this.data['gender']=params['gender']
    });
  }
}
