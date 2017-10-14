import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'sh-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {
  @Input() active:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
