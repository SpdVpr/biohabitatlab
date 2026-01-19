import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/JsonLd";
import { studies } from "@/data/science";
import styles from "./page.module.css";

export const metadata = {
    title: "Science Ledger",
    description:
        "Peer-reviewed research database for bio-optimization protocols. Scientific evidence for circadian lighting, air quality, and acoustic engineering.",
};

// Group studies by category
const lightStudies = studies.filter(s => s.tags.includes("light"));
const airStudies = studies.filter(s => s.tags.includes("air"));
const soundStudies = studies.filter(s => s.tags.includes("sound"));

export default function SciencePage() {
    // ItemList + ScholarlyArticle JSON-LD for GEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Bio-Optimization Science Ledger",
        description:
            "Peer-reviewed research database supporting BioHabitat Lab protocols",
        numberOfItems: studies.length,
        itemListElement: studies.map((study, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "ScholarlyArticle",
                name: study.title,
                author: study.authors,
                datePublished: study.year.toString(),
                publisher: study.journal,
                abstract: study.summary,
                sameAs: `https://doi.org/${study.doi}`,
            },
        })),
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <Navigation />
            <main className={styles.main}>
                {/* Hero Header */}
                <section className={styles.header}>
                    <div className="container">
                        <span className="module-id">Research Database</span>
                        <h1>Science Ledger</h1>
                        <p className={styles.headerDesc}>
                            Every protocol in our library is backed by peer-reviewed research.
                            Browse the scientific foundation behind our recommendations.
                        </p>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>{studies.length}</span>
                                <span className={styles.statLabel}>Studies</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>{lightStudies.length}</span>
                                <span className={styles.statLabel}>Light & Sleep</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>{airStudies.length}</span>
                                <span className={styles.statLabel}>Air Quality</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>{soundStudies.length}</span>
                                <span className={styles.statLabel}>Acoustics</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why This Matters */}
                <section className={styles.whySection}>
                    <div className="container">
                        <div className={styles.whyGrid}>
                            <div className={styles.whyContent}>
                                <h2>Why Science-Based Design Matters</h2>
                                <p>
                                    Most "optimal workspace" advice is based on opinion or marketing claims.
                                    We take a different approach: every recommendation in our blueprints is
                                    traceable to published, peer-reviewed research.
                                </p>
                                <p>
                                    Whether it's the specific color temperature for morning alertness or the
                                    CO₂ threshold that impacts decision-making, our protocols are designed
                                    to deliver measurable improvements to your cognitive performance and wellbeing.
                                </p>
                            </div>
                            <div className={styles.whyHighlights}>
                                <div className={styles.highlight}>
                                    <span className={styles.highlightIcon}>📊</span>
                                    <div>
                                        <strong>Quantified Results</strong>
                                        <p>Studies show specific metrics like "23% faster sleep onset" or "50% reduction in decision errors"</p>
                                    </div>
                                </div>
                                <div className={styles.highlight}>
                                    <span className={styles.highlightIcon}>🔬</span>
                                    <div>
                                        <strong>Peer-Reviewed Sources</strong>
                                        <p>Research from journals like The Lancet, PNAS, and Nature</p>
                                    </div>
                                </div>
                                <div className={styles.highlight}>
                                    <span className={styles.highlightIcon}>🔗</span>
                                    <div>
                                        <strong>Direct Citations</strong>
                                        <p>Every study links to the original DOI for verification</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Studies Grid */}
                <section className={styles.studiesSection}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>Research Library</h2>
                        <div className={styles.studyGrid}>
                            {studies.map((study) => (
                                <article key={study.id} className={styles.studyCard}>
                                    <div className={styles.studyHeader}>
                                        <span className={styles.studyYear}>{study.year}</span>
                                        <div className={styles.studyTags}>
                                            {study.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className={`tag tag--${tag === "light" || tag === "sleep" ? "light" : tag === "sound" ? "sound" : "air"}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <h3 className={styles.studyTitle}>{study.title}</h3>
                                    <p className={styles.studyAuthors}>{study.authors}</p>
                                    <p className={styles.studyJournal}>{study.journal}</p>
                                    <div className={styles.studySummaryBox}>
                                        <p className={styles.studySummary}>{study.summary}</p>
                                    </div>
                                    <a
                                        href={`https://doi.org/${study.doi}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.doiLink}
                                    >
                                        View Original Study →
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaBox}>
                            <h2>Ready to Apply the Science?</h2>
                            <p>
                                Our blueprints translate this research into actionable setups you can
                                implement in your home or office today.
                            </p>
                            <a href="/blueprints" className="btn btn--primary">
                                View Blueprints →
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
