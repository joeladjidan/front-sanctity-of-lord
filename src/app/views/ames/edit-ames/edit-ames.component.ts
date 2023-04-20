import {AfterContentInit, Component, OnInit} from '@angular/core';
import {DonneeDto} from "../../../models/donnee-dto";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AmesDto} from "../../../models/ames-dto";
import Swal from 'sweetalert2';
import {AmesService} from "../../../services/ames.service";
import {PaysService} from "../../../services/pays.service";
import {VilleService} from "../../../services/ville.service";
import {CiviliteService} from "../../../services/civilite.service";
import {CodePostaleService} from "../../../services/code-postale.service";
import {PaysDto} from "../../../models/pays-dto";
import {VilleDto} from "../../../models/ville-dto";
import {CiviliteDto} from "../../../models/civilite-dto";
import {CodePostaleDto} from "../../../models/code-postale-dto";

@Component({
  selector: 'app-edit-ames',
  templateUrl: './edit-ames.component.html',
  styleUrls: ['./edit-ames.component.scss']
})
export class EditAmesComponent implements OnInit , AfterContentInit {

  donnee: DonneeDto[] = [];
  id: number;
  amesDto!: AmesDto;
  submitted = false;
  selectedFile : File = null;
  public loggedIn: boolean;

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

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
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

  get f(){
    return this.amesForm.controls;
  }

  onReset() {
    this.amesForm.reset() ;
    this.router.navigateByUrl('ames/list-ames');
  }

  onSubmit(){
    this.amesDto = {
      nom: this.amesForm.get('nom') ?.value,
      email: this.amesForm.get('email') ?.value,
      prenom: this.amesForm.get('prenom') ?.value
    }
    if (this.amesDto.prenom && this.amesDto.id && this.amesDto.nom) {
      this.service.modifier(this.id, this.amesDto)
        .subscribe((data) => {
          Swal.fire("Merci!", 'Modification effectuée avec success', 'success');
          this.router.navigateByUrl('ames/list-ames');
        }, error => {
          Swal.fire("Echec !", 'Lors de la modification', 'error');
          this.router.navigate(['401']);
        });
    } else {
      Swal.fire("Attention !", 'Veuillez saisir les champs obligatoire', 'warning');
    }
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

  ngAfterContentInit(): void {
    {
      this.getListPays();
      this.getListVille();
      this.getListCivilite();
      this.getListCodePostale();
      this.loggedIn = this.utilisateurService.loggedIn.getValue();


      this.service.getItem(this.id).subscribe((data: any) => {
        this.amesDto = data;
        console.log(this.amesDto.ville );
        this.amesForm = this.formBuilder.group(
          {
            telephone: new FormControl('', [
              Validators.required,
              Validators.pattern("[0-9 ]{12}")
            ]),
            photo: new FormControl(''),
            nom: new FormControl('', Validators.required),
            sujet: new FormControl(''),
            email: new FormControl('', [
              Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
            ]),
            prenom: new FormControl('', Validators.required),
            civilite: new FormControl('', Validators.required),
            pays: new FormControl('', Validators.required),
            codePostale: new FormControl(''),
            ville: new FormControl(''),
            localisation: new FormControl(''),
          }
        );
      });




    }
  }

}
