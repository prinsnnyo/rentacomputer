import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
        Find answers to our most commonly asked questions about renting computers and technology equipment.
        If you can't find what you're looking for, please don't hesitate to contact us.
      </p>

      <div className="max-w-3xl mx-auto mb-12">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqCategories.map((category) => (
            <div key={category.id} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              {category.questions.map((faq) => (
                <AccordionItem key={faq.id} value={`faq-${faq.id}`} className="bg-background/50 backdrop-blur-sm border border-border/20 rounded-md mb-2">
                  <AccordionTrigger className="px-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="text-foreground/80 space-y-2">
                      {typeof faq.answer === 'string' ? (
                        <p>{faq.answer}</p>
                      ) : (
                        faq.answer.map((paragraph, i) => <p key={i}>{paragraph}</p>)
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          ))}
        </Accordion>
      </div>

      <div className="bg-primary/5 rounded-lg p-8 text-center max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="text-foreground/70 mb-6">
          Our team is ready to answer any additional questions you might have about our rental services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-background">
            <Link href="/request">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/products">Browse Rental Products</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const faqCategories = [
  {
    id: 1,
    title: "General Questions",
    questions: [
      {
        id: "general-1",
        question: "How does the rental process work?",
        answer: [
          "The rental process is simple. Start by browsing our available equipment or requesting a custom quote through our website.",
          "Once we understand your needs, we'll provide a detailed quote. After approval, we'll arrange delivery and setup at your location on your requested date.",
          "Our team will handle all aspects of installation and configuration. When your rental period ends, we'll schedule pickup of the equipment."
        ]
      },
      {
        id: "general-2",
        question: "What are your rental periods?",
        answer: "We offer flexible rental periods to suit your needs, from daily rentals (minimum 1 day) to weekly, monthly, or even longer-term agreements. Longer rental periods typically qualify for discounted rates."
      },
      {
        id: "general-3",
        question: "Do you offer delivery and setup services?",
        answer: "Yes, we provide delivery, setup, and installation services for all rental equipment. Our technicians will ensure everything is working properly before they leave. Delivery fees may apply depending on your location and the amount of equipment being rented."
      },
      {
        id: "general-4",
        question: "Can I extend my rental if needed?",
        answer: "Yes, rental extensions are possible subject to availability. We recommend notifying us at least 48 hours before your scheduled return date to ensure we can accommodate your request. Extended rental rates will apply."
      },
      {
        id: "general-5",
        question: "What if the equipment malfunctions during my rental?",
        answer: "We provide full technical support throughout your rental period. If any equipment malfunctions, contact our support team immediately, and we'll either troubleshoot remotely or send a replacement unit as quickly as possible at no additional cost."
      }
    ]
  },
  {
    id: 2,
    title: "Technical & Equipment",
    questions: [
      {
        id: "tech-1",
        question: "What types of computers do you offer for rent?",
        answer: "We offer a wide range of computers including high-performance laptops, desktop workstations, Apple Macs, tablets, and specialized systems configured for specific applications like CAD, video editing, or data analysis. Our selection includes the latest models from top brands like Dell, Apple, HP, Lenovo, and Microsoft."
      },
      {
        id: "tech-2",
        question: "Can you install specific software on rental equipment?",
        answer: "Yes, we can pre-install most standard software applications on your rental equipment. For specialized software, you may need to provide the licenses. Please let us know your software requirements when requesting a quote so we can prepare your systems accordingly."
      },
      {
        id: "tech-3",
        question: "Do you offer networking equipment and setup?",
        answer: "Yes, we provide complete networking solutions including routers, switches, wireless access points, and security equipment. Our technicians can set up temporary networks for events, training sessions, or office relocations, ensuring reliable connectivity throughout your rental period."
      },
      {
        id: "tech-4",
        question: "Can I rent large quantities of identical equipment?",
        answer: "Absolutely! We specialize in providing large quantities of identical equipment for corporate events, training sessions, and conferences. Our extensive inventory allows us to fulfill orders for dozens or even hundreds of identical laptops, tablets, or desktop systems."
      },
      {
        id: "tech-5",
        question: "What about data security on rental computers?",
        answer: "We take data security very seriously. All equipment is thoroughly wiped using industry-standard secure erasure protocols between rentals. For added security, you can request that we perform a certified data wipe in your presence when the rental period ends. We also offer encrypted storage options for sensitive data."
      }
    ]
  },
  {
    id: 3,
    title: "Pricing & Payment",
    questions: [
      {
        id: "payment-1",
        question: "How is pricing determined?",
        answer: "Rental pricing is based on several factors: the type and quantity of equipment, rental duration, any additional services requested (such as on-site support), and delivery location. Volume discounts are available for larger orders. Contact us for a detailed quote tailored to your specific needs."
      },
      {
        id: "payment-2",
        question: "Do you require a deposit?",
        answer: "For most standard rentals, we require a security deposit that varies based on the value of the equipment. This deposit is fully refundable upon return of all equipment in good condition. For some long-term or high-value rentals, we may also require a percentage of the rental fee as an initial payment."
      },
      {
        id: "payment-3",
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards, company checks, ACH transfers, and purchase orders from approved businesses. For long-term rentals, we can arrange monthly billing options to help manage your cash flow."
      },
      {
        id: "payment-4",
        question: "Is insurance required for rental equipment?",
        answer: "We recommend that all customers ensure the rented equipment is covered by insurance during the rental period. Many business insurance policies will cover rented equipment, but we suggest confirming this with your insurance provider. We also offer an optional damage waiver program for an additional fee."
      },
      {
        id: "payment-5",
        question: "Are there any additional fees I should know about?",
        answer: "Our quotes include transparent pricing for the equipment rental and any requested services. Additional fees that may apply include delivery and pickup charges, rush order fees for last-minute requests, extended hour support, and charges for equipment returned late or damaged. All potential fees will be disclosed before finalizing your rental agreement."
      }
    ]
  },
  {
    id: 4,
    title: "Special Events & Business Solutions",
    questions: [
      {
        id: "events-1",
        question: "Can you handle large events or conferences?",
        answer: "Yes, we specialize in supporting large-scale events and conferences. We can provide everything from registration kiosks and presentation systems to complete attendee laptop deployments. Our team has experience supporting events ranging from small meetings to conventions with thousands of attendees."
      },
      {
        id: "events-2",
        question: "Do you offer on-site technical support during events?",
        answer: "Yes, we provide on-site technical support for events of all sizes. Our technicians can remain on-site throughout your event to ensure all technology runs smoothly and to quickly resolve any issues that arise. On-site support services are quoted based on the number of technicians needed and the duration of the event."
      },
      {
        id: "events-3",
        question: "Can you help with temporary office setups?",
        answer: "Absolutely. We offer complete temporary office technology solutions for situations like disaster recovery, office relocations, or temporary workspaces. This includes computers, networks, phones, printers, and all necessary peripherals—everything you need to maintain business operations."
      },
      {
        id: "events-4",
        question: "Do you offer educational or training lab rentals?",
        answer: "Yes, we specialize in setting up temporary computer labs for training sessions, software rollouts, or educational events. We can configure all systems with identical software and settings, and provide technical support to ensure your training proceeds without technical interruptions."
      },
      {
        id: "events-5",
        question: "Can you accommodate international events?",
        answer: "Yes, we can support international events in many locations. We have partnerships with technology providers worldwide and can arrange equipment rental and support in major international cities. International rentals require additional lead time, so please contact us at least 30 days in advance for international events."
      }
    ]
  }
];