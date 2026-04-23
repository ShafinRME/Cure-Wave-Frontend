/* eslint-disable react/no-unescaped-entities */
"use client";
import { Pill, DollarSign, Truck, Shield, Clock, ShoppingCart, ArrowRight, Upload } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: Pill, label: "Wide Selection", desc: "Thousands of medicines & healthcare products at your fingertips", color: "#6366f1", bg: "#eef2ff" },
    { icon: DollarSign, label: "Best Prices", desc: "Competitive pricing with regular discounts and exclusive offers", color: "#059669", bg: "#ecfdf5" },
    { icon: Truck, label: "Fast Delivery", desc: "Reliable doorstep delivery, tracked every step of the way", color: "#0ea5e9", bg: "#f0f9ff" },
    { icon: Shield, label: "Genuine Products", desc: "100% authentic medicines sourced from licensed pharmacies", color: "#d97706", bg: "#fffbeb" },
    { icon: Clock, label: "24/7 Service", desc: "Order anytime — our platform never sleeps", color: "#ec4899", bg: "#fdf2f8" },
    { icon: ShoppingCart, label: "Easy Ordering", desc: "Simple, secure checkout in just a few taps", color: "#8b5cf6", bg: "#f5f3ff" },
];

const steps = [
    { n: "01", title: "Upload Prescription", desc: "Snap a photo of your doctor's prescription or browse our catalog", icon: Upload },
    { n: "02", title: "Place Your Order", desc: "Add to cart and complete checkout in under 2 minutes", icon: ShoppingCart },
    { n: "03", title: "Get Delivered", desc: "Receive genuine medicines right at your doorstep", icon: Truck },
];

export default function MedicinePage() {
    return (
        <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        .feat-card { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease; }
        .feat-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1) !important; }
        .step-line { position: relative; }
        .step-line:not(:last-child)::after { content: ''; position: absolute; top: 40px; left: calc(50% + 28px); width: calc(100% - 56px); height: 1px; background: linear-gradient(90deg, #cbd5e1, transparent); }
        .pill-badge { animation: pulseBadge 2s ease-in-out infinite; }
        @keyframes pulseBadge { 0%,100% { opacity: 1; } 50% { opacity: 0.7; } }
        .btn-glow:hover { box-shadow: 0 8px 24px rgba(99,102,241,0.35); transform: translateY(-2px); }
        .btn-glow { transition: all 0.2s ease; }
      `}</style>

            {/* Hero */}
            <div style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)", padding: "80px 24px 120px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -40, right: -60, width: 300, height: 300, background: "rgba(255,255,255,0.03)", borderRadius: "50%" }} />
                <div style={{ position: "absolute", bottom: -80, left: -40, width: 250, height: 250, background: "rgba(255,255,255,0.03)", borderRadius: "50%" }} />

                <div className="pill-badge" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.4)", borderRadius: 999, padding: "5px 14px", marginBottom: 24 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399" }} />
                    <span style={{ fontSize: 12, color: "#6ee7b7", fontWeight: 500, letterSpacing: "0.08em" }}>COMING SOON</span>
                </div>

                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,5vw,56px)", fontWeight: 700, color: "#fff", margin: "0 0 16px", lineHeight: 1.15 }}>
                    Your pharmacy,<br />delivered to your door
                </h1>
                <p style={{ fontSize: 17, color: "#7dd3fc", maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.7 }}>
                    Order prescribed medicines online from verified pharmacies. Safe, convenient, and affordable.
                </p>

                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <button style={{ padding: "14px 28px", borderRadius: 12, background: "#fff", color: "#0c4a6e", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
                        Notify Me <ArrowRight size={15} />
                    </button>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <button style={{ padding: "14px 28px", borderRadius: 12, background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", fontSize: 14, fontWeight: 500 }}>
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>

            {/* Feature Cards */}
            <div style={{ maxWidth: 1100, margin: "-60px auto 0", padding: "0 24px 80px", position: "relative", zIndex: 1 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
                    {features.map((f) => {
                        const Icon = f.icon;
                        return (
                            <div
                                key={f.label}
                                className="feat-card"
                                style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "28px 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}
                            >
                                <div style={{ width: 48, height: 48, background: f.bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                                    <Icon size={20} color={f.color} />
                                </div>
                                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", margin: "0 0 8px" }}>{f.label}</h3>
                                <p style={{ fontSize: 14, color: "#64748b", margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* How it works */}
                <div style={{ marginTop: 80, textAlign: "center" }}>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#94a3b8", marginBottom: 12 }}>THE PROCESS</div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, color: "#0f172a", margin: "0 0 56px" }}>How it works</h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
                        {steps.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <div key={i} className="step-line" style={{ position: "relative", textAlign: "center" }}>
                                    <div style={{ position: "relative", display: "inline-block", marginBottom: 20 }}>
                                        <div style={{ width: 64, height: 64, background: "linear-gradient(135deg, #0c4a6e, #0369a1)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", boxShadow: "0 8px 24px rgba(12,74,110,0.25)" }}>
                                            <Icon size={24} color="#fff" />
                                        </div>
                                        <div style={{ position: "absolute", top: -8, right: -8, width: 22, height: 22, background: "#fff", borderRadius: "50%", border: "1.5px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#64748b" }}>
                                            {s.n}
                                        </div>
                                    </div>
                                    <h3 style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", margin: "0 0 8px" }}>{s.title}</h3>
                                    <p style={{ fontSize: 14, color: "#64748b", margin: "0 auto", lineHeight: 1.6, maxWidth: 200 }}>{s.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div style={{ marginTop: 64, borderRadius: 20, background: "linear-gradient(135deg, #0c4a6e, #0369a1)", padding: "48px 40px", textAlign: "center" }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>Be the first to know</h2>
                    <p style={{ fontSize: 15, color: "#7dd3fc", margin: "0 0 28px" }}>We're partnering with top pharmacies. Leave your email and we'll notify you at launch.</p>
                    <div style={{ display: "flex", maxWidth: 400, margin: "0 auto", gap: 10 }}>
                        <input
                            placeholder="your@email.com"
                            style={{ flex: 1, padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: 14, outline: "none" }}
                        />
                        <button
                            className="btn-glow"
                            style={{ padding: "12px 20px", borderRadius: 10, background: "#fff", color: "#0c4a6e", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}
                        >
                            Notify Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
