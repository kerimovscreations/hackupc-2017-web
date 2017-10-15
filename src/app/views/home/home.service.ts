import { SharedService } from '../../shared/shared.service';
import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Injectable()
export class HomeService {

  constructor(
    private _sharedService:SharedService,
    private _http : Http
    
  ) { }


  uploadImage(file){
    let url = this._sharedService.API_URL+'notes';
    let formData = new FormData();
    formData.append("image", file, file.name);
    formData.append('title','default');
    return this._http.post(url,formData).map(data=> data.json());
  }

  getScans(){
    
  }
}
