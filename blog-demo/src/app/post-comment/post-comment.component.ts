import { Component, OnInit, Input } from '@angular/core';
import { PostComment } from './post-comment';

@Component({
  selector: 'post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor() { }

  @Input() comment: string;
  
  author: string;
  authorsComment: string;
  inAddCommentMode: boolean;

  commentArray: Array<PostComment> = [];
  
  comment1 = new PostComment(
    "Maćko z Bogdańca",
    new Date(),
    "some comment text"
    );
    
  comment2 = new PostComment(
    "Rafał Czarnecki",
    new Date(),
    "some idiotic comment"
    );
  
  comment3 = new PostComment(
    "Marek Matracki",
    new Date(),
    "ten to sie nie popisal"
    );

  comment4 = new PostComment(
    "ROMAN EROTOMAN",
    new Date(),
    "kto nie pije ten nie żyje"
    );

  ngOnInit() { 
    this.commentArray.push(this.comment1);
    this.commentArray.push(this.comment2);
    this.commentArray.push(this.comment3);
  }

  setNewComment(): void { 
    let newComment = new PostComment(this.author, new Date(), this.authorsComment);
    this.commentArray.push(newComment);
    this.toggleAddCommentMode();
  }

  setNewCommentFake(){
    this.commentArray.push(this.comment4);
  }

  toggleAddCommentMode(){
    this.inAddCommentMode=!this.inAddCommentMode; 
  }

  editComment(){

  }

  deleteComment(){
    let commentToBeDeletedId = this.commentArray.find(object => object.author == "1");
    console.log("Element do skasowania jest na indexie: " + commentToBeDeletedId);
    //this.commentArray.splice(commentToBeDeletedId, 1);
  }
}
