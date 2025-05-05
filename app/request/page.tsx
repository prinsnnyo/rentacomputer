"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RequestQuote() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">REQUEST QUOTE NOW</h1>

        <div className="bg-background/50 backdrop-blur-sm border border-border/20 rounded-lg p-6 md:p-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" className="bg-background/50" />
              </div>

              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Enter your company name" className="bg-background/50" />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email address" className="bg-background/50" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" className="bg-background/50" />
              </div>

              <div>
                <Label>Rental Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-background/50",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="duration">Rental Duration</Label>
                <Select>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-day">1 Day</SelectItem>
                    <SelectItem value="2-3-days">2-3 Days</SelectItem>
                    <SelectItem value="1-week">1 Week</SelectItem>
                    <SelectItem value="2-weeks">2 Weeks</SelectItem>
                    <SelectItem value="1-month">1 Month</SelectItem>
                    <SelectItem value="custom">Custom Duration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="equipment">Equipment Needed</Label>
                <Select>
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
                <Input id="quantity" type="number" placeholder="Enter quantity needed" className="bg-background/50" />
              </div>

              <div>
                <Label htmlFor="location">Delivery Location</Label>
                <Input id="location" placeholder="Enter delivery address" className="bg-background/50" />
              </div>

              <div>
                <Label htmlFor="event">Event Type</Label>
                <Input id="event" placeholder="Conference, training, etc." className="bg-background/50" />
              </div>

              <div className="md:row-span-2">
                <Label htmlFor="message">Additional Requirements</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide any specific requirements or questions"
                  className="h-32 bg-background/50"
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
    </div>
  )
}
