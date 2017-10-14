import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // other imports here
  ],
  exports: [RouterModule]
})
export class AppRouting {}
