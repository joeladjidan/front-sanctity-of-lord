import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import Swal from 'sweetalert2';
import {DonneeService} from "../../../services/donnee.service";
import {PrintService} from "../../../services/print.service";

@Component({
  selector: 'app-list-fichier',
  templateUrl: './list-fichier.component.html',
  styleUrls: ['./list-fichier.component.scss']
})
export class ListFichierComponent implements OnInit, AfterContentInit , AfterViewInit {

  donnee!: any;
  loggedIn: boolean;

  constructor(private utilisateurService: UtilisateursService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private service: DonneeService,
              private printService: PrintService)
  {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngAfterContentInit(): void {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngAfterViewInit(): void {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngOnInit() {
    this.getListDonnee();
  }

  getListDonnee() {
    this.service.getListDonnee().subscribe((res) => {
      this.donnee = res.body;
    });
  }

  getDetailDonnee(id: number) {
    this.printService.getDetailDonnee(id);
  }

  delete(id:number){
    Swal.fire({
      title: 'Etes-vous sur de vouloir supprimer la ligne selectionnée ?',
      text: 'Vous ne pourrez pas récupérer cette ligne !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Supprimer!',
      cancelButtonText: 'Non, Annuler!'
    }).then((result) => {
      if (result.value) {
        this.service.delete(id).subscribe(res => {
          this.donnee = this.donnee.filter(item => item.id !== id);
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



