"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeControls } from "./theme-controls"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/registry/new-york/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/new-york/ui/alert-dialog"
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Progress } from "@/registry/new-york/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/registry/new-york/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Separator } from "@/registry/new-york/ui/separator"
import { Skeleton } from "@/registry/new-york/ui/skeleton"
import { Slider } from "@/registry/new-york/ui/slider"
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
import { Toggle } from "@/registry/new-york/ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/new-york/ui/breadcrumb"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/new-york/ui/sheet"

export default function CreatePage() {
  const [progress] = useState(60)
  const [sliderValue, setSliderValue] = useState([50])

  return (
    <TooltipProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <ThemeControls />

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="mb-8">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:underline"
              >
                &larr; Back
              </Link>
              <h1 className="text-3xl font-bold tracking-tight mt-2">
                Create Theme
              </h1>
              <p className="text-muted-foreground mt-1">
                Tweak the sidebar controls and see every component update live.
              </p>
            </div>

            {/* Masonry-style grid of component previews */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Typography */}
              <Card>
                <CardHeader>
                  <CardTitle>Typography</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tight">
                    Heading One
                  </h1>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Heading Two
                  </h2>
                  <h3 className="text-xl font-semibold">Heading Three</h3>
                  <p className="text-sm text-muted-foreground">
                    This is a preview of the typography styles. Designers love
                    packing quirky glyphs into test phrases.
                  </p>
                </CardContent>
              </Card>

              {/* Color Swatches */}
              <Card>
                <CardHeader>
                  <CardTitle>Colors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { name: "bg", cls: "bg-background border" },
                      { name: "fg", cls: "bg-foreground" },
                      { name: "primary", cls: "bg-primary" },
                      { name: "secondary", cls: "bg-secondary border" },
                      { name: "muted", cls: "bg-muted border" },
                      { name: "accent", cls: "bg-accent border" },
                      { name: "destruct", cls: "bg-destructive" },
                      { name: "card", cls: "bg-card border" },
                      { name: "popover", cls: "bg-popover border" },
                      { name: "border", cls: "bg-border" },
                    ].map((c) => (
                      <div key={c.name} className="flex flex-col items-center gap-1">
                        <div className={`h-8 w-8 rounded-md ${c.cls}`} />
                        <span className="text-[9px] text-muted-foreground">
                          {c.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div key={n} className="flex flex-col items-center gap-1">
                        <div
                          className={`h-8 w-8 rounded-md bg-chart-${n}`}
                          style={{
                            backgroundColor: `var(--chart-${n})`,
                          }}
                        />
                        <span className="text-[9px] text-muted-foreground">
                          chart-{n}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle>Button</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">+</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Badge */}
              <Card>
                <CardHeader>
                  <CardTitle>Badge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Inputs */}
              <Card>
                <CardHeader>
                  <CardTitle>Input</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-2">
                    <Label htmlFor="c-email">Email</Label>
                    <Input id="c-email" placeholder="name@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="c-pass">Password</Label>
                    <Input id="c-pass" type="password" placeholder="Password" />
                  </div>
                  <Textarea placeholder="Type your message here." />
                </CardContent>
              </Card>

              {/* Select & Checkbox & Radio */}
              <Card>
                <CardHeader>
                  <CardTitle>Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-2">
                    <Checkbox id="c-check" defaultChecked />
                    <Label htmlFor="c-check">Accept terms</Label>
                  </div>
                  <RadioGroup defaultValue="option-1">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="option-1" id="c-r1" />
                      <Label htmlFor="c-r1">Option A</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="option-2" id="c-r2" />
                      <Label htmlFor="c-r2">Option B</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Switch & Toggle & Slider */}
              <Card>
                <CardHeader>
                  <CardTitle>Toggle & Slider</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Switch defaultChecked />
                    <Label>Notifications</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch />
                    <Label>Marketing emails</Label>
                  </div>
                  <Separator />
                  <div className="flex gap-2">
                    <Toggle>Bold</Toggle>
                    <Toggle>Italic</Toggle>
                    <Toggle variant="outline">Underline</Toggle>
                  </div>
                  <Separator />
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                  />
                  <Progress value={progress} />
                </CardContent>
              </Card>

              {/* Card example */}
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>You have 3 unread messages.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Your call has been confirmed.",
                    "You have a new message!",
                    "Subscription expiring soon.",
                  ].map((msg, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      {msg}
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Mark all as read
                  </Button>
                </CardFooter>
              </Card>

              {/* Alert */}
              <Card>
                <CardHeader>
                  <CardTitle>Alert</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Alert>
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      You can add components using the CLI.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Session expired. Please log in again.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Table */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Table</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { inv: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
                        { inv: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
                        { inv: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
                      ].map((r) => (
                        <TableRow key={r.inv}>
                          <TableCell className="font-medium">{r.inv}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                r.status === "Paid"
                                  ? "default"
                                  : r.status === "Pending"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {r.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{r.method}</TableCell>
                          <TableCell className="text-right">{r.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Tabs */}
              <Card>
                <CardHeader>
                  <CardTitle>Tabs</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="account">
                    <TabsList>
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="space-y-3 pt-3">
                      <div className="grid gap-2">
                        <Label>Name</Label>
                        <Input defaultValue="John Doe" />
                      </div>
                      <Button size="sm">Save</Button>
                    </TabsContent>
                    <TabsContent value="password" className="space-y-3 pt-3">
                      <div className="grid gap-2">
                        <Label>Current password</Label>
                        <Input type="password" />
                      </div>
                      <Button size="sm">Update</Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Accordion */}
              <Card>
                <CardHeader>
                  <CardTitle>Accordion</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="2">
                      <AccordionTrigger>Is it customizable?</AccordionTrigger>
                      <AccordionContent>
                        Yes. You own the source code.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Dialogs & Overlays */}
              <Card>
                <CardHeader>
                  <CardTitle>Overlays</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Dialog
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-3 py-4">
                        <div className="grid gap-2">
                          <Label>Name</Label>
                          <Input defaultValue="John Doe" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button>Save</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Alert Dialog
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm">
                        Sheet
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Sheet Panel</SheetTitle>
                        <SheetDescription>
                          A slide-over panel for secondary content.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="py-4 space-y-3">
                        <div className="grid gap-2">
                          <Label>Name</Label>
                          <Input defaultValue="Jane Doe" />
                        </div>
                        <Button className="w-full">Save</Button>
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        Popover
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Dimensions</h4>
                        <div className="grid gap-2">
                          <Label className="text-xs">Width</Label>
                          <Input defaultValue="100%" />
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Dropdown
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">
                        Tooltip
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Hover tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>

              {/* Avatar & Breadcrumb & Skeleton */}
              <Card>
                <CardHeader>
                  <CardTitle>Misc</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                  </div>
                  <Separator />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Components</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[200px]" />
                      <Skeleton className="h-4 w-[160px]" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mini dashboard card */}
              <Card className="md:col-span-2 xl:col-span-3">
                <CardHeader>
                  <CardTitle>Dashboard Preview</CardTitle>
                  <CardDescription>
                    See how components look composed together.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    {[
                      { label: "Revenue", value: "$45,231", change: "+20.1%" },
                      { label: "Users", value: "2,350", change: "+18.2%" },
                      { label: "Sales", value: "12,234", change: "+19%" },
                      { label: "Active", value: "573", change: "+201" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-lg border p-4 space-y-1"
                      >
                        <p className="text-xs text-muted-foreground font-medium">
                          {s.label}
                        </p>
                        <p className="text-2xl font-bold">{s.value}</p>
                        <p className="text-xs text-muted-foreground">
                          <span className="text-emerald-600">{s.change}</span>{" "}
                          from last month
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
