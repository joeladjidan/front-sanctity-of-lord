import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {EnseignementsService} from "../../services/enseignements.service";
import {IVideoSource} from "ngx-video-list-player";
import {EnseignementDto} from "../../models/enseignement-dto";
import {TitreMessageService} from "../../services/titre-message.service";
import {TypeEnseignementService} from 'src/app/services/type-enseignement.service';
import {TitreMessageDto} from "../../models/titre-message-dto";
import {TypeEnseignementDto} from "../../models/type-enseignement-dto";
import {FormBuilder} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-enseignements',
  templateUrl: './enseignements.component.html',
  styleUrls: ['./enseignements.component.scss']
})
export class EnseignementsComponent implements OnInit, AfterContentInit {

  isLoading = false;
  youtubeBtnObj: any;
  sources!: IVideoSource[];

  listTitreMessage: Array<TitreMessageDto> = [];
  listEnseignement: Array<EnseignementDto> = [];
  listTypeEnseignement: Array<TypeEnseignementDto> = [];

  @ViewChild('typeEnseignement') typeEnseignement!: ElementRef;
  @ViewChild('titreMessage') titreMessage!: ElementRef;

  selectedTitreMessage = '';
  selectedTypeEnseignement = '';

   constructor(private router: Router,
              private formBuilder: FormBuilder,
              private titreMessageService: TitreMessageService,
              private enseignementService: EnseignementsService,
              private typeEnseignementService: TypeEnseignementService)
   {}

  ngOnInit(): void {
    this.getTitreMessage();
    this.getEnseignements();
    this.getTypeEnseignement();
  }

  logo = "assets/images/prophete-ange-josaphat.jpg";

  onSelected(): void {
    this.selectedTypeEnseignement = this.typeEnseignement?.nativeElement.value;
    this.selectedTitreMessage = this.titreMessage?.nativeElement.value;
    this.searchEnseignements(this.selectedTitreMessage , this.selectedTypeEnseignement);
    console.log(">>>>>>>>>>"+this.selectedTitreMessage + " "+ this.selectedTypeEnseignement)
  }

  onReset(): void {
     this.getEnseignements();
  }

  searchEnseignements(titreMessage: string , typeEnseignement: string) : void {
    this.isLoading = true;
    this.enseignementService.searchEnseignements(titreMessage , typeEnseignement)
      .subscribe(enseignement => {
        this.listEnseignement = enseignement.body;
        if (enseignement.body.length == 0) {
            Swal.fire("Attention!", 'Aucun enseignement trouvé', 'warning');
        }
        this.listEnseignement.filter((x:any) => { return x.format == "mp4";});
        this.listEnseignement.forEach(function(item, index) {
          console.log(item, index);
        }, error => {
          Swal.fire("Echec !", 'Lors de de la recupération, contactez l\' administrateur', 'error');
        });
        this.wait(2000).then( () => this.isLoading = false );
      });
  }

  getEnseignements(): void {
    this.enseignementService.getListEnseignement()
      .subscribe(enseignement => {
        this.listEnseignement = enseignement.body;
        if (enseignement.body.length == 0) {
            Swal.fire("Attention!", 'Aucun enseignement trouvé', 'warning');
        }
        this.listEnseignement.filter((x:any) => { return x.format == "mp4";});
        this.listEnseignement.forEach(function(item, index) {
          console.log(item, index);
        }, error => {
          Swal.fire("Echec !", 'Lors de de la recupération, contactez l\' administrateur', 'error');
        });
      });
  }

  getTitreMessage(): void {
    this.titreMessageService.getTitreMessage()
      .subscribe(titreMessage => {
        this.listTitreMessage= titreMessage.body;
        this.listTitreMessage.forEach(function(item, index) {
          console.log(item, index);
        });
      });
  }

  getTypeEnseignement(): void {
    this.typeEnseignementService.getTypeEnseignement()
      .subscribe(typeEnseignement => {
        this.listTypeEnseignement= typeEnseignement.body;
        this.listTypeEnseignement.forEach(function(item, index) {
          console.log(item, index);
        });
      });
  }



  managePlayingBtnComponent(currentActiveBtn ) : void {
    this.youtubeBtnObj = currentActiveBtn;
  }

  ngAfterContentInit(): void {
    this.wait(2000).then( () => this.isLoading = false );
  }

  async wait(ms: number): Promise<void> {
    return new Promise<void>( resolve => setTimeout( resolve, ms) );
  }
}
