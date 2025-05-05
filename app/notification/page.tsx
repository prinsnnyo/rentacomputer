import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BellIcon, BellOffIcon, CheckIcon, ClockIcon, InfoIcon } from "lucide-react"

export default function NotificationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Notifications</h1>
            <p className="text-foreground/70">Stay updated on your rental equipment and services</p>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <BellIcon className="h-4 w-4" />
            Mark all as read
          </Button>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all" className="flex items-center gap-2">
              All
              <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary">
                {mockNotifications.filter(n => !n.archived).length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="unread" className="flex items-center gap-2">
              Unread
              <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary">
                {mockNotifications.filter(n => !n.read && !n.archived).length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="important">Important</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 space-y-4">
            {mockNotifications.filter(n => !n.archived).map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </TabsContent>

          <TabsContent value="unread" className="mt-6 space-y-4">
            {mockNotifications.filter(n => !n.read && !n.archived).map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </TabsContent>

          <TabsContent value="important" className="mt-6 space-y-4">
            {mockNotifications.filter(n => n.important && !n.archived).map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </TabsContent>
          
          <TabsContent value="archived" className="mt-6 space-y-4">
            {mockNotifications.filter(n => n.archived).map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </TabsContent>
        </Tabs>

        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Email Notifications</CardTitle>
            <CardDescription>Configure how and when you receive email notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {emailPreferences.map((pref) => (
              <div key={pref.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{pref.title}</p>
                  <p className="text-sm text-foreground/70">{pref.description}</p>
                </div>
                <Switch defaultChecked={pref.enabled} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Push Notifications</CardTitle>
            <CardDescription>Manage alerts on your browser or mobile device</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pushPreferences.map((pref) => (
              <div key={pref.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{pref.title}</p>
                  <p className="text-sm text-foreground/70">{pref.description}</p>
                </div>
                <Switch defaultChecked={pref.enabled} />
              </div>
            ))}
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Browser permissions</AlertTitle>
              <AlertDescription>
                You'll need to allow browser notifications to receive alerts when you're not on our site.
                <Button variant="link" className="h-auto p-0 ml-1">
                  Enable notifications
                </Button>
              </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function NotificationCard({ notification }: { notification: NotificationType }) {
  const getIcon = () => {
    if (notification.type === "info") return <InfoIcon className="h-5 w-5" />;
    if (notification.type === "success") return <CheckIcon className="h-5 w-5" />;
    if (notification.type === "reminder") return <ClockIcon className="h-5 w-5" />;
    return <BellIcon className="h-5 w-5" />;
  };

  const getBgColor = () => {
    if (notification.type === "info") return "bg-blue-500/10 text-blue-500";
    if (notification.type === "success") return "bg-green-500/10 text-green-500";
    if (notification.type === "reminder") return "bg-amber-500/10 text-amber-500";
    return "bg-primary/10 text-primary";
  };

  return (
    <Card className={`transition-colors ${notification.read ? "bg-background" : "bg-primary/5"}`}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex gap-4">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${getBgColor()}`}>
            {getIcon()}
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className={`font-medium ${notification.read ? "" : "text-primary"}`}>{notification.title}</p>
              <div className="flex items-center gap-2">
                {notification.important && (
                  <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                    Important
                  </Badge>
                )}
                <Badge variant="outline" className="text-xs">
                  {notification.time}
                </Badge>
              </div>
            </div>
            <p className="text-sm text-foreground/70">{notification.message}</p>
            {notification.actionLabel && (
              <div className="pt-2">
                <Button size="sm" variant="outline" className="h-8">
                  {notification.actionLabel}
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Mock data types
interface NotificationType {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  important: boolean;
  archived: boolean;
  type: "info" | "success" | "reminder" | "alert";
  actionLabel?: string;
}

interface PreferenceType {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

// Sample notification data
const mockNotifications: NotificationType[] = [
  {
    id: "1",
    title: "Your rental is confirmed",
    message: "Your rental request for 5 Dell XPS laptops has been confirmed for May 10, 2025.",
    time: "Just now",
    read: false,
    important: true,
    archived: false,
    type: "success",
    actionLabel: "View rental details"
  },
  {
    id: "2",
    title: "Upcoming return reminder",
    message: "Your rental of 2 conference projectors is due for return on May 8, 2025.",
    time: "2 hours ago",
    read: false,
    important: false,
    archived: false,
    type: "reminder",
    actionLabel: "Extend rental"
  },
  {
    id: "3",
    title: "Payment successful",
    message: "Your payment of ₱70,000.00 for rental order #RT67829 was successfully processed.",
    time: "Yesterday",
    read: true,
    important: false,
    archived: false,
    type: "success"
  },
  {
    id: "4",
    title: "New rental options available",
    message: "We've added new Microsoft Surface laptops to our rental inventory.",
    time: "2 days ago",
    read: true,
    important: false,
    archived: false,
    type: "info",
    actionLabel: "View new products"
  },
  {
    id: "5",
    title: "Special offer: 15% off",
    message: "Get 15% off your next rental order when you book for a week or more.",
    time: "1 week ago",
    read: true,
    important: true,
    archived: false,
    type: "alert"
  },
  {
    id: "6",
    title: "Feedback requested",
    message: "How was your recent equipment rental experience? We'd love your feedback.",
    time: "2 weeks ago",
    read: true,
    important: false,
    archived: true,
    type: "info",
    actionLabel: "Give feedback"
  }
];

// Email notification preferences
const emailPreferences: PreferenceType[] = [
  {
    id: "email-1",
    title: "Rental confirmations",
    description: "Receive emails when your rental is confirmed",
    enabled: true
  },
  {
    id: "email-2",
    title: "Rental reminders",
    description: "Get reminded about upcoming rental returns",
    enabled: true
  },
  {
    id: "email-3",
    title: "Payment receipts",
    description: "Receive payment confirmation emails",
    enabled: true
  },
  {
    id: "email-4",
    title: "Special offers",
    description: "Get emails about promotions and discounts",
    enabled: false
  },
  {
    id: "email-5",
    title: "Product updates",
    description: "Learn when new rental equipment becomes available",
    enabled: false
  }
];

// Push notification preferences
const pushPreferences: PreferenceType[] = [
  {
    id: "push-1",
    title: "Rental status updates",
    description: "Get notified when your rental status changes",
    enabled: true
  },
  {
    id: "push-2",
    title: "Delivery alerts",
    description: "Receive notifications about equipment delivery",
    enabled: true
  },
  {
    id: "push-3",
    title: "Return reminders",
    description: "Be reminded when your rental period is ending",
    enabled: true
  },
  {
    id: "push-4",
    title: "Special offers",
    description: "Get alerts about limited-time deals",
    enabled: false
  }
];