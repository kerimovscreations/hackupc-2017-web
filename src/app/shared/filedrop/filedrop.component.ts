import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filedrop',
  templateUrl: './filedrop.component.html',
  styleUrls: ['./filedrop.component.css']
})
export class FiledropComponent implements OnInit {

  @Output() public dragFileAccepted: EventEmitter<Object> = new EventEmitter();
  @Output() public hoverIn: EventEmitter<Object> = new EventEmitter();
  @Output() public hoverOut: EventEmitter<Object> = new EventEmitter();
  isHovering;
  constructor() { }

  ngOnInit() {
  }


  private onDragFileOverStart(event) {
    if (!this.isHovering) {
      this.isHovering = true;
    }
    if(this.hoverIn){
      this.hoverIn.emit(true);
    }
    this.preventDefaultAndStopPropagation(event);
    return false;
  }

  private onDragFileOverEnd(event): any {
    this.preventDefaultAndStopPropagation(event);
    if(this.hoverOut){
      this.hoverOut.emit(false);
    }
    return false;
  }

  private onDragFileAccepted(acceptedFile: File): any {
      if (this.dragFileAccepted) {
        this.dragFileAccepted.emit({ file: acceptedFile });
      }
  }

  private onDragFileDrop(event: any): any {
    this.preventDefaultAndStopPropagation(event);
    this.FileSelectHandler(event);
  }

  private preventDefaultAndStopPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // file selection handler (can be called from drag, or from a file-requestor select box)
  public FileSelectHandler(e) {
    this.isHovering = false;      // cancel the hover
    var files = e.target.files || e.dataTransfer.files;     // fetch FileList object

    // process all File objects
    for (var i = 0, f; f = files[i]; i++) {
      this.onDragFileAccepted(f);
    }
  }

}
