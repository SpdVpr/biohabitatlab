import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { blueprints } from "@/data/blueprints";
import styles from "./page.module.css";

const pillars = [
  {
    id: "A-01",
    title: "Lighting Protocols",
    description: "Circadian synchronization, High-CRI optimization, and melatonin protection strategies for peak cognitive performance.",
    href: "/blueprints?category=light",
    accent: "focus",
  },
  {
    id: "B-02",
    title: "Environmental Engineering",
    description: "CO₂ management, HEPA filtration, and non-toxic air quality solutions for optimal brain function.",
    href: "/blueprints?category=air",
    accent: "default",
  },
  {
    id: "C-03",
    title: "The Blueprints",
    description: "Complete project documentation with scientific backing, hardware specifications, and step-by-step implementation guides.",
    href: "/blueprints",
    accent: "default",
  },
  {
    id: "D-04",
    title: "Science Ledger",
    description: "Peer-reviewed evidence database linking each protocol to clinical research and measurable outcomes.",
    href: "/science",
    accent: "recovery",
  },
];

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        {/* Hero Section - Premium & Inviting */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className="module-id">Bio-Optimization Lab</span>
              <h1 className={styles.heroTitle}>
                BioHabitat Lab
              </h1>
              <p className={styles.heroSubtitle}>
                Engineer your environment for peak performance
              </p>
              <p className={styles.heroDescription}>
                Scientific protocols for circadian lighting, air quality optimization,
                and acoustic engineering. Transform any space into a high-performance
                environment backed by peer-reviewed research.
              </p>
              <div className={styles.heroCta}>
                <Link href="/blueprints" className="btn btn--primary">
                  Explore Blueprints
                </Link>
                <Link href="/science" className="btn">
                  View Research
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/hero-office.png"
                alt="High-end modern home office with cinematic lighting"
                width={600}
                height={400}
                className={styles.heroImg}
                priority
              />
            </div>
          </div>
        </section>

        {/* 4 Pillars Grid */}
        <section className={styles.pillarsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className="module-id">Foundation</span>
              <h2>The Four Pillars of Bio-Optimization</h2>
              <p className="abstract">
                Every environment optimization starts with four core systems.
                Master these fundamentals to transform your space.
              </p>
            </div>
            <div className={styles.pillarsGrid}>
              {pillars.map((pillar) => (
                <Link
                  key={pillar.id}
                  href={pillar.href}
                  className={`${styles.pillar} ${pillar.accent === "focus"
                    ? styles.pillarFocus
                    : pillar.accent === "recovery"
                      ? styles.pillarRecovery
                      : ""
                    }`}
                >
                  <span className={styles.pillarId}>{pillar.id}</span>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.description}</p>
                  <span className={styles.pillarArrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blueprints */}
        <section className={styles.blueprintsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className="module-id">Featured Projects</span>
              <h2>Ready-to-Implement Blueprints</h2>
              <p className="abstract">
                Complete system documentation with scientific justification,
                hardware specifications, and step-by-step implementation guides.
              </p>
            </div>
            <div className={styles.blueprintsList}>
              {blueprints.slice(0, 3).map((bp, index) => (
                <Link
                  key={bp.slug}
                  href={`/blueprints/${bp.slug}`}
                  className={styles.blueprintCard}
                >
                  {index === 0 && (
                    <div className={styles.blueprintImage}>
                      <Image
                        src="/images/hero-office.png"
                        alt={bp.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  {index === 2 && (
                    <div className={styles.blueprintImage}>
                      <Image
                        src="/images/sleep-sanctuary.png"
                        alt={bp.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <div className={styles.blueprintContent}>
                    <span className={`tag tag--${bp.category === "light" ? "light" : bp.category === "sound" ? "sound" : bp.category === "recovery" ? "recovery" : "air"}`}>
                      {bp.category}
                    </span>
                    <h3 className={styles.blueprintTitle}>{bp.title}</h3>
                    <p className={styles.blueprintSubtitle}>{bp.subtitle}</p>
                    <div className={styles.blueprintStats}>
                      <span>{bp.science.length} Studies</span>
                      <span>{bp.products.length} Components</span>
                      <span>{bp.steps.length} Steps</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Feature */}
        <section className={styles.techSection}>
          <div className="container">
            <div className={styles.techGrid}>
              <div className={styles.techImage}>
                <Image
                  src="/images/tech-led.png"
                  alt="High-CRI LED technology"
                  width={500}
                  height={500}
                  className={styles.techImg}
                />
              </div>
              <div className={styles.techContent}>
                <span className="module-id">The Science</span>
                <h2>Precision-Engineered Solutions</h2>
                <p>
                  Every recommendation is backed by peer-reviewed research. We analyze
                  technical specifications like CRI ratings, spectral power distribution,
                  and melanopic equivalent daylight illuminance to ensure optimal
                  biological responses.
                </p>
                <ul className={styles.techList}>
                  <li>
                    <strong>CRI 95+</strong> — Optimal color rendering for reduced
                    visual cortex strain
                  </li>
                  <li>
                    <strong>2700K–6500K Range</strong> — Full circadian spectrum
                    for day/night optimization
                  </li>
                  <li>
                    <strong>Zero Flicker</strong> — PWM-free solutions to eliminate
                    subliminal stress
                  </li>
                </ul>
                <Link href="/glossary" className="btn">
                  View Technical Glossary
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
