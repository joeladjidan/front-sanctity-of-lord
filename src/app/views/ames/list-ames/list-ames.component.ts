import { Component, OnInit } from '@angular/core';
import {AmesService} from "../../../services/ames.service";
import Swal from 'sweetalert2';
import {PrintService} from "../../../services/print.service";
import { FileSaverOptions } from 'file-saver';
import {UtilisateursService} from "../../../services/utilisateurs.service";

@Component({
  selector: 'app-list-ames',
  templateUrl: './list-ames.component.html',
  styleUrls: ['./list-ames.component.scss']
})
export class ListAmesComponent implements OnInit {

  ames!: any;
  loggedIn: boolean;

  constructor(private service: AmesService,
              private printService: PrintService,
              private utilisateurService: UtilisateursService)
  {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.service.listAmes().subscribe((res) => {
      this.ames = res.body;
    });
  }

  getListAmes() {
    this.printService.getListAmes();
  }

  getDetailAmes(id: number) {
    this.printService.getDetailAmes(id);
  }

  supprimer(id: number){
    Swal.fire({
      title: 'Etes-vous sur de vouloir supprimer la ligne selectionnée ?',
      text: 'Vous ne pourrez pas récupérer cette ligne !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'Non, Annuler!'
    }).then((result) => {
      if (result.value) {
        this.service.supprimer(id).subscribe(res => {
          this.ames = this.ames.filter(item => item.id !== id);
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
