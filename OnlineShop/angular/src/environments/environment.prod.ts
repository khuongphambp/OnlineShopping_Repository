import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'OnlineShop',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44320',
    redirectUri: baseUrl,
    clientId: 'OnlineShop_App',
    responseType: 'code',
    scope: 'offline_access OnlineShop',
  },
  apis: {
    default: {
      url: 'https://localhost:44320',
      rootNamespace: 'OnlineShop',
    },
  },
} as Environment;
