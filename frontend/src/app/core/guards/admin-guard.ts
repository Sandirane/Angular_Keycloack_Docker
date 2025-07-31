import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

export const adminGuard: CanActivateFn = async (route, state) => {

  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  const hasRole = keycloak.isUserInRole('admin');

  if (!hasRole) {
    await router.navigate(['/notauthorized']);
    return false;
  }

  return true;
};
