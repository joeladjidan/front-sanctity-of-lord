import {AfterContentInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IVideoSource} from "ngx-video-list-player";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {ArchivreDto} from "../../models/archivre-dto";
import {MoisDto} from "../../models/mois-dto";
import {AnneeDto} from "../../models/annee-dto";
import {AnneeService} from "../../services/annee.service";
import {MoisService} from 'src/app/services/mois.service';
import {ArchivresService} from "../../services/archives.service";

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit , AfterContentInit {

  isLoading = false;
  youtubeBtnObj: any;
  sources!: IVideoSource[];

  listMois: Array<MoisDto> = [];
  listArchivre: Array<ArchivreDto> = [];
  listAnnee: Array<AnneeDto> = [];

  @ViewChild('mois') mois!: ElementRef;
  @ViewChild('annee') annee!: ElementRef;
  @ViewChild('selection') selection!: ElementRef;

  selectedMois = '';
  selectedAnnee = '';
  selectedSelection = '';

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private moisService: MoisService,
              private anneeService: AnneeService,
              private archivreService: ArchivresService,
              private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getListMois();
    this.getListAnnee();
    this.getListArchivre();
  }

  logo = "assets/images/prophete-ange-josaphat.jpg";

  onSelected(): void {
    this.selectedMois = this.mois?.nativeElement.value;
    this.selectedAnnee = this.annee?.nativeElement.value;
    this.selectedSelection = this.selection?.nativeElement.value;
    this.searchArchivre( this.selectedMois , this.selectedAnnee);
  }

  onReset() : void {
    this.getListArchivre();
  }

  searchArchivre(mois: string , annee: string) : void {
    debugger
    this.isLoading = true;
    this.archivreService.searchArchivre(mois , annee)
      .subscribe(archivre => {
        debugger
        this.listArchivre = archivre.body;
        this.listArchivre.forEach(function(item, index) {
          console.log(item, index);
        });
        this.wait(2000).then( () => this.isLoading = false );
        if (!this.listArchivre?.length) {

        }
      });
  }

  getListArchivre(): void {
    this.archivreService.getListArchivre()
      .subscribe(archivre => {
        this.listArchivre = archivre.body;
        this.listArchivre.forEach(function(item, index) {
          console.log(item, index);
        });
      });
  }

  getListMois(): void {
    this.moisService.getListMois()
      .subscribe(mois => {
        this.listMois= mois.body;
        this.listMois.forEach(function(item, index) {
          console.log(item, index);
        });
      });
  }

  getListAnnee(): void {
    this.anneeService.getListAnnee()
      .subscribe(annee => {
        this.listAnnee= annee.body;
        this.listAnnee.forEach(function(item, index) {
          console.log(item, index);
        });
      });
  }

  managePlayingBtnComponent(currentActiveBtn ) : void {
    this.youtubeBtnObj = currentActiveBtn;
  }

  ngAfterContentInit(): void {
    this.wait(2000).then( () => this.isLoading = false );
    this.changeDetectorRef.detectChanges();
  }

  /*load() : void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 2000 );
  }

  start() {
    this.isLoading = true;
    this.wait(2000).then( () => this.isLoading = false );
  }*/

  async wait(ms: number): Promise<void> {
    return new Promise<void>( resolve => setTimeout( resolve, ms) );
  }

}
