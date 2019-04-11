import { Component, OnInit } from '@angular/core';
import { BlogPost } from './blog-post';
import { PostCommentComponent } from '../post-comment/post-comment.component';
import { PostComment } from '../post-comment/post-comment';

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
  author:string;
  comment:string;
  myPostCommentComponent = new PostCommentComponent();


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
