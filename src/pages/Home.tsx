// ============================================================
// HOME PAGE - Main App Entry Point
// ============================================================
// IMPORTANT FOR AI:
// - For "create X" or "build X" requests (task manager, calculator, etc.),
//   REPLACE this entire file's content with the requested application.
// - For "add X" requests, ADD a new section below existing sections.
// - Do NOT create a separate page unless user explicitly asks for one.
// ============================================================

import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ============================================================
          HERO SECTION
          Full-width introductory section with headline, description, and CTAs
          ============================================================ */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Welcome to Your Website
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A modern, responsive template built with React and Tailwind CSS. Customize this page to match your needs.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURES SECTION
          Grid of cards highlighting key benefits or capabilities
          ============================================================ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Modern Design</CardTitle>
                <CardDescription>
                  Built with the latest design principles and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clean, responsive layout that looks great on any device
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fast Performance</CardTitle>
                <CardDescription>
                  Optimized for speed with efficient bundle sizes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quick load times and smooth interactions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Easy to Customize</CardTitle>
                <CardDescription>
                  Flexible component library for rapid development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge>Shadcn UI</Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  Pre-built components ready to use
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
