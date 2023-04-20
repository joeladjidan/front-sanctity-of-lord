import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ContactDto} from "../../../models/contact-dto";
import {ContactService} from "../../../services/contact.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, AfterContentInit {

  contact: ContactDto[] = [];
  id: number;
  contactDto: ContactDto;
  contactForm!: FormGroup;
  submitted = false;
  public loggedIn: boolean;

  constructor(
    private utilisateurService: UtilisateursService,
    public contactService: ContactService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
    this.id = this.route.snapshot.params['id'];
    this.contactService.getContact(this.id).subscribe((data: any)=>{
      this.contactDto = data;
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
    });
  }

  ngOnInit(): void {

  }

  get f(){
    return this.contactForm.controls;
  }

  onReset() {
    this.contactForm.reset() ;
    this.router.navigateByUrl('contact/list');
  }

  onSubmit(){
    debugger
    this.contactDto = {
      nom: this.contactForm.get('nom') ?.value,
      email: this.contactForm.get('email') ?.value,
      prenom: this.contactForm.get('prenom') ?.value,
      message: this.contactForm.get('message') ?.value,
      telephone: this.contactForm.get('telephone') ?.value
    }
    if (this.contactDto.nom && this.contactDto.email && this.contactDto.prenom && this.contactDto.message
        && this.contactDto.telephone) {
        this.contactService.update(this.id, this.contactDto)
        .subscribe((data) => {
          Swal.fire("Merci!", 'Modification effectuée avec success', 'success');
          this.router.navigateByUrl('contact/list');
        }, error => {
          Swal.fire("Echec !", 'Lors de la modification', 'error');
          this.router.navigate(['401']);
        });
    } else {
      Swal.fire("Attention !", 'Veuillez saisir les champs obligatoire', 'warning');
    }
  }

  ngAfterContentInit(): void {

  }

}
