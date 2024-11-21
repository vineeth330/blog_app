import { Component } from '@angular/core';
import { BlogService, Post } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrl: './blog-create.component.css'
})
export class BlogCreateComponent {
  post: Post = {
    title: '',
    content: '',
    author: ''
  };

  constructor(private blogService: BlogService) {}

  onSubmit() {
    this.blogService.addPost(this.post).subscribe(response => {
      console.log('Post added successfully:', response);
      alert("success")
      
      this.post = { title: '', content: '', author: '' };
    }, error => {
      console.error('Error adding post:', error);
    });
  }
}