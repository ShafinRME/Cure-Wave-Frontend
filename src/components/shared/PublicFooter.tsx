"use client"
import Link from "next/link";
import { MapPin, Mail, Phone, ArrowUpRight, Heart } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

const SUPPORT_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "Help Center", href: "/help" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

const SPECIALITIES = [
  { label: "Cardiology", href: "/specialties/cardiology" },
  { label: "Neurology", href: "/specialties/neurology" },
  { label: "Orthopedics", href: "/specialties/orthopedics" },
  { label: "Pediatrics", href: "/specialties/pediatrics" },
  { label: "Dermatology", href: "/specialties/dermatology" },
];

const SOCIALS = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          fontSize: 13,
          color: "var(--muted-foreground)",
          textDecoration: "none",
          transition: "color 0.15s ease, gap 0.15s ease",
          lineHeight: 1.6,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)";
          (e.currentTarget as HTMLAnchorElement).style.gap = "6px";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-foreground)";
          (e.currentTarget as HTMLAnchorElement).style.gap = "4px";
        }}
      >
        <span
          style={{
            width: 4, height: 4, borderRadius: "50%",
            background: "var(--primary)", flexShrink: 0, opacity: 0.5,
          }}
        />
        {children}
      </Link>
    </li>
  );
}

function SocialButton({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        width: 36, height: 36,
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border)",
        background: "var(--card)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--muted-foreground)",
        textDecoration: "none",
        fontSize: 15,
        transition:
          "background 0.18s ease, color 0.18s ease, border-color 0.18s ease, transform 0.18s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "var(--primary)";
        el.style.color = "var(--primary-foreground)";
        el.style.borderColor = "var(--primary)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = "var(--card)";
        el.style.color = "var(--muted-foreground)";
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0)";
      }}
    >
      <Icon />
    </a>
  );
}

export default function PublicFooter() {
  return (
    <footer
      style={{
        background: "var(--background)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* ── CTA strip ───────────────────────────────── */}
      <div style={{ background: "var(--primary)", padding: "28px 24px" }}>
        <div
          style={{
            maxWidth: 1180, margin: "0 auto",
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            gap: 16, flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11, fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)", margin: "0 0 4px",
              }}
            >
              Ready to get started?
            </p>
            <h3
              style={{
                fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 700,
                color: "var(--primary-foreground)", margin: 0,
              }}
            >
              Book an appointment with top specialists today
            </h3>
          </div>
          <Link
            href="/doctors"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 13, fontWeight: 600,
              background: "var(--primary-foreground)",
              color: "var(--primary)",
              padding: "10px 22px", borderRadius: 9999,
              textDecoration: "none", whiteSpace: "nowrap",
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
            }
          >
            Find a Doctor <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* ── Main body ───────────────────────────────── */}
      <div
        style={{
          maxWidth: 1180, margin: "0 auto",
          padding: "56px 24px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "40px 32px",
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                display: "inline-flex", alignItems: "center",
                gap: 8, marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 34, height: 34,
                  borderRadius: "var(--radius-md)",
                  background: "var(--primary)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <Heart size={16} color="white" fill="white" />
              </div>
              <span
                style={{
                  fontSize: 18, fontWeight: 700,
                  color: "var(--foreground)", letterSpacing: "-0.02em",
                }}
              >
                Cure<span style={{ color: "var(--primary)" }}>Wave</span>
              </span>
            </div>

            <p
              style={{
                fontSize: 13, color: "var(--muted-foreground)",
                lineHeight: 1.75, margin: "0 0 24px", maxWidth: 260,
              }}
            >
              Your trusted partner in health. Connecting patients with the best
              specialists for a healthier, happier life.
            </p>

            {/* Contact */}
            <ul
              style={{
                listStyle: "none", padding: 0,
                margin: "0 0 24px",
                display: "flex", flexDirection: "column", gap: 10,
              }}
            >
              {[
                { icon: MapPin, text: "123 Medical Lane, Health City, HC 12345" },
                { icon: Phone, text: "+1 (800) 123-4567" },
                { icon: Mail, text: "contact@curewave.com" },
              ].map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 8,
                    fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.5,
                  }}
                >
                  <Icon
                    size={13}
                    style={{ flexShrink: 0, marginTop: 2, color: "var(--primary)" }}
                  />
                  {text}
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 8 }}>
              {SOCIALS.map((s) => (
                <SocialButton key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: 12, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "var(--foreground)", margin: "0 0 18px",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: "none", padding: 0, margin: 0,
                display: "flex", flexDirection: "column", gap: 10,
              }}
            >
              {QUICK_LINKS.map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h4
              style={{
                fontSize: 12, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "var(--foreground)", margin: "0 0 18px",
              }}
            >
              Specialities
            </h4>
            <ul
              style={{
                listStyle: "none", padding: 0, margin: 0,
                display: "flex", flexDirection: "column", gap: 10,
              }}
            >
              {SPECIALITIES.map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              style={{
                fontSize: 12, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "var(--foreground)", margin: "0 0 18px",
              }}
            >
              Support
            </h4>
            <ul
              style={{
                listStyle: "none", padding: 0, margin: 0,
                display: "flex", flexDirection: "column", gap: 10,
              }}
            >
              {SUPPORT_LINKS.map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────── */}
        <div
          style={{
            marginTop: 48, paddingTop: 20,
            borderTop: "1px solid var(--border)",
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            gap: 12, flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: 12, color: "var(--muted-foreground)", margin: 0 }}>
            &copy; {new Date().getFullYear()} CureWave. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {["HIPAA Compliant", "SSL Secured", "ISO 27001"].map((badge) => (
              <span
                key={badge}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 4,
                  fontSize: 11, fontWeight: 500,
                  color: "var(--muted-foreground)",
                  padding: "3px 8px",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                }}
              >
                <span
                  style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "#22c55e", flexShrink: 0,
                  }}
                />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive grid */}
      <style>{`
        @media (max-width: 900px) {
          footer > div:last-of-type > div:first-of-type {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          footer > div:last-of-type > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
