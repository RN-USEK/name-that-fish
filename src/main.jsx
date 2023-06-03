import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FishProvider } from './context/FishContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FishProvider>
      <App />
    </FishProvider>
  </React.StrictMode>
)
 