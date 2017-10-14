import { TabService } from './tab.service';
import { TabTitleComponent } from './tab-title/tab-title.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { Component, OnInit,ContentChildren, QueryList, } from '@angular/core';

@Component({
  selector: 'sh-tab-holder',
  templateUrl: './tab-holder.component.html',
  styleUrls: ['./tab-holder.component.css']
})
export class TabHolderComponent implements OnInit {
  @ContentChildren(TabContentComponent) tab_contents: QueryList<TabContentComponent>;
  @ContentChildren(TabTitleComponent) tab_titles: QueryList<TabTitleComponent>;

  constructor(
    private _tabService:TabService
  ) { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.tab_titles.toArray()
      .map((tab_title,index)=>{
        tab_title.contents = this.tab_contents.toArray();
        tab_title.titles = this.tab_titles.toArray();
        tab_title.tab = this.tab_contents.toArray()[index];
        this.tab_contents.toArray().map((tab,index)=>tab.active=index==0?true:false);
        this.tab_titles.toArray().map((tab,index)=>tab.active=index==0?true:false);
      });
  }
}
