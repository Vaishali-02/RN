import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-ujpvi8cly7n0rpr5.us.auth0.com"
    clientId="x4AaqtIzsaRb0r0AExFYFgBZcDMUVO16"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
)
