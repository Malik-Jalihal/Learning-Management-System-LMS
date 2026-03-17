import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// Basic validation: don't use the placeholder value or empty keys
const isValidPublishableKey =
  typeof PUBLISHABLE_KEY === 'string' &&
  PUBLISHABLE_KEY.length > 0 &&
  !PUBLISHABLE_KEY.includes('Clerk Publishable Key') &&
  !PUBLISHABLE_KEY.includes('-----')

const root = createRoot(document.getElementById('root'))

if (isValidPublishableKey) {
  root.render(
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ClerkProvider>
    </BrowserRouter>,
  )
} else {
  // Render without ClerkProvider to avoid runtime crash in development
  // Remind developer to set a valid key in .env (VITE_CLERK_PUBLISHABLE_KEY)
  // This keeps the app running while auth is not configured.
  // eslint-disable-next-line no-console
  console.warn(
    'Invalid or missing Clerk publishable key. Skipping ClerkProvider. Set VITE_CLERK_PUBLISHABLE_KEY in .env to enable Clerk.',
  )

  root.render(
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>,
  )
}
