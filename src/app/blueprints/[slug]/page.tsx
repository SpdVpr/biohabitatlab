import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { JsonLd } from "@/components/JsonLd";
import { DataMatrix } from "@/components/DataMatrix";
import { blueprints } from "@/data/blueprints";
import styles from "./page.module.css";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return blueprints.map((bp) => ({
        slug: bp.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blueprint = blueprints.find((bp) => bp.slug === slug);

    if (!blueprint) {
        return { title: "Blueprint Not Found" };
    }

    return {
        title: `${blueprint.title} | Complete Guide`,
        description: blueprint.objective,
    };
}

export default async function BlueprintPage({ params }: Props) {
    const { slug } = await params;
    const blueprint = blueprints.find((bp) => bp.slug === slug);

    if (!blueprint) {
        notFound();
    }

    // Choose image based on blueprint
    const heroImage =
        blueprint.category === "recovery"
            ? "/images/sleep-sanctuary.png"
            : blueprint.category === "light"
                ? "/images/hero-office.png"
                : "/images/tech-led.png";


    // Combined HowTo + FAQPage JSON-LD Schema for GEO
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: blueprint.title,
            description: blueprint.objective,
            step: blueprint.steps.map((step, index) => ({
                "@type": "HowToStep",
                position: index + 1,
                text: step,
            })),
            tool: blueprint.products.map((product) => ({
                "@type": "HowToTool",
                name: product.name,
            })),
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: blueprint.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        },
    ];


    return (
        <>
            <JsonLd data={jsonLd} />
            <Navigation />
            <main className={styles.main}>
                {/* Hero Header */}
                <header className={styles.header}>
                    <div className={styles.headerGrid}>
                        <div className={styles.headerContent}>
                            <div className={styles.breadcrumb}>
                                <Link href="/blueprints" className={styles.breadcrumbLink}>
                                    ← All Blueprints
                                </Link>
                            </div>
                            <span className={`tag tag--${blueprint.category === "light" ? "light" : blueprint.category === "sound" ? "sound" : blueprint.category === "recovery" ? "recovery" : "air"}`}>
                                {blueprint.category}
                            </span>
                            <h1 className={styles.title}>{blueprint.title}</h1>
                            <p className={styles.subtitle}>{blueprint.subtitle}</p>
                            <p className={styles.objective}>{blueprint.objective}</p>
                            <div className={styles.quickStats}>
                                <div className={styles.quickStat}>
                                    <span className={styles.quickStatValue}>{blueprint.science.length}</span>
                                    <span className={styles.quickStatLabel}>Studies Cited</span>
                                </div>
                                <div className={styles.quickStat}>
                                    <span className={styles.quickStatValue}>{blueprint.products.length}</span>
                                    <span className={styles.quickStatLabel}>Products</span>
                                </div>
                                <div className={styles.quickStat}>
                                    <span className={styles.quickStatValue}>{blueprint.steps.length}</span>
                                    <span className={styles.quickStatLabel}>Steps</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.headerImage}>
                            <Image
                                src={heroImage}
                                alt={blueprint.title}
                                width={600}
                                height={400}
                                className={styles.heroImg}
                                priority
                            />
                        </div>
                    </div>
                </header>

                {/* Table of Contents */}
                <nav className={styles.toc}>
                    <div className="container">
                        <div className={styles.tocInner}>
                            <span className={styles.tocLabel}>Jump to:</span>
                            <a href="#problem" className={styles.tocLink}>The Problem</a>
                            <a href="#solution" className={styles.tocLink}>The Solution</a>
                            <a href="#science" className={styles.tocLink}>Science</a>
                            <a href="#products" className={styles.tocLink}>What to Buy</a>
                            <a href="#steps" className={styles.tocLink}>How to Implement</a>
                            <a href="#tips" className={styles.tocLink}>Tips</a>
                        </div>
                    </div>
                </nav>

                {/* Who Is This For */}
                <section className={styles.section} id="who">
                    <div className="container">
                        <div className={styles.twoCol}>
                            <div>
                                <span className="module-id">Is This For You?</span>
                                <h2>Who Should Follow This Blueprint</h2>
                                <ul className={styles.checkList}>
                                    {blueprint.whoIsThisFor.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <span className="module-id">Results</span>
                                <h2>What You Can Expect</h2>
                                <ul className={styles.resultList}>
                                    {blueprint.expectedResults.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Problem */}
                <section className={styles.sectionAlt} id="problem">
                    <div className="container">
                        <div className={styles.centeredContent}>
                            <span className="module-id">Understanding the Issue</span>
                            <h2>The Problem</h2>
                            <p className={styles.longText}>{blueprint.problemStatement}</p>
                        </div>
                    </div>
                </section>

                {/* The Solution */}
                <section className={styles.section} id="solution">
                    <div className="container">
                        <div className={styles.centeredContent}>
                            <span className="module-id">Our Approach</span>
                            <h2>The Solution</h2>
                            <p className={styles.longText}>{blueprint.solutionOverview}</p>
                        </div>
                    </div>
                </section>

                {/* Science */}
                <section className={styles.sectionAlt} id="science">
                    <div className="container">
                        <span className="module-id">Evidence Base</span>
                        <h2>The Science Behind This Protocol</h2>
                        <div className={styles.scienceGrid}>
                            {blueprint.science.map((item, index) => (
                                <div key={index} className={styles.scienceCard}>
                                    <p className={styles.sciencePoint}>{item.point}</p>
                                    <cite className={styles.scienceStudy}>{item.study}</cite>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* System Matrix */}
                <section className={styles.section}>
                    <div className="container">
                        <span className="module-id">Configuration</span>
                        <h2>System Parameters</h2>
                        <p className={styles.sectionIntro}>
                            These are the specific targets this blueprint aims to achieve. Use these values when configuring your setup.
                        </p>
                        <DataMatrix
                            data={blueprint.matrix}
                            variant={blueprint.category === "light" || blueprint.category === "recovery" ? "circadian" : "technical"}
                        />
                    </div>
                </section>

                {/* Products - What to Buy */}
                <section className={styles.sectionAlt} id="products">
                    <div className="container">
                        <span className="module-id">Shopping Guide</span>
                        <h2>What You Need to Buy</h2>
                        <p className={styles.sectionIntro}>
                            These are our recommended products. Each has been selected for a specific reason—read the explanations to understand why.
                        </p>
                        <div className={styles.productGrid}>
                            {blueprint.products.map((product, index) => (
                                <div key={index} className={styles.productCard}>
                                    <div className={styles.productHeader}>
                                        <span className={styles.productNumber}>{index + 1}</span>
                                        <div>
                                            <h3 className={styles.productName}>{product.name}</h3>
                                            <p className={styles.productRole}>{product.role}</p>
                                        </div>
                                        {product.price && (
                                            <span className={styles.productPrice}>{product.price}</span>
                                        )}
                                    </div>
                                    <div className={styles.productSpec}>
                                        <strong>Key Specs:</strong> {product.spec}
                                    </div>
                                    {product.whyThisOne && (
                                        <p className={styles.productWhy}>{product.whyThisOne}</p>
                                    )}
                                    {product.link !== "#" && (
                                        <a href={product.link} target="_blank" rel="noopener noreferrer" className={styles.productLink}>
                                            View on Amazon →
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Implementation Steps */}
                <section className={styles.section} id="steps">
                    <div className="container">
                        <span className="module-id">Implementation Guide</span>
                        <h2>Step-by-Step Instructions</h2>
                        <p className={styles.sectionIntro}>
                            Follow these steps in order. Each builds on the previous one.
                        </p>
                        <ol className={styles.stepsList}>
                            {blueprint.steps.map((step, index) => (
                                <li key={index} className={styles.step}>
                                    <span className={styles.stepNumber}>{index + 1}</span>
                                    <p className={styles.stepText}>{step}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Pro Tips */}
                <section className={styles.sectionAlt} id="tips">
                    <div className="container">
                        <div className={styles.twoCol}>
                            <div>
                                <span className="module-id">Optimization</span>
                                <h2>Pro Tips</h2>
                                <ul className={styles.tipList}>
                                    {blueprint.tips.map((tip, index) => (
                                        <li key={index}>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <span className="module-id">Avoid These</span>
                                <h2>Common Mistakes</h2>
                                <ul className={styles.mistakeList}>
                                    {blueprint.commonMistakes.map((mistake, index) => (
                                        <li key={index}>{mistake}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.section} id="faq">
                    <div className="container">
                        <span className="module-id">Common Questions</span>
                        <h2>Frequently Asked Questions</h2>
                        <div className={styles.faqGrid}>
                            {blueprint.faq.map((item, index) => (
                                <details key={index} className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        {item.question}
                                    </summary>
                                    <p className={styles.faqAnswer}>{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.cta}>

                    <div className="container">
                        <div className={styles.ctaBox}>
                            <h2>Ready to Implement?</h2>
                            <p>
                                Bookmark this page for reference during setup. When you've completed
                                this blueprint, explore our other optimization protocols.
                            </p>
                            <div className={styles.ctaButtons}>
                                <Link href="/blueprints" className="btn btn--primary">
                                    Browse All Blueprints
                                </Link>
                                <Link href="/science" className="btn">
                                    View Research
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
