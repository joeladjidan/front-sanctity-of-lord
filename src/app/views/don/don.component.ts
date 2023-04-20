import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DonneeService} from "../../services/donnee.service";
import {DonneeDto} from "../../models/donnee-dto";

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.scss']
})
export class DonComponent implements OnInit , AfterContentInit {

  constructor(private router: Router,
              private donneeService: DonneeService)
  { }

  donneePaypal: DonneeDto;
  donneeRib: DonneeDto;

  ngOnInit(): void {

  }


  getRib(fileName: string): void {
    this.donneeService.getDonnee(fileName)
      .subscribe(donnee => {
        this.donneeRib = donnee.body;
      });
  }

  getPayPal(fileName: string): void {
    this.donneeService.getDonnee(fileName)
      .subscribe(donnee => {
        this.donneePaypal = donnee.body;
      });
  }

  ngAfterContentInit(): void {
    this.getRib("rib");
    this.getPayPal("paypal");
  }

}
