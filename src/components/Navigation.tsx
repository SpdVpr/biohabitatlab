"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Lab Hub" },
    { href: "/blueprints", label: "Blueprints" },
    { href: "/science", label: "Science Ledger" },
    { href: "/glossary", label: "Glossary" },
];

export function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="nav">
            <div className="container nav__inner">
                <Link href="/" className="nav__brand">
                    <span className="nav__brand-mark" />
                    BioHabitat Lab
                </Link>
                <ul className="nav__links">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`nav__link ${pathname === link.href ? "nav__link--active" : ""
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
