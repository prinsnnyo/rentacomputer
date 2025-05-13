import Link from "next/link"
import { Phone, Mail, ArrowRight, FolderOpen, Wrench } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground/70 border-t border-border/20 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xs font-semibold mb-3">CONTACT US</h3>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+18005741166" className="text-xs hover:text-primary">
               +63 981 655 0765
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:sales@rentacomputer.com" className="text-xs hover:text-primary">
                princeninoantigo@gmail.com
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold mb-3">QUICK LINKS</h3>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-3 w-3 text-primary" />
                <Link href="/request" className="text-xs hover:text-primary">
                  Request a Quote
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FolderOpen className="h-3 w-3 text-primary" />
                <Link href="/products" className="text-xs hover:text-primary">
                  Browse Products
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="h-3 w-3 text-primary" />
                <Link href="/services" className="text-xs hover:text-primary">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <h3 className="text-xs font-semibold mb-3">ABOUT US</h3>
          <p className="text-xs mb-2">Credits to Prince Niño Antigo for making this prototype</p>
          <div className="flex space-x-2 mt-3">
            {["facebook", "x", "linkedin", "youtube", "instagram"].map((social) => (
              <Link
                key={social}
                href={`#${social}`}
                className="w-7 h-7 rounded-full bg-foreground/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <img
                  src={
                    social === "facebook"
                      ? "/fb.png"
                      : social === "x"
                      ? "/X_logo.jpg" 
                      : social === "linkedin"
                      ? "/LinkedIn_logo_initials.png"
                      : social === "youtube"
                      ? "/yt.png"
                      : "/ig.png"
                  }
                  alt={social}
                  className="w-7 h-7" 
                />
                <span className="sr-only">{social}</span>
              </Link>
            ))}
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
