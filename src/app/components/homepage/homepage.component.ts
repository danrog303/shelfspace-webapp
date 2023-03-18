import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {
  isUserAuthenticated: boolean = false;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authService.authenticatedUser.subscribe(user => this.isUserAuthenticated = !!user);
  }

  onAuthenticate() {
    this.authService.redirectToAuthenticationEndpoint();
  }
}
