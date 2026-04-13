import { ArrowRight, BarChart3, Layers3, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const featureCards = [
  {
    icon: Layers3,
    title: 'Composable Sections',
    description: 'Prebuilt blocks for hero, metrics, testimonials, pricing, and CTAs that you can rearrange in minutes.'
  },
  {
    icon: Workflow,
    title: 'Built for Iteration',
    description: 'Clear component structure and utility-first styling make fast edits and experiments effortless.'
  },
  {
    icon: ShieldCheck,
    title: 'Production Friendly',
    description: 'Accessible defaults, responsive layout behavior, and clean semantic markup across devices.'
  }
]

const stats = [
  { label: 'Setup time', value: '5 min' },
  { label: 'Reusable sections', value: '12+' },
  { label: 'Lighthouse-ready patterns', value: '90+' }
]

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.18),transparent_45%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-24 md:py-28">
          <Badge variant="secondary" className="gap-1.5 rounded-full px-4 py-1">
            <Sparkles className="h-3.5 w-3.5" /> Enhanced Default Theme
          </Badge>
          <div className="max-w-3xl space-y-5">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Build polished web experiences from a stronger starting point.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              This upgraded template includes a refined header, richer homepage sections, reusable cards, and a modern visual system that feels launch-ready.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gap-2">Explore Components <ArrowRight className="h-4 w-4" /></Button>
            <Button size="lg" variant="outline">View Documentation</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border/60 bg-card/70 backdrop-blur">
            <CardHeader className="pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-10 max-w-2xl">
          <Badge variant="outline" className="mb-4">Default Components</Badge>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need for a complete landing experience.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="h-full border-border/60 transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0">Learn more</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight">Designed to scale from MVP to full product.</h3>
            <p className="mt-4 text-muted-foreground">
              Keep the simple defaults when prototyping, then evolve with advanced components as your product grows. The structure is intentionally modular so you can extend quickly.
            </p>
            <div className="mt-6">
              <Button className="gap-2">Start Building <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </div>
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BarChart3 className="h-5 w-5 text-primary" /> Growth Snapshot</CardTitle>
              <CardDescription>How teams improve delivery speed after adopting a reusable template system.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {[
                  ['Time-to-first-page', '2.3x faster'],
                  ['Design consistency', '95% alignment'],
                  ['Component reuse', '80%+']
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
