import { TabService } from "./../tab.service";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from "@angular/core";

@Component({
  selector: "sh-tab-title",
  templateUrl: "./tab-title.component.html",
  styleUrls: ["./tab-title.component.css"]
})
export class TabTitleComponent implements OnInit {
  @Input() tab;
  @Input() active = false;
  @Input() contents;
  @Input() titles;
  // @Output() changeTab = new EventEmitter();

  @HostListener("click", ["$event"])
  changedTab(event) {
    this.toggleClass(event.target.closest(".title"));
    this._tabService.changedTab(this.tab);
    this.contents.map(tab => {
      tab.active = false;
    });
    this.titles.map(tab => {
      tab.active = false;
    });
    this.tab = true;
  }

  constructor(private _tabService: TabService) {}

  ngOnInit() {}

  toggleClass(element) {
    let el = element.closest("sh-tab-holder").querySelectorAll(".title");
    if (element) {
      for (let i = 0; i < el.length; i++) {
        el[i].classList.remove("active");
      }
    }
    element.classList.add("active");
  }
}
