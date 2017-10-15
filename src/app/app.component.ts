import { Component,AfterViewInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true
}
  ngAfterViewInit(){
    $(document).on('click', '.modal', function(e) {
      if($(e.target).closest('.modal-frame').length==0){
        $(e.target).closest('.modal').fadeOut(300);
      }
  })
  }
}
