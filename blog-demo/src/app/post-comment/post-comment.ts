export class PostComment{     
    constructor(         
        public author:string,         
        public date: Date,         
        public content:string,         
        public comments:Array<string>=[]){}  
}