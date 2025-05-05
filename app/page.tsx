import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-background to-background/80 border-b border-border/10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              COMPLETE IT PROFESSIONALS FOR <span className="text-primary">TEMPORARY NEEDS</span>
            </h1>
            <p className="text-foreground/80 mb-8 max-w-2xl">
              Rentacomputer.com provides businesses with temporary technology solutions including computer rentals,
              audio visual equipment, and professional IT services for events, projects, and emergencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-background">
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
                <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Image
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={category.title}
                    width={40}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{category.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{category.description}</p>
                <Button variant="link" asChild className="text-primary mt-auto">
                  <Link href={category.link}>View Options</Link>
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
          {[1, 2, 3, 4, 5].map((i) => (
            <Image
              key={i}
              src={`/placeholder.svg?height=60&width=120`}
              alt={`Client logo ${i}`}
              width={120}
              height={60}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </section>
    </div>
  )
}

const categories = [
  {
    title: "LAPTOPS",
    description: "Business laptops, gaming laptops, and MacBooks for any temporary need.",
    link: "/products/laptops",
  },
  {
    title: "DESKTOPS",
    description: "High-performance workstations, gaming PCs, and Mac desktops.",
    link: "/products/desktops",
  },
  {
    title: "TABLETS",
    description: "iPads, Android tablets, and Windows tablets for mobile computing.",
    link: "/products/tablets",
  },
  {
    title: "SERVERS",
    description: "Rack servers, tower servers, and blade servers for temporary infrastructure.",
    link: "/products/servers",
  },
  {
    title: "AUDIO VISUAL",
    description: "Projectors, displays, sound systems, and video conferencing equipment.",
    link: "/products/av",
  },
  {
    title: "NETWORKING",
    description: "Routers, switches, access points, and network security devices.",
    link: "/products/networking",
  },
  {
    title: "PRINTERS",
    description: "Laser printers, inkjet printers, and multifunction devices.",
    link: "/products/printers",
  },
  {
    title: "ACCESSORIES",
    description: "Monitors, keyboards, mice, cables, and other peripherals.",
    link: "/products/accessories",
  },
]

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
]
