'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen mt-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-background to-background/80 border-b border-border/10">
        <div className="absolute inset-0 bg-[url('https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-14-2022/img/additions/huawei-matebook-14-2022-kv.png')] bg-cover bg-center opacity-40"></div>
        <div className="container mx-auto px-4 py-16 relative z-10 flex items-center justify-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
              Discover the Trusted Choice for Computer Rentals:
                  A Partner with Reliable People and Comprehensive Inventory. 
            </h1>
            <p className="text-foreground/80 mb-8 max-w-2xl text-center">
             At Rentacomputer.com, we know reliable technology solutions start with dependable people. Our team is dedicated to providing top-notch service and equipment, from computers to tablets, so you can trust us to meet your needs. Choose confidence, choose us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/70 text-background">
                <Link href="/request">REQUEST A QUOTE</Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/products">BROWSE PRODUCTS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">RENTAL EQUIPMENT CATEGORIES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="bg-background/50 backdrop-blur-sm border-border/20 hover:border-primary/50 transition-colors group"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={160}
                  height={160}
                  className="h-20 w-20 object-contain rounded-md mb-4"
                />
                <h3 className="font-semibold mb-2 text-foreground">{category.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{category.description}</p>
                <Button variant="link" asChild className="text-primary mt-auto flex items-center space-x-2">
                  <Link href={`/products?tab=${category.tab}`}>
                    <span>View Options</span>
                    <ArrowRight className="text-sm" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">WHY CHOOSE RENTACOMPUTER.COM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background/30 p-6 rounded-lg border border-border/20">
                <h3 className="font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">OUR TRUSTED CLIENTS</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          {[
            {
              name: "Procter & Gamble",
              logo: "https://www.rentacomputer.com/pic/companypg.webp",
            },
            {
              name: "Ford",
              logo: "https://www.rentacomputer.com/pic/companyford.webp",
            },
            {
              name: "Microsoft",
              logo: "https://www.rentacomputer.com/pic/companymicrosoft.webp",
            },
            {
              name: "General Electric",
              logo: "https://www.rentacomputer.com/pic/companygeneralelectric.webp",
            },
          ].map((client, i) => (
            <Image
              key={i}
              src={client.logo}
              alt={client.name}
              width={160}
              height={120}
              className="h-16 w-auto"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

const categories = [
  {
    title: "LAPTOPS",
    description: "Business laptops, gaming laptops, and MacBooks for any temporary need.",
    tab: "laptops",
    image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-x-pro-2022/specs/gray.png",
  },
  {
    title: "DESKTOPS",
    description: "High-performance workstations, gaming PCs, and Mac desktops.",
    tab: "desktops",
    image: "https://pngimg.com/d/computer_pc_PNG17489.png",
  },
  {
    title: "TABLETS",
    description: "iPads, Android tablets, and Windows tablets for mobile computing.",
    tab: "tablets",
    image: "https://pngimg.com/d/tablet_PNG8567.png",
  },
  {
    title: "SERVERS",
    description: "Rack servers, tower servers, and blade servers for temporary infrastructure.",
    tab: "servers",
    image: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-server-3d-illustration-png-image_9231819.png",
  },
  {
    title: "AUDIO VISUAL",
    description: "Projectors, displays, sound systems, and video conferencing equipment.",
    tab: "av",
    image: "https://pngimg.com/d/audio_speakers_PNG11113.png",
  },
  {
    title: "NETWORKING",
    description: "Routers, switches, access points, and network security devices.",
    tab: "networking",
    image: "https://purepng.com/public/uploads/large/purepng.com-routerelectronicsroutermodem-941524672790kvn3d.png",
  },
  {
    title: "PRINTERS",
    description: "Laser printers, inkjet printers, and multifunction devices.",
    tab: "printers",
    image: "https://pngimg.com/d/printer_PNG101579.png",
  },
  {
    title: "ACCESSORIES",
    description: "Monitors, keyboards, mice, cables, and other peripherals.",
    tab: "accessories",
    image: "https://pngimg.com/d/keyboard_PNG101839.png",
  },
];

const features = [
  {
    title: "NATIONWIDE DELIVERY",
    description: "We deliver, set up, and provide technical support for our equipment anywhere in the United States.",
  },
  {
    title: "TECHNICAL SUPPORT",
    description: "Our team of IT professionals is available 24/7 to assist with any technical issues.",
  },
  {
    title: "FLEXIBLE RENTAL TERMS",
    description: "Rent for as little as one day or as long as you need with our flexible rental options.",
  },
];
