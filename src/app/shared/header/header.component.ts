import { CookieService } from "ngx-cookie";
import { AuthService } from "../../auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "angular2-notifications";

declare var $;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn = false;

  constructor(
    private _authService: AuthService,
    private _notificationService: NotificationsService,
    private _cookieService: CookieService
  ) {}

  ngOnInit() {
    this.isUserLoggedIn = this._authService.isUserLoggedIn();
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  }
  toggleSignIn(e) {
    e.preventDefault();
    $(".modal.login")
      .fadeToggle(300)
      .css("display", "flex");
  }

  signIn(e) {
    this._cookieService.removeAll();
    this.isUserLoggedIn = false;
    this._authService.signInWithFB().subscribe(res => {
      this._authService.signIn(res["token"]).subscribe(data => {
        if (data.status == 200) {
          this._cookieService.putObject("user", data.data.user);
          this.isUserLoggedIn = true;
          console.log(data);
          this._notificationService.info("Welcome", "Signed in");
        }
      });
    });
    this.isUserLoggedIn = true;
  }

  signOut() {
    this._authService.logout();
    this.isUserLoggedIn = false;
    this._notificationService.warn('Logged up','see you soon')
  }
}
