import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";
import {ActivatedRoute, Router} from "@angular/router";
import {DonneeService} from "../../../services/donnee.service";
import {FormBuilder} from "@angular/forms";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-medias',
  templateUrl: './list-medias.component.html',
  styleUrls: ['./list-medias.component.scss']
})
export class ListMediasComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  loggedIn: boolean;
  listRepertoireGalerie: Array<string> = [];
  listRepertoireAudio: Array<string> = [];

  constructor(
    private router: Router,
    public donneeService: DonneeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private utilisateurService: UtilisateursService
  ) {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngOnInit(): void {
    this.getListGalerie();
    this.getListEmission();
  }

  getListGalerie(): void {
    this.donneeService.fetchFileNames("2")
      .subscribe(donnee => {
        this.listRepertoireGalerie = donnee;
      });
  }

  getListEmission(): void {
    this.donneeService.fetchFileNames("1")
      .subscribe(donnee => {
        this.listRepertoireAudio = donnee;
      });
  }

  supprimerAudio(nom: string, type: string){
    Swal.fire({
      title: 'Etes-vous sur de vouloir supprimer la ligne selectionnée ?',
      text: 'Vous ne pourrez pas récupérer cette ligne !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'Non, Annuler!'
    }).then((result) => {
      if (result.value) {
        this.donneeService.supprimer(nom, type).subscribe(res => {
          this.listRepertoireAudio = this.listRepertoireAudio.filter(item => item !== nom);
          Swal.fire(
            'Suppression',
            'La ligne a eté supprimé avec succes',
            'success'
          );
        })
      } else if(result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annuler', 'Votre donnée est en securitée', 'error');
      }
    });
  }

  supprimerGalerie(nom: string, type: string){
    Swal.fire({
      title: 'Etes-vous sur de vouloir supprimer la ligne selectionnée ?',
      text: 'Vous ne pourrez pas récupérer cette ligne !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'Non, Annuler!'
    }).then((result) => {
      if (result.value) {
        this.donneeService.supprimer(nom, type).subscribe(res => {
          this.listRepertoireAudio = this.listRepertoireAudio.filter(item => item !== nom);
          Swal.fire(
            'Suppression',
            'La ligne a eté supprimé avec succes',
            'success'
          );
        })
      } else if(result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annuler', 'Votre donnée est en securitée', 'error');
      }
    });
  }

}
