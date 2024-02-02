import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  ngOnInit(): void {
   console.log(this.myTask);
  }

  @Input() myTask:any={};

  isOpen:Boolean=true;

  closeModal(){
    this.isOpen=false;
   
  }


}
