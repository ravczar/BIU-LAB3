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
  postId: number = 0;
  isInEditMode: boolean = false;

  commentArray: Array<PostComment> = [];
  
  comment1 = new PostComment(
    this.postId++,
    "Maćko z Bogdańca",
    new Date(),
    "some comment text"
    );
    
  comment2 = new PostComment(
    this.postId++,
    "Rafał Czarnecki",
    new Date(),
    "some idiotic comment"
    );
  
  comment3 = new PostComment(
    this.postId++,
    "Marek Matracki",
    new Date(),
    "ten to sie nie popisal"
    );

  comment4 = new PostComment(
    this.postId++,
    "ROMAN EROTOMAN",
    new Date(),
    "kto nie pije ten nie żyje"
    );

  ngOnInit() { 
    this.commentArray.push(this.comment1);
    this.commentArray.push(this.comment2);
    this.commentArray.push(this.comment3);
    this.commentArray.push(this.comment4);
  }

  setNewComment(): void { 
    let newComment = new PostComment(this.postId++, this.author, new Date(), this.authorsComment);
    this.commentArray.push(newComment);
    this.toggleAddCommentMode();
  }

  toggleAddCommentMode(){
    this.inAddCommentMode=!this.inAddCommentMode; 
  }

  deleteComment(commentId:number){
    let certainPostComment = this.commentArray.find(object => object.id === commentId );
    let indexOfOurArrayToBeDeleted = this.commentArray.indexOf(certainPostComment);
    this.commentArray.splice(indexOfOurArrayToBeDeleted, 1);
  }

  toggleEditMode():void{         
    this.isInEditMode=!this.isInEditMode;
  }
}
