import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    // Tries to log in (if user was logged in previously)
    this.authService.autoLogin();
  }
}
