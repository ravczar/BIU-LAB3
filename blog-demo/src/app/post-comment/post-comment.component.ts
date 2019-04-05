import { Component, Input } from "@angular/core"; 
import { PostComment } from './post-comment';
 
@Component({     
    selector:'post-comment',     
    templateUrl:'./post-comment.component.html' 
}) 
export class PostCommentComponent{
    
    @Input() comment: string;
    
}