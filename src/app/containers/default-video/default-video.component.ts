import {Component, Input, OnInit} from '@angular/core';
import {IVideoConfig, IVideoSource} from "ngx-video-list-player";

@Component({
  selector: 'app-default-video',
  templateUrl: './default-video.component.html',
  styleUrls: ['./default-video.component.scss']
})
export class DefaultVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Input() enseignement!: IVideoSource[];
//  @Input() enseignement: Array<EnseignementDto> = [];

 /* config: IVideoConfig = {
    sources: this.enseignement
  }*/

  config: IVideoConfig = {
    sources: [
      {
        src: "https://www.youtube.com/watch?v=cErPUgklYG4",
        videoName: "LA PRIÈRE DE TOUTES POSSIBILITÉS",
        artist: "JOEL",
        isYoutubeVideo: false
      },
      //In case of Youtube
      {
        src: "https://www.youtube.com/watch?v=cErPUgklYG4",
        videoName: "LA PRIÈRE DE TOUTES POSSIBILITÉS",
        artist: "JOEL",
        isYoutubeVideo: true
      },
      {
        src: "assets/images/gallery/gallery-5.jpg",
        videoName: "LA PRIÈRE DE TOUTES POSSIBILITÉS",
        artist: "JOEL",
        isYoutubeVideo: true
      }
    ]
  };


}
