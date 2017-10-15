import { Injectable } from '@angular/core';
import { AuthService as SocialLogins } from "angular2-social-login";
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthService {
  isLogged = false;
  constructor(private _socialLogins: SocialLogins, private _cookieService: CookieService) { }

  signInWithFB(provider = 'facebook') {
    this._socialLogins.login(provider).subscribe(
      (data) => {
        this._cookieService.putObject('user', data);
        console.log(this._cookieService.getObject('user'));
        this.isLogged = true;
      }
    );
  }


  logout() {
    this._socialLogins.logout();
    this.isLogged = false;
    this._cookieService.remove('user');
  }

  isUserLoggedIn() {
    if (this._cookieService.getObject('user')) {
      return true;
    }
    return false;
  }

}
