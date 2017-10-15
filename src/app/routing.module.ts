import { NotesComponent } from './views/notes/notes.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { NoteComponent } from './views/notes/note/note.component';
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "notes", component: NotesComponent },
  { path: "note", component: NotesComponent },
  { path: "notes/shared/:access_token", component: NoteComponent },
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
