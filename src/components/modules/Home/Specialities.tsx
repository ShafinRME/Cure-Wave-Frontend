import { useEffect, useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface Specialty {
  id: string;
  title: string;
  icon: string;
  createdAt?: string;
  updatedAt?: string;
}

// Soft accent colors cycling through specialties
const ACCENT_PALETTE = [
  { bg: '#FFF0F0', border: '#FFD6D6', accent: '#E85454', light: '#FEE2E2' },
  { bg: '#EEF4FF', border: '#C7D7FB', accent: '#3B6EF8', light: '#DBEAFE' },
  { bg: '#F3F0FF', border: '#D3C8FC', accent: '#7C3AED', light: '#EDE9FE' },
  { bg: '#F0FDF4', border: '#C3EED0', accent: '#16A34A', light: '#DCFCE7' },
  { bg: '#FFFBEB', border: '#FDE68A', accent: '#D97706', light: '#FEF3C7' },
  { bg: '#FFF0FB', border: '#F9C8F0', accent: '#C026D3', light: '#FAE8FF' },
];

const SpecialtyCard = ({
  specialty,
  index,
}: {
  specialty: Specialty;
  index: number;
}) => {
  const colors = ACCENT_PALETTE[index % ACCENT_PALETTE.length];

  return (
    <div
      className="specialty-card"
      style={
        {
          '--card-bg': colors.bg,
          '--card-border': colors.border,
          '--card-accent': colors.accent,
          '--card-light': colors.light,
        } as React.CSSProperties
      }
    >
      {/* Decorative blobs */}
      <span className="blob blob-1" />
      <span className="blob blob-2" />

      {/* Icon */}
      <div className="icon-wrapper">
        <img
          src={specialty.icon}
          alt={specialty.title}
          className="specialty-img"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Content */}
      <h3 className="card-title">{specialty.title}</h3>
      <span className="card-cta">
        Book now <ArrowRight size={13} strokeWidth={2.5} />
      </span>
    </div>
  );
};

const Specialities = () => {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/specialties?limit=8`
        );
        if (!res.ok) throw new Error('Failed to fetch specialties');
        const json = await res.json();
        // Support both { data: [...] } and direct array responses
        setSpecialties(Array.isArray(json) ? json : json.data ?? []);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message ?? 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    fetchSpecialties();
  }, []);

  return (
    <>
      {/* ── Scoped styles ─────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500&display=swap');

        .spec-section {
          padding: 80px 0 100px;
          background: #f8f9fc;
          font-family: 'DM Sans', sans-serif;
        }

        .spec-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .spec-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 52px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .spec-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6366f1;
          margin-bottom: 10px;
        }

        .spec-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6366f1;
        }

        .spec-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          margin: 0;
        }

        .spec-subtitle {
          margin: 8px 0 0;
          font-size: 15px;
          color: #64748b;
          max-width: 460px;
        }

        .spec-view-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: #6366f1;
          text-decoration: none;
          white-space: nowrap;
          padding: 10px 20px;
          border: 1.5px solid #c7d2fe;
          border-radius: 100px;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }

        .spec-view-all:hover {
          background: #6366f1;
          color: #fff;
          border-color: #6366f1;
        }

        /* Grid */
        .spec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
        }

        /* Card */
        .specialty-card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          background: var(--card-bg);
          border: 1.5px solid var(--card-border);
          padding: 32px 24px 28px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0;
          transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.25s ease,
                      border-color 0.25s ease;
        }

        .specialty-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -12px color-mix(in srgb, var(--card-accent) 30%, transparent);
          border-color: var(--card-accent);
        }

        /* Decorative blobs — purely visual, don't interfere with content */
        .blob {
          position: absolute;
          border-radius: 50%;
          background: var(--card-accent);
          opacity: 0.07;
          pointer-events: none;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        .blob-1 { width: 120px; height: 120px; right: -40px; top: -40px; }
        .blob-2 { width: 80px; height: 80px; left: -30px; bottom: -30px; }
        .specialty-card:hover .blob { opacity: 0.13; transform: scale(1.3); }

        /* Icon wrapper — stays the same solid tinted bg on hover */
        .icon-wrapper {
          width: 76px;
          height: 76px;
          border-radius: 18px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.25s ease;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .specialty-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(-4deg);
          box-shadow: 0 8px 24px color-mix(in srgb, var(--card-accent) 25%, transparent);
        }

        /* Image stays fully visible on hover — no color change */
        .specialty-img {
          width: 42px;
          height: 42px;
          object-fit: contain;
        }

        /* Title */
        .card-title {
          font-family: 'Sora', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px;
          position: relative;
          z-index: 1;
          line-height: 1.3;
        }

        /* CTA pill */
        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 600;
          color: var(--card-accent);
          background: color-mix(in srgb, var(--card-accent) 10%, transparent);
          padding: 4px 12px;
          border-radius: 100px;
          margin-top: 6px;
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.22s ease, transform 0.22s ease;
        }

        .specialty-card:hover .card-cta {
          opacity: 1;
          transform: translateY(0);
        }

        /* States */
        .spec-loading, .spec-error {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 220px;
          gap: 10px;
          font-size: 15px;
          color: #64748b;
        }

        .spec-error { color: #ef4444; }

        @media (max-width: 640px) {
          .spec-header { flex-direction: column; align-items: flex-start; }
          .spec-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .specialty-card { padding: 24px 16px 20px; }
          .icon-wrapper { width: 62px; height: 62px; }
          .specialty-img { width: 34px; height: 34px; }
        }
      `}</style>

      {/* ── Section ───────────────────────────────────── */}
      <section className="spec-section">
        <div className="spec-inner">
          {/* Header */}
          <div className="spec-header">
            <div>
              <div className="spec-eyebrow">
                <span className="spec-eyebrow-dot" />
                Medical Expertise
              </div>
              <h2 className="spec-title">Our Specialities</h2>
              <p className="spec-subtitle">
                Access top-rated medical experts across all major specialities
                with years of clinical experience.
              </p>
            </div>
            <a href="/specialties" className="spec-view-all">
              View All <ArrowRight size={14} />
            </a>
          </div>

          {/* Content */}
          {loading ? (
            <div className="spec-loading">
              <Loader2 size={20} className="animate-spin" />
              Loading specialities…
            </div>
          ) : error ? (
            <div className="spec-error">⚠ {error}</div>
          ) : specialties.length === 0 ? (
            <div className="spec-loading">No specialities found.</div>
          ) : (
            <div className="spec-grid">
              {specialties.map((s, i) => (
                <SpecialtyCard key={s.id} specialty={s} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Specialities;
