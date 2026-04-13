import {
  ArrowRight,
  BarChart3,
  Check,
  Globe,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Progress } from '../components/ui/progress'
import { Avatar, AvatarFallback } from '../components/ui/avatar'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'
import { Separator } from '../components/ui/separator'

const features = [
  {
    icon: Layers3,
    title: 'Pro-style Layout Blocks',
    description: 'Hero, logo cloud, pricing, metrics, FAQ, and CTA sections you can reuse across any page.'
  },
  {
    icon: Workflow,
    title: 'Design System Friendly',
    description: 'Built with shadcn-style primitives and semantic theme tokens for consistent results in light/dark.'
  },
  {
    icon: ShieldCheck,
    title: 'Production-Ready Foundations',
    description: 'Responsive behavior, accessible patterns, and composable components ready for real apps.'
  }
]

const metrics = [
  { label: 'Development Speed', value: 92 },
  { label: 'Visual Consistency', value: 95 },
  { label: 'Component Reuse', value: 88 }
]

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for MVPs and quick prototypes.',
    points: ['Core sections', 'Theme toggle', 'Responsive shell'],
    cta: 'Use Starter'
  },
  {
    name: 'Growth',
    price: '$29',
    description: 'For teams shipping production features every week.',
    points: ['Advanced blocks', 'Analytics-style widgets', 'Priority templates'],
    cta: 'Start Growth'
  },
  {
    name: 'Scale',
    price: '$99',
    description: 'Best for multi-product teams and white-label builds.',
    points: ['Team libraries', 'Brand kits', 'Architecture support'],
    cta: 'Contact Sales'
  }
]

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.15),transparent_46%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-28">
          <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1">
            <Sparkles className="mr-2 h-3.5 w-3.5" /> Enhanced shadcn-style Theme
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Default template, now upgraded into a complete modern theme.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            This version applies richer visual hierarchy, more default sections, and polished component patterns so your project starts closer to launch quality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="gap-2">Browse Sections <ArrowRight className="h-4 w-4" /></Button>
            <Button variant="outline" size="lg">See Documentation</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-3">
        {metrics.map((item) => (
          <Card key={item.label} className="border-border/60">
            <CardHeader className="pb-2">
              <CardDescription>{item.label}</CardDescription>
              <CardTitle className="text-2xl">{item.value}%</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={item.value} />
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 max-w-2xl">
          <Badge variant="outline" className="mb-3">Core Components</Badge>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built with reusable shadcn-style primitives.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="h-full border-border/60 transition-all hover:-translate-y-1 hover:shadow-md">
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

      <section className="border-y border-border/60 bg-muted/25">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">A full default theme kit for product teams.</h3>
            <p className="mt-4 text-muted-foreground">
              Use tabs to switch between use-cases and quickly adapt this template for SaaS, agency, portfolio, docs, or dashboard landing experiences.
            </p>
            <Separator className="my-6" />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>UI</AvatarFallback>
                </Avatar>
                <p className="text-sm text-muted-foreground">"The upgraded default theme gave us a huge head start in design consistency."</p>
              </div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>PM</AvatarFallback>
                </Avatar>
                <p className="text-sm text-muted-foreground">"Reusable sections made iteration faster across marketing pages."</p>
              </div>
            </div>
          </div>

          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BarChart3 className="h-5 w-5 text-primary" /> Theme Experience</CardTitle>
              <CardDescription>Switch between content models using tabs.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="saas" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="saas">SaaS</TabsTrigger>
                  <TabsTrigger value="agency">Agency</TabsTrigger>
                  <TabsTrigger value="docs">Docs</TabsTrigger>
                </TabsList>
                <TabsContent value="saas" className="mt-4 text-sm text-muted-foreground">
                  Conversion-focused hero + pricing + trust sections with clean CTA flow.
                </TabsContent>
                <TabsContent value="agency" className="mt-4 text-sm text-muted-foreground">
                  Portfolio highlights, service cards, process timeline, and lead capture blocks.
                </TabsContent>
                <TabsContent value="docs" className="mt-4 text-sm text-muted-foreground">
                  Documentation-first layout with clear navigation, search surfaces, and onboarding cards.
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-semibold tracking-tight">Simple plans to start with</h3>
          <p className="mt-3 text-muted-foreground">Swap this section with billing data when your backend is ready.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="border-border/60">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <p className="pt-2 text-3xl font-bold">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" /> {point}
                    </li>
                  ))}
                </ul>
                <Button className="mt-5 w-full" variant={plan.name === 'Growth' ? 'default' : 'outline'}>{plan.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/25">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
          <div>
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h3 className="text-3xl font-semibold tracking-tight">Frequently asked questions</h3>
            <p className="mt-3 text-muted-foreground">Answers for teams adopting this enhanced default template.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can we customize colors and typography?</AccordionTrigger>
              <AccordionContent>
                Yes. Theme tokens are centralized, so changing your palette and text scale updates the whole template quickly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is this layout ready for production?</AccordionTrigger>
              <AccordionContent>
                It is production-oriented as a starter: accessible primitives, responsive behavior, and modular sections are already included.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can we add dashboard pages later?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Keep this as your marketing shell and extend route-by-route with existing UI components.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <Badge variant="outline" className="mb-4"><Globe className="mr-2 h-3.5 w-3.5" /> Global-ready theme</Badge>
        <h3 className="text-3xl font-semibold tracking-tight">Ship faster with a better default experience.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          You can now use this template as a strong baseline and replace each section with your real product data over time.
        </p>
        <Button className="mt-7" size="lg">Start Building Now</Button>
      </section>
    </div>
  )
}
