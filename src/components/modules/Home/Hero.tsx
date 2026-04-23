"use client";
import { Calendar, Search, Star } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden min-h-[88vh] flex items-center">
      {/* Subtle decorative blobs */}
      <div className="absolute top-0 right-0 w-[360px] h-[360px] rounded-full bg-blue-500/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[220px] h-[220px] rounded-full bg-indigo-500/5 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative w-full max-w-[1100px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── Left column ── */}
        <div className="flex flex-col">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full border text-xs font-medium text-muted-foreground bg-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            AI-powered doctor matching
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(32px,3.5vw,48px)] font-bold leading-[1.15] text-foreground mb-4">
            Your health,<br />matched by<br />
            <span className="text-blue-600">intelligent AI</span>
          </h1>

          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[440px] mb-8">
            Describe your symptoms once — our AI analyzes your medical profile
            and instantly surfaces the right specialist for you. No guesswork,
            no wasted appointments.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href={"/consultation"}>
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
                <Calendar size={15} /> Book appointment
              </button>
            </Link>
            <Link href={"/doctor"}>
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border text-sm font-medium hover:bg-muted transition-colors">
                <Search size={15} /> Browse doctors
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8">
            {[
              { val: "50K+", lbl: "Patients served" },
              { val: "1,000+", lbl: "Expert doctors" },
              { val: "4.9", lbl: "Patient rating", star: true },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-8">
                {i > 0 && <div className="w-px h-8 bg-border self-center" />}
                <div>
                  <div className="flex items-center gap-1 text-[22px] font-bold text-foreground leading-none">
                    {s.val}
                    {s.star && (
                      <Star size={14} className="fill-yellow-400 stroke-yellow-400" />
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — AI card ── */}
        <div className="rounded-xl border bg-card p-7 relative">
          {/* AI engine banner */}
          <div className="flex items-start gap-3 p-3.5 rounded-lg bg-muted border mb-5">
            <div className="w-9 h-9 rounded-md bg-blue-50 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-[18px] h-[18px] text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a7 7 0 0 1 7 7c0 3-1.5 5.5-4 6.8V18H9v-2.2C6.5 14.5 5 12 5 9a7 7 0 0 1 7-7z" />
                <line x1="9" y1="21" x2="15" y2="21" />
                <line x1="9" y1="18" x2="15" y2="18" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider mb-0.5">
                AI recommendation engine
              </p>
              <p className="text-[13px] text-muted-foreground leading-snug">
                Analyzing symptoms · matching specialists · checking availability
              </p>
              <div className="flex gap-1 mt-1.5">
                {[0, 200, 400].map((d) => (
                  <span
                    key={d}
                    className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-3 mb-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">
                Describe your symptoms
              </label>
              <input
                type="text"
                placeholder="e.g. chest tightness, shortness of breath…"
                className="w-full px-3.5 py-2.5 text-sm border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">
                Preferred specialty (optional)
              </label>
              <select className="w-full px-3.5 py-2.5 text-sm border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors">
                <option>Let AI decide</option>
                <option>Cardiologist</option>
                <option>Neurologist</option>
                <option>Dermatologist</option>
                <option>Pediatrician</option>
                <option>General Physician</option>
              </select>
            </div>
          </div>

          {/* AI top matches */}
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            AI top matches
          </p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              {
                initials: "DR",
                name: "Dr. Rahman",
                spec: "Cardiologist",
                score: "98%",
                bg: "bg-blue-50 dark:bg-blue-950",
                color: "text-blue-700 dark:text-blue-300",
              },
              {
                initials: "SA",
                name: "Dr. Sara A.",
                spec: "Internist",
                score: "91%",
                bg: "bg-green-50 dark:bg-green-950",
                color: "text-green-700 dark:text-green-300",
              },
              {
                initials: "MK",
                name: "Dr. M. Khan",
                spec: "Gen. Physician",
                score: "87%",
                bg: "bg-purple-50 dark:bg-purple-950",
                color: "text-purple-700 dark:text-purple-300",
              },
            ].map((d) => (
              <div
                key={d.initials}
                className="border rounded-lg p-2.5 bg-muted/40 flex flex-col gap-0.5 hover:border-blue-200 dark:hover:border-blue-800 transition-colors cursor-pointer"
              >
                <div
                  className={`w-7 h-7 rounded-full ${d.bg} ${d.color} flex items-center justify-center text-[11px] font-semibold mb-1`}
                >
                  {d.initials}
                </div>
                <p className="text-xs font-medium text-foreground leading-tight">
                  {d.name}
                </p>
                <p className="text-[11px] text-muted-foreground">{d.spec}</p>
                <p className="text-[11px] font-semibold text-blue-600">
                  {d.score} match
                </p>
              </div>
            ))}
          </div>

          {/* Submit */}
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
            <Search size={14} />
            Get AI recommendations
          </button>

          {/* Trust badges */}
          <p className="text-center text-[11px] text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block flex-shrink-0" />
            HIPAA compliant · end-to-end encrypted · ISO 27001
          </p>
        </div>
      </div>
    </div>
  );
}
