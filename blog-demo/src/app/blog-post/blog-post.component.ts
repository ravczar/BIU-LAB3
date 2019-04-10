import { Component, OnInit } from '@angular/core';
import { BlogPost } from './blog-post';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isInEditMode = false;

  post = new BlogPost(
      "1st Post Title",
      new Date(),
      "post content",
      ["comment 1", "comment 2"]
    );

    toggleEditMode():void{         
      this.isInEditMode=!this.isInEditMode;     
    }
}
