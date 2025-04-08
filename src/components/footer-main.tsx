import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Materials Pricing", href: "/materials-pricing" },
  { name: "Roll Off Containers", href: "/roll-off-containers" },
  { name: "Resources", href: "/resources" },
  { name: "News", href: "/news" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
]

const serviceLinks = [
  { name: "Asphalt Manufacturing", href: "/services/manufacturing" },
  { name: "Asphalt Paving", href: "/services/paving" },
  { name: "Asphalt Sealcoat & Repair", href: "/services/sealcoat-repair" },
  { name: "Asphalt Regeneration", href: "/services/regeneration" },
  { name: "EZ STREET Cold Mix Asphalt", href: "/services/ez-street" },
  { name: "Decorative Asphalt", href: "/services/decorative" },
  { name: "Grading Services", href: "/services/grading" },
  { name: "Roll Off Containers", href: "/roll-off-containers" },
]

export function FooterMain() {
  return (
    <footer className="bg-black pt-16 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <Image
                src="/images/duval-asphalt-logo.png"
                alt="Duval Asphalt Logo"
                width={200}
                height={70}
                className="object-contain"
              />
            </div>
            <p className="text-muted-foreground mb-6">
              For over 50 years, Duval Asphalt has been Northeast Florida's leader in asphalt manufacturing and
              contracting with a commitment to quality and customer service.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://youtube.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  7544 Philips Highway
                  <br />
                  Jacksonville, FL 32256
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <Link href="tel:904.296.2020" className="text-muted-foreground hover:text-primary transition-colors">
                  904.296.2020
                </Link>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <Link
                  href="mailto:info@duvalasphalt.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@duvalasphalt.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 pb-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Duval Asphalt. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

