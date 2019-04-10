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

  comment1 = new PostComment(
    "Maćko z Bogdańca",
    new Date(),
    "some comment text"
  );

}
