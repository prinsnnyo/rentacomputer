import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function YourDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <CheckCircle className="h-6 w-6 text-primary mr-2" />
          <h1 className="text-2xl font-bold text-center">YOUR DETAILS</h1>
        </div>

        <Card className="bg-background/50 backdrop-blur-sm border-border/20 mb-8">
          <CardHeader>
            <CardTitle className="text-lg">CURRENT CONTRACTS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contracts.map((contract) => (
                <div key={contract.id} className="flex items-center justify-between border-b border-border/10 pb-3">
                  <div>
                    <div className="font-medium">{contract.title}</div>
                    <div className="text-sm text-foreground/70">{contract.dates}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${contract.amount}</div>
                    <Badge
                      variant={contract.status === "Active" ? "default" : "outline"}
                      className={contract.status === "Active" ? "bg-primary text-background" : ""}
                    >
                      {contract.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-background/50 backdrop-blur-sm border-border/20 mb-8">
          <CardHeader>
            <CardTitle className="text-lg">ORDER HISTORY</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex items-center justify-between border-b border-border/10 pb-3">
                  <div>
                    <div className="font-medium">{order.title}</div>
                    <div className="text-sm text-foreground/70">{order.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${order.amount}</div>
                    <div className="text-xs text-foreground/70">Order #{order.orderNumber}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Download Invoices
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-background">Request New Quote</Button>
        </div>
      </div>
    </div>
  )
}

const contracts = [
  {
    id: 1,
    title: "LAPTOP RENTAL PACKAGE",
    dates: "May 15 - June 15, 2023",
    amount: "4,500.00",
    status: "Active",
  },
  {
    id: 2,
    title: "CONFERENCE AV EQUIPMENT",
    dates: "June 20 - June 22, 2023",
    amount: "2,800.00",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "IPAD RENTAL FOR TRADE SHOW",
    dates: "July 10 - July 12, 2023",
    amount: "1,200.00",
    status: "Upcoming",
  },
]

const orders = [
  {
    id: 1,
    title: "DESKTOP WORKSTATIONS (5)",
    date: "April 10, 2023",
    amount: "3,250.00",
    orderNumber: "RC-2023-0412",
  },
  {
    id: 2,
    title: "PROJECTOR AND SCREEN",
    date: "March 22, 2023",
    amount: "850.00",
    orderNumber: "RC-2023-0389",
  },
  {
    id: 3,
    title: "NETWORKING EQUIPMENT",
    date: "February 15, 2023",
    amount: "1,200.00",
    orderNumber: "RC-2023-0356",
  },
]
