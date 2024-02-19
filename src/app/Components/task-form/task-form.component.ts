import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserInterface } from 'src/app/user-interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit{

router=inject(Router);
  authService = inject(AuthService);
  http=inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<{ user: UserInterface }>('https://api.realworld.io/api/user')
      .subscribe({
        next: (response) => {
          console.log('response', response);
          this.authService.currentUserSig.set(response.user);
         
        },
        error: () => {
          this.authService.currentUserSig.set(null);
         
        },
      });
  }


  logout():void{
    console.log('logout');
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
    this.router.navigateByUrl('login');
  }




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
