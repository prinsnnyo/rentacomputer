import Link from "next/link";
import Image from "next/image";
import { Home, Box, Settings, HelpCircle, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-cyan-700 to-cyan-600 border-b border-border/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png?height=40&width=180"
            alt="Rentacomputer Logo"
            width={180}
            height={40}
            className="h-14 w-auto"
          />
        </Link>   
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center space-x-2">
            <Home className="text-lg" />
            <span>HOME</span>
          </Link>
          <Link href="/products" className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center space-x-2">
            <Box className="text-lg" />
            <span>RENTAL PRODUCTS</span>
          </Link>
          <Link href="/services" className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center space-x-2">
            <Settings className="text-lg" />
            <span>SERVICES</span>
          </Link>
          <Link href="/faq" className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center space-x-2">
            <HelpCircle className="text-lg" />
            <span>FAQ</span>
          </Link>
          <Link href="/notification" className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center space-x-2">
            <Bell className="text-lg" />
            <span>NOTIFICATION</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
