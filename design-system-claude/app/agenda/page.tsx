"use client"

import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Menu,
  Search,
  History,
  Bell,
  MessageSquare,
  BarChart2,
  Plus,
  MoreHorizontal,
  Home,
  CalendarDays,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ─── Types ───────────────────────────────────────────────────────────────────

type EventStatus = "rose" | "gray" | "done"

type CalendarEvent = {
  title: string
  status: EventStatus
}

type DayData = {
  day: number
  month: "prev" | "current" | "next"
  events: CalendarEvent[]
  moreCount: number
}

// ─── October 2025 calendar data ──────────────────────────────────────────────

const WEEKDAYS = ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO", "DOMINGO"]
const TODAY_DAY = 10
const TODAY_WEEKDAY_INDEX = 4 // SEXTA = index 4

const calendarData: DayData[][] = [
  // Week 1: Sep 29 – Oct 5
  [
    { day: 29, month: "prev", events: [], moreCount: 0 },
    { day: 30, month: "prev", events: [], moreCount: 0 },
    { day: 1, month: "current", events: [{ title: "Plantão - Internato", status: "rose" }, { title: "SmartCards...", status: "gray" }], moreCount: 3 },
    { day: 2, month: "current", events: [{ title: "Questões Pré-aula...", status: "rose" }, { title: "Videoaula - ...", status: "rose" }], moreCount: 3 },
    { day: 3, month: "current", events: [{ title: "Videoaula - Glome...", status: "rose" }, { title: "Questões Pós-aula", status: "done" }], moreCount: 0 },
    { day: 4, month: "current", events: [{ title: "Revisão I - Nefrop...", status: "rose" }, { title: "SmartCards...", status: "gray" }], moreCount: 3 },
    { day: 5, month: "current", events: [{ title: "Simulado - Clínica...", status: "rose" }, { title: "Academia", status: "gray" }], moreCount: 3 },
  ],
  // Week 2: Oct 6–12
  [
    { day: 6, month: "current", events: [{ title: "Plantão - Internato", status: "rose" }, { title: "Academia", status: "gray" }], moreCount: 3 },
    { day: 7, month: "current", events: [{ title: "Academia", status: "gray" }], moreCount: 0 },
    { day: 8, month: "current", events: [{ title: "Simulado - Clínica...", status: "rose" }, { title: "Simulado - Int...", status: "rose" }], moreCount: 3 },
    { day: 9, month: "current", events: [{ title: "Questões Pré-aula...", status: "rose" }, { title: "Videoaula - ...", status: "rose" }], moreCount: 3 },
    { day: 10, month: "current", events: [{ title: "Plantão - Internato", status: "rose" }, { title: "Simulado - Cl...", status: "rose" }], moreCount: 3 },
    { day: 11, month: "current", events: [{ title: "Plantão - Internato", status: "gray" }, { title: "Questões Pré...", status: "gray" }], moreCount: 3 },
    { day: 12, month: "current", events: [{ title: "Simulado - Clínica...", status: "gray" }, { title: "Academia", status: "gray" }], moreCount: 3 },
  ],
  // Week 3: Oct 13–19
  [
    { day: 13, month: "current", events: [{ title: "Plantão - Internato", status: "rose" }, { title: "Terapia - Dr...", status: "gray" }], moreCount: 3 },
    { day: 14, month: "current", events: [{ title: "Revisão I - Glomer...", status: "gray" }, { title: "Aniversário - Lais", status: "gray" }], moreCount: 0 },
    { day: 15, month: "current", events: [{ title: "Apostila - Glomeru...", status: "gray" }], moreCount: 0 },
    { day: 16, month: "current", events: [{ title: "Questões Pré-aula...", status: "gray" }, { title: "Videoaula - ...", status: "gray" }], moreCount: 3 },
    { day: 17, month: "current", events: [{ title: "Revisão I - Nefrop...", status: "gray" }, { title: "SmartCards...", status: "gray" }], moreCount: 3 },
    { day: 18, month: "current", events: [{ title: "Simulado - Clínica...", status: "gray" }, { title: "SmartCards...", status: "gray" }], moreCount: 3 },
    { day: 19, month: "current", events: [{ title: "Academia", status: "gray" }, { title: "Simulado - Clínica", status: "done" }], moreCount: 0 },
  ],
  // Week 4: Oct 20–26
  [
    { day: 20, month: "current", events: [{ title: "Videoaula - Glome...", status: "gray" }], moreCount: 0 },
    { day: 21, month: "current", events: [{ title: "Videoaula", status: "rose" }], moreCount: 0 },
    { day: 22, month: "current", events: [{ title: "Congresso Médico...", status: "gray" }, { title: "Terapia - Dr. Gilvan", status: "gray" }], moreCount: 3 },
    { day: 23, month: "current", events: [{ title: "Congresso Médico...", status: "gray" }, { title: "Simulado - Clínica", status: "done" }], moreCount: 0 },
    { day: 24, month: "current", events: [{ title: "Plantão - Internato", status: "rose" }, { title: "Questões Pré...", status: "gray" }], moreCount: 3 },
    { day: 25, month: "current", events: [{ title: "Plantão - Internato", status: "gray" }, { title: "Terapia - Dr...", status: "gray" }], moreCount: 3 },
    { day: 26, month: "current", events: [{ title: "Plantão - Internato", status: "gray" }, { title: "Sair com Amigos", status: "gray" }], moreCount: 0 },
  ],
  // Week 5: Oct 27 – Nov 2
  [
    { day: 27, month: "current", events: [{ title: "Apresentação de T...", status: "gray" }, { title: "Simulado - Cl...", status: "gray" }], moreCount: 3 },
    { day: 28, month: "current", events: [{ title: "Plantão - Internato", status: "rose" }, { title: "Apresentação...", status: "gray" }], moreCount: 3 },
    { day: 29, month: "current", events: [{ title: "Terapia - Dr. Gilvan", status: "gray" }, { title: "Videoaula - ...", status: "gray" }], moreCount: 3 },
    { day: 30, month: "current", events: [{ title: "Plantão - Internato", status: "gray" }, { title: "Questões Pré...", status: "gray" }], moreCount: 3 },
    { day: 31, month: "current", events: [{ title: "Revisão II - Glomer...", status: "rose" }, { title: "Videoaula - ...", status: "gray" }], moreCount: 3 },
    { day: 1, month: "next", events: [], moreCount: 0 },
    { day: 2, month: "next", events: [], moreCount: 0 },
  ],
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function EventPill({ event }: { event: CalendarEvent }) {
  const isRose = event.status === "rose"
  const isDone = event.status === "done"

  return (
    <div
      className={cn(
        "flex items-center gap-1 w-full min-w-0 px-[10px] py-[6px] rounded-[6px] border-t border-r border-b border-l-[3px] border-solid",
        isRose
          ? "bg-[#ffebed] border-[#ffb2ba] border-l-[#ff8fa0]"
          : "bg-[#f9fafa] border-[#cfd7d8] border-l-[#b8c5c6]"
      )}
    >
      <span className="flex-1 min-w-0 text-[13px] text-foreground truncate leading-[1.3]">
        {event.title}
      </span>
      <div
        className={cn(
          "shrink-0 size-4 rounded-full border flex items-center justify-center",
          isDone
            ? "bg-success border-success"
            : isRose
            ? "bg-[#ffebed] border-[#ffb2ba]"
            : "bg-[#f9fafa] border-[#cfd7d8]"
        )}
      >
        {isDone && (
          <svg
            viewBox="0 0 10 10"
            className="size-2.5 stroke-white fill-none"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 5.5l2 2 4-4" />
          </svg>
        )}
      </div>
    </div>
  )
}

function MoreBadge({ count }: { count: number }) {
  return (
    <div className="shrink-0 bg-[#f9fafa] border border-[#cfd7d8] rounded-[6px] px-2 py-[6px]">
      <span className="text-[13px] font-medium text-foreground leading-[1.3]">{count}+</span>
    </div>
  )
}

function DayCell({ dayData, isToday }: { dayData: DayData; isToday: boolean }) {
  const isCurrentMonth = dayData.month === "current"
  const [first, second] = dayData.events

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 p-2 border border-[#dde3e3] flex-1 min-w-0",
        isCurrentMonth ? "bg-white" : "bg-[#f9fafa]"
      )}
    >
      {/* Day number circle */}
      <div
        className={cn(
          "flex items-center justify-center size-6 rounded-full text-xs shrink-0",
          isToday
            ? "bg-primary text-primary-foreground font-semibold"
            : isCurrentMonth
            ? "text-foreground font-medium"
            : "text-muted-foreground"
        )}
      >
        {dayData.day}
      </div>

      {/* Events */}
      {first && (
        <div className="flex flex-col gap-1 w-full">
          {/* Row 1: first event full width */}
          <EventPill event={first} />

          {/* Row 2: second event + more badge */}
          {(second || dayData.moreCount > 0) && (
            <div className="flex gap-1 items-stretch w-full">
              {second && (
                <div className="flex-1 min-w-0">
                  <EventPill event={second} />
                </div>
              )}
              {dayData.moreCount > 0 && <MoreBadge count={dayData.moreCount} />}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── App Header ── */}
      <header className="bg-white border-b border-border flex items-center justify-between px-4 h-[73px] sticky top-0 z-10">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 rounded-full border-border h-10 px-5">
            <Menu className="size-4" />
            <span className="text-sm font-medium">Menu</span>
          </Button>
          <div className="flex items-center gap-2 bg-white border border-border rounded-full h-10 px-4 w-[480px]">
            <Search className="size-4 text-muted-foreground shrink-0" />
            <span className="text-sm text-muted-foreground flex-1">Buscar...</span>
          </div>
        </div>

        {/* Center */}
        <Button variant="ghost" size="icon" className="size-10">
          <History className="size-5 text-muted-foreground" />
        </Button>

        {/* Right */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="size-10">
            <MessageSquare className="size-5 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="size-10">
            <Bell className="size-5 text-muted-foreground" />
          </Button>
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="size-9 rounded-full bg-muted overflow-hidden border border-border">
              <div className="size-full bg-gradient-to-br from-muted to-muted-foreground/20 rounded-full" />
            </div>
            <ChevronDown className="size-4 text-muted-foreground" />
          </div>
        </div>
      </header>

      {/* ── Page Content ── */}
      <div className="max-w-[1312px] mx-auto px-6 py-6">

        {/* ── Breadcrumb ── */}
        <nav className="flex items-center gap-1 mb-6">
          <button className="flex items-center gap-1 px-2 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Home className="size-4" />
            <span>Início</span>
          </button>
          <ChevronRight className="size-4 text-muted-foreground" />
          <span className="px-2 py-2 text-sm font-semibold text-foreground">Agenda</span>
        </nav>

        {/* ── Page Title Card ── */}
        <div className="bg-card rounded-xl border border-border px-8 py-7 mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">Agenda</h1>
          <p className="text-sm text-muted-foreground">
            Gerencie tarefas, eventos e revisões em um só lugar
          </p>
        </div>

        {/* ── Calendar Container ── */}
        <div className="bg-card rounded-xl border border-border p-6">

          {/* ── Calendar Controls ── */}
          <div className="flex items-center justify-between mb-8">
            {/* Left: month navigation + view */}
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="size-10 rounded-full border-border">
                <ChevronLeft className="size-4" />
              </Button>
              <Button variant="outline" className="gap-2 rounded-full border-border h-10 px-4">
                <span className="text-sm font-medium">Outubro 2025</span>
                <ChevronDown className="size-4" />
              </Button>
              <Button variant="outline" size="icon" className="size-10 rounded-full border-border">
                <ChevronRight className="size-4" />
              </Button>
              <Button variant="outline" className="gap-2 rounded-full border-border h-10 px-4">
                <CalendarDays className="size-4" />
                <span className="text-sm font-medium">Mês</span>
                <ChevronDown className="size-4" />
              </Button>
            </div>

            {/* Right: actions */}
            <div className="flex items-center gap-2">
              <Button className="gap-2 rounded-full h-10 px-5 bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
                <BarChart2 className="size-4" />
                Análise de Progresso
              </Button>
              <Button variant="outline" size="icon" className="size-10 rounded-full border-border">
                <Plus className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" className="size-10 rounded-full">
                <MoreHorizontal className="size-4" />
              </Button>
            </div>
          </div>

          {/* ── Calendar Grid ── */}
          <div>
            {/* Weekday headers */}
            <div className="grid grid-cols-7 mb-2">
              {WEEKDAYS.map((day, idx) => (
                <div
                  key={day}
                  className={cn(
                    "flex items-center justify-center py-2 mx-0.5 rounded-full text-xs font-medium",
                    idx === TODAY_WEEKDAY_INDEX
                      ? "bg-[#fffee5] border border-[#f5ed00] text-foreground font-semibold"
                      : "text-[#404d4f]"
                  )}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Weeks */}
            <div className="border border-[#dde3e3] rounded-2xl overflow-hidden">
              {calendarData.map((week, weekIdx) => (
                <div key={weekIdx} className="grid grid-cols-7">
                  {week.map((dayData, dayIdx) => (
                    <DayCell
                      key={`${weekIdx}-${dayIdx}`}
                      dayData={dayData}
                      isToday={
                        dayData.month === "current" && dayData.day === TODAY_DAY
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
