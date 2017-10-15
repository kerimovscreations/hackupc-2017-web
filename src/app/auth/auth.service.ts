import { SharedService } from "../shared/shared.service";
import { Injectable } from "@angular/core";
import { AuthService as SocialLogins } from "angular2-social-login";
import { CookieService } from "ngx-cookie";
import { Http, HttpModule } from "@angular/http";
import "rxjs";
import { NotificationsService } from 'angular2-notifications';
@Injectable()
export class AuthService {
  isLogged = false;
  constructor(
    private _socialLogins: SocialLogins,
    private _cookieService: CookieService,
    private _sharedService: SharedService,
    private _notificationService:NotificationsService,
    private _http: Http
  ) {}

  signInWithFB(provider = "facebook") {
    return this._socialLogins.login(provider)
  }

  signIn(user_token) {
    let url = this._sharedService.API_URL + "login/facebook";
    let body = {};
    body["access_token"] = user_token;
    return this._http
      .post(url, JSON.stringify(body))
      .map(data => data.json())
      
  }
  logout() {
    this._socialLogins.logout();
    this.isLogged = false;
    this._cookieService.remove("user");
  }

  isUserLoggedIn() {
    if (this._cookieService.getObject("user")) {
      return true;
    }
    return false;
  }
}
