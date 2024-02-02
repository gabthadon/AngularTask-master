import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

 list:any[]=[{
    name:'Play Football',
    desc:'I want to go out and play football with my friends',
    date:'2/2/2024'
   }];

   get listView():any[]{
    return this.list;
   }

   

   name="";
   desc ="";
   date="";


  addTask(){
    let task={
      name:this.name,
      desc:this.desc,
      date:this.date
     }

this.list =this.listView;
this.list.push(task);
    console.log(this.list);
  }



}
