"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/registry/new-york/ui/button"
import { Label } from "@/registry/new-york/ui/label"
import { Slider } from "@/registry/new-york/ui/slider"
import { Separator } from "@/registry/new-york/ui/separator"
import { Switch } from "@/registry/new-york/ui/switch"

// Preset color themes
const presets: Record<string, Record<string, string>> = {
  neutral: {
    "--primary": "oklch(0.205 0 0)",
    "--primary-foreground": "oklch(0.985 0 0)",
    "--secondary": "oklch(0.97 0 0)",
    "--secondary-foreground": "oklch(0.205 0 0)",
    "--accent": "oklch(0.97 0 0)",
    "--accent-foreground": "oklch(0.205 0 0)",
    "--destructive": "oklch(0.577 0.245 27.325)",
    "--muted": "oklch(0.97 0 0)",
    "--muted-foreground": "oklch(0.556 0 0)",
  },
  blue: {
    "--primary": "oklch(0.546 0.245 262.881)",
    "--primary-foreground": "oklch(0.985 0 0)",
    "--secondary": "oklch(0.929 0.03 264)",
    "--secondary-foreground": "oklch(0.3 0.1 262)",
    "--accent": "oklch(0.929 0.03 264)",
    "--accent-foreground": "oklch(0.3 0.1 262)",
    "--destructive": "oklch(0.577 0.245 27.325)",
    "--muted": "oklch(0.96 0.015 264)",
    "--muted-foreground": "oklch(0.556 0.03 264)",
  },
  green: {
    "--primary": "oklch(0.596 0.178 163.231)",
    "--primary-foreground": "oklch(0.985 0 0)",
    "--secondary": "oklch(0.94 0.03 163)",
    "--secondary-foreground": "oklch(0.3 0.1 163)",
    "--accent": "oklch(0.94 0.03 163)",
    "--accent-foreground": "oklch(0.3 0.1 163)",
    "--destructive": "oklch(0.577 0.245 27.325)",
    "--muted": "oklch(0.96 0.015 163)",
    "--muted-foreground": "oklch(0.5 0.03 163)",
  },
  violet: {
    "--primary": "oklch(0.541 0.281 293.009)",
    "--primary-foreground": "oklch(0.985 0 0)",
    "--secondary": "oklch(0.94 0.04 293)",
    "--secondary-foreground": "oklch(0.3 0.12 293)",
    "--accent": "oklch(0.94 0.04 293)",
    "--accent-foreground": "oklch(0.3 0.12 293)",
    "--destructive": "oklch(0.577 0.245 27.325)",
    "--muted": "oklch(0.96 0.02 293)",
    "--muted-foreground": "oklch(0.5 0.04 293)",
  },
  orange: {
    "--primary": "oklch(0.646 0.222 41.116)",
    "--primary-foreground": "oklch(0.985 0 0)",
    "--secondary": "oklch(0.94 0.035 41)",
    "--secondary-foreground": "oklch(0.35 0.12 41)",
    "--accent": "oklch(0.94 0.035 41)",
    "--accent-foreground": "oklch(0.35 0.12 41)",
    "--destructive": "oklch(0.577 0.245 27.325)",
    "--muted": "oklch(0.96 0.018 41)",
    "--muted-foreground": "oklch(0.5 0.04 41)",
  },
  rose: {
    "--primary": "oklch(0.585 0.233 2.3)",
    "--primary-foreground": "oklch(0.985 0 0)",
    "--secondary": "oklch(0.94 0.035 2)",
    "--secondary-foreground": "oklch(0.35 0.12 2)",
    "--accent": "oklch(0.94 0.035 2)",
    "--accent-foreground": "oklch(0.35 0.12 2)",
    "--destructive": "oklch(0.577 0.245 27.325)",
    "--muted": "oklch(0.96 0.018 2)",
    "--muted-foreground": "oklch(0.5 0.04 2)",
  },
}

export function ThemeControls() {
  const [activePreset, setActivePreset] = useState("neutral")
  const [radius, setRadius] = useState(0.625)
  const [isDark, setIsDark] = useState(false)
  const [copied, setCopied] = useState(false)

  const applyPreset = useCallback(
    (name: string) => {
      setActivePreset(name)
      const preset = presets[name]
      if (!preset) return
      const root = document.documentElement
      Object.entries(preset).forEach(([prop, value]) => {
        root.style.setProperty(prop, value)
      })
    },
    []
  )

  const applyRadius = useCallback((r: number) => {
    setRadius(r)
    document.documentElement.style.setProperty("--radius", `${r}rem`)
  }, [])

  const toggleDark = useCallback((dark: boolean) => {
    setIsDark(dark)
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Generate the CSS output for copying
  const generateCSS = useCallback(() => {
    const preset = presets[activePreset] || presets.neutral
    const lines = [":root {", `  --radius: ${radius}rem;`]
    Object.entries(preset).forEach(([prop, value]) => {
      lines.push(`  ${prop}: ${value};`)
    })
    lines.push("}")
    return lines.join("\n")
  }, [activePreset, radius])

  const copyCSS = useCallback(() => {
    navigator.clipboard.writeText(generateCSS())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [generateCSS])

  // Generate registry-compatible JSON theme
  const generateJSON = useCallback(() => {
    const preset = presets[activePreset] || presets.neutral
    return JSON.stringify(
      {
        name: activePreset,
        cssVars: {
          radius: `${radius}rem`,
          ...preset,
        },
      },
      null,
      2
    )
  }, [activePreset, radius])

  const copyJSON = useCallback(() => {
    navigator.clipboard.writeText(generateJSON())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [generateJSON])

  // Apply initial preset
  useEffect(() => {
    applyPreset(activePreset)
  }, [applyPreset, activePreset])

  return (
    <div className="w-[260px] shrink-0 border-r bg-muted/30 p-6 flex flex-col gap-6 overflow-y-auto h-screen sticky top-0">
      <div>
        <h2 className="font-semibold text-lg">Theme</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Customize and preview your design tokens.
        </p>
      </div>

      <Separator />

      {/* Color Preset */}
      <div className="space-y-3">
        <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Color
        </Label>
        <div className="grid grid-cols-3 gap-2">
          {Object.keys(presets).map((name) => (
            <button
              key={name}
              onClick={() => applyPreset(name)}
              className={`flex flex-col items-center gap-1.5 rounded-md border p-2 text-xs capitalize transition-colors hover:bg-accent ${
                activePreset === name
                  ? "border-primary bg-accent"
                  : "border-transparent"
              }`}
            >
              <div
                className="h-5 w-5 rounded-full border"
                style={{ background: presets[name]["--primary"] }}
              />
              {name}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Radius */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Radius
          </Label>
          <span className="text-xs text-muted-foreground tabular-nums">
            {radius.toFixed(2)}rem
          </span>
        </div>
        <Slider
          value={[radius]}
          onValueChange={([v]) => applyRadius(v)}
          min={0}
          max={1.5}
          step={0.05}
        />
        <div className="flex gap-1.5">
          {[0, 0.3, 0.5, 0.75, 1.0].map((r) => (
            <button
              key={r}
              onClick={() => applyRadius(r)}
              className={`flex-1 rounded border px-2 py-1 text-xs transition-colors hover:bg-accent ${
                Math.abs(radius - r) < 0.01
                  ? "border-primary bg-accent"
                  : ""
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Dark mode */}
      <div className="flex items-center justify-between">
        <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Dark mode
        </Label>
        <Switch checked={isDark} onCheckedChange={toggleDark} />
      </div>

      <Separator />

      {/* Copy buttons */}
      <div className="space-y-2 mt-auto">
        <Button onClick={copyCSS} className="w-full" size="sm">
          {copied ? "Copied!" : "Copy CSS"}
        </Button>
        <Button
          onClick={copyJSON}
          variant="outline"
          className="w-full"
          size="sm"
        >
          {copied ? "Copied!" : "Copy JSON"}
        </Button>
      </div>

      {/* Preview of current values */}
      <div className="rounded-md bg-muted p-3 text-[10px] font-mono leading-relaxed text-muted-foreground max-h-[200px] overflow-y-auto">
        <div>--radius: {radius}rem</div>
        {Object.entries(presets[activePreset] || {}).map(([k, v]) => (
          <div key={k}>
            {k}: {v}
          </div>
        ))}
      </div>
    </div>
  )
}
