import { Component, OnInit, Input } from '@angular/core';
import { PostComment } from './post-comment';

@Component({
  selector: 'post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() comment: string;
  
  // Tu powstaje nasza tablica komentarzy do wyswietlenia
  
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
      
      public commentArray: Array<PostComment> = [this.comment1, this.comment2];
}
