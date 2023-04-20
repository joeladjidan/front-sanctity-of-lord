import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-medias',
  templateUrl: './create-medias.component.html',
  styleUrls: ['./create-medias.component.scss']
})
export class CreateMediasComponent implements OnInit {

  formData: FormGroup;
  fileToUpload1: File;
  fileToUpload2: File;

  imageSrc1: string = '';
  imageSrc2: string = ''

  loggedIn: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private utilisateurService: UtilisateursService,
    private httpClient: HttpClient
  ) {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngOnInit(): void {

  }

  onReset() {
    this.formData.reset() ;
    this.router.navigateByUrl('medias/list-medias');
  }

  ngAfterContentInit(): void {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
    this.formData = this.formBuilder.group({
      files   : []
    });
  }


  handleFileInput1(event) {
    this.fileToUpload1 = <File>event.target.files[0];
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc1 = reader.result as string;

      };

    }
  }

  handleFileInput2(event) {
    this.fileToUpload2 = <File>event.target.files[0];
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc2 = reader.result as string;

      };

    }
  }

  onSubmit(): void {

    const formData: FormData = new FormData();
    formData.append('document', this.fileToUpload1, this.fileToUpload1.name+'_pp');
    formData.append('document', this.fileToUpload2, this.fileToUpload2.name+'_ss');

    let url = 'http://localhost:8080/api/upload/documents';

    this.httpClient
      .post(url, formData, {observe: 'response'}).subscribe(
      resp => {
        console.log(resp.body);
      },
      err => {
        console.log(err);

      });
  }
}
