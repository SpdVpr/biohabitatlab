import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { blueprints } from "@/data/blueprints";
import styles from "./page.module.css";

export const metadata = {
    title: "Blueprints",
    description:
        "Complete project documentation for bio-optimized spaces. Technical guides for circadian lighting, acoustic isolation, and air quality engineering.",
};

// Define category hero images
const categoryImages: Record<string, string> = {
    "circadian-home-office": "/images/hero-office.png",
    "non-toxic-soundproofing": "/images/tech-led.png",
    "blackout-sleep-sanctuary": "/images/sleep-sanctuary.png",
};

export default function BlueprintsPage() {
    return (
        <>
            <Navigation />
            <main className={styles.main}>
                {/* Hero Header */}
                <section className={styles.header}>
                    <div className="container">
                        <span className="module-id">Protocol Library</span>
                        <h1>The Blueprints</h1>
                        <p className={styles.headerDesc}>
                            Three comprehensive guides to transform your environment. Each blueprint
                            includes the science, the shopping list, and the step-by-step implementation.
                        </p>
                    </div>
                </section>

                {/* Featured Categories */}
                <section className={styles.categoriesSection}>
                    <div className="container">
                        <div className={styles.categoryGrid}>
                            {blueprints.map((bp, index) => (
                                <Link
                                    key={bp.slug}
                                    href={`/blueprints/${bp.slug}`}
                                    className={`${styles.categoryCard} ${bp.category === "light"
                                            ? styles.categoryLight
                                            : bp.category === "sound"
                                                ? styles.categorySound
                                                : styles.categoryRecovery
                                        }`}
                                >
                                    <div className={styles.categoryImage}>
                                        <Image
                                            src={categoryImages[bp.slug] || "/images/hero-office.png"}
                                            alt={bp.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            priority={index === 0}
                                        />
                                        <div className={styles.categoryOverlay} />
                                    </div>
                                    <div className={styles.categoryContent}>
                                        <div className={styles.categoryMeta}>
                                            <span className={styles.categoryNumber}>0{index + 1}</span>
                                            <span className={`tag tag--${bp.category === "light" ? "light" : bp.category === "sound" ? "sound" : "recovery"}`}>
                                                {bp.category}
                                            </span>
                                        </div>
                                        <h2 className={styles.categoryTitle}>{bp.title}</h2>
                                        <p className={styles.categorySubtitle}>{bp.subtitle}</p>
                                        <p className={styles.categoryObjective}>{bp.objective}</p>
                                        <div className={styles.categoryStats}>
                                            <div className={styles.stat}>
                                                <span className={styles.statValue}>{bp.science.length}</span>
                                                <span className={styles.statLabel}>Studies</span>
                                            </div>
                                            <div className={styles.stat}>
                                                <span className={styles.statValue}>{bp.products.length}</span>
                                                <span className={styles.statLabel}>Products</span>
                                            </div>
                                            <div className={styles.stat}>
                                                <span className={styles.statValue}>{bp.steps.length}</span>
                                                <span className={styles.statLabel}>Steps</span>
                                            </div>
                                        </div>
                                        <span className={styles.categoryArrow}>
                                            Read Full Blueprint →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className={styles.howSection}>
                    <div className="container">
                        <div className={styles.howHeader}>
                            <span className="module-id">How It Works</span>
                            <h2>From Science to Implementation</h2>
                            <p className={styles.howDesc}>
                                Each blueprint follows a proven structure to take you from understanding
                                the problem to having a fully optimized space.
                            </p>
                        </div>
                        <div className={styles.howGrid}>
                            <div className={styles.howStep}>
                                <span className={styles.howNumber}>1</span>
                                <h3>Understand the Problem</h3>
                                <p>Learn why your current environment may be working against your biology and performance.</p>
                            </div>
                            <div className={styles.howStep}>
                                <span className={styles.howNumber}>2</span>
                                <h3>Review the Science</h3>
                                <p>See the peer-reviewed research that justifies each recommendation we make.</p>
                            </div>
                            <div className={styles.howStep}>
                                <span className={styles.howNumber}>3</span>
                                <h3>Get the Shopping List</h3>
                                <p>Know exactly what to buy with prices, specs, and explanations for each product.</p>
                            </div>
                            <div className={styles.howStep}>
                                <span className={styles.howNumber}>4</span>
                                <h3>Follow the Steps</h3>
                                <p>Implement with detailed instructions, pro tips, and common mistakes to avoid.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaBox}>
                            <h2>Not Sure Where to Start?</h2>
                            <p>
                                If you work from home, start with the <strong>Circadian Home Office</strong>.
                                It's the foundation that affects everything else—your energy, focus, and sleep.
                            </p>
                            <Link href="/blueprints/circadian-home-office" className="btn btn--primary">
                                Start with Lighting →
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
