import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from "./auth/auth.service";
import { FiledropComponent } from "./shared/filedrop/filedrop.component";
import { TabService } from "./shared/tabs/tab.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { HomeComponent } from "./views/home/home.component";
import { AppRouting } from "./routing.module";
import { TabHolderComponent } from "./shared/tabs/tab-holder.component";
import { TabTitleComponent } from "./shared/tabs/tab-title/tab-title.component";
import { TabContentComponent } from "./shared/tabs/tab-content/tab-content.component";
import { AuthComponent } from "./auth/auth.component";
import { Angular2SocialLoginModule } from "angular2-social-login";
import { CookieModule } from "ngx-cookie";
import { NotesComponent } from "./views/notes/notes.component";
import { SimpleNotificationsModule } from "angular2-notifications";
import { SharedService } from "./shared/shared.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HomeService } from './views/home/home.service';
import { NoteComponent } from './views/notes/note/note.component';
import { NotesService } from './views/notes/notes.service';

let providers = {
  facebook: {
    clientId: "179425919281323",
    apiVersion: "v2.4"
  }
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TabHolderComponent,
    TabTitleComponent,
    TabContentComponent,
    FiledropComponent,
    AuthComponent,
    NotesComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    SimpleNotificationsModule.forRoot(),
    AppRouting,
    Angular2SocialLoginModule,
    CookieModule.forRoot(),
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [TabService, AuthService, SharedService,HomeService,NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
Angular2SocialLoginModule.loadProvidersScripts(providers);
