import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sparkles, Menu } from 'lucide-react'
import { routes } from '../routes'
import { Button } from './ui/button'
import { ThemeToggle } from './ThemeToggle'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

export default function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const navRoutes = routes.filter((route) => route.showInNav)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/90 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          Weblo Studio
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navRoutes.map((route) => {
            const isActive = location.pathname === route.path
            return (
              <Link
                key={route.path}
                to={route.path}
                className={`text-sm transition-colors ${isActive ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {route.label}
              </Link>
            )
          })}
          <ThemeToggle />
          <Button size="sm">Start Free</Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-3">
                {navRoutes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {route.label}
                  </Link>
                ))}
                <Button className="mt-3">Start Free</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
