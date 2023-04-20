import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmissionsService} from "../../services/emissions.service";
import {EmissionDto} from "../../models/emission-dto";
import Swal from "sweetalert2";

@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.scss']
})
export class EmissionsComponent implements OnInit {

  youtubeBtnObj: any;
  listEmissions: Array<EmissionDto> = [];
  logo = "assets/images/prophete-ange-josaphat.jpg";

  constructor(private router: Router,
              private emissionService: EmissionsService)
  {}

  ngOnInit(): void {
    this.getListEmissions();
  }

  getListEmissions(): void {
    this.emissionService.getEmission()
      .subscribe(emission => {
        this.listEmissions = emission.body;
        if (emission.body.length == 0) {
            Swal.fire({
              icon: 'warning',
              title: "Attention!",
              showConfirmButton: false,
              html: 'Aucun enseignement trouvé',
              timer: 1500,
            })
        }
        this.listEmissions.forEach(function(item, index) {
          console.log(item, index);
        }, error => {
          Swal.fire("Echec !", 'Lors de de la recupération, contactez l\' administrateur', 'error');
        });
    });
  }

  managePlayingBtnComponent(currentActiveBtn): void {
    this.youtubeBtnObj = currentActiveBtn;
  }

}
