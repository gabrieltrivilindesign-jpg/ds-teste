"use client"

import * as React from "react"
import Link from "next/link"
import { Bell, Search, Menu, X, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export interface AppHeaderProps {
  /** Visual style of the header */
  variant?: "default" | "primary" | "transparent"
  /** Logo element (replaces default icon) */
  logo?: React.ReactNode
  /** Brand/product name */
  brandName?: string
  /** Navigation links */
  navLinks?: NavLink[]
  /** Show search button */
  showSearch?: boolean
  /** Show notifications bell */
  showNotifications?: boolean
  /** Unread notification count */
  notificationCount?: number
  /** User display name (initials shown in avatar) */
  userName?: string
  /** Stick to top of viewport */
  sticky?: boolean
  className?: string
}

export function AppHeader({
  variant = "default",
  logo,
  brandName = "MEDSoft",
  navLinks = [],
  showSearch = false,
  showNotifications = false,
  notificationCount = 0,
  userName,
  sticky = false,
  className,
}: AppHeaderProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const initials = userName
    ? userName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : null

  return (
    <header
      className={cn(
        "w-full border-b",
        sticky && "sticky top-0 z-50",
        variant === "default" && "bg-card border-border",
        variant === "primary" && "bg-primary border-primary/20",
        variant === "transparent" && "bg-transparent border-transparent",
        className
      )}
    >
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Brand */}
        <Link
          href="#"
          className={cn(
            "flex items-center gap-2 shrink-0 font-bold text-lg",
            variant === "primary"
              ? "text-primary-foreground"
              : "text-foreground"
          )}
        >
          {logo ?? (
            <span
              className={cn(
                "flex size-8 items-center justify-center rounded-lg",
                variant === "primary"
                  ? "bg-primary-foreground/15"
                  : "bg-primary"
              )}
            >
              <GraduationCap
                className={cn(
                  "size-4",
                  variant === "primary"
                    ? "text-primary-foreground"
                    : "text-primary-foreground"
                )}
              />
            </span>
          )}
          {brandName}
        </Link>

        {/* Desktop nav */}
        {navLinks.length > 0 && (
          <nav className="hidden md:flex items-center gap-1 ml-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  variant === "primary"
                    ? link.active
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    : link.active
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center gap-2">
          {showSearch && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              className={cn(
                variant === "primary" &&
                  "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              )}
            >
              <Search className="size-4" />
            </Button>
          )}

          {showNotifications && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                aria-label={`Notifications${notificationCount > 0 ? `, ${notificationCount} unread` : ""}`}
                className={cn(
                  variant === "primary" &&
                    "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                )}
              >
                <Bell className="size-4" />
              </Button>
              {notificationCount > 0 && (
                <Badge
                  className="absolute -top-1 -right-1 size-4 p-0 flex items-center justify-center text-[10px] bg-destructive text-destructive-foreground border-0 pointer-events-none"
                >
                  {notificationCount > 9 ? "9+" : notificationCount}
                </Badge>
              )}
            </div>
          )}

          {userName && (
            <button
              className={cn(
                "flex size-8 items-center justify-center rounded-full text-xs font-semibold transition-opacity hover:opacity-80",
                variant === "primary"
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-primary text-primary-foreground"
              )}
              aria-label={`User menu for ${userName}`}
            >
              {initials}
            </button>
          )}

          {/* Mobile menu toggle */}
          {navLinks.length > 0 && (
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                variant === "primary" &&
                  "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              )}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && navLinks.length > 0 && (
        <nav
          className={cn(
            "md:hidden border-t px-6 py-3 flex flex-col gap-1",
            variant === "primary"
              ? "border-primary-foreground/20"
              : "border-border"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                variant === "primary"
                  ? link.active
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  : link.active
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
