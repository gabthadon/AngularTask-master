import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserInterface } from 'src/app/user-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  fb=inject(FormBuilder);
  http=inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    email:['', Validators.required],
    password:['', Validators.required],
  });

  onSubmit(): void {
    this.http
    .post<{ user: UserInterface }>('https://api.realworld.io/api/users/login', {
      user: this.form.getRawValue(),
    })
    .subscribe((response) => {
      console.log('response', response);
      localStorage.setItem('token', response.user.token);
      this.authService.currentUserSig.set(response.user);
      this.router.navigateByUrl('home');
    });
  }

}
