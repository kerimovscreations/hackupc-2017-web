import { Http } from "@angular/http";
import { SharedService } from "../../shared/shared.service";
import { Injectable } from "@angular/core";

@Injectable()
export class NotesService {
  constructor(private _sharedService: SharedService, private _http: Http) {}

  getNoteDetails(note_token) {
    let url = this._sharedService.API_URL + "notes/shared/" + note_token;
    return this._http.get(url).map(res => res.json());
  }
}
