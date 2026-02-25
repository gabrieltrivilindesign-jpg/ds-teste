"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

/* ─────────────────────────────────────────────────────────────────────────────
   TOKEN DATA
   ───────────────────────────────────────────────────────────────────────────── */

const primaryScale = [
  { name: "primary-50",  value: "oklch(0.975 0.03 98)",  label: "50" },
  { name: "primary-100", value: "oklch(0.96 0.06 98)",   label: "100" },
  { name: "primary-200", value: "oklch(0.95 0.09 98)",   label: "200" },
  { name: "primary-300", value: "oklch(0.93 0.12 98)",   label: "300" },
  { name: "primary-400", value: "oklch(0.91 0.15 98)",   label: "400" },
  { name: "primary-500", value: "oklch(0.93 0.21 98)",   label: "500 ← base" },
  { name: "primary-600", value: "oklch(0.87 0.18 98)",   label: "600" },
  { name: "primary-700", value: "oklch(0.76 0.17 98)",   label: "700" },
  { name: "primary-800", value: "oklch(0.62 0.14 98)",   label: "800" },
  { name: "primary-900", value: "oklch(0.46 0.10 98)",   label: "900" },
]

const greyScale = [
  { name: "grey-50",  value: "oklch(0.984 0.006 80)", label: "50" },
  { name: "grey-100", value: "oklch(0.965 0.009 80)", label: "100" },
  { name: "grey-200", value: "oklch(0.94 0.010 80)",  label: "200" },
  { name: "grey-300", value: "oklch(0.87 0.010 80)",  label: "300" },
  { name: "grey-400", value: "oklch(0.76 0.009 80)",  label: "400" },
  { name: "grey-500", value: "oklch(0.62 0.008 80)",  label: "500" },
  { name: "grey-600", value: "oklch(0.50 0.007 80)",  label: "600" },
  { name: "grey-700", value: "oklch(0.37 0.006 80)",  label: "700" },
  { name: "grey-800", value: "oklch(0.25 0.005 80)",  label: "800" },
  { name: "grey-900", value: "oklch(0.15 0.004 80)",  label: "900" },
]


const semanticVars = [
  { varName: "--success",     label: "Success" },
  { varName: "--warning",     label: "Warning" },
  { varName: "--destructive", label: "Destructive" },
  { varName: "--info",        label: "Info" },
]

const chartColors = [
  { name: "--chart-1", label: "Chart 1 — Yellow" },
  { name: "--chart-2", label: "Chart 2 — Green" },
  { name: "--chart-3", label: "Chart 3 — Rose" },
  { name: "--chart-4", label: "Chart 4 — Blue" },
  { name: "--chart-5", label: "Chart 5 — Purple" },
]

const radii = [
  { label: "sm",  value: "calc(var(--radius) - 4px)",  approx: "8px" },
  { label: "md",  value: "calc(var(--radius) - 2px)",  approx: "10px" },
  { label: "lg",  value: "var(--radius)",               approx: "12px" },
  { label: "xl",  value: "calc(var(--radius) + 4px)",  approx: "16px" },
  { label: "2xl", value: "calc(var(--radius) + 8px)",  approx: "20px" },
  { label: "full",value: "9999px",                      approx: "full" },
]

const shadows = [
  { label: "none",  cls: "shadow-none" },
  { label: "sm",    cls: "shadow-sm" },
  { label: "md",    cls: "shadow-md" },
  { label: "lg",    cls: "shadow-lg" },
  { label: "xl",    cls: "shadow-xl" },
]

const typographySamples = [
  { tag: "h1", cls: "text-4xl font-bold",     label: "Heading 1 — 36px Bold" },
  { tag: "h2", cls: "text-3xl font-semibold", label: "Heading 2 — 30px Semibold" },
  { tag: "h3", cls: "text-2xl font-semibold", label: "Heading 3 — 24px Semibold" },
  { tag: "h4", cls: "text-xl font-medium",    label: "Heading 4 — 20px Medium" },
  { tag: "h5", cls: "text-lg font-medium",    label: "Heading 5 — 18px Medium" },
  { tag: "p",  cls: "text-base font-normal",  label: "Body — 16px Regular" },
  { tag: "p",  cls: "text-sm font-normal",    label: "Small — 14px Regular" },
  { tag: "p",  cls: "text-xs font-normal",    label: "Caption — 12px Regular" },
]

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      {children}
    </section>
  )
}

function ColorSwatch({
  color,
  label,
  varName,
}: {
  color: string
  label: string
  varName?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-12 w-full rounded-md border border-border/40"
        style={{ background: color }}
      />
      <p className="text-xs font-medium text-foreground">{label}</p>
      {varName && <p className="text-xs text-muted-foreground">{varName}</p>}
    </div>
  )
}

function CssVarSwatch({ varName, label }: { varName: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-12 w-full rounded-md border border-border/40"
        style={{ background: `var(${varName})` }}
      />
      <p className="text-xs font-medium text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground font-mono">{varName}</p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────────────────────── */

export default function StyleguidePage() {
  const [dark, setDark] = useState(false)

  function toggleDark() {
    setDark((prev) => {
      document.documentElement.classList.toggle("dark", !prev)
      return !prev
    })
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Design Tokens</h1>
          <p className="text-muted-foreground mt-1">
            MEDSoft 2.0 — Medical Blue · Public Sans · 8px radius
          </p>
        </div>
        <Button variant="outline" onClick={toggleDark}>
          {dark ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

      {/* ── Primary Scale ─────────────────────────────────── */}
      <Section title="Primary Scale">
        <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
          {primaryScale.map((s) => (
            <ColorSwatch key={s.name} color={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      {/* ── Grey Scale ──────────────────────────────────────── */}
      <Section title="Grey Scale">
        <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
          {greyScale.map((s) => (
            <ColorSwatch key={s.name} color={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      {/* ── Semantic / UI Tokens ──────────────────────────── */}
      <Section title="Semantic UI Colors">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          <CssVarSwatch varName="--background"  label="Background" />
          <CssVarSwatch varName="--card"         label="Card" />
          <CssVarSwatch varName="--muted"        label="Muted" />
          <CssVarSwatch varName="--primary"      label="Primary" />
          <CssVarSwatch varName="--secondary"    label="Secondary" />
          <CssVarSwatch varName="--accent"       label="Accent" />
          <CssVarSwatch varName="--border"       label="Border" />
          <CssVarSwatch varName="--input"        label="Input" />
          <CssVarSwatch varName="--ring"         label="Ring" />
        </div>
      </Section>

      {/* ── Status Colors ──────────────────────────────────── */}
      <Section title="Status Colors">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {semanticVars.map((s) => (
            <CssVarSwatch key={s.varName} varName={s.varName} label={s.label} />
          ))}
        </div>
      </Section>

      {/* ── Chart Colors ───────────────────────────────────── */}
      <Section title="Chart Colors">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {chartColors.map((c) => (
            <CssVarSwatch key={c.name} varName={c.name} label={c.label} />
          ))}
        </div>
      </Section>

      {/* ── Sidebar Colors ─────────────────────────────────── */}
      <Section title="Sidebar Colors">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          <CssVarSwatch varName="--sidebar"                  label="Sidebar BG" />
          <CssVarSwatch varName="--sidebar-foreground"       label="Sidebar FG" />
          <CssVarSwatch varName="--sidebar-primary"          label="Sidebar Primary" />
          <CssVarSwatch varName="--sidebar-accent"           label="Sidebar Accent" />
          <CssVarSwatch varName="--sidebar-border"           label="Sidebar Border" />
          <CssVarSwatch varName="--sidebar-ring"             label="Sidebar Ring" />
        </div>
      </Section>

      {/* ── Typography ──────────────────────────────────────── */}
      <Section title="Typography — Public Sans">
        <Card>
          <CardContent className="pt-6 flex flex-col gap-4">
            {typographySamples.map((t, i) => (
              <div key={i} className="flex items-baseline gap-4">
                <span className="text-xs text-muted-foreground w-48 shrink-0">{t.label}</span>
                <span className={t.cls}>The quick brown fox</span>
              </div>
            ))}
            <div className="mt-2 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Font weights available: <span className="font-light">300 Light</span> ·{" "}
                <span className="font-normal">400 Regular</span> ·{" "}
                <span className="font-medium">500 Medium</span> ·{" "}
                <span className="font-semibold">600 Semibold</span> ·{" "}
                <span className="font-bold">700 Bold</span> ·{" "}
                <span className="font-extrabold">800 Extrabold</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* ── Border Radius ──────────────────────────────────── */}
      <Section title="Border Radius">
        <div className="flex flex-wrap gap-4">
          {radii.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 bg-primary/20 border-2 border-primary"
                style={{ borderRadius: r.value }}
              />
              <p className="text-xs font-medium text-foreground">radius-{r.label}</p>
              <p className="text-xs text-muted-foreground">{r.approx}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Shadows ─────────────────────────────────────────── */}
      <Section title="Shadows">
        <div className="flex flex-wrap gap-6">
          {shadows.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3">
              <div
                className={`w-20 h-20 bg-card rounded-lg ${s.cls}`}
              />
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Components ──────────────────────────────────────── */}
      <Section title="Components">
        {/* Buttons */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-base">Button</CardTitle>
            <CardDescription>All variants and sizes</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <Button size="default" variant="default">Default</Button>
              <Button size="default" variant="secondary">Secondary</Button>
              <Button size="default" variant="outline">Outline</Button>
              <Button size="default" variant="ghost">Ghost</Button>
              <Button size="default" variant="destructive">Destructive</Button>
              <Button size="default" variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="default" disabled>Disabled</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-base">Badge</CardTitle>
            <CardDescription>All variants</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-base">Alert</CardTitle>
            <CardDescription>Default and destructive</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Alert>
              <AlertTitle>Patient record updated</AlertTitle>
              <AlertDescription>
                The patient's medical history has been successfully updated.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Critical alert</AlertTitle>
              <AlertDescription>
                Patient vitals are outside normal range. Immediate attention required.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Radio Group */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-base">Radio Group</CardTitle>
            <CardDescription>Selection component</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="outpatient">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="outpatient" id="outpatient" />
                <Label htmlFor="outpatient">Outpatient</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="inpatient" id="inpatient" />
                <Label htmlFor="inpatient">Inpatient</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="emergency" id="emergency" />
                <Label htmlFor="emergency">Emergency</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Card example */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Overview</CardTitle>
            <CardDescription>Example card using design tokens</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1 p-3 rounded-lg bg-success/10 border border-success/20">
                <p className="text-xs text-muted-foreground">Blood Pressure</p>
                <p className="text-xl font-semibold text-foreground">120/80</p>
                <Badge className="w-fit bg-success/20 text-success border-0 hover:bg-success/20">Normal</Badge>
              </div>
              <div className="flex flex-col gap-1 p-3 rounded-lg bg-warning/10 border border-warning/20">
                <p className="text-xs text-muted-foreground">Heart Rate</p>
                <p className="text-xl font-semibold text-foreground">98 bpm</p>
                <Badge className="w-fit bg-warning/20 text-warning border-0 hover:bg-warning/20">Elevated</Badge>
              </div>
              <div className="flex flex-col gap-1 p-3 rounded-lg bg-info/10 border border-info/20">
                <p className="text-xs text-muted-foreground">O2 Saturation</p>
                <p className="text-xl font-semibold text-foreground">98%</p>
                <Badge className="w-fit bg-info/20 text-info border-0 hover:bg-info/20">Good</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  )
}
