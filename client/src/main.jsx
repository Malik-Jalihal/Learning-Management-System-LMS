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

// Always use ClerkProvider with a fallback value if key is missing
// This ensures Clerk hooks don't break the app
const clerkKey = isValidPublishableKey 
  ? PUBLISHABLE_KEY 
  : 'pk_test_placeholder' // Temporary placeholder to prevent hook errors

if (!isValidPublishableKey) {
  console.warn(
    'Missing or invalid VITE_CLERK_PUBLISHABLE_KEY. Please set it in Vercel Environment Variables for Clerk authentication to work.'
  )
}

root.render(
  <BrowserRouter>
    <ClerkProvider publishableKey={clerkKey} afterSignOutUrl="/">
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>,
)
