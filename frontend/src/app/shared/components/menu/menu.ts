import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { KeycloakService } from 'keycloak-angular';

interface Action {
  title: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  public keycloak = inject(KeycloakService);

  actions: Array<Action> = [
    { title: 'Home', route: '/home' },
    { title: 'Dashboard', route: '/dashboard' },
  ];

  logout() {
    this.keycloak.logout();
  }
}
