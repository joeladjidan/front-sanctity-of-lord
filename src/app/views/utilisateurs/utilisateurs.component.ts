import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {UtilisateurDto} from "../../models/utilisateur-dto";
import {UtilisateursService} from "@docs-components/services";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit , AfterViewInit {

  listUtilisateurs: Array<UtilisateurDto> = [];
  logo = "assets/images/prophete-ange-josaphat.jpg";

  formValue!: FormGroup;
  updateFormValue!: FormGroup;
  posts!: any;
  editPostModal: any;
  searchPost?: any;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public utilisateurservice: UtilisateursService) {}

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.getUtilisateurs();
  }

  getUtilisateurs(): void {
    this.utilisateurservice.findAll()
      .subscribe(utilisateurs => {
        this.listUtilisateurs = utilisateurs;
        this.listUtilisateurs.forEach(function (item, index) {
          console.log(item, index);
        });
      });
  }

  search(post: string): void {
    console.log(post);
  }

}
