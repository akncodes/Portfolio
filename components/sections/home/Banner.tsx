'use client';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ── Inline SVG Wireframe Sphere ──────────────── */
const WireframeSphere = () => (
    <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
    >
        <circle
            cx="200"
            cy="200"
            r="180"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.35"
        />
        <ellipse
            cx="200"
            cy="200"
            rx="180"
            ry="45"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeOpacity="0.25"
        />
        <ellipse
            cx="200"
            cy="200"
            rx="180"
            ry="110"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeOpacity="0.2"
        />
        <ellipse
            cx="200"
            cy="135"
            rx="135"
            ry="30"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeOpacity="0.18"
        />
        <ellipse
            cx="200"
            cy="265"
            rx="135"
            ry="30"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeOpacity="0.18"
        />
        <ellipse
            cx="200"
            cy="200"
            rx="80"
            ry="180"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeOpacity="0.22"
        />
        <ellipse
            cx="200"
            cy="200"
            rx="25"
            ry="180"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeOpacity="0.15"
        />
        <ellipse
            cx="200"
            cy="200"
            rx="140"
            ry="180"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeOpacity="0.2"
        />
        <circle cx="200" cy="200" r="180" fill="url(#sg)" />
        <defs>
            <radialGradient id="sg" cx="38%" cy="32%" r="65%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                <stop
                    offset="70%"
                    stopColor="currentColor"
                    stopOpacity="0.02"
                />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
        </defs>
    </svg>
);

const Banner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sphereRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Staggered entrance
            gsap.fromTo(
                '.hero-in',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.1,
                    stagger: 0.13,
                    ease: 'power3.out',
                    delay: 0.15,
                },
            );

            // Sphere slow rotation
            if (sphereRef.current) {
                gsap.to(sphereRef.current, {
                    rotation: 360,
                    duration: 50,
                    ease: 'none',
                    repeat: -1,
                    transformOrigin: '50% 50%',
                });
            }

            // Scroll away
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            }).to('.slide-up-and-fade', { y: -120, opacity: 0, stagger: 0.02 });
        },
        { scope: containerRef },
    );

    return (
        <section
            id="banner"
            className="relative overflow-hidden"
            style={{ minHeight: '100svh' }}
        >
            {/* ── Subtle top glow ── */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
                style={{
                    width: '80vw',
                    height: '60vh',
                    background:
                        'radial-gradient(ellipse at top, hsl(var(--primary)/10%) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
            />

            {/* ── Dot-grid texture ── */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage:
                        'radial-gradient(circle, hsl(var(--foreground)/8%) 1px, transparent 1px)',
                    backgroundSize: '44px 44px',
                    maskImage:
                        'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
                    WebkitMaskImage:
                        'radial-gradient(ellipse 80% 70% at 50% 40%, black 40%, transparent 100%)',
                }}
            />

            {/* ── Big wireframe sphere (right side) ── */}
            <div
                ref={sphereRef}
                className="absolute pointer-events-none z-0"
                style={{
                    width: 'clamp(400px, 55vw, 750px)',
                    height: 'clamp(400px, 55vw, 750px)',
                    top: '50%',
                    right: 'clamp(-180px, -8vw, -60px)',
                    transform: 'translateY(-50%)',
                    color: 'hsl(var(--primary))',
                    opacity: 0.55,
                    filter: 'drop-shadow(0 0 50px hsl(var(--primary)/18%))',
                }}
            >
                <WireframeSphere />
            </div>

            {/* ── Main content ── */}
            <div
                ref={containerRef}
                className="container relative z-10 flex flex-col justify-center"
                style={{
                    minHeight: '100svh',
                    paddingTop: '6rem',
                    paddingBottom: '5rem',
                }}
            >
                {/* Availability badge */}

                {/* Two-column layout */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-6">
                    {/* LEFT — Headline + bio + CTAs */}
                    <div className="flex-1 max-w-[700px]">
                        <h1
                            className="hero-in slide-up-and-fade font-anton uppercase leading-[0.9] tracking-tight"
                            style={{ fontSize: 'clamp(72px, 8vw, 138px)' }}
                        >
                            <span className="block text-foreground">
                                FULLSTACK
                            </span>
                            {/* Single-hue gradient — mature, editorial */}
                            <span
                                className="block"
                                style={{
                                    background:
                                        'linear-gradient(160deg, hsl(var(--primary)) 30%, hsl(var(--primary)/55%) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                DEVELOPER
                            </span>
                        </h1>

                        <p className="hero-in slide-up-and-fade mt-7 text-base md:text-lg leading-relaxed max-w-[500px] text-muted-foreground">
                            Hi! I&apos;m{' '}
                            <span className="font-semibold text-foreground relative inline-block group cursor-default">
                                Abhishek KUMAR NIGAM
                                <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </span>
                            . A Web Developer &amp; EE student building scalable
                            web applications, efficient RESTful APIs, and
                            shipping ideas into real products.
                        </p>

                        <style>{`
                            .btn-primary-refined {
                                position: relative;
                                overflow: hidden;
                                transition: transform 350ms cubic-bezier(0.23,1,0.32,1),
                                            box-shadow 350ms cubic-bezier(0.23,1,0.32,1);
                            }
                            .btn-primary-refined::before {
                                content: '';
                                position: absolute;
                                top: 0; left: -100%;
                                width: 60%; height: 100%;
                                background: linear-gradient(120deg, transparent, rgba(255,255,255,0.22), transparent);
                                transform: skewX(-18deg);
                                transition: left 500ms cubic-bezier(0.23,1,0.32,1);
                                pointer-events: none;
                            }
                            .btn-primary-refined:hover::before { left: 150%; }
                            .btn-primary-refined:hover {
                                transform: translateY(-2px);
                                box-shadow: 0 8px 28px hsl(var(--primary)/40%), 0 2px 8px hsl(var(--primary)/20%), 0 1px 0 rgba(255,255,255,0.18) inset !important;
                            }
                            .btn-primary-refined:active {
                                transform: translateY(1px) !important;
                                box-shadow: 0 2px 8px hsl(var(--primary)/20%) !important;
                                transition-duration: 80ms;
                            }
                            .btn-ghost-refined {
                                position: relative;
                                overflow: hidden;
                                transition: transform 350ms cubic-bezier(0.23,1,0.32,1),
                                            box-shadow 350ms cubic-bezier(0.23,1,0.32,1),
                                            border-color 350ms ease,
                                            background 350ms ease;
                            }
                            .btn-ghost-refined::before {
                                content: '';
                                position: absolute;
                                top: 0; left: -100%;
                                width: 60%; height: 100%;
                                background: linear-gradient(120deg, transparent, rgba(255,255,255,0.07), transparent);
                                transform: skewX(-18deg);
                                transition: left 500ms cubic-bezier(0.23,1,0.32,1);
                                pointer-events: none;
                            }
                            .btn-ghost-refined:hover::before { left: 150%; }
                            .btn-ghost-refined:hover {
                                transform: translateY(-2px);
                                border-color: hsl(var(--primary)/45%) !important;
                                background: rgba(255,255,255,0.08) !important;
                                box-shadow: 0 8px 28px rgba(0,0,0,0.28), 0 0 0 1px hsl(var(--primary)/18%) !important;
                            }
                            .btn-ghost-refined:active {
                                transform: translateY(1px) !important;
                                box-shadow: 0 2px 6px rgba(0,0,0,0.2) !important;
                                transition-duration: 80ms;
                            }
                        `}</style>

                        <div className="hero-in slide-up-and-fade mt-10 flex flex-wrap gap-5">
                            {/* Refined Primary CTA — Hire Me */}
                            <a
                                href={GENERAL_INFO.linkedInProfile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary-refined inline-flex items-center justify-center font-anton uppercase rounded-lg select-none"
                                style={{
                                    height: '52px',
                                    padding: '0 2.2rem',
                                    /* White solid — premium & restraint */
                                    background: 'hsl(0 0% 96%)',
                                    color: 'hsl(0 0% 6%)',
                                    letterSpacing: '0.14em',
                                    fontSize: '0.9rem',
                                    boxShadow:
                                        '0 2px 12px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.5) inset',
                                }}
                            >
                                Hire Me
                            </a>

                            {/* Refined Ghost CTA — View Projects */}
                            <a
                                href="#projects"
                                className="btn-ghost-refined inline-flex items-center justify-center font-anton uppercase rounded-lg select-none"
                                style={{
                                    height: '52px',
                                    padding: '0 2.2rem',
                                    background: 'rgba(255,255,255,0.04)',
                                    backdropFilter: 'blur(12px)',
                                    color: 'hsl(var(--foreground))',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    letterSpacing: '0.14em',
                                    fontSize: '0.9rem',
                                    boxShadow:
                                        '0 4px 16px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.06) inset',
                                }}
                            >
                                View Projects
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — Stat cards */}
                    <div className="flex flex-row lg:flex-col gap-4 lg:w-[270px] shrink-0 max-md:flex-wrap">
                        {[
                            {
                                icon: '🎓',
                                value: '3rd Year',
                                label: 'EE Student',
                                hue: 'var(--primary)',
                            },
                            {
                                icon: '🖥️',
                                value: '5+ Projects',
                                label: 'Live & Shipped',
                                hue: 'var(--primary)',
                            },
                            {
                                icon: '☁️',
                                value: '29 Badges',
                                label: 'Cloud Mastery',
                                hue: 'var(--primary)',
                            },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="hero-in slide-up-and-fade relative flex items-center gap-4 p-5 rounded-2xl cursor-default transition-all duration-400 flex-1 lg:flex-none"
                                style={{
                                    background: 'hsl(var(--foreground)/4%)',
                                    border: '1px solid hsl(var(--foreground)/8%)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = 'translateY(-5px)';
                                    el.style.border = `1px solid hsl(${stat.hue}/35%)`;
                                    el.style.boxShadow = `0 12px 36px rgba(0,0,0,0.35), 0 0 0 1px hsl(${stat.hue}/20%)`;
                                    el.style.background = `hsl(${stat.hue}/6%)`;
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = 'translateY(0)';
                                    el.style.border =
                                        '1px solid hsl(var(--foreground)/8%)';
                                    el.style.boxShadow =
                                        '0 4px 24px rgba(0,0,0,0.25)';
                                    el.style.background =
                                        'hsl(var(--foreground)/4%)';
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                    style={{
                                        background: `hsl(${stat.hue}/12%)`,
                                        border: `1px solid hsl(${stat.hue}/20%)`,
                                    }}
                                >
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="font-anton text-xl text-foreground leading-none tracking-wide">
                                        {stat.value}
                                    </p>
                                    <p className="text-[11px] uppercase tracking-[0.18em] mt-1.5 text-muted-foreground">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
                    <span className="text-[9px] uppercase tracking-[0.35em]">
                        scroll
                    </span>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="animate-bounce"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Banner;
