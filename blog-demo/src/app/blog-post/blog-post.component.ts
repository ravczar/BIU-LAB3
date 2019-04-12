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
      "The Marvel Cinematic Universe (MCU) is an American media franchise and shared universe that is centered on a series of superhero films, independently produced by Marvel Studios and based on characters that appear in American comic books published by Marvel Comics.",
      ["comment 1", "comment 2"]
    );

    toggleEditMode():void{         
      this.isInEditMode=!this.isInEditMode;     
    }

}
