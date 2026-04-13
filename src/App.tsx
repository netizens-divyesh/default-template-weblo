import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { ErrorBoundary } from './components/ErrorBoundary'
import { routes } from './routes'
import { initFirebase } from './lib/firebase'
import { ThemeProvider } from './hooks/useTheme'
import { Toaster } from './components/ui/sonner'

export default function App() {
  // Initialize Firebase if config is available
  useEffect(() => {
    if (typeof window !== 'undefined' && window.__APP_CONFIG__?.firebase) {
      initFirebase()
    }
  }, [])

  // Handle empty routes case - show blank canvas
  if (routes.length === 0) {
    return (
      <ThemeProvider>
        <ErrorBoundary>
          <div className="min-h-screen bg-background flex items-center justify-center">
            <p className="text-muted-foreground">Your website will appear here</p>
          </div>
        </ErrorBoundary>
        <Toaster />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Routes>
          {routes.map((route) => {
            // AI decides layout: 'bare' = no wrapper, 'default' = full layout with nav/footer
            const element = route.layout === 'bare'
              ? route.element
              : <Layout>{route.element}</Layout>

            return <Route key={route.path} path={route.path} element={element} />
          })}
        </Routes>
      </ErrorBoundary>
      <Toaster />
    </ThemeProvider>
  )
}
