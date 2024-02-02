import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],

 
})
export class CardComponent implements OnInit{

  constructor(private apiService:TaskService){}

  data:any[]=[];

  ngOnInit(): void {
    this.apiService.getTask().subscribe({next:(result)=>{
this.data=result;
console.log(result);
    }, error:(err)=>{
      console.log(err);
    }})
  }
  

    

@Input()taskList:any[]=[];
@Output()taskListChange = new EventEmitter<any[]>();

deleteTask(index:number){
 this.taskList = this.taskList.filter((v, i)=>i!==index);
this.taskListChange.emit(this.taskList);
 console.log(this.taskList);

}

  isOpen=false;

  id:number=0;

 

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }



openModal(i:number){
this.isOpen = !this.isOpen;

  this.id = i;

  console.log(i);

}

}
