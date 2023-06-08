import {Component, OnInit} from "@angular/core";
import {GalerieDto} from "../../models/galerie-dto";
import {Router} from "@angular/router";
import {GalerieService} from "../../services/galerie.service";
import {CarouselConfig} from "ngx-bootstrap/carousel";


@Component({
  selector: "app-galerie",
  templateUrl: "./galerie.component.html",
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
  ],
  styleUrls: [
     "./galerie.component.scss"
  ],
})
export class GalerieComponent implements OnInit {

  listGalerie: Array<GalerieDto> = [];
  noWrapSlides = false;
  showIndicator = true;

  constructor(
    private router: Router,
    private galerieService: GalerieService
  ) {

  }

  ngOnInit(): void {
    this.getGalerie();
  }

  getGalerie(): void {
    this.galerieService.getData()
      .subscribe(galeries => {
        this.listGalerie = galeries.body;
        this.listGalerie.filter((x:any) => { return x.format == "jpg" , ""});
        this.listGalerie.forEach(function(item, index) {
          console.log(item, index);
        });
      });
  }
}
