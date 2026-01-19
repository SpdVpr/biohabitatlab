import { Blueprint, MatrixRow } from "@/data/blueprints";

type DataMatrixProps = {
    data: MatrixRow[];
    variant?: "circadian" | "technical";
};

export function DataMatrix({ data, variant = "circadian" }: DataMatrixProps) {
    const isCircadian = variant === "circadian";

    return (
        <div className="matrix-wrapper">
            <table className="data-matrix">
                <thead>
                    <tr>
                        <th>{isCircadian ? "Time Window" : "Requirement"}</th>
                        <th>{isCircadian ? "CCT (K)" : "Metric"}</th>
                        <th>{isCircadian ? "Intensity" : "Target"}</th>
                        <th>Biological Goal</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.time}</td>
                            <td className={getHighlight(row.temp)}>{row.temp}</td>
                            <td>{row.lux}</td>
                            <td>{row.goal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function getHighlight(value: string): string {
    if (value.includes("5000") || value.includes("6500") || value.includes("6000")) {
        return "highlight-focus";
    }
    if (value.includes("2700") || value.includes("2200") || value.includes("Amber")) {
        return "highlight-recovery";
    }
    return "";
}
