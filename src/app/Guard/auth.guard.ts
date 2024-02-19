import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  var isLogin = false;

  var auth = inject(AuthService);
  
  if(localStorage.getItem('token') ){
    isLogin=true;
  }

return isLogin;
};
