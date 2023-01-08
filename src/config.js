export default {
    oidc: {
        clientId: '${yourClientId}',
        issuer: 'https://${yourOktaDomain}/oauth2/default',
        redirectUri: '${yourLocalAppDomain}/login/callback',
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
    }
}
