import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">OUR SERVICES</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          We provide comprehensive rental services to meet all your technology needs, 
          from short-term events to long-term projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <Card key={service.id} className="bg-background/50 backdrop-blur-sm border-border/20 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-primary/5 rounded-lg p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose Our Services?</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 mt-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-background text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-foreground/70">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
            <Image
              src="https://www.rentacomputer.com/pic/computer-user.webp?height=400&width=600"
              alt="Our services"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Service Process</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
          We make renting technology simple with our streamlined process designed for your convenience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary text-background flex items-center justify-center mb-4">
                {index + 1}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-center text-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary text-background rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 max-w-lg mx-auto">
          Contact us today to discuss your technology rental needs and receive a customized quote.
        </p>
        <Button asChild variant="outline" className="bg-background text-primary hover:bg-background/90">
          <Link href="/request">Request a Quote</Link>
        </Button>
      </div>
    </div>
  )
}

// Mock data for services
const services = [
  {
    id: 1,
    title: "Short-Term Rentals",
    subtitle: "Perfect for events, conferences, and temporary needs",
    icon: ({className}: {className?: string}) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    features: [
      "Flexible rental periods from 1-30 days",
      "Quick delivery and setup",
      "On-site technical support available",
      "Wide range of equipment available",
      "Last-minute requests accommodated"
    ]
  },
  {
    id: 2,
    title: "Long-Term Rentals",
    subtitle: "Ideal for projects, office setups, and ongoing needs",
    icon: ({className}: {className?: string}) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
      </svg>
    ),
    features: [
      "Competitive monthly rates",
      "Equipment maintenance included",
      "Upgrade options available",
      "Flexible contract terms",
      "Volume discounts available"
    ]
  },
  {
    id: 3,
    title: "Event Technology",
    subtitle: "Complete solutions for conferences, trade shows, and meetings",
    icon: ({className}: {className?: string}) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
      </svg>
    ),
    features: [
      "Registration systems and kiosks",
      "Presentation equipment",
      "Wi-Fi solutions for venues",
      "Digital signage and displays",
      "On-site technicians"
    ]
  },
  {
    id: 4,
    title: "Custom Solutions",
    subtitle: "Tailored technology packages for your specific needs",
    icon: ({className}: {className?: string}) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4" />
      </svg>
    ),
    features: [
      "Consultation services available",
      "Custom configuration and setup",
      "Integration with existing systems",
      "Scalable solutions",
      "Project management support"
    ]
  },
  {
    id: 5,
    title: "Technical Support",
    subtitle: "Expert assistance when you need it most",
    icon: ({className}: {className?: string}) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6.75 9.75a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    ),
    features: [
      "24/7 helpdesk support",
      "Remote troubleshooting",
      "On-site technical assistance",
      "Equipment replacement service",
      "User training available"
    ]
  },
  {
    id: 6,
    title: "Delivery & Setup",
    subtitle: "Hassle-free logistics and installation",
    icon: ({className}: {className?: string}) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 16V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1m8-1a1 1 0 0 1-1 1H9m4-1V8a1 1 0 0 1 1-1h2.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V16a1 1 0 0 1-1 1h-1m-6-1a1 1 0 0 0 1 1h1M5 17a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m6 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0" />
      </svg>
    ),
    features: [
      "Nationwide delivery available",
      "Professional installation",
      "Network configuration",
      "Equipment testing and verification",
      "Pickup services when rental concludes"
    ]
  }
];

const benefits = [
  {
    title: "Cost-Effective Solutions",
    description: "Avoid the high costs of purchasing equipment with flexible rental options that fit your budget."
  },
  {
    title: "Latest Technology",
    description: "Access to the most recent technology without worrying about depreciation or obsolescence."
  },
  {
    title: "Technical Expertise",
    description: "Our team of experts will help you select the right equipment and provide ongoing support."
  },
  {
    title: "Scalable Options",
    description: "Easily scale up or down based on your project needs without long-term commitments."
  }
];

const process = [
  {
    title: "Request a Quote",
    description: "Fill out our simple form with your requirements and timeline."
  },
  {
    title: "Consultation",
    description: "Our experts will discuss your needs and recommend the best solutions."
  },
  {
    title: "Delivery & Setup",
    description: "We deliver and set up all equipment at your location on schedule."
  },
  {
    title: "Enjoy & Return",
    description: "Use your equipment with our support, then we'll handle pickup when done."
  }
];