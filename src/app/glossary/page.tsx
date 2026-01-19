import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/JsonLd";
import { glossary } from "@/data/glossary";
import styles from "./page.module.css";

export const metadata = {
    title: "Glossary",
    description:
        "Technical definitions for bio-optimization terminology. Comprehensive reference for CRI, CCT, Lux, CO₂, RT60, and other key metrics.",
};

const categories = ["Light", "Air", "Sound", "General"] as const;

export default function GlossaryPage() {
    // DefinedTermSet JSON-LD for GEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: "Bio-Optimization Glossary",
        description:
            "Technical definitions for environmental optimization terminology",
        hasDefinedTerm: glossary.map((term) => ({
            "@type": "DefinedTerm",
            name: term.term,
            description: term.definition,
            inDefinedTermSet: "https://biohabitatlab.com/glossary",
        })),
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <Navigation />
            <main className={styles.main}>
                <section className={styles.header}>
                    <div className="container">
                        <span className="module-id">Reference</span>
                        <h1>Technical Glossary</h1>
                        <p className="abstract">
                            Standardized definitions for bio-optimization terminology. These
                            terms are used consistently across all blueprints and scientific
                            references.
                        </p>
                    </div>
                </section>

                <section className={styles.glossarySection}>
                    <div className="container">
                        {categories.map((category) => {
                            const terms = glossary.filter((t) => t.category === category);
                            if (terms.length === 0) return null;

                            return (
                                <div key={category} className={styles.categoryBlock}>
                                    <h2 className={styles.categoryTitle}>
                                        <span
                                            className={`tag tag--${category === "Light"
                                                ? "light"
                                                : category === "Sound"
                                                    ? "sound"
                                                    : "air"
                                                }`}
                                        >
                                            {category}
                                        </span>
                                    </h2>
                                    <dl className={styles.termsList}>
                                        {terms.map((term) => (
                                            <div key={term.term} className={styles.termItem}>
                                                <dt className={styles.term}>
                                                    {term.term}
                                                    {term.unit && (
                                                        <span className={styles.unit}>{term.unit}</span>
                                                    )}
                                                </dt>
                                                <dd className={styles.definition}>{term.definition}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </>
    );
}
