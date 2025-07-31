import { Component, inject, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  userProfile?: KeycloakProfile;
  public keycloak = inject(KeycloakService);

  async ngOnInit() {
    if (await this.keycloak.isLoggedIn()) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  getUsername(): string | undefined {
    return this.keycloak.getUsername();
  }

  getRoles(): string[] {
    return this.keycloak.getUserRoles();
  }
}
