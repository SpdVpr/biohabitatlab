import { Product } from "@/data/blueprints";

type TechStackProps = {
    products: Product[];
};

export function TechStack({ products }: TechStackProps) {
    return (
        <div className="tech-stack">
            <table className="data-matrix">
                <thead>
                    <tr>
                        <th>Component</th>
                        <th>Role</th>
                        <th>Key Specification</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>
                                {product.name}
                            </td>
                            <td>{product.role}</td>
                            <td>{product.spec}</td>
                            <td>
                                {product.link !== "#" ? (
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn"
                                        style={{ padding: "0.25rem 0.75rem", fontSize: "0.75rem" }}
                                    >
                                        View →
                                    </a>
                                ) : (
                                    <span className="text-muted">Coming Soon</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
