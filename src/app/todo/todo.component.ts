import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {

  constructor() { }

  public Todo :string= "Go to the market";
  private _todoArray:string[]=Array(this.Todo);
 
  
  // get Todo() : any{
  //   return this._todo;
  // }

  // set Todo(val:any){
  //   this._todo= val;
  // }

  
  
  getTodos():any{
    if(this.Todo !="" && !this._todoArray.includes(this.Todo)){
      this._todoArray.push(this.Todo)
    }
  }

  removeATodo(val:any):any{
   const index = this._todoArray.indexOf(val)
   if(index > -1){
     this._todoArray.splice(index,1)
   }
  }
  get todoArray():any{
   return  this._todoArray
  }

  set todoArray(val:any){
      this._todoArray=val;
  }

  clearTodos():void{
    this.Todo='';
  }

  ngOnInit(){
  }

  activities:String="Code";
  work(): void{
   alert(`My activities for the day is ` + this.activities)
  }

}