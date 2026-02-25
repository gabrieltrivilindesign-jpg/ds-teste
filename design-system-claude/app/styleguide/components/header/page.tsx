import { AppHeader } from "@/components/AppHeader"

const demoLinks = [
  { label: "Dashboard", href: "#", active: true },
  { label: "Cursos", href: "#" },
  { label: "Progresso", href: "#" },
  { label: "Comunidade", href: "#" },
]

const minimalLinks = [
  { label: "Início", href: "#", active: true },
  { label: "Sobre", href: "#" },
]

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto text-foreground/80 mt-3">
      <code>{code}</code>
    </pre>
  )
}

function Section({
  title,
  description,
  children,
  code,
}: {
  title: string
  description?: string
  children: React.ReactNode
  code: string
}) {
  return (
    <section className="flex flex-col gap-3">
      <div>
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      <div className="rounded-xl border border-border overflow-hidden">
        {children}
      </div>
      <CodeBlock code={code} />
    </section>
  )
}

export default function HeaderShowcase() {
  return (
    <div className="p-8 max-w-5xl mx-auto flex flex-col gap-12">
      {/* Page header */}
      <div className="border-b border-border pb-6">
        <h1 className="text-3xl font-bold text-foreground">Header</h1>
        <p className="text-muted-foreground mt-2">
          Application header with brand, navigation, search, notifications, and
          user avatar. Built as a custom component using the MEDSoft 2.0 design
          tokens.
        </p>
      </div>

      {/* Import */}
      <section>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Import
        </h2>
        <CodeBlock code={`import { AppHeader } from "@/components/AppHeader"`} />
      </section>

      {/* Variants */}
      <div className="flex flex-col gap-10">
        <h2 className="text-xl font-bold text-foreground -mb-6">Variants</h2>

        <Section
          title="Default"
          description="White card background with a subtle border. Used for most app layouts."
          code={`<AppHeader
  brandName="MEDSoft"
  navLinks={[
    { label: "Dashboard", href: "/", active: true },
    { label: "Cursos", href: "/cursos" },
    { label: "Progresso", href: "/progresso" },
  ]}
  showSearch
  showNotifications
  notificationCount={3}
  userName="Ana Lima"
/>`}
        >
          <AppHeader
            variant="default"
            brandName="MEDSoft"
            navLinks={demoLinks}
            showSearch
            showNotifications
            notificationCount={3}
            userName="Ana Lima"
          />
        </Section>

        <Section
          title="Primary"
          description="Warm yellow background — ideal for landing pages or prominent app shells."
          code={`<AppHeader
  variant="primary"
  brandName="MEDSoft"
  navLinks={[
    { label: "Dashboard", href: "/", active: true },
    { label: "Cursos", href: "/cursos" },
    { label: "Progresso", href: "/progresso" },
  ]}
  showSearch
  showNotifications
  notificationCount={3}
  userName="Ana Lima"
/>`}
        >
          <AppHeader
            variant="primary"
            brandName="MEDSoft"
            navLinks={demoLinks}
            showSearch
            showNotifications
            notificationCount={3}
            userName="Ana Lima"
          />
        </Section>

        <Section
          title="Transparent"
          description="No background — use over hero images or full-bleed sections."
          code={`<AppHeader
  variant="transparent"
  brandName="MEDSoft"
  navLinks={navLinks}
/>`}
        >
          <div className="bg-gradient-to-r from-primary/30 to-secondary/30">
            <AppHeader
              variant="transparent"
              brandName="MEDSoft"
              navLinks={minimalLinks}
            />
          </div>
        </Section>
      </div>

      {/* Configurations */}
      <div className="flex flex-col gap-10">
        <h2 className="text-xl font-bold text-foreground -mb-6">
          Configurations
        </h2>

        <Section
          title="Brand only"
          description="Minimal header with just the logo and brand name."
          code={`<AppHeader brandName="MEDSoft" />`}
        >
          <AppHeader brandName="MEDSoft" />
        </Section>

        <Section
          title="With navigation"
          description="Navigation links highlight the active page."
          code={`<AppHeader
  brandName="MEDSoft"
  navLinks={[
    { label: "Dashboard", href: "/", active: true },
    { label: "Cursos", href: "/cursos" },
    { label: "Progresso", href: "/progresso" },
    { label: "Comunidade", href: "/comunidade" },
  ]}
/>`}
        >
          <AppHeader brandName="MEDSoft" navLinks={demoLinks} />
        </Section>

        <Section
          title="With notifications (count)"
          description="The bell shows an unread badge when notificationCount > 0."
          code={`<AppHeader
  brandName="MEDSoft"
  showNotifications
  notificationCount={12}
/>`}
        >
          <AppHeader
            brandName="MEDSoft"
            showNotifications
            notificationCount={12}
          />
        </Section>

        <Section
          title="With user avatar"
          description="Displays initials derived from the userName prop."
          code={`<AppHeader
  brandName="MEDSoft"
  showSearch
  showNotifications
  notificationCount={0}
  userName="Carlos Mendes"
/>`}
        >
          <AppHeader
            brandName="MEDSoft"
            showSearch
            showNotifications
            notificationCount={0}
            userName="Carlos Mendes"
          />
        </Section>

        <Section
          title="Sticky"
          description="Passes sticky top-0 positioning. Scroll the page to see it in action."
          code={`<AppHeader
  brandName="MEDSoft"
  navLinks={navLinks}
  sticky
/>`}
        >
          <AppHeader brandName="MEDSoft" navLinks={demoLinks} sticky />
        </Section>
      </div>

      {/* Props */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-foreground">Props</h2>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-3 font-semibold text-foreground">
                  Prop
                </th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">
                  Type
                </th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">
                  Default
                </th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                {
                  prop: "variant",
                  type: '"default" | "primary" | "transparent"',
                  def: '"default"',
                  desc: "Visual style of the header",
                },
                {
                  prop: "brandName",
                  type: "string",
                  def: '"MEDSoft"',
                  desc: "Product or brand name displayed next to the logo",
                },
                {
                  prop: "logo",
                  type: "ReactNode",
                  def: "GraduationCap icon",
                  desc: "Custom logo element (replaces the default icon)",
                },
                {
                  prop: "navLinks",
                  type: "NavLink[]",
                  def: "[]",
                  desc: "Array of { label, href, active? } navigation links",
                },
                {
                  prop: "showSearch",
                  type: "boolean",
                  def: "false",
                  desc: "Show the search icon button",
                },
                {
                  prop: "showNotifications",
                  type: "boolean",
                  def: "false",
                  desc: "Show the notifications bell button",
                },
                {
                  prop: "notificationCount",
                  type: "number",
                  def: "0",
                  desc: "Unread count badge on the bell (0 hides the badge)",
                },
                {
                  prop: "userName",
                  type: "string",
                  def: "undefined",
                  desc: "User name; initials are derived and shown in avatar",
                },
                {
                  prop: "sticky",
                  type: "boolean",
                  def: "false",
                  desc: "Position the header sticky at the top of the viewport",
                },
                {
                  prop: "className",
                  type: "string",
                  def: "—",
                  desc: "Additional Tailwind classes for the root element",
                },
              ].map((row) => (
                <tr key={row.prop}>
                  <td className="px-4 py-3 font-mono text-xs text-primary-foreground bg-primary/5">
                    {row.prop}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {row.type}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {row.def}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-foreground">Accessibility</h2>
        <ul className="list-disc list-inside text-sm text-muted-foreground flex flex-col gap-1.5">
          <li>
            The root element is a semantic{" "}
            <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
              &lt;header&gt;
            </code>{" "}
            landmark.
          </li>
          <li>
            Navigation links are wrapped in a{" "}
            <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
              &lt;nav&gt;
            </code>{" "}
            element.
          </li>
          <li>
            The search and notification buttons have descriptive{" "}
            <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
              aria-label
            </code>{" "}
            attributes, including the unread count.
          </li>
          <li>
            The mobile menu toggle updates its label between{" "}
            <em>Open menu</em> and <em>Close menu</em>.
          </li>
          <li>
            The user avatar button exposes the user name via{" "}
            <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
              aria-label
            </code>
            .
          </li>
          <li>All interactive elements are keyboard-focusable.</li>
        </ul>
      </section>
    </div>
  )
}
