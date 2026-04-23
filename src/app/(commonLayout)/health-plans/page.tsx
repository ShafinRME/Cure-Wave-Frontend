/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { CheckCircle, Shield, Users, Zap, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Basic",
        tagline: "Individual care, essentials covered",
        price: "৳499",
        period: "/month",
        color: "from-slate-50 to-slate-100",
        accent: "#64748b",
        accentLight: "#f1f5f9",
        border: "#e2e8f0",
        popular: false,
        features: [
            "2 Doctor Consultations/month",
            "Basic Health Checkup",
            "Prescription Management",
            "Health Records Access",
            "Email Support",
        ],
    },
    {
        name: "Family",
        tagline: "Complete coverage for your loved ones",
        price: "৳1,499",
        period: "/month",
        color: "from-blue-600 to-blue-700",
        accent: "#ffffff",
        accentLight: "rgba(255,255,255,0.15)",
        border: "rgba(255,255,255,0.2)",
        popular: true,
        features: [
            "Unlimited Doctor Consultations",
            "Annual Checkup for 4 members",
            "Priority Appointment Booking",
            "Specialist Consultations",
            "24/7 Phone Support",
            "Medicine Discounts up to 20%",
            "Diagnostic Test Discounts",
        ],
    },
    {
        name: "Premium",
        tagline: "VIP healthcare, nothing less",
        price: "৳2,999",
        period: "/month",
        color: "from-slate-800 to-slate-900",
        accent: "#a78bfa",
        accentLight: "rgba(167,139,250,0.15)",
        border: "rgba(167,139,250,0.3)",
        popular: false,
        features: [
            "Unlimited Consultations (All specialties)",
            "Comprehensive Annual Checkup",
            "Home Visit Services",
            "Emergency Consultation 24/7",
            "Dedicated Health Manager",
            "Medicine Discounts up to 30%",
            "Free Diagnostic Tests (Monthly quota)",
            "Mental Health Support",
        ],
    },
];

const benefits = [
    { icon: Shield, label: "Comprehensive", sub: "Wide medical coverage" },
    { icon: Users, label: "Family Plans", sub: "Cover your loved ones" },
    { icon: Zap, label: "Quick Access", sub: "Instant appointments" },
    { icon: Sparkles, label: "Quality Care", sub: "Verified professionals" },
];

export default function HealthPlansPage() {
    const [hovered, setHovered] = useState(null);

    return (
        <div
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh" }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        .plan-card { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease; }
        .plan-card:hover { transform: translateY(-6px); }
        .benefit-pill { transition: background 0.2s, transform 0.2s; }
        .benefit-pill:hover { transform: translateY(-2px); }
        .btn-primary { transition: all 0.2s ease; }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .check-item { animation: fadeSlide 0.4s ease forwards; opacity: 0; }
        @keyframes fadeSlide { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: none; } }
        .hero-badge { animation: floatBadge 3s ease-in-out infinite; }
        @keyframes floatBadge { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
      `}</style>

            {/* Hero */}
            <div style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0f2847 100%)", padding: "80px 24px 64px", textAlign: "center" }}>
                <div
                    className="hero-badge"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 999, padding: "6px 16px", marginBottom: 24 }}
                >
                    <Shield size={13} color="#93c5fd" />
                    <span style={{ fontSize: 13, color: "#93c5fd", letterSpacing: "0.05em" }}>HEALTH PLANS & PACKAGES</span>
                </div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,5vw,58px)", fontWeight: 700, color: "#fff", margin: "0 0 16px", lineHeight: 1.15 }}>
                    Healthcare that grows<br />with your family
                </h1>
                <p style={{ fontSize: 17, color: "#94a3b8", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                    Choose a plan tailored to your needs — backed by our network of verified healthcare professionals.
                </p>

                {/* Benefits row */}
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 48 }}>
                    {benefits.map((b) => {
                        const Icon = b.icon;
                        return (
                            <div
                                key={b.label}
                                className="benefit-pill"
                                style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "12px 20px" }}
                            >
                                <div style={{ width: 32, height: 32, background: "rgba(147,197,253,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Icon size={15} color="#93c5fd" />
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0" }}>{b.label}</div>
                                    <div style={{ fontSize: 11, color: "#64748b" }}>{b.sub}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Plans */}
            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start" }}>
                    {plans.map((plan, i) => {
                        const isPopular = plan.popular;
                        const isDark = i !== 0 && !isPopular ? true : isPopular;
                        return (
                            <div
                                key={plan.name}
                                className="plan-card"
                                style={{
                                    position: "relative",
                                    borderRadius: 20,
                                    overflow: "hidden",
                                    background: isPopular
                                        ? "linear-gradient(145deg, #1d4ed8, #1e40af)"
                                        : i === 2
                                            ? "linear-gradient(145deg, #1e293b, #0f172a)"
                                            : "#ffffff",
                                    border: isPopular ? "none" : i === 2 ? "1px solid rgba(167,139,250,0.25)" : "1px solid #e2e8f0",
                                    boxShadow: isPopular
                                        ? "0 20px 60px rgba(29,78,216,0.3)"
                                        : i === 2
                                            ? "0 20px 60px rgba(0,0,0,0.2)"
                                            : "0 4px 20px rgba(0,0,0,0.06)",
                                    marginTop: isPopular ? 0 : 8,
                                }}
                            >
                                {isPopular && (
                                    <div style={{ background: "rgba(255,255,255,0.15)", textAlign: "center", padding: "8px", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#fff" }}>
                                        ✦ MOST POPULAR
                                    </div>
                                )}

                                <div style={{ padding: "32px 28px 28px" }}>
                                    <div style={{ marginBottom: 24 }}>
                                        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: isPopular || i === 2 ? "rgba(255,255,255,0.5)" : "#94a3b8", marginBottom: 6 }}>
                                            {plan.name.toUpperCase()}
                                        </div>
                                        <p style={{ fontSize: 14, color: isPopular || i === 2 ? "rgba(255,255,255,0.7)" : "#64748b", margin: "0 0 20px", lineHeight: 1.5 }}>{plan.tagline}</p>
                                        <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                                            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, color: isPopular || i === 2 ? "#fff" : "#0f172a", lineHeight: 1 }}>{plan.price}</span>
                                            <span style={{ fontSize: 14, color: isPopular || i === 2 ? "rgba(255,255,255,0.5)" : "#94a3b8" }}>{plan.period}</span>
                                        </div>
                                    </div>

                                    <div style={{ borderTop: `1px solid ${isPopular ? "rgba(255,255,255,0.15)" : i === 2 ? "rgba(255,255,255,0.08)" : "#f1f5f9"}`, paddingTop: 24, marginBottom: 28 }}>
                                        {plan.features.map((f, fi) => (
                                            <div
                                                key={fi}
                                                className="check-item"
                                                style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12, animationDelay: `${fi * 0.05}s` }}
                                            >
                                                <CheckCircle size={15} color={isPopular ? "#86efac" : i === 2 ? "#a78bfa" : "#22c55e"} style={{ flexShrink: 0, marginTop: 2 }} />
                                                <span style={{ fontSize: 14, color: isPopular || i === 2 ? "rgba(255,255,255,0.85)" : "#374151", lineHeight: 1.5 }}>{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/login" style={{ textDecoration: "none" }}>
                                        <button
                                            className="btn-primary"
                                            style={{
                                                width: "100%",
                                                padding: "14px 24px",
                                                borderRadius: 12,
                                                border: i === 2 ? "1px solid rgba(167,139,250,0.3)" : "none",
                                                cursor: "pointer",
                                                fontSize: 14,
                                                fontWeight: 600,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 8,
                                                background: isPopular ? "#fff" : i === 2 ? "rgba(167,139,250,0.2)" : "#0f172a",
                                                color: isPopular ? "#1d4ed8" : i === 2 ? "#a78bfa" : "#fff",
                                                letterSpacing: "0.01em",
                                            }}
                                        >
                                            Get Started <ArrowRight size={15} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Custom CTA */}
                <div
                    style={{ marginTop: 64, borderRadius: 20, background: "#fff", border: "1px solid #e2e8f0", padding: "48px 40px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                >
                    <div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>Need a custom plan?</h2>
                        <p style={{ fontSize: 15, color: "#64748b", margin: 0 }}>We'll build a healthcare package around your specific requirements.</p>
                    </div>
                    <button
                        className="btn-primary"
                        style={{ padding: "14px 28px", borderRadius: 12, background: "#0f172a", color: "#fff", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 8 }}
                    >
                        Contact Sales <ArrowRight size={15} />
                    </button>
                </div>
            </div>
        </div>
    );
}
