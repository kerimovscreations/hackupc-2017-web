import { Component, OnInit, ViewChild } from '@angular/core';

declare var $;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @ViewChild('file_upload') input;

  constructor() { }

  uploadActive: boolean = false;
  hovering: boolean = false;


  isPictureTaken:boolean=false;
  ngOnInit() { }

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
    $(".tab-title").each(function (index, element) {
      $(this).attr("data-index", index);
      $(".tab-content")
        .eq(index)
        .attr("data-index", index);
      $(this).click(function () {
        var index = $(this).data("index");
        $(".tab-title").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();
        $('.tab-content[data-index="' + index + '"]').show().css('display', 'flex');
      });
    });
  }

  startStreaming() {
    navigator.getUserMedia(
      // Options
      {
        video: true
      },
      // Success Callback
      function (stream) {
        var video: any = document.getElementById('video');
        // Create an object URL for the video stream and
        // set it as src of our HTLM video element.
        video.src = window.URL.createObjectURL(stream);

        // Play the video element to show the stream to the user.
        video.play();

      },
      // Error Callback
      function (err) {

        // Most common errors are PermissionDenied and DevicesNotFound.
        console.error(err);

      }
    );
  }
  takePicture() {
    let hidden_canvas:any = document.querySelector('canvas');
    let video:any = document.querySelector('video.camera_stream');
    let image:any = document.querySelector('img.photo');

    // Get the exact size of the video element.
    var width = video.offsetWidth;
    var height = video.offsetHeight;

    // Context object for working with the canvas.
    var context = hidden_canvas.getContext('2d');

    // Set the canvas to the same dimensions as the video.
    hidden_canvas.width = width;
    hidden_canvas.height = height;

    // Draw a copy of the current frame from the video on the canvas.
    context.drawImage(video, 0, 0, width, height);

    // Get an image dataURL from the canvas.a
    var imageDataURL = hidden_canvas.toDataURL('image/png');

    // Set the dataURL as source of an image element, showing the captured photo.
    image.setAttribute('src', imageDataURL);
    this.isPictureTaken = !this.isPictureTaken;
  }

  uploadfile(file) {
    console.log(file);
  }

  hoverIn() {
    console.log('hovein');
    this.hovering = true;
  }
  hoverOut() {
    this.hovering = false;
  }

   // tslint:disable-next-line:one-line
   takeSnapshot(){
    
        //...
    
        // Get an image dataURL from the canvas.
        // var imageDataURL = hidden_canvas.toDataURL('image/png');
    
        // Set the href attribute of the download button.
        // document.querySelector('#dl-btn').href = imageDataURL;
    }
}
