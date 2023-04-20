import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TypeEmissionDto} from "../../models/type-emission-dto";
import {TypeEnseignementDto} from "../../models/type-enseignement-dto";
import {TitreMessageDto} from "../../models/titre-message-dto";
import {NavigationEnd, Router} from "@angular/router";
import {filter, map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-default-card',
  templateUrl: './default-card.component.html',
  styleUrls: ['./default-card.component.scss']
})
export class DefaultCardComponent implements OnInit {

  @Input() item!: any;
  @Input() description: any;
  @Input() setToYoutubeBtn!: any;
  @Input() typeEmission!: TypeEmissionDto | undefined;
  @Input() titreMessage!: TitreMessageDto | undefined;
  @Input() typeEnseignement!: TypeEnseignementDto | undefined;
  @Output() managePlayingBtn: EventEmitter<any> = new EventEmitter<any>();

  youtubeObj: any;
  currentRouteURL$: any;
  iconeyoutybe = "assets/images/mp3-player.png";
  icons8share30 = "assets/images/icons8-share-30.png";
  icons8voice26 = "assets/images/icons8-voice-26.png";
  icons8stop24 = "assets/images/icons8-stop-sign-24.png";

  constructor(private router: Router) {
    debugger
    this.currentRouteURL$ = this.router.events.pipe(
      startWith(this.router),
      filter(
        (event) => event instanceof NavigationEnd || event instanceof Router
      ),
      map((event: NavigationEnd | Router) => event.url)
    );

    if ((this.currentRouteURL$  == "/enseignements")) {
         this.item.donnee.fileName = this.item.donnee?.fileName;
    }
    if ((this.currentRouteURL$ == "/emissions")) {
         this.item.donnee.fileName = this.typeEmission?.intitule
    }
  }

  ngOnInit(): void {
    this.youtubeObj = {
      afficher: false,
      url: this.iconeyoutybe
    };

    document.addEventListener('play', function(e) {
      var audios = document.getElementsByTagName('audio');
      for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
           audios[i].pause();
        }
      }
    }, true);
  }

  getPlaying(url: string, format: string): void {
    this.youtubeObj.afficher = !this.youtubeObj.afficher;
    if (this.youtubeObj.afficher && format !==  "mp4") {
        this.youtubeObj.url = "assets/images/mp3-player.png";
        let obj = { afficher: false , componentId: this.item.id }
        this.managePlayingBtn.emit(obj);
    }
    else {
        this.youtubeObj.url = "assets/images/mp3-player.png";
        if (format ===  "mp4") {
            window.open(url);
        }
    }
  }

  ngOnChanges() {
    if (this.setToYoutubeBtn != undefined &&
        this.setToYoutubeBtn.componentId != this.item.id)
    {
        this.youtubeObj.url = this.iconeyoutybe;
        this.youtubeObj.afficher = false;
    }
  }



}
