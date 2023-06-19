import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from "@material-tailwind/react";
import App from './components/App'
import './components/app.css'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="kahu-jennifer.au.auth0.com"
      clientId="HZM1FKSsrKBdv0d58YsLG12sPXVoszAW"
      // clientId="Gn1ZWSCqiDmLZCaXc5jWOAEq5m83ZK22"
      redirectUri={window.location.origin}
      audience="https://fruits/api"
      // audience="https://test-site/api"
    >
      <Router>      
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </Auth0Provider>
  )
})
