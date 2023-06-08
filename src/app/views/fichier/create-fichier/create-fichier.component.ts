import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from 'rxjs';
import Swal from 'sweetalert2';
import {DonneeDto} from "../../../models/donnee-dto";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import {DonneeService} from "../../../services/donnee.service";
import {TypeEnseignementService} from "../../../services/type-enseignement.service";
import {TitreMessageService} from "../../../services/titre-message.service";
import {TypeEnseignementDto} from "../../../models/type-enseignement-dto";
import {TitreMessageDto} from "../../../models/titre-message-dto";
import {TypeEmissionDto} from "../../../models/type-emission-dto";
import {TypeEmissionService} from "../../../services/type-emission.service";
import {EnseignementDto} from "../../../models/enseignement-dto";
import {EnseignementsService} from "../../../services/enseignements.service";
import {GalerieService} from "../../../services/galerie.service";
import {EmissionsService} from "../../../services/emissions.service";
import {GalerieDto} from "../../../models/galerie-dto";
import {EmissionDto} from "../../../models/emission-dto";
import {parseDate} from "ngx-bootstrap/chronos";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-create-fichier',
  templateUrl: './create-fichier.component.html',
  styleUrls: ['./create-fichier.component.scss']
})
export class CreateFichierComponent implements OnInit, AfterContentInit , AfterViewInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  @ViewChild('dateFihier') myInputElementRef: ElementRef;

  donneeForm: FormGroup = new FormGroup({
    url: new FormControl(''),
    dateFichier: new FormControl('', Validators.required),
    intitule: new FormControl('', Validators.required),
    format: new FormControl(''),
    fileName: new FormControl('', Validators.compose([
      Validators.maxLength(25),
      Validators.minLength(5),
      Validators.required
    ])),
    titreMessage: new FormControl(''),
    typeEmission: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    typeDonnee: new FormControl('', Validators.required),
    typeEnseignement: new FormControl(''),
    descriptionEmission: new FormControl('', Validators.required),
  });

  submitted = false;
  isArchive = false;
  isEmission = false;
  isGalerie = false;
  donneeDto: DonneeDto;
  isEnseignement = false;
  loggedIn: boolean;
  galerieDto!: GalerieDto;
  emissionDto!: EmissionDto;
  enseignementDto!: EnseignementDto;
  listTypeEmission: Array<TypeEmissionDto> = [];
  listTitreMessage: Array<TitreMessageDto> = [];
  listTypeEnseignement: Array<TypeEnseignementDto> = [];

  constructor(
    private router: Router,
    public donneeService: DonneeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private utilisateurService: UtilisateursService,
    private typeEmissionService: TypeEmissionService,
    private titreMessageService: TitreMessageService,
    private galerieService: GalerieService,
    private emissionService: EmissionsService,
    private enseignementService: EnseignementsService,
    private typeEnseignementService: TypeEnseignementService,
  ) {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngOnInit(): void {}


  get typeEmission() {
    return this.donneeForm.get('typeEmission');
  }

  get typeDonnee() {
    return this.donneeForm.get('typeDonnee');
  }

  get titreMessage() {
    return this.donneeForm.get('titreMessage');
  }

  get typeEnseignement() {
    return this.donneeForm.get('typeEnseignement');
  }

  get f(){
    return this.donneeForm.controls;
  }

  onReset() {
    this.donneeForm.reset() ;
    this.router.navigateByUrl('fichier/list-fichier');
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.donneeForm.value)

    if (this.isEnseignement)
    {
      this.donneeForm.get('intitule').clearValidators();
      this.donneeForm.get('intitule').updateValueAndValidity();

      this.donneeForm.get('descriptionEmission').clearValidators();
      this.donneeForm.get('descriptionEmission').updateValueAndValidity();
    }

    if (this.isGalerie)
    {
      this.donneeForm.get('url').setValue("http://anagkazo.net/galerie/"),
      this.donneeForm.get('description').clearValidators();
      this.donneeForm.get('description').updateValueAndValidity();

      this.donneeForm.get('typeEmission').clearValidators();
      this.donneeForm.get('typeEmission').updateValueAndValidity();

      this.donneeForm.get('titreMessage').clearValidators();
      this.donneeForm.get('titreMessage').updateValueAndValidity();

      this.donneeForm.get('typeEnseignement').clearValidators();
      this.donneeForm.get('typeEnseignement').updateValueAndValidity();

      this.donneeForm.get('descriptionEmission').clearValidators();
      this.donneeForm.get('descriptionEmission').updateValueAndValidity();
    }

    if (this.isEmission)
    {
      this.donneeForm.get('url').setValue("http://anagkazo.net/audio/"),
      this.donneeForm.get('description').clearValidators();
      this.donneeForm.get('description').updateValueAndValidity();

      this.donneeForm.get('typeEmission').clearValidators();
      this.donneeForm.get('typeEmission').updateValueAndValidity();

      this.donneeForm.get('titreMessage').clearValidators();
      this.donneeForm.get('titreMessage').updateValueAndValidity();

      this.donneeForm.get('typeEnseignement').clearValidators();
      this.donneeForm.get('typeEnseignement').updateValueAndValidity();

      this.donneeForm.get('intitule').clearValidators();
      this.donneeForm.get('intitule').updateValueAndValidity();
    }
    // stop here if form is invalid
    if (this.donneeForm.invalid) {
        Swal.fire({
          icon: 'warning',
          title: 'Attention !',
          showConfirmButton: false,
          html: 'Veillez renseigner tout les champs obligatoires',
          timer: 5000
        })
        return;
    }

    this.donneeDto = {
      url: this.donneeForm.get('url')?.value,
      format: this.donneeForm.get('format')?.value,
      date: parseDate(this.donneeForm.get('dateFichier')?.value),
      fileName: this.donneeForm.get('fileName')?.value
    }

    this.enseignementDto = {
      donnee: null,
      description: this.donneeForm.get('description') ?.value,
      titreMessage: this.listTitreMessage.filter(titreMessage => titreMessage.id === parseInt(this.titreMessage?.value))[0],
      typeEmission: this.listTypeEmission.filter(typeEmission => typeEmission.id === parseInt(this.typeEmission ?.value))[0],
      typeEnseignement: this.listTypeEnseignement.filter(typeEnseignement => typeEnseignement.id === parseInt(this.typeEnseignement ?.value))[0]
    }

    this.emissionDto = {
      donnee: null,
    }

    this.galerieDto = {
      donnee: null,
      intitule: this.donneeForm.get('intitule') ?.value
    }

    this.donneeService.enregistrer(this.donneeDto)
        .subscribe((donnee) => {
          if (donnee != null ) {
              this.insertionGalerie(donnee);
              this.insertionEmission(donnee);
              this.insertionEnseignement(donnee);
              Swal.fire("Enregistrement", 'La donnée a eté enregistré avec succès', 'success');
          }
          this.router.navigateByUrl('fichier/list-fichier');
      }, error => {
          Swal.fire("Echec !", 'Lors de la créaction des données', 'error');
          this.router.navigate(['401']);
    });
  }


  insertionEnseignement(donnee: DonneeDto):  void {
  if (this.isEnseignement)
    {
      this.enseignementDto.donnee = donnee;
      this.enseignementService.enregistrer(this.enseignementDto).subscribe((enseignement) => {
      if (enseignement != null)
        {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Enrégistrement',
            showConfirmButton: false,
            html: 'Insertion de l\'enseignement effectué avec success',
            timer: 1500,
          })
        }
      });
    }
  }

  insertionGalerie(donnee: DonneeDto):  void {
    if (this.isGalerie)
    {
      this.galerieDto.donnee = donnee;
      this.galerieService.enregistrer(this.galerieDto).subscribe((galerie) => {
        if (galerie != null)
        {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Enrégistrement',
            showConfirmButton: false,
            html: 'Insertion de l\'enseignement effectué avec success',
            timer: 1500,
          })
        }
      });
    }
  }


  insertionEmission(donnee: DonneeDto):  void {
    if (this.isEmission)
    {
      this.emissionDto.donnee = donnee;
      this.emissionService.enregistrer(this.emissionDto).subscribe((emission) => {
        if (emission != null)
        {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Enrégistrement',
            showConfirmButton: false,
            html: 'Insertion de l\'enseignement effectué avec success',
            timer: 1500,
          })
        }
      });
    }
  }

  changeTypeEmission(e: any): void {
    this.typeEmission?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeTypeDonne(event: any): void {
    this.typeDonnee?.setValue(event.target.value, {
      onlySelf: true,
    });

    if (event.target.value === "1") {
      this.isArchive = false;
      this.isEmission = false;
      this.isGalerie = false;
      this.isEnseignement = true;
    }
    if (event.target.value  === "2") {
      this.isArchive = false;
      this.isEmission = true;
      this.isGalerie = false;
      this.isEnseignement = false;
    }
    if (event.target.value  === "3") {
      this.isArchive = false;
      this.isEmission = false;
      this.isGalerie = true;
      this.isEnseignement = false;
    }
    if (event.target.value === "4") {
      this.isArchive = true;
      this.isEmission = false;
      this.isGalerie = false;
      this.isEnseignement = false;
    }
    if (event.target.value === "") {
      this.isArchive = false;
      this.isEmission = false;
      this.isGalerie = false;
      this.isEnseignement = false;
    }
  }

  getListTypeEmission(): void {
    this.typeEmissionService.getTypeEmission()
      .subscribe(typeEmission => {
        this.listTypeEmission = typeEmission.body;
      });
  }

  getListTypeEnseignement(): void {
    this.typeEnseignementService.getTypeEnseignement()
      .subscribe(typeEnseignement => {
        this.listTypeEnseignement = typeEnseignement.body;
    });
  }

  getListTypeMessage(): void {
    this.titreMessageService.getTitreMessage()
      .subscribe(titreMessage => {
        this.listTitreMessage = titreMessage.body;
    });
  }

  ngAfterContentInit(): void {
    this.getListTypeMessage();
    this.getListTypeEmission();
    this.getListTypeEnseignement();
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
    this.donneeForm = this.formBuilder.group(
      {
        url: new FormControl( 'http://anagkazo.net/',[
          Validators.required
        ]),
        dateFichier: new FormControl('', Validators.required),
        intitule: new FormControl('', Validators.required),
        format: new FormControl('', Validators.required),
        typeDonnee: new FormControl('', Validators.required),
        fileName: new FormControl('', Validators.compose([
          Validators.maxLength(25),
          Validators.minLength(5),
          Validators.required
        ])),
        description: new FormControl('', Validators.required),
        typeEmission: new FormControl('', Validators.required),
        typeEnseignement: new FormControl('', Validators.required),
        titreMessage: new FormControl('', Validators.required),
        descriptionEmission: new FormControl('', Validators.required),
      }
    );
  }

  ngAfterViewInit(): void {

  }
}
