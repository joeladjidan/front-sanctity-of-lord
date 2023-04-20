import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactDto} from "../../../models/contact-dto";
import {ContactService} from "../../../services/contact.service";
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CreateComponent implements OnInit, AfterContentInit {

  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;
  contactForm: FormGroup;
  submitted = false;
  contactDto: ContactDto;

  delay = 5000;
  fade = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private changeDetectorRef: ChangeDetectorRef
  ) {

    this.contactForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      message: ['', Validators.required],
      email: ['',
        Validators.required,
        Validators.maxLength(250),
        Validators.minLength(5),
        Validators.pattern(/.+@.+\..+/)
      ],
      telephone: ['',
        [
          Validators.required,
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
        ]
    });
  }

  ngOnInit(): void {

  }

  resetForm() {
    this.contactForm.reset() ;
  }

  onSubmit() {
   debugger;
    this.submitted = true;
    this.contactForm.get('nom').valueChanges
      .subscribe(value => {
          if(value) {
            this.contactForm.get('nom').setValidators(Validators.required)
          } else {
            this.contactForm.get('nom').clearValidators();
          }
        }
      );
    this.contactForm.get('email').valueChanges
      .subscribe(value => {
          if(value) {
            this.contactForm.get('email').setValidators(Validators.required)
          } else {
            this.contactForm.get('email').clearValidators();
          }
        }
      );
    this.contactForm.get('prenom').valueChanges
      .subscribe(value => {
          if(value) {
            this.contactForm.get('prenom').setValidators(Validators.required)
          } else {
            this.contactForm.get('prenom').clearValidators();
          }
        }
      );
    // stop here if form is invalid
    if (this.contactForm.invalid) {
        Swal.fire("Echec !", 'Veuillez renseigner les champs du formulaire', 'error');
        return;
    }
    this.postContact();
  }

  postContact() {
    this.contactDto = {
      nom: this.contactForm.get('nom') ?.value,
      email: this.contactForm.get('email') ?.value,
      prenom: this.contactForm.get('prenom') ?.value,
      message: this.contactForm.get('message') ?.value,
      telephone: this.contactForm.get('telephone') ?.value
    }
    if (this.contactDto.email && this.contactDto.nom && this.contactDto.prenom &&
        this.contactDto.telephone) {
        this.contactService.enregistrer(this.contactDto)
        .subscribe((data) => {
          Swal.fire("Succès", 'Insertion effectuée avec succès', 'success');
          this.contactForm.reset();
        }, error => {
          Swal.fire("Echec !", 'Lors de linsertion', 'error');
          this.router.navigate(['401']);
        });
    } else {
      Swal.fire("Attention !", 'Veuillez saisir les champs obligatoire', 'warning');
    }
  }

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }

}
