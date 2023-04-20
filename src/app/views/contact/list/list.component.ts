import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactService} from "../../../services/contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts!: any;
  searchPost?: any;
  loggedIn: boolean;

  constructor( private utilisateurService: UtilisateursService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private service: ContactService)
  {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngOnInit() {
    this.getAllContact();
  }

  getAllContact() {
    this.service.getAllContact().subscribe((res) => {
      this.posts = res.body;
      console.log(this.posts);
    });
  }

  search(post: string): void {
    this.posts = this.searchPost.filter((val: any) =>
      val.title.toLowerCase().includes(post)
    );
    console.log(post);
  }

  getDetailContact(id: number){

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
        this.service.delete(id).subscribe(res => {
          this.posts = this.posts.filter(item => item.id !== id);
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



