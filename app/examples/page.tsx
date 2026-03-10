"use client"

import Link from "next/link"

import { Avatar, AvatarFallback } from "@/registry/new-york/ui/avatar"
import { Badge } from "@/registry/new-york/ui/badge"
import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { Checkbox } from "@/registry/new-york/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Separator } from "@/registry/new-york/ui/separator"
import { Switch } from "@/registry/new-york/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/new-york/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york/ui/tabs"
import { Textarea } from "@/registry/new-york/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"

const stats = [
  { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", desc: "from last month" },
  { title: "Subscriptions", value: "+2,350", change: "+180.1%", desc: "from last month" },
  { title: "Sales", value: "+12,234", change: "+19%", desc: "from last month" },
  { title: "Active Now", value: "+573", change: "+201", desc: "since last hour" },
]

const recentSales = [
  { name: "Olivia Martin", email: "olivia@email.com", amount: "+$1,999.00", initials: "OM" },
  { name: "Jackson Lee", email: "jackson@email.com", amount: "+$39.00", initials: "JL" },
  { name: "Isabella Nguyen", email: "isabella@email.com", amount: "+$299.00", initials: "IN" },
  { name: "William Kim", email: "will@email.com", amount: "+$99.00", initials: "WK" },
  { name: "Sofia Davis", email: "sofia@email.com", amount: "+$39.00", initials: "SD" },
]

const tasks = [
  { id: "TASK-8782", title: "Implement user authentication flow", status: "In Progress", priority: "High" },
  { id: "TASK-7878", title: "Design new landing page mockups", status: "Done", priority: "Medium" },
  { id: "TASK-7839", title: "Fix pagination bug in data table", status: "Todo", priority: "High" },
  { id: "TASK-5562", title: "Update API documentation", status: "In Progress", priority: "Low" },
  { id: "TASK-8686", title: "Set up CI/CD pipeline", status: "Done", priority: "Medium" },
  { id: "TASK-1280", title: "Migrate database to new provider", status: "Todo", priority: "High" },
]

export default function ExamplesPage() {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:underline"
          >
            &larr; Back
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mt-2">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            A realistic dashboard showing components in context.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-600">{stat.change}</span>{" "}
                      {stat.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {/* Chart placeholder */}
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-2 h-[300px]">
                    {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map(
                      (h, i) => (
                        <Tooltip key={i}>
                          <TooltipTrigger asChild>
                            <div
                              className="flex-1 bg-primary rounded-t-sm transition-all hover:opacity-80 cursor-pointer"
                              style={{ height: `${h}%` }}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              {
                                ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i]
                              }
                              : ${Math.round(h * 52)}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Sales */}
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {recentSales.map((sale) => (
                      <div
                        key={sale.email}
                        className="flex items-center gap-4"
                      >
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>{sale.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {sale.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {sale.email}
                          </p>
                        </div>
                        <div className="font-medium">{sale.amount}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tasks Tab */}
          <TabsContent value="tasks" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Tasks</CardTitle>
                    <CardDescription>
                      Manage and track your team&apos;s tasks.
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Filter tasks..." className="w-[250px]" />
                    <Select>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="todo">Todo</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="done">Done</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40px]"></TableHead>
                      <TableHead>Task</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead className="w-[40px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">{task.id}</TableCell>
                        <TableCell>{task.title}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              task.status === "Done"
                                ? "default"
                                : task.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {task.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              task.priority === "High"
                                ? "destructive"
                                : task.priority === "Medium"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {task.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                ...
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Duplicate</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Manage your public profile information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="text-lg">CT</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">
                      Change avatar
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      JPG, GIF or PNG. 1MB max.
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="s-name">Display name</Label>
                    <Input id="s-name" defaultValue="Christian Turner" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="s-email">Email</Label>
                    <Input
                      id="s-email"
                      type="email"
                      defaultValue="christian@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="s-bio">Bio</Label>
                  <Textarea
                    id="s-bio"
                    placeholder="Tell us a little about yourself"
                    defaultValue="Software engineer who loves building developer tools."
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline">Cancel</Button>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Choose what notifications you receive.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { id: "email-notif", label: "Email notifications", desc: "Receive emails for important updates." },
                  { id: "push-notif", label: "Push notifications", desc: "Receive push notifications on your devices." },
                  { id: "marketing", label: "Marketing emails", desc: "Receive emails about new products and features." },
                  { id: "security", label: "Security alerts", desc: "Get notified about security events on your account." },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="space-y-0.5">
                      <Label htmlFor={item.id} className="font-medium">
                        {item.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <Switch id={item.id} defaultChecked={item.id === "email-notif" || item.id === "security"} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Danger Zone</CardTitle>
                <CardDescription>
                  Irreversible and destructive actions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-destructive/50 p-4">
                  <div>
                    <p className="font-medium">Delete account</p>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all data.
                    </p>
                  </div>
                  <Button variant="destructive">Delete account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </TooltipProvider>
  )
}
