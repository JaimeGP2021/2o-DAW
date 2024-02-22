// Dentro de la carpeta pages, crearemos las diferentes páginas de nuestra aplicación:
// HomePage.jsx: la página de inicio que contendrá nuestros botones principales.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
