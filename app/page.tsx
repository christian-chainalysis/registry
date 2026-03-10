import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col min-h-svh px-4 py-16 gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Design System</h1>
        <p className="text-muted-foreground">
          Preview and tweak your components. Edit{" "}
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded">
            app/globals.css
          </code>{" "}
          to change the theme.
        </p>
      </header>
      <nav className="flex flex-col gap-4">
        <Link
          href="/create"
          className="group flex flex-col gap-1 border-2 border-primary rounded-lg p-6 hover:bg-muted/50 transition-colors"
        >
          <h2 className="text-lg font-semibold group-hover:underline">
            Create Theme
          </h2>
          <p className="text-sm text-muted-foreground">
            Visual theme configurator. Pick colors, radius, and see every
            component update live. Copy CSS or JSON when done.
          </p>
        </Link>
        <Link
          href="/components"
          className="group flex flex-col gap-1 border rounded-lg p-6 hover:bg-muted/50 transition-colors"
        >
          <h2 className="text-lg font-semibold group-hover:underline">
            Component Showcase
          </h2>
          <p className="text-sm text-muted-foreground">
            Every component isolated with all variants. See exactly what each
            primitive looks like.
          </p>
        </Link>
        <Link
          href="/examples"
          className="group flex flex-col gap-1 border rounded-lg p-6 hover:bg-muted/50 transition-colors"
        >
          <h2 className="text-lg font-semibold group-hover:underline">
            Real-World Examples
          </h2>
          <p className="text-sm text-muted-foreground">
            Dashboard, settings, and other pages showing how components compose
            together.
          </p>
        </Link>
      </nav>
    </div>
  )
}
