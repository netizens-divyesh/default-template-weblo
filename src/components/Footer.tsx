import { Link } from 'react-router-dom'

const footerLinks = [
  { title: 'Product', items: ['Features', 'Integrations', 'Pricing'] },
  { title: 'Resources', items: ['Docs', 'Blog', 'Guides'] },
  { title: 'Company', items: ['About', 'Careers', 'Contact'] }
]

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">Weblo Studio</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            A polished starter theme with reusable sections and production-ready UI patterns.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-medium">{group.title}</h4>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Weblo Studio. All rights reserved.</p>
          <p>Made with React + Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
