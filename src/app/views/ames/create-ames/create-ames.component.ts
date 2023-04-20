import {AfterContentInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import {AmesService} from "../../../services/ames.service";
import {CiviliteService} from "../../../services/civilite.service";
import {CiviliteDto} from "../../../models/civilite-dto";
import {PaysDto} from "../../../models/pays-dto";
import {CodePostaleDto} from "../../../models/code-postale-dto";
import {VilleDto} from "../../../models/ville-dto";
import {CodePostaleService} from "../../../services/code-postale.service";
import {VilleService} from "../../../services/ville.service";
import {PaysService} from "../../../services/pays.service";
import {AmesDto} from "../../../models/ames-dto";

@Component({
  selector: 'app-create-ames',
  templateUrl: './create-ames.component.html',
  styleUrls: ['./create-ames.component.scss']
})
export class CreateAmesComponent implements OnInit, AfterContentInit {

  id: number;
  amesDto: AmesDto;
  submitted = false;
  loggedIn: boolean;
  selectedFile : File = null;

  listPays?: Array<PaysDto> = [];
  listVille?: Array<VilleDto> = [];
  listCivilite?: Array<CiviliteDto> = [];
  listCodePostale?: Array<CodePostaleDto> = [];

  amesForm: FormGroup = new FormGroup({
    sujet: new FormControl( ''),
    nom: new FormControl( '', Validators.required),
    prenom: new FormControl( '' ,Validators.required),
    email: new FormControl( '',[
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]),
    telephone: new FormControl( '',[
      Validators.required,
      Validators.pattern("[0-9 ]{12}")
    ]),
    photo: new FormControl( ''),
    civilite: new FormControl( '', Validators.required),
    localisation: new FormControl( ''),
    pays: new FormControl( '', Validators.required),
    codePostale: new FormControl( ''),
    ville: new FormControl( '')
  });

  constructor(
    private router: Router,
    public  service: AmesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private paysService: PaysService,
    private villeService: VilleService,
    private civiliteService: CiviliteService,
    private codePostaleService: CodePostaleService,
    private utilisateurService: UtilisateursService
  ) {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngOnInit(): void { }

  changePays(e) {
    this.pays?.setValue(e.target.value, {
      onlySelf: true,
    });
  }


  changeCivilite(e) {
    this.civilite?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeCodePostale(e) {
    this.codePostale?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeVille(e) {
    this.ville?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  onFileSelected(event){
    this.selectedFile = <File> event.target.files[0];
  }

  get photo() {
    return this.amesForm.get('photo');
  }

  get codePostale() {
    return this.amesForm.get('codePostale');
  }

  get ville() {
    return this.amesForm.get('ville');
  }

  get civilite() {
    return this.amesForm.get('civilite');
  }

  get pays() {
    return this.amesForm.get('pays');
  }

  get f(){
    return this.amesForm.controls;
  }

  onReset() {
    this.amesForm.reset() ;
    this.router.navigateByUrl('ames/list-ames');
  }

  onSubmit()
  {
    if (this.amesForm.invalid)
    {
        Swal.fire("Attention !", 'Veuillez saisir les champs obligatoire', 'warning');
        return;
    }
    debugger
    this.amesDto = {
      nom: this.amesForm.get('nom') ?.value,
      prenom: this.amesForm.get('prenom') ?.value,
      photo: this.amesForm.get('photo') ?.value,
      email: this.amesForm.get('email') ?.value,
      sujet: this.amesForm.get('sujet') ?.value,
      telephone: this.amesForm.get('telephone') ?.value,
      localisation: this.amesForm.get('localisation') ?.value,
      codePostale:  this.listCodePostale.filter(codePostale => codePostale.id === parseInt(this.amesForm.get('codePostale') ?.value))[0],
      civilite:  this.listCivilite.filter(civilite => civilite.id === parseInt(this.amesForm.get('civilite') ?.value))[0],
      ville:  this.listVille.filter(ville => ville.id === parseInt(this.amesForm.get('ville') ?.value))[0],
      pays:  this.listPays.filter(pays => pays.id === parseInt(this.amesForm.get('pays') ?.value))[0]
    }
    this.service.enregistrer(this.amesDto)
    .subscribe((ames) => {
      if (ames != null ) {
          Swal.fire("Enregistrement", 'Donnée inserée avec succès', 'success');
      }
      this.router.navigateByUrl('ames/list-ames');
    }, error => {
      Swal.fire("Echec !", 'Lors de l\'ajout, contacter l\'adminsitrateur', 'error');
      console.log(error)
      this.router.navigate(['401']);
    });
  }


  getListCivilite(): void {
    this.civiliteService.getListCivilite()
      .subscribe(civilite => {
        this.listCivilite = civilite.body;
      });
  }

  getListVille(): void {
    this.villeService.getListVille()
      .subscribe(ville => {
        this.listVille = ville.body;
      });
  }

  getListPays(): void {
    this.paysService.getListPays()
      .subscribe(pays => {
        this.listPays = pays.body;
      });
  }

  getListCodePostale(): void {
    this.codePostaleService.getListCodePostale()
      .subscribe(pays => {
        this.listCodePostale = pays.body;
        this.listCodePostale.forEach(function(item, index) {
          console.log(item, index);
      });
    });
  }

  ngAfterContentInit(): void
  {
    this.getListPays();
    this.getListVille();
    this.getListCivilite();
    this.getListCodePostale();
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
    this.amesForm = this.formBuilder.group(
      {
        telephone: new FormControl( '',[
          Validators.required,
          Validators.pattern("[0-9 ]{12}")
        ]),
        photo: new FormControl( ''),
        nom: new FormControl( '', Validators.required),
        sujet: new FormControl( ''),
        email: new FormControl( '',[
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ]),
        prenom: new FormControl( '', Validators.required),
        civilite: new FormControl( '' , Validators.required),
        pays: new FormControl( '', Validators.required),
        codePostale: new FormControl( ''),
        ville: new FormControl( ''),
        localisation: new FormControl( ''),
      }
    );
  }
}
