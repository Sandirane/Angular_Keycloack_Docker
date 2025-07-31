import { environment } from '@config/environment';
import { KeycloakOptions, KeycloakService } from 'keycloak-angular';

const keycloakConfig: KeycloakOptions = {
  config: environment.keycloak,
  initOptions: {
    onLoad: 'login-required',
    checkLoginIframe: false,
  },
};

export function initializeKeycloak(keycloak: KeycloakService) {
  return () => keycloak.init(keycloakConfig);
}

export default keycloakConfig;
