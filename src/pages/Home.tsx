import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import HeroSection from "@/components/shadcn-studio/blocks/hero-section-16/hero-section-16";
import LogoCloud from "@/components/shadcn-studio/blocks/logo-cloud-02/logo-cloud-02";
import BentoGrid from "@/components/shadcn-studio/blocks/bento-grid-07/bento-grid-07";
import SocialProof from "@/components/shadcn-studio/blocks/social-proof-01/social-proof-01";
import TestimonialsComponent from "@/components/shadcn-studio/blocks/testimonials-component-18/testimonials-component-18";
import MegaFooter from "@/components/shadcn-studio/blocks/mega-footer-05/mega-footer-05";
import TransactionTableCard from "@/components/shadcn-studio/blocks/datatable-transaction";
import AboutUs from "@/components/shadcn-studio/blocks/about-us-page-03/about-us-page-03";
import AppIntegration from "@/components/shadcn-studio/blocks/app-integration-03/app-integration-03";
import CompareSection from "@/components/shadcn-studio/blocks/compare-01/compare-01";
import ProductList from "@/components/shadcn-studio/blocks/product-list-07/product-list-07";
import Timeline from "@/components/shadcn-studio/blocks/timeline-component-02/timeline-component-02";
import Gallery from "@/components/shadcn-studio/blocks/gallery-component-03/gallery-component-03";
import BlogSection from "@/components/shadcn-studio/blocks/blog-component-06/blog-component-06";
import FAQSection from "@/components/shadcn-studio/blocks/faq-component-11/faq-component-11";
import ContactSection from "@/components/shadcn-studio/blocks/contact-us-page-04/contact-us-page-04";

// DATA DEFINITIONS
const logos = [
  {
    name: "SaaSMaster",
    logo: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/um-logo.png",
  },
  {
    name: "CloudSync",
    logo: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/star-helth-logo.png",
  },
  {
    name: "DevFlow",
    logo: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/dhl-logo.png",
  },
  {
    name: "DataViz",
    logo: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/sense-arena-logo.png",
  },
  {
    name: "AutoMate",
    logo: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/shemaroo-logo.png",
  },
];

const socialProofFeatures = [
  {
    title: "No-Code Visual Editor",
    description:
      "Design complex layouts without writing a single line of code.",
  },
  {
    title: "One-Click Deployment",
    description: "Publish your changes to global edge nodes instantly.",
  },
  {
    title: "SEO Optimized Defaults",
    description:
      "Every page is built for speed and search visibility from start.",
  },
  {
    title: "Team Collaboration",
    description: "Invite your team and build together in real-time.",
  },
];

const testimonials = [
  {
    name: "Alex Rivers",
    role: "Fullstack Developer",
    company: "DevFlow",
    avatar: "https://avatar.iran.liara.run/public/1",
    rating: 5,
    content:
      "Weblo Studio significantly reduced our internal tool development time. The bento-grid components are a game changer.",
  },
  {
    name: "Sarah Chen",
    role: "Product Designer",
    company: "DesignCo",
    avatar: "https://avatar.iran.liara.run/public/64",
    rating: 5,
    content:
      "The visual editor feels premium. It's the first time I've felt a no-code tool actually gives me pixel-perfect control.",
  },
  {
    name: "Michael Smith",
    role: "Founder",
    company: "SaaSMaster",
    avatar: "https://avatar.iran.liara.run/public/12",
    rating: 5,
    content:
      "We launched our landing page in 2 hours. Weblo's performance out of the box is incredible. 99 lighthouse score easily.",
  },
];

const aboutUsData = {
  contentTitle: "Empowering Creativity Since 2024",
  contentDescription:
    "Weblo was born from a simple idea: making the web accessible to everyone, regardless of their technical background.",
  tabs: [
    {
      name: "Our Vision",
      value: "vision",
      content: (
        <p className="text-muted-foreground">
          To be the world's most intuitive platform for building the modern web.
          We aim to bridge the gap between design and development.
        </p>
      ),
    },
    {
      name: "Our Values",
      value: "values",
      content: (
        <p className="text-muted-foreground">
          Simplicity, speed, and community represent everything we build. We
          prioritize user experience above all else.
        </p>
      ),
    },
  ],
};

const integrations = [
  {
    name: "Slack",
    description: "Get instant notifications for site activity.",
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/app-integration/image-1.png",
    alt: "Slack",
  },
  {
    name: "Github",
    description: "Sync your assets directly from your repositories.",
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/app-integration/image-2.png",
    alt: "Github",
  },
  {
    name: "Notion",
    description: "Publish your Notion pages directly as websites.",
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/app-integration/image-3.png",
    alt: "Notion",
  },
];

const timelineData = [
  {
    title: "ideation",
    content: "Brainstorming core features and user experience architecture.",
  },
  {
    title: "Alpha Launch",
    content: "Successful testing with 100+ design agencies globally.",
  },
  {
    title: "Global Scale",
    content:
      "Expanding our edge network to 50+ locations for sub-50ms latency.",
  },
];

const compareData = [
  {
    name: "Feature",
    isKey: true,
    columnData: ["Visual Editor", "Edge Hosting", "AI Copilot", "Team Sync"],
  },
  {
    name: "Weblo",
    isHighlighted: true,
    columnData: ["Advanced", "Global", "Included", "Real-time"],
  },
  { name: "Others", columnData: ["Basic", "Regional", "Add-on", "Delayed"] },
];

const galleryImages = [
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-1.png",
    alt: "Website Builder Interface",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-2.png",
    alt: "Responsive Design View",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-3.png",
    alt: "SEO Management Panel",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-4.png",
    alt: "Team Collaboration Tools",
  },
];

const blogCards = [
  {
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-1.png",
    alt: "SEO Tips",
    tags: ["SEO", "Growth"],
    title: "10 Tips to Rank Your Website Faster",
    date: "April 10, 2024",
    blogLink: "#",
  },
  {
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-2.png",
    alt: "Design Trends",
    tags: ["Design"],
    title: "Modern Web Design Trends in 2024",
    date: "April 12, 2024",
    blogLink: "#",
  },
  {
    image:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/blog/image-3.png",
    alt: "No-Code Future",
    tags: ["Tech"],
    title: "Why No-Code is the Future of Development",
    date: "April 15, 2024",
    blogLink: "#",
  },
];

const faqItems = [
  {
    question: "How fast are Weblo sites?",
    answer:
      "Extremely fast. We use global edge hosting and automatic image optimization to ensure sub-second load times.",
  },
  {
    question: "Can I export my code?",
    answer:
      "Yes, you can export your site as a clean, production-ready React or HTML bundle at any time.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Absolutely. You can build and host your first project for free on our weblo.me subdomain.",
  },
];

const products = [
  {
    productSrc:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-1.png",
    productAlt: "Business Template",
    productLink: "#",
    name: "Enterprise SaaS",
    rating: 4.8,
    originalPrice: 99,
    discountedPrice: 79,
  },
  {
    productSrc:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-2.png",
    productAlt: "Portfolio Template",
    productLink: "#",
    name: "Creative Portfolio",
    rating: 4.9,
    originalPrice: 49,
  },
  {
    productSrc:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-3.png",
    productAlt: "Blog Template",
    productLink: "#",
    name: "Minimalist Blog",
    rating: 4.7,
    originalPrice: 29,
  },
  {
    productSrc:
      "https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-4.png",
    productAlt: "Agency Template",
    productLink: "#",
    name: "Studio Agency",
    rating: 5.0,
    originalPrice: 149,
    discountedPrice: 119,
  },
];

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message anytime.",
    ctaText: "support@weblo.studio",
    ctaLink: "mailto:support@weblo.studio",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm.",
    ctaText: "+1 (555) 000-0000",
    ctaLink: "tel:+15550000000",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our experts now.",
    ctaText: "Start Chat",
    ctaLink: "#",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our main office in NYC.",
    ctaText: "Get Directions",
    ctaLink: "#",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-background selection:bg-primary/20">
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. LOGO CLOUD */}
      <div className="border-y bg-card/50">
        <LogoCloud logos={logos} />
      </div>

      {/* 3. SOCIAL PROOF */}
      <SocialProof features={socialProofFeatures} />

      {/* 4. ABOUT US */}
      <AboutUs aboutUsData={aboutUsData} />

      {/* 5. BENTO GRID */}
      <div className="bg-muted/30 py-4 border-y">
        <BentoGrid />
      </div>

      {/* 6. COMPARISON */}
      <CompareSection rowdata={compareData} />

      {/* 7. APP INTEGRATION */}
      <AppIntegration integrations={integrations} />

      {/* 8. PRODUCT LIST / TEMPLATES */}
      <ProductList products={products} />

      {/* 9. PLATFORM INSIGHTS (DataTable) */}
      <section className="py-20 border-t bg-card/40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Live Platform Activity</h2>
            <p className="mt-4 text-muted-foreground">
              Monitoring network performance and user deployment cycles.
            </p>
          </div>
          <div className="rounded-2xl border bg-card shadow-xl overflow-hidden">
            <TransactionTableCard />
          </div>
        </div>
      </section>

      {/* 10. TIMELINE / ROADMAP */}
      <Timeline data={timelineData} />

      {/* 11. GALLERY */}
      <Gallery galleryImages={galleryImages} />

      {/* 12. BLOG / RESOURCES */}
      <BlogSection blogCards={blogCards} />

      {/* 13. FAQ */}
      <FAQSection faqItems={faqItems} />

      {/* 14. TESTIMONIALS */}
      <div className="bg-muted/20 border-y">
        <TestimonialsComponent testimonials={testimonials} />
      </div>

      {/* 15. CONTACT US */}
      <ContactSection contactCards={contactCards} />

      {/* 16. MEGA FOOTER */}
      {/* <MegaFooter /> */}
    </div>
  );
}
