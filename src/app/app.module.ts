import { FiledropComponent } from './shared/filedrop/filedrop.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TabHolderComponent,
    TabTitleComponent,
    TabContentComponent,
    FiledropComponent
    
  ],
  imports: [BrowserModule, AppRouting],
  providers: [TabService],
  bootstrap: [AppComponent]
})
export class AppModule {}
