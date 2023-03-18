import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { oauth2RouteGuard } from "./routeguards/oauth2.routeguard";
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { ShelfDisplayComponent } from "./components/shelves/shelf-display/shelf-display.component";
import { authenticatedRouteGuard } from "./routeguards/authenticated.routeguard";
import { ShelfDetailsComponent } from "./components/shelves/shelf-details/shelf-details.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'auth/oauth2', canActivate: [oauth2RouteGuard], component: AuthenticationComponent},

  {path: 'shelves', component: ShelfDisplayComponent, canActivate: [authenticatedRouteGuard]},
  {path: 'shelves/:shelfId', component: ShelfDetailsComponent, canActivate: [authenticatedRouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
