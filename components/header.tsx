'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Box, Settings, HelpCircle, Bell, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button"; // Make sure this is the correct import


export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="bg-primary">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Rentacomputer Logo"
            width={180}
            height={40}
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLinks onClickLink={closeSidebar} />
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={toggleSidebar} className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeSidebar}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-b from-cyan-700 to-cyan-500 text-white shadow-2xl z-50 transform transition-transform duration-300 rounded-l-2xl ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={closeSidebar}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <NavLinks mobile onClickLink={closeSidebar} />
        </nav>
      </div>
    </header>
  );
}

// Reusable NavLinks component
function NavLinks({ mobile = false, onClickLink = () => {} }) {
 const baseStyles = mobile
  ? 'flex items-center space-x-3 text-white hover:bg-cyan-800 rounded-lg px-3 py-2 transition-colors'
  : 'text-sm text-white/90 md:hover:text-background/80 transition-colors flex items-center space-x-2';

  return (
    <>
      <Link href="/" className={baseStyles} onClick={onClickLink}>
        <Home />
        <span>HOME</span>
      </Link>
      <Link href="/products" className={baseStyles} onClick={onClickLink}>
        <Box />
        <span>RENTAL PRODUCTS</span>
      </Link>
      <Link href="/services" className={baseStyles} onClick={onClickLink}>
        <Settings />
        <span>SERVICES</span>
      </Link>
      <Link href="/faq" className={baseStyles} onClick={onClickLink}>
        <HelpCircle />
        <span>FAQ</span>
      </Link>
      <Link href="/notification" className={baseStyles} onClick={onClickLink}>
        <Bell />
        <span>NOTIFICATION</span>
      </Link>
           <Button
        asChild
        variant="outline"
        className={` ${
          mobile ? 'text-white border-white hover:bg-white/10' : 'bg-background text-primary hover:bg-background/90 hover:text-white'
        }`}
      >
        <Link href="/request" onClick={onClickLink}>
          REQUEST A QUOTE
        </Link>
      </Button>
    </>
  );
}
