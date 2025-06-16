import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { RoleProvider } from './Contex/roleContex.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <Auth0Provider
    domain="dev-ffnudjhjp00a2hnv.us.auth0.com"
    clientId="EwBJFDOll3Lf8kgnNUaMWKwtGAsxepmv"
    authorizationParams={{
      redirect_uri: `${window.location.origin}/role`
    }}
  >
  <BrowserRouter>
  <RoleProvider >

    <App />

  </RoleProvider>
  </BrowserRouter>
</Auth0Provider>
  </StrictMode>,
)
