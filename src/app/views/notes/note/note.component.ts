import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NotesService } from "../notes.service";

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.css"]
})
export class NoteComponent implements OnInit {
  isLoaded = false;
  constructor(
    private route: ActivatedRoute,
    private _notesService: NotesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._notesService
        .getNoteDetails(params["access_token"])
        .subscribe(data => {
          this.isLoaded = true;
          var note_content = data.data.note.content;
          setTimeout(function() {
            var content: any = document.getElementById("note-content");            
            content.innerHTML = note_content;
          }, 0);
        });
      // In a real app: dispatch action to load the details here.
    });
  }
}
