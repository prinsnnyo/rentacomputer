import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, AlertCircle, Info } from "lucide-react"

export default function ActiveRequests() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">ACTIVE REQUESTS</h1>

        <div className="space-y-6">
          {requests.map((request) => (
            <Card key={request.id} className="bg-background/50 backdrop-blur-sm border-border/20">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold">{request.title}</CardTitle>
                  <Badge
                    variant={
                      request.status === "Pending"
                        ? "outline"
                        : request.status === "Approved"
                          ? "default"
                          : request.status === "Completed"
                            ? "secondary"
                            : "destructive"
                    }
                    className={
                      request.status === "Pending"
                        ? "border-yellow-500 text-yellow-500"
                        : request.status === "Approved"
                          ? "bg-primary text-background"
                          : request.status === "Completed"
                            ? "bg-green-500 text-background"
                            : ""
                    }
                  >
                    {request.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70">Request Date:</span>
                        <span>{request.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Info className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70">Equipment:</span>
                        <span>{request.equipment}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70">Rental Period:</span>
                        <span>{request.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-foreground/70">Quote Amount:</span>
                        <span>${request.amount}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-foreground/70">
                    <p>{request.description}</p>
                  </div>

                  <div className="flex justify-end gap-3 mt-2">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                      View Details
                    </Button>
                    {request.status === "Pending" && (
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-background">
                        Approve Quote
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const requests = [
  {
    id: 1,
    title: "LAPTOP RENTAL",
    status: "Pending",
    date: "05/01/2023",
    equipment: "15 Dell XPS 15 Laptops",
    period: "June 10-15, 2023",
    amount: "4,500.00",
    description:
      "Rental request for a corporate training event. Includes setup and technical support for the duration of the event.",
  },
  {
    id: 2,
    title: "CONFERENCE AV EQUIPMENT",
    status: "Approved",
    date: "04/28/2023",
    equipment: "Projectors, Screens, Sound System",
    period: "May 20-22, 2023",
    amount: "3,200.00",
    description: "Complete audio-visual setup for annual conference. Includes on-site technician support.",
  },
  {
    id: 3,
    title: "IPAD RENTAL",
    status: "Completed",
    date: "04/15/2023",
    equipment: '25 iPad Pro 12.9"',
    period: "April 25-27, 2023",
    amount: "2,750.00",
    description:
      "Rental for trade show booth. All iPads were pre-loaded with company presentation and returned on time.",
  },
]
