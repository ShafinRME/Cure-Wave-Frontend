/* eslint-disable react/no-unescaped-entities */
"use client";
import { Award, Building2, Globe, HandHeart, Heart, Users, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const categories = [
    { icon: Heart, label: "Health & Wellness", desc: "Free medical camps & health education programs", count: "25+ NGOs", color: "#ef4444", bg: "#fef2f2" },
    { icon: HandHeart, label: "Patient Support", desc: "Financial aid and critical patient assistance", count: "15+ NGOs", color: "#f43f5e", bg: "#fff1f2" },
    { icon: Users, label: "Community Health", desc: "Grassroots healthcare in underserved areas", count: "30+ NGOs", color: "#10b981", bg: "#ecfdf5" },
    { icon: Building2, label: "Medical Facilities", desc: "Free clinics and community hospital networks", count: "20+ Orgs", color: "#0ea5e9", bg: "#f0f9ff" },
    { icon: Award, label: "Medical Research", desc: "Funding innovation and medical breakthroughs", count: "10+ Institutes", color: "#f59e0b", bg: "#fffbeb" },
    { icon: Globe, label: "International Aid", desc: "Global health organizations active in Bangladesh", count: "12+ NGOs", color: "#8b5cf6", bg: "#f5f3ff" },
];

const steps = [
    { n: 1, title: "Find Support", desc: "Search NGOs by medical need and location" },
    { n: 2, title: "Get Assistance", desc: "Access free or subsidized healthcare services" },
    { n: 3, title: "Join Programs", desc: "Participate in health camps & awareness drives" },
    { n: 4, title: "Give Back", desc: "Volunteer or donate to amplify impact" },
];

export default function NGOsPage() {
    return (
        <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        .ngo-card { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease; cursor: default; }
        .ngo-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(0,0,0,0.1) !important; }
        .ngo-card:hover .ngo-icon { transform: scale(1.12); }
        .ngo-icon { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .step-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .step-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.08) !important; }
        .btn-cta { transition: all 0.2s ease; }
        .btn-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
        .float-anim { animation: floatEl 4s ease-in-out infinite; }
        @keyframes floatEl { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      `}</style>

            {/* Hero */}
            <div style={{ background: "linear-gradient(160deg, #064e3b 0%, #065f46 60%, #059669 100%)", padding: "80px 24px 120px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                {/* decorative circles */}
                <div style={{ position: "absolute", top: -50, right: -50, width: 300, height: 300, border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%" }} />
                <div style={{ position: "absolute", top: -20, right: -20, width: 200, height: 200, border: "1px solid rgba(255,255,255,0.07)", borderRadius: "50%" }} />
                <div style={{ position: "absolute", bottom: -60, left: -40, width: 250, height: 250, background: "rgba(255,255,255,0.02)", borderRadius: "50%" }} />

                {/* Floating heart */}
                <div className="float-anim" style={{ width: 64, height: 64, background: "rgba(255,255,255,0.1)", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <HandHeart size={28} color="#6ee7b7" />
                </div>

                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(110,231,183,0.15)", border: "1px solid rgba(110,231,183,0.3)", borderRadius: 999, padding: "5px 14px", marginBottom: 20 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6ee7b7" }} />
                    <span style={{ fontSize: 12, color: "#6ee7b7", fontWeight: 500, letterSpacing: "0.08em" }}>COMING SOON</span>
                </div>

                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,5vw,56px)", fontWeight: 700, color: "#fff", margin: "0 0 16px", lineHeight: 1.15 }}>
                    Healthcare for everyone,<br />powered by compassion
                </h1>
                <p style={{ fontSize: 17, color: "#a7f3d0", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                    Connect with healthcare NGOs offering free or subsidized medical services across Bangladesh.
                </p>

                <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 40, flexWrap: "wrap" }}>
                    {["100+ Organizations", "Free Medical Services", "Across Bangladesh"].map((s) => (
                        <div key={s} style={{ fontSize: 13, color: "#a7f3d0", display: "flex", alignItems: "center", gap: 6 }}>
                            <CheckCircle size={14} color="#34d399" /> {s}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ maxWidth: 1100, margin: "-56px auto 0", padding: "0 24px 80px", position: "relative", zIndex: 1 }}>

                {/* Category Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
                    {categories.map((c) => {
                        const Icon = c.icon;
                        return (
                            <div
                                key={c.label}
                                className="ngo-card"
                                style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "28px 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden" }}
                            >
                                <div style={{ position: "absolute", bottom: 0, right: 0, width: 100, height: 100, background: c.bg, borderRadius: "80px 0 0 0", opacity: 0.5 }} />
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                                    <div className="ngo-icon" style={{ width: 48, height: 48, background: c.bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Icon size={22} color={c.color} />
                                    </div>
                                    <span style={{ fontSize: 11, fontWeight: 600, color: c.color, background: c.bg, padding: "4px 10px", borderRadius: 999, border: `1px solid ${c.color}22` }}>
                                        {c.count}
                                    </span>
                                </div>
                                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", margin: "0 0 6px" }}>{c.label}</h3>
                                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.6 }}>{c.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* How it helps */}
                <div style={{ marginTop: 72, textAlign: "center" }}>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#94a3b8", marginBottom: 12 }}>HOW IT WORKS</div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, color: "#0f172a", margin: "0 0 40px" }}>Your path to support</h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                        {steps.map((s) => (
                            <div
                                key={s.n}
                                className="step-card"
                                style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "28px 20px", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}
                            >
                                <div style={{ width: 40, height: 40, background: "linear-gradient(135deg, #064e3b, #059669)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 15, fontWeight: 700, color: "#fff" }}>
                                    {s.n}
                                </div>
                                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", margin: "0 0 6px" }}>{s.title}</h3>
                                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partner CTA */}
                <div style={{ marginTop: 64, borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                    <div style={{ background: "linear-gradient(145deg, #064e3b, #065f46)", padding: "48px 40px" }}>
                        <div style={{ width: 40, height: 40, background: "rgba(110,231,183,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                            <Globe size={18} color="#6ee7b7" />
                        </div>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#fff", margin: "0 0 12px" }}>Partner With Us</h3>
                        <p style={{ fontSize: 14, color: "#a7f3d0", margin: "0 0 24px", lineHeight: 1.7 }}>
                            Are you a healthcare NGO? Register your organization to reach more people in need.
                        </p>
                        <button className="btn-cta" style={{ padding: "12px 24px", borderRadius: 10, background: "#fff", color: "#064e3b", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
                            Register Your NGO <ArrowRight size={14} />
                        </button>
                    </div>
                    <div style={{ padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#94a3b8", marginBottom: 16 }}>LAUNCHING SOON</div>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#0f172a", margin: "0 0 12px" }}>Building a better network</h3>
                        <p style={{ fontSize: 14, color: "#64748b", margin: "0 0 24px", lineHeight: 1.7 }}>
                            We're curating a comprehensive directory of healthcare NGOs to connect those in need with available resources.
                        </p>
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <button className="btn-cta" style={{ padding: "12px 24px", borderRadius: 10, background: "#f8fafc", color: "#0f172a", border: "1px solid #e2e8f0", cursor: "pointer", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
                                Back to Home <ArrowRight size={14} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
