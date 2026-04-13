// ============================================================
// ROUTE REGISTRY
// ============================================================
// IMPORTANT FOR AI:
// - For "create X" or "build X" requests (task manager, calculator, etc.),
//   MODIFY Home.tsx directly - do NOT create new pages or routes.
// - Only add new routes when user explicitly asks for "a new page" or
//   "a separate page" (e.g., "add an About page", "create a Contact page").
//
// To add a new page (only when explicitly requested):
// 1. Create the page component in src/pages/YourPage.tsx
// 2. Import it at the top of this file
// 3. Add an entry to the routes array below
// 4. The navigation will automatically include it if showInNav: true
// ============================================================

import Home from './pages/Home'
import NotFound from './pages/NotFound'

export interface RouteConfig {
  path: string
  label: string
  element: React.ReactNode
  showInNav: boolean
  layout: 'default' | 'bare'  // 'default' = with nav/footer, 'bare' = standalone
}

// Routes array - Only add entries here when user explicitly requests a new page
export const routes: RouteConfig[] = [
  {
    path: '/',
    label: 'Home',
    element: <Home />,
    showInNav: true,
    layout: 'default'
  },
  {
    path: '*',
    label: '404',
    element: <NotFound />,
    showInNav: false,
    layout: 'default'
  }
]
