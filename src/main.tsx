
import { createRoot } from 'react-dom/client'
import { AnimatePresence } from 'framer-motion'
import App from './App.tsx'
import './index.css'
import './styles/enhanced.css'
import './styles/animations.css'
import './styles/mobile.css'

createRoot(document.getElementById("root")!).render(
  <AnimatePresence mode="wait">
    <App />
  </AnimatePresence>
);
