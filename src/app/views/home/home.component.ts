import { Component, OnInit } from "@angular/core";

declare var $;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  uploadActive: boolean = false;
  hovering: boolean = false;

  ngOnInit() {}

  onSelectPhoto() {
    $(".modal")
      .fadeToggle(300)
      .css("display", "flex");
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initTabs();
  }
  initTabs() {
    $(".tab-title").each(function(index, element) {
      $(this).attr("data-index", index);
      $(".tab-content")
        .eq(index)
        .attr("data-index", index);
      $(this).click(function() {
        var index = $(this).data("index");
        $(".tab-title").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();
        $('.tab-content[data-index="' + index + '"]').show();
      });
    });
  }

  uploadfile(file) {
    console.log(file);
  }

  hoverUpload() {
    console.log('hovein');
    this.hovering = true;
  }
}
