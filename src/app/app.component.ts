import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from './user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

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
  title = 'AngularTask';

  authService = inject(AuthService);

  logout():void{
    console.log('logout');
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
  }

}
