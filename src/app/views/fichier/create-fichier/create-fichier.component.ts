import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  LOCALE_ID,
  OnInit,
  ViewChild,
} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-create-fichier',
  templateUrl: './create-fichier.component.html',
  styleUrls: ['./create-fichier.component.scss']
})
export class CreateFichierComponent implements OnInit, AfterContentInit , AfterViewInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild('dateFihier') myInputElementRef: ElementRef;

  emissionForm: FormGroup;
  galerieForm: FormGroup;
  enseignementForm: FormGroup;
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
    @Inject(LOCALE_ID) private locale: string,
    private typeEnseignementService: TypeEnseignementService,
  ) {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngOnInit(): void {}

  onReset() {
    this.emissionForm.reset();
    this.galerieForm.reset();
    this.enseignementForm.reset();
    this.router.navigateByUrl('fichier/list-fichier');
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

  ngAfterContentInit(): void
  {
    this.getListTypeMessage();
    this.getListTypeEmission();
    this.getListTypeEnseignement();
    this.loggedIn = this.utilisateurService.loggedIn.getValue();

    this.emissionForm = this.formBuilder.group(
      {
        url: new FormControl( 'http://anagkazo.net/audio/',[
          Validators.required
        ]),
        dateFichier: new FormControl(formatDate(new Date(),'dd/MM/yyyy',this.locale), Validators.required),
        format: new FormControl('mp3', Validators.required),
        typeEmission: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        fileName: new FormControl('', Validators.compose([
          Validators.maxLength(25),
          Validators.minLength(5),
          Validators.required
        ]))
      }
    );

    this.enseignementForm = this.formBuilder.group(
      {
        url: new FormControl( '',[
          Validators.required
        ]),
        dateFichier: new FormControl(formatDate(new Date(),'dd/MM/yyyy',this.locale), Validators.required),
        format: new FormControl('mp4', Validators.required),
        typeEmission: new FormControl('3', Validators.required),
        description: new FormControl('', Validators.required),
        titreMessage: new FormControl('', Validators.required),
        typeEnseignement: new FormControl('', Validators.required),
        fileName: new FormControl('YOUTUBE', Validators.compose([
          Validators.maxLength(25),
          Validators.minLength(5),
          Validators.required
        ]))
      }
    );

    this.galerieForm = this.formBuilder.group(
      {
        url: new FormControl( 'http://anagkazo.net/galerie/',[
          Validators.required
        ]),
        dateFichier: new FormControl(formatDate(new Date(),'dd/MM/yyyy',this.locale), Validators.required),
        format: new FormControl('', Validators.required),
        intitule: new FormControl('', Validators.required),
        fileName: new FormControl('', Validators.compose([
          Validators.maxLength(25),
          Validators.minLength(5),
          Validators.required
        ])),
      }
    );
}

  ngAfterViewInit(): void {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  onSubmitGalerie() {

    // stop here if form is invalid
    if (this.galerieForm.invalid) {
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
      url: this.galerieForm.get('url')?.value + this.galerieForm.get('fileName')?.value + "." + this.galerieForm.get('format')?.value,
      format: this.galerieForm.get('format')?.value,
      fileName: this.galerieForm.get('fileName')?.value,
      date: parseDate(this.galerieForm.get('dateFichier')?.value),
    }

    this.donneeService.enregistrer(this.donneeDto)
      .subscribe((donnee) => {
        if (donnee != null ) {
          this.insertionGalerie(donnee);
        }
        this.router.navigateByUrl('fichier/list-fichier');
      }, error => {
        Swal.fire("Echec !", 'Lors de la créaction des données', 'error');
        this.router.navigate(['401']);
      });
  }

  onSubmitEnseignement() {

    console.log(this.enseignementForm.value)

    // stop here if form is invalid
    if (this.enseignementForm.invalid) {
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
      url: this.enseignementForm.get('url')?.value,
      format: this.enseignementForm.get('format')?.value,
      fileName: this.enseignementForm.get('fileName')?.value,
      date: parseDate(this.enseignementForm.get('dateFichier')?.value),
    }

    this.donneeService.enregistrer(this.donneeDto)
      .subscribe((donnee) => {
        if (donnee != null ) {
           this.insertionEnseignement(donnee);
        }
        this.router.navigateByUrl('fichier/list-fichier');
      }, error => {
        Swal.fire("Echec !", 'Lors de la créaction des données', 'error');
        this.router.navigate(['401']);
      });
  }

  onSubmitEmission() {

    console.log(this.emissionForm.value)

    // stop here if form is invalid
    if (this.emissionForm.invalid) {
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
      url: this.emissionForm.get('url')?.value + this.emissionForm.get('fileName')?.value + "." + this.emissionForm.get('format')?.value,
      format: this.emissionForm.get('format')?.value,
      fileName: this.emissionForm.get('fileName')?.value,
      date: parseDate(this.emissionForm.get('dateFichier')?.value),
    }

    this.donneeService.enregistrer(this.donneeDto)
      .subscribe((donnee) => {
        if (donnee != null ) {
          this.insertionEmission(donnee);
        //  Swal.fire("Enregistrement", 'La donnée a eté enregistré avec succès', 'success');
        }
        this.router.navigateByUrl('fichier/list-fichier');
      }, error => {
        Swal.fire("Echec !", 'Lors de la créaction des données', 'error');
        this.router.navigate(['401']);
      });
  }

  insertionEmission(donnee: DonneeDto):  void {
    this.emissionDto = {
      donnee: donnee,
      description: this.emissionForm.get('description')?.value,
      dateEmission: donnee.date,
      typeEmission: this.listTypeEmission.filter(typeEmission => typeEmission.id === parseInt(this.emissionForm.get('typeEmission')?.value))[0]
  }
    console.log(this.emissionDto);
    debugger
    this.emissionService.enregistrer(this.emissionDto).subscribe((emission) => {
      if (emission != null)
      {
        Swal.fire({
          icon: 'success',
          title: 'Enrégistrement',
          showConfirmButton: false,
          html: 'Insertion de l\'emission effectuée avec success',
          timer: 1500,
        })
      }
    }, error => {
      Swal.fire("Echec !", 'Lors de la créaction des données', 'error');
      this.router.navigate(['401']);
    });
  }

  insertionEnseignement(donnee: DonneeDto):  void {
    this.enseignementDto = {
      donnee: donnee,
      description: this.enseignementForm.get('description')?.value,
      typeEmission: this.listTypeEmission.filter(typeEmission => typeEmission.id === parseInt(this.enseignementForm.get('typeEmission')?.value))[0],
      titreMessage: this.listTitreMessage.filter(titreMessage => titreMessage.id === parseInt(this.enseignementForm.get('titreMessage')?.value))[0],
      typeEnseignement: this.listTypeEnseignement.filter(typeEnseignement => typeEnseignement.id === parseInt(this.enseignementForm.get('typeEnseignement')?.value))[0]
    }
    this.enseignementService.enregistrer(this.enseignementDto).subscribe((enseignement) => {
      if (enseignement != null)
      {
        Swal.fire({
          icon: 'success',
          title: 'Enrégistrement',
          showConfirmButton: false,
          html: 'Insertion de l\'enseignement effectué avec success',
          timer: 1500,
        })
      }
    }, error => {
      Swal.fire("Echec !", 'Lors de la créaction des données', 'error');
      this.router.navigate(['401']);
    });
  }

  insertionGalerie(donnee: DonneeDto):  void {
    this.galerieDto = {
      donnee: donnee,
      intitule: this.galerieForm.get('intitule')?.value
    }
    this.galerieService.enregistrer(this.galerieDto).subscribe((galerie) => {
      if (galerie != null)
      {
        Swal.fire({
          icon: 'success',
          title: 'Enrégistrement',
          showConfirmButton: false,
          html: 'Insertion de la photo effectuée avec success',
          timer: 1500,
        })
      }
    });
  }

}
