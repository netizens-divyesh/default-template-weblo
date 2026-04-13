import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { routes } from '../routes'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { ThemeToggle } from './ThemeToggle'

export default function Navigation() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const navRoutes = routes.filter((route) => route.showInNav)

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <nav className="bg-background border-b border-border" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Site Name */}
            <Link to="/" className="text-xl font-bold text-foreground hover:text-foreground/80">
              Your Website
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navRoutes.map((route) => {
                const isActive = location.pathname === route.path
                return (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {route.label}
                  </Link>
                )
              })}
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Theme Toggle (Mobile) */}
              <ThemeToggle />
              {navRoutes.length > 0 && (
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Open menu">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <SheetHeader>
                      <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
                      {navRoutes.map((route) => {
                        const isActive = location.pathname === route.path
                        return (
                          <Link
                            key={route.path}
                            to={route.path}
                            onClick={() => setOpen(false)}
                            className={`text-lg font-medium transition-colors ${
                              isActive
                                ? 'text-primary'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            {route.label}
                          </Link>
                        )
                      })}
                    </nav>
                  </SheetContent>
                </Sheet>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
