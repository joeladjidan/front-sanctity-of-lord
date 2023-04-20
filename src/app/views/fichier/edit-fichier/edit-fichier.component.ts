import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import Swal from 'sweetalert2';
import {DonneeService} from "../../../services/donnee.service";
import {DonneeDto} from "../../../models/donnee-dto";

@Component({
  selector: 'app-edit-fichier',
  templateUrl: './edit-fichier.component.html',
  styleUrls: ['./edit-fichier.component.scss']
})
export class EditFichierComponent implements OnInit, AfterContentInit {

  donnee: DonneeDto[] = [];
  id: number;
  donneeDto: DonneeDto;
  editForm!: FormGroup;
  submitted = false;
  public loggedIn: boolean;
  public isYoutube: boolean;

  constructor(
    private utilisateurService: UtilisateursService,
    public service: DonneeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  get f(){
    return this.editForm.controls;
  }

  onReset() {
    this.editForm.reset() ;
    this.router.navigateByUrl('fichier/list-fichier');
  }

  onSubmit(){
    this.donneeDto = {
      url: this.editForm.get('url') ?.value,
      format: this.editForm.get('format') ?.value,
      fileName: this.editForm.get('fileName') ?.value
    }
    if (this.donneeDto.url && this.donneeDto.format && this.donneeDto.fileName) {
        this.service.update(this.id, this.donneeDto)
        .subscribe((data) => {
          Swal.fire("Merci!", 'Modification effectuée avec success', 'success');
          this.router.navigateByUrl('fichier/list-fichier');
        }, error => {
          Swal.fire("Echec !", 'Lors de la modification', 'error');
          this.router.navigate(['401']);
        });
    } else {
      Swal.fire("Attention !", 'Veuillez saisir les champs obligatoire', 'warning');
    }
  }

  changeFormat(value) {
    this.isYoutube = !this.isYoutube;
    if (value?.target?.value === "mp4") {
      this.isYoutube = true;
      this.editForm.get('url').setValue("");
      this.editForm.get('url').setValidators(Validators.required);
    }
  }

  ngAfterContentInit(): void {
    this.service.getDonneById(this.id).subscribe((data: any) => {
      this.donneeDto = data;
      console.log(this.donneeDto );
      this.editForm = this.formBuilder.group({
        url: ['', Validators.required],
        format: ['', Validators.required],
        fileName: ['', Validators.required],
      });
    });
  }
}
