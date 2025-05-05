import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ThankYou() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">THANK YOU FOR SUBMITTING A QUOTE REQUEST</h1>

        <p className="text-foreground/70 mb-8">
          Your request has been received and is being processed. A member of our team will contact you shortly with a
          detailed quote and additional information.
        </p>

        <div className="bg-background/50 backdrop-blur-sm border border-border/20 rounded-lg p-6 mb-8">
          <h2 className="font-semibold mb-4">Request Details</h2>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-left text-foreground/70">Request ID:</div>
            <div className="text-right font-medium">RQ-2023-0568</div>

            <div className="text-left text-foreground/70">Submitted Date:</div>
            <div className="text-right font-medium">May 5, 2023</div>

            <div className="text-left text-foreground/70">Contact Email:</div>
            <div className="text-right font-medium">your.email@example.com</div>

            <div className="text-left text-foreground/70">Contact Phone:</div>
            <div className="text-right font-medium">(555) 123-4567</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/active-requests">View My Requests</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-background">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
