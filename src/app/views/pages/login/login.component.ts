import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AuthenticationRequest} from "@docs-components/models";
import {UtilisateursService} from "@docs-components/services";
import {ToasterComponent} from "@coreui/angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChildren(ToasterComponent) viewChildren!: QueryList<ToasterComponent>;

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl = '';
  password = '';

  authenticationRequest: AuthenticationRequest = {};
  errorMessage = '';
  invalidLogin = false;

  constructor(
    private utilisateurService: UtilisateursService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.utilisateurService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }


  login() {
    this.authenticationRequest = {
      login: this.loginForm.get('email') ?.value,
      password: this.loginForm.get('password') ?.value,
    },
    this.loading = true;
    this.utilisateurService.login(this.authenticationRequest)
      .subscribe((data) => {
        this.utilisateurService.setAccessToken(data);
        this.getUserByEmail();
        this.utilisateurService.loggedIn.next(true);
        this.invalidLogin = false;
        this.router.navigate([this.returnUrl]);
      }, error => {
        this.errorMessage = 'Login et / ou mot de passe incorrecte';
        this.loading = false;
        this.router.navigate(['401']);
      });
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.login();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }



  getUserByEmail(): void {
    this.utilisateurService.getUserByEmail(this.authenticationRequest.login)
      .subscribe(user => {
        this.utilisateurService.setConnectedUser(user);
        console.log(this.utilisateurService.setConnectedUser(user));
      });
  }

}
