import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.scss']
})
export class PageUtilisateurComponent implements OnInit {

  constructor() { }

  public favoriteColor = '#26ab3c';

  ngOnInit(): void {
  }

}
