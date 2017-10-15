import { AuthService } from '../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

declare var $;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn = false;

  constructor(
    private _authService:AuthService,
  ) { }

  ngOnInit() {
    this.isUserLoggedIn = this._authService.isUserLoggedIn();

  }
  toggleSignIn(e) {
    e.preventDefault();
    $('.modal.login').fadeToggle(300).css('display', 'flex');
  }

  signIn(e){
    this._authService.signInWithFB();
    this.isUserLoggedIn = true;
  }

  signOut(){
    this._authService.logout();
    this.isUserLoggedIn = false;
  }
}
