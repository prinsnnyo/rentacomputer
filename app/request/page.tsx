"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCardIcon, WalletIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

export default function RequestQuote() {
   const [deliveryDate, setDeliveryDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [showSummary, setShowSummary] = useState(false)


  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    deliveryDate: "",
    returnDate: "",
    equipment: "",
    quantity: "",
    location: "",
    payment: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSummary(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">REQUEST QUOTE NOW</h1>

        <div className="bg-background/50 backdrop-blur-sm border border-border/20 rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  className="bg-background/50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  className="bg-background/50"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-background/50"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  className="bg-background/50"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <Label>Delivery Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-background/50",
                        !deliveryDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {deliveryDate ? format(deliveryDate, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={deliveryDate}
                      onSelect={(selectedDate) => {
                        setDeliveryDate(selectedDate)
                        setFormData({ ...formData, deliveryDate: selectedDate ? format(selectedDate, "PPP") : "" })
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label>Return Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-background/50",
                        !returnDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={(selectedDate) => {
                        setReturnDate(selectedDate)
                        setFormData({ ...formData, returnDate: selectedDate ? format(selectedDate, "PPP") : "" })
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="equipment">Equipment Needed</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, equipment: value })}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select equipment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="laptops">Laptops</SelectItem>
                    <SelectItem value="desktops">Desktop Computers</SelectItem>
                    <SelectItem value="tablets">Tablets</SelectItem>
                    <SelectItem value="servers">Servers</SelectItem>
                    <SelectItem value="av">Audio Visual Equipment</SelectItem>
                    <SelectItem value="networking">Networking Equipment</SelectItem>
                    <SelectItem value="printers">Printers</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="Enter quantity needed"
                  className="bg-background/50"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="location">Delivery Location</Label>
                <Input
                  id="location"
                  placeholder="Enter delivery address"
                  className="bg-background/50"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="payment">Payment Method</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, payment: value })}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Credit / Debit Card">
                      <CreditCardIcon className="inline-block w-5 h-5 mr-2" />
                      Credit / Debit Card
                    </SelectItem>
                    <SelectItem value="Cash On Delivery">
                      <CurrencyDollarIcon className="inline-block w-5 h-5 mr-2" />
                      Cash On Delivery
                    </SelectItem>
                    <SelectItem value="Payment Center / E-Wallet">
                      <WalletIcon className="inline-block w-5 h-5 mr-2" />
                      Payment Center / E-Wallet
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:row-span-2">
                <Label htmlFor="message">Additional Requirements</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide any specific requirements or questions"
                  className="h-32 bg-background/50"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-background px-8">
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Summary Dialog */}
    <Dialog
  open={showSummary}
  onOpenChange={(isOpen) => {
    setShowSummary(isOpen)
    if (!isOpen) {
      // Clear form when dialog is closed
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        deliveryDate: "",
        returnDate: "",
        equipment: "",
        quantity: "",
        location: "",
        payment: "",
        message: "",
      })
     setDeliveryDate(undefined)
    setReturnDate(undefined)

    }
  }}
>
  <DialogContent>
  <DialogHeader className="text-center">
    <DialogTitle className="text-center">Request Summary</DialogTitle>
    <DialogDescription>
      <div className="text-center">
        <p className="mt-2 text-sm text-primary font-medium">
          ✅ Thank you for submitting a quote request! Please check your notifications to monitor the status.
        </p>
      </div>
      <ul className="space-y-2 mt-4 text-sm text-left">
        <li><strong>Full Name:</strong> {formData.name}</li>
        <li><strong>Company:</strong> {formData.company}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Phone:</strong> {formData.phone}</li>
        <li><strong>Delivery Date:</strong> {formData.deliveryDate}</li>
        <li><strong>Return Date:</strong> {formData.returnDate}</li>
        <li><strong>Equipment:</strong> {formData.equipment}</li>
        <li><strong>Quantity:</strong> {formData.quantity}</li>
        <li><strong>Location:</strong> {formData.location}</li>
        <li><strong>Payment Method:</strong> {formData.payment}</li>
        <li><strong>Message:</strong> {formData.message}</li>
      </ul>
    </DialogDescription>
  </DialogHeader>
</DialogContent>


</Dialog>

    </div>
  )
}
