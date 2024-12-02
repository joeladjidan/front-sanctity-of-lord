import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import {HttpClient, HttpEventType, HttpResponse} from "@angular/common/http";
import {DonneeService} from "../../../services/donnee.service";
import {tap} from "rxjs/operators";
import {FichierDetails} from "../../../models/fichier-details";
import {MatAccordion} from "@angular/material/expansion";
import Swal from "sweetalert2";

@Component({
  selector: 'app-create-medias',
  templateUrl: './create-medias.component.html',
  styleUrls: ['./create-medias.component.scss'],
  standalone: false,

})
export class CreateMediasComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState = false;

  loggedIn: boolean;
  loaded = 0;
  selectedFiles: FileList;
  showProgress = false;
  mediaForm: FormGroup;
  uploadedFiles: FichierDetails[] = [];

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private utilisateurService: UtilisateursService,
              private donneeService: DonneeService)
  {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  ngOnInit(): void { }

  onSubmit() {

  }

   onReset() {
    this.router.navigateByUrl('medias/list-medias');
  }

  ngAfterContentInit(): void {
    this.loggedIn = this.utilisateurService.loggedIn.getValue();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  ajouterPhotos() {
    this.showProgress = true;
    this.uploadedFiles = [];
    Array.from(this.selectedFiles).forEach(file => {
      const detailsFichier = new FichierDetails();
      detailsFichier.name = file.name;
      this.uploadedFiles.push(detailsFichier);
      this.donneeService.enregistrerFichier(file, "2")
        .pipe(tap(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.loaded = Math.round(100 * event.loaded / event.total);
            detailsFichier.progress = this.loaded;
          }
        })).subscribe(event => {
        if (event instanceof HttpResponse) {
          Swal.fire({
            icon: 'success',
            title: 'Enrégistrement',
            showConfirmButton: false,
            html: 'Insertion de l\'image effectuée avec success',
            timer: 1500,
          })
          if (this.selectedFiles.item(this.selectedFiles.length - 1) === file) {
            // Invokes fetchFileNames() when last file in the list is uploaded.
            this.donneeService.fetchFileNames("2");
          }
        }
      });
    });
  }

  ajouterAudios() {
    this.showProgress = true;
    this.uploadedFiles = [];
    Array.from(this.selectedFiles).forEach(file => {
      const detailsFichier = new FichierDetails();
      detailsFichier.name = file.name;
      this.uploadedFiles.push(detailsFichier);
      this.donneeService.enregistrerFichier(file, "1")
        .pipe(tap(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.loaded = Math.round(100 * event.loaded / event.total);
            detailsFichier.progress = this.loaded;
          }
        })).subscribe(event => {
        if (event instanceof HttpResponse) {
          Swal.fire({
            icon: 'success',
            title: 'Enrégistrement',
            showConfirmButton: false,
            html: 'Insertion du fichier audio effectué avec success',
            timer: 1500,
          })
          if (this.selectedFiles.item(this.selectedFiles.length - 1) === file) {
            // Invokes fetchFileNames() when last file in the list is uploaded.
            this.donneeService.fetchFileNames("1");
          }
        }
      });
    });
  }






}
