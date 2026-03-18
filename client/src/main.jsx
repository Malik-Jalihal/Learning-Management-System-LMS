import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

// Get publishable key from env
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// Validate key properly
const isValidPublishableKey =
  typeof PUBLISHABLE_KEY === 'string' &&
  PUBLISHABLE_KEY.startsWith('pk_') &&
  PUBLISHABLE_KEY.length > 10

const root = createRoot(document.getElementById('root'))

// 🔥 Conditional render (no fake placeholder anymore)
if (!isValidPublishableKey) {
  console.warn(
    '❌ Missing or invalid VITE_CLERK_PUBLISHABLE_KEY. Running app without Clerk auth.'
  )

  root.render(
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  )
} else {
  root.render(
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ClerkProvider>
    </BrowserRouter>
  )
}