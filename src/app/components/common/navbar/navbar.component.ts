import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  isUserAuthenticated = false;

  constructor(private authService: AuthenticationService) {
  }

  onUserLogin() {
    this.authService.redirectToAuthenticationEndpoint();
  }

  onUserLogout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.authService.authenticatedUser.subscribe(user => this.isUserAuthenticated = !!user);
  }
}
