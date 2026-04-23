"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Loader2, Stethoscope } from "lucide-react";

interface Specialty {
  id: string;
  title: string;
  icon: string;
}

const CARD_ACCENTS = [
  { tint: "rgba(99,102,241,0.07)",  ring: "rgba(99,102,241,0.3)",  dot: "#6366f1" },
  { tint: "rgba(20,184,166,0.07)",  ring: "rgba(20,184,166,0.3)",  dot: "#14b8a6" },
  { tint: "rgba(236,72,153,0.07)",  ring: "rgba(236,72,153,0.3)",  dot: "#ec4899" },
  { tint: "rgba(245,158,11,0.07)",  ring: "rgba(245,158,11,0.3)",  dot: "#f59e0b" },
  { tint: "rgba(34,197,94,0.07)",   ring: "rgba(34,197,94,0.3)",   dot: "#22c55e" },
  { tint: "rgba(239,68,68,0.07)",   ring: "rgba(239,68,68,0.3)",   dot: "#ef4444" },
  { tint: "rgba(168,85,247,0.07)",  ring: "rgba(168,85,247,0.3)",  dot: "#a855f7" },
  { tint: "rgba(59,130,246,0.07)",  ring: "rgba(59,130,246,0.3)",  dot: "#3b82f6" },
];

const SpecialtyCard = ({ specialty, index }: { specialty: Specialty; index: number }) => {
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius-xl)",
        background: hovered ? accent.tint : "var(--card)",
        border: `1.5px solid ${hovered ? accent.ring : "var(--border)"}`,
        padding: "28px 20px 24px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition:
          "transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 16px 40px -12px ${accent.ring}`
          : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Decorative blobs */}
      <span
        style={{
          position: "absolute", top: -28, right: -28,
          width: 80, height: 80, borderRadius: "50%",
          background: accent.dot,
          opacity: hovered ? 0.12 : 0.05,
          transition: "opacity 0.3s ease, transform 0.4s ease",
          transform: hovered ? "scale(1.5)" : "scale(1)",
          pointerEvents: "none",
        }}
      />
      <span
        style={{
          position: "absolute", bottom: -20, left: -20,
          width: 52, height: 52, borderRadius: "50%",
          background: accent.dot,
          opacity: hovered ? 0.08 : 0.03,
          transition: "opacity 0.3s ease, transform 0.4s ease",
          transform: hovered ? "scale(1.6)" : "scale(1)",
          pointerEvents: "none",
        }}
      />

      {/* Icon wrapper — always white so image is always visible */}
      <div
        style={{
          width: 68, height: 68,
          borderRadius: "var(--radius-lg)",
          background: "#ffffff",
          border: `1.5px solid ${hovered ? accent.ring : "var(--border)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 16,
          boxShadow: hovered
            ? `0 6px 20px -4px ${accent.ring}`
            : "0 2px 8px rgba(0,0,0,0.06)",
          transition:
            "transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.25s ease",
          transform: hovered ? "scale(1.08) rotate(-3deg)" : "scale(1)",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <img
          src={specialty.icon}
          alt={specialty.title}
          style={{ width: 38, height: 38, objectFit: "contain", display: "block" }}
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.style.display = "none";
            const fb = img.nextElementSibling as HTMLElement;
            if (fb) fb.style.display = "flex";
          }}
        />
        <span
          style={{ display: "none", alignItems: "center", justifyContent: "center", color: accent.dot }}
        >
          <Stethoscope size={28} />
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 14, fontWeight: 600,
          color: "var(--card-foreground)",
          margin: "0 0 4px", lineHeight: 1.3,
          position: "relative", zIndex: 1,
        }}
      >
        {specialty.title}
      </h3>

      {/* Accent dot */}
      <span
        style={{
          display: "inline-block",
          width: 6, height: 6, borderRadius: "50%",
          background: accent.dot,
          marginTop: 8,
          opacity: hovered ? 1 : 0.35,
          transition: "opacity 0.2s ease, transform 0.2s ease",
          transform: hovered ? "scale(1.5)" : "scale(1)",
          position: "relative", zIndex: 1,
        }}
      />
    </div>
  );
};

function ViewAllLink() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="/specialties"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontSize: 13, fontWeight: 600, textDecoration: "none",
        padding: "9px 18px", borderRadius: 9999,
        border: `1.5px solid ${hovered ? "var(--primary)" : "var(--ring)"}`,
        background: hovered ? "var(--primary)" : "var(--accent)",
        color: hovered ? "var(--primary-foreground)" : "var(--primary)",
        transition: "background 0.18s ease, color 0.18s ease, border-color 0.18s ease",
      }}
    >
      View All <ArrowRight size={14} strokeWidth={2.5} />
    </a>
  );
}

function CenteredState({ children, color = "var(--muted-foreground)" }: { children: React.ReactNode; color?: string }) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        minHeight: 200, gap: 8, color, fontSize: 14,
      }}
    >
      {children}
    </div>
  );
}

export default function Specialities() {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/specialties?limit=8`
        );
        if (!res.ok) throw new Error("Failed to fetch specialties");
        const json = await res.json();
        setSpecialties(Array.isArray(json) ? json : (json.data ?? []));
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchSpecialties();
  }, []);

  return (
    <section style={{ padding: "80px 0 96px", background: "var(--background)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div
          style={{
            display: "flex", alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 48, gap: 16, flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 11, fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "var(--primary)", marginBottom: 10,
              }}
            >
              <span
                style={{
                  width: 20, height: 2, borderRadius: 2,
                  background: "var(--primary)", display: "inline-block",
                }}
              />
              Our Expertise
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700,
                color: "var(--foreground)", margin: 0, lineHeight: 1.2,
              }}
            >
              Medical Specialities
            </h2>
            <p
              style={{
                margin: "8px 0 0", fontSize: 14,
                color: "var(--muted-foreground)", maxWidth: 420, lineHeight: 1.65,
              }}
            >
              Access top-rated experts across all major specialities with years of clinical experience.
            </p>
          </div>
          <ViewAllLink />
        </div>

        {/* Grid / States */}
        {loading ? (
          <CenteredState>
            <Loader2 size={18} style={{ animation: "spin 1s linear infinite", flexShrink: 0 }} />
            Loading specialities…
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </CenteredState>
        ) : error ? (
          <CenteredState color="var(--destructive)">⚠ {error}</CenteredState>
        ) : specialties.length === 0 ? (
          <CenteredState>No specialities found.</CenteredState>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(195px, 1fr))",
              gap: 16,
            }}
          >
            {specialties.map((s, i) => (
              <SpecialtyCard key={s.id} specialty={s} index={i} />
            ))}
          </div>
        )}

        {/* Divider */}
        <div
          style={{
            marginTop: 64, height: 1,
            background: "linear-gradient(to right, transparent, var(--border), transparent)",
          }}
        />
      </div>
    </section>
  );
}
