import {Component, Input, OnInit} from '@angular/core';
import {Track} from "ngx-audio-player";

@Component({
  selector: 'app-default-audio',
  templateUrl: './default-audio.component.html',
  styleUrls: ['./default-audio.component.scss']
})
export class DefaultAudioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Input() msaapDisplayTitle: boolean = false;
  @Input() msaapDisplayPlayList: boolean = false;
  @Input() msaapPageSizeOptions!: number[];
  @Input() msaapDisplayVolumeControls: boolean = false;
  @Input() msaapDisplayRepeatControls: boolean = false;
  @Input() msaapDisplayArtist: boolean = false;
  @Input() msaapDisplayDuration: boolean = false;
  @Input() msaapDisablePositionSlider: boolean = false;
  @Input() listEmissions: any;


  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Finding Moments Of Joy In A Challenging Year',
      link: 'assets/audio/song.mp3'
    }
  ];
  msaapPlaylist2: Track[] = [
    {
      title: 'How to Effectively Incentivize Team Members',
      link: 'assets/audio/song2.mp3'
    }
  ];
  msaapPlaylist3: Track[] = [
    {
      title: 'How to go from Start-Up to Scale-Up',
      link: 'assets/audio/song.mp3'
    }
  ];
  msaapPlaylist4: Track[] = [
    {
      title: `Tube Preamps, TLM103 vs. OJ 818, Podcastage's Beanies`,
      link: 'assets/audio/song2.mp3'
    }
  ];
  msaapPlaylist5: Track[] = [
    {
      title: 'Ask Unladylike: Late Bloomer with Forever35',
      link: 'assets/audio/song.mp3'
    }
  ];

}
