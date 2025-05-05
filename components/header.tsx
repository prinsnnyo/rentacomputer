import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-background border-b border-border/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=180"
            alt="Rentacomputer Logo"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            HOME
          </Link>
          <Link href="/products" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            RENTAL PRODUCTS
          </Link>
          <Link href="/services" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            SERVICES
          </Link>
          <Link href="/faq" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="/notification" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            NOTIFICATION
          </Link>
        </nav>
      </div>
    </header>
  )
}
