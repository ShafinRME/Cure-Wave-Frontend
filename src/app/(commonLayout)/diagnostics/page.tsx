/* eslint-disable react/no-unescaped-entities */
"use client";
import { Activity, Bone, Brain, FileText, Heart, Microscope, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const services = [
    { icon: Activity, label: "Blood Tests", desc: "CBC, lipid profile, diabetes screening & more", count: "50+", color: "#ef4444", bg: "#fef2f2" },
    { icon: Heart, label: "Cardiac Tests", desc: "ECG, Echo, stress tests, cardiac markers", count: "15+", color: "#f43f5e", bg: "#fff1f2" },
    { icon: Brain, label: "Imaging", desc: "X-Ray, MRI, CT Scan, Ultrasound", count: "20+", color: "#8b5cf6", bg: "#f5f3ff" },
    { icon: Microscope, label: "Pathology", desc: "Urine, stool, culture tests, biopsies", count: "40+", color: "#0ea5e9", bg: "#f0f9ff" },
    { icon: Bone, label: "Radiology", desc: "Bone density, mammography, specialized imaging", count: "10+", color: "#f59e0b", bg: "#fffbeb" },
    { icon: FileText, label: "Health Packages", desc: "Comprehensive checkup packages for all ages", count: "8+", color: "#10b981", bg: "#ecfdf5" },
];

const whyUs = [
    { title: "Accredited Labs", desc: "Certified by national and international bodies" },
    { title: "Home Sample Collection", desc: "Trained phlebotomists come to your doorstep" },
    { title: "Digital Reports", desc: "Access results online anytime, anywhere" },
    { title: "Affordable Pricing", desc: "Competitive rates with package discounts" },
];

export default function DiagnosticsPage() {
    return (
        <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        .svc-card { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease; cursor: default; }
        .svc-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(0,0,0,0.1) !important; }
        .svc-card:hover .svc-icon { transform: scale(1.1) rotate(-5deg); }
        .svc-icon { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .why-row { transition: background 0.2s; border-radius: 12px; }
        .why-row:hover { background: #f1f5f9; }
        .count-badge { animation: countPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        @keyframes countPop { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>

            {/* Hero */}
            <div style={{ background: "linear-gradient(160deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)", padding: "80px 24px 100px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                {[{ s: 200, t: -60, r: -40, o: 0.04 }, { s: 150, b: -30, l: 80, o: 0.03 }, { s: 80, t: 40, l: "30%", o: 0.05 }].map((c, i) => (
                    <div key={i} style={{ position: "absolute", width: c.s, height: c.s, top: c.t, bottom: c.b, left: c.l, right: c.r, background: `rgba(255,255,255,${c.o})`, borderRadius: "50%" }} />
                ))}

                <div style={{ position: "relative" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(167,139,250,0.2)", border: "1px solid rgba(167,139,250,0.4)", borderRadius: 999, padding: "5px 14px", marginBottom: 24 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a78bfa", animation: "pulseDot 2s ease-in-out infinite" }} />
                        <span style={{ fontSize: 12, color: "#c4b5fd", fontWeight: 500, letterSpacing: "0.08em" }}>COMING SOON</span>
                    </div>
                    <style>{`@keyframes pulseDot { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>

                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,5vw,56px)", fontWeight: 700, color: "#fff", margin: "0 0 16px", lineHeight: 1.15 }}>
                        Diagnostics you can<br />trust at your fingertips
                    </h1>
                    <p style={{ fontSize: 17, color: "#a5b4fc", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
                        Book tests online, get samples collected at home, and receive digital reports within hours.
                    </p>

                    <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 40, flexWrap: "wrap" }}>
                        {["140+ Tests Available", "Home Collection", "Digital Reports"].map((stat) => (
                            <div key={stat} style={{ fontSize: 13, color: "#c7d2fe", display: "flex", alignItems: "center", gap: 6 }}>
                                <CheckCircle size={14} color="#818cf8" /> {stat}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Grid */}
            <div style={{ maxWidth: 1100, margin: "-48px auto 0", padding: "0 24px 80px", position: "relative", zIndex: 1 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
                    {services.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.label}
                                className="svc-card"
                                style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "28px 24px", boxShadow: "0 4px 16px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden" }}
                            >
                                <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: s.bg, borderRadius: "0 0 0 80px", opacity: 0.6 }} />
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                                    <div className="svc-icon" style={{ width: 48, height: 48, background: s.bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Icon size={22} color={s.color} />
                                    </div>
                                    <div className="count-badge" style={{ background: s.bg, color: s.color, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 999, border: `1px solid ${s.color}22` }}>
                                        {s.count} tests
                                    </div>
                                </div>
                                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", margin: "0 0 6px" }}>{s.label}</h3>
                                <p style={{ fontSize: 14, color: "#64748b", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Why Us */}
                <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
                    <div>
                        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#94a3b8", marginBottom: 12 }}>WHY CHOOSE US</div>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 700, color: "#0f172a", margin: "0 0 32px", lineHeight: 1.25 }}>
                            Diagnostics built on trust & precision
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                            {whyUs.map((w) => (
                                <div key={w.title} className="why-row" style={{ padding: "14px 16px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                                    <div style={{ width: 28, height: 28, background: "#ede9fe", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                                        <CheckCircle size={14} color="#7c3aed" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", marginBottom: 2 }}>{w.title}</div>
                                        <div style={{ fontSize: 13, color: "#64748b" }}>{w.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ background: "linear-gradient(145deg, #1e1b4b, #312e81)", borderRadius: 20, padding: "40px 36px", textAlign: "center" }}>
                        <div style={{ width: 56, height: 56, background: "rgba(167,139,250,0.2)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                            <Microscope size={24} color="#a78bfa" />
                        </div>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#fff", margin: "0 0 12px" }}>Launching Soon</h3>
                        <p style={{ fontSize: 14, color: "#a5b4fc", margin: "0 0 28px", lineHeight: 1.6 }}>
                            We're partnering with top diagnostic labs to bring you the most accurate testing services.
                        </p>
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <button style={{ padding: "12px 24px", borderRadius: 10, background: "#fff", color: "#312e81", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
                                Back to Home <ArrowRight size={14} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
