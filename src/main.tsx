
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.tsx'
import './index.css'
import './styles/enhanced.css'
import './styles/animations.css'
import './styles/mobile.css'

// Ensure the DOM is fully loaded before rendering
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
