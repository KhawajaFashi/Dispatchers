"use client";

import { useState } from "react";

const socials = [
    { name: "Facebook", url: "https://facebook.com", icon: "fab fa-facebook-f", color: "#4267B2" },
    { name: "Instagram", url: "https://instagram.com", icon: "fab fa-instagram", color: "#E1306C" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "fab fa-linkedin-in", color: "#0077B5" },
    { name: "X", url: "https://x.com", icon: "fab fa-x-twitter", color: "#000" },
    { name: "WhatsApp", url: "https://wa.me", icon: "fab fa-whatsapp", color: "#25D366" },
];

export default function SocialWheel() {
    const [open, setOpen] = useState(false);

    // Calculate positions for circular layout (quarter circle, above main button)
    const radius = 72; // slightly smaller for better fit
    const angleStart = Math.PI * 0.75; // 135deg
    const angleEnd = Math.PI * 2.25; // 405deg
    const angleStep = (angleEnd - angleStart) / (socials.length - 1);

    return (
        <div className="fixed bottom-8 right-8 z-50 select-none">
            <div className="relative w-16 h-16 flex items-center justify-center">
                {/* Social Wheel with animation */}
                <div className="inset-0 flex items-center justify-center">
                    {socials.map((social, i) => {
                        const angle = angleStart + i * angleStep;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    position: "absolute",
                                    left: `calc(50% + ${x}px - 70px)`,
                                    top: `calc(50% + ${y}px - 35px)`,
                                    background: social.color,
                                    opacity: open ? 1 : 0,
                                    transform: open
                                        ? `scale(1) translate(0,0)`
                                        : `scale(0.5) translate(0,0)`,
                                    transition:
                                        "opacity 1s cubic-bezier(.68,-0.55,.27,1.55), transform 1s cubic-bezier(.68,-0.55,.27,1.55)",
                                    pointerEvents: open ? "auto" : "none",
                                }}
                                className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110"
                            >
                                <i className={social.icon + " text-xl"}></i>
                            </a>
                        );
                    })}
                </div>
                {/* Main Button */}
                <button
                    className="relative"
                    style={{
                        right: "3rem",
                        bottom: "1rem",
                        transform: open
                            ? `translate(0,0)`
                            : `translate(60px,40px)`,
                        transition: "transform 0.5s",
                        cursor: "pointer",
                    }}
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Open social wheel"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="black"/>
                        <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
            {/* Font Awesome CDN for icons */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        </div>
    );
}
