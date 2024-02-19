import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from './user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'AngularTask';



}
