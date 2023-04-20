import { Component, Input} from '@angular/core';
import { HeaderComponent } from '@coreui/angular';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {AnnonceService} from "../../../services/annonce.service";
import {AnnonceDto} from "../../../models/annonce-dto";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  annonce!: string ;
  listAnnonce: Array<AnnonceDto> = [];
  @Input() sidebarId: string = "sidebar";
  public newTasks = new Array(5)
  public newMessages = new Array(4)
  public newNotifications = new Array(5)

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private annonceService: AnnonceService)
  {
    super();
  }

  ngOnInit(): void {
    this.getListAnnonce();
  }

  goToLogin() : void {
    this.router.navigate(['401']);
  }

  getListAnnonce(): void {
    this.annonceService.getListAnnonce()
      .subscribe(annonce => {
        this.listAnnonce = annonce.body;
        this.listAnnonce.forEach(function(item, index) {
      //    alert(item.intitule)
          this.annonce = item.intitule;
          console.log(item, index);
        });
      });
  }
}
