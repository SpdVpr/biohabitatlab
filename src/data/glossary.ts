// Technical glossary for bio-optimization terminology

export type Term = {
    term: string;
    definition: string;
    category: "Light" | "Air" | "Sound" | "General";
    unit?: string;
};

export const glossary: Term[] = [
    // Light Category
    {
        term: "CRI (Color Rendering Index)",
        definition:
            "A quantitative measure (0–100) of a light source's ability to reveal colors faithfully compared to natural light. CRI 95+ is considered 'high-fidelity' and is recommended for tasks requiring accurate color perception.",
        category: "Light",
        unit: "0–100 scale",
    },
    {
        term: "CCT (Correlated Color Temperature)",
        definition:
            "The perceived 'warmth' or 'coolness' of white light, measured in Kelvin (K). Lower values (2700K) appear warm/amber, while higher values (6500K) appear cool/blue. CCT influences alertness and melatonin production.",
        category: "Light",
        unit: "Kelvin (K)",
    },
    {
        term: "Lux",
        definition:
            "The SI unit of illuminance, measuring luminous flux per unit area. One lux equals one lumen per square meter. Typical office lighting is 300–500 lux; outdoor daylight ranges from 10,000–100,000 lux.",
        category: "Light",
        unit: "lm/m²",
    },
    {
        term: "Melanopic EDI",
        definition:
            "Equivalent Daylight Illuminance—a measure of how strongly a light source stimulates melanopsin (the photopigment in intrinsically photosensitive retinal ganglion cells). Higher melanopic EDI means stronger circadian impact.",
        category: "Light",
        unit: "lux (equivalent)",
    },
    {
        term: "PWM Flicker",
        definition:
            "Rapid on/off cycling used by some LEDs to control brightness. Flicker frequencies below 200Hz can cause eyestrain, headaches, and reduced visual performance even when imperceptible.",
        category: "Light",
        unit: "Hz",
    },

    // Air Category
    {
        term: "CO₂ (Carbon Dioxide)",
        definition:
            "A metabolic byproduct of respiration. Indoor concentrations above 1,000 ppm correlate with decreased cognitive function. Levels above 2,500 ppm can reduce strategic thinking by up to 50%.",
        category: "Air",
        unit: "ppm",
    },
    {
        term: "HEPA",
        definition:
            "High-Efficiency Particulate Air filter, capable of capturing 99.97% of particles ≥0.3 micrometers. Essential for removing allergens, fine dust, and biological contaminants from indoor air.",
        category: "Air",
    },
    {
        term: "PM2.5",
        definition:
            "Particulate matter with diameter ≤2.5 micrometers. These fine particles penetrate deep into lungs and bloodstream. Safe indoor levels are below 12 µg/m³ (annual average per WHO guidelines).",
        category: "Air",
        unit: "µg/m³",
    },
    {
        term: "VOC (Volatile Organic Compounds)",
        definition:
            "Chemicals that off-gas from building materials, furniture, and cleaning products. Chronic exposure to elevated VOCs causes headaches, respiratory irritation, and long-term health effects.",
        category: "Air",
        unit: "mg/m³ or ppb",
    },
    {
        term: "ACH (Air Changes per Hour)",
        definition:
            "The number of times the total air volume of a room is replaced in one hour. Minimum 6 ACH is recommended for offices; 12+ ACH for spaces with high occupancy or infection control needs.",
        category: "Air",
        unit: "changes/hour",
    },

    // Sound Category
    {
        term: "RT60 (Reverberation Time)",
        definition:
            "The time required for sound to decay by 60 dB after the source stops. Optimal RT60 for speech intelligibility in small rooms is 0.3–0.5 seconds. Higher values cause 'echo' and reduce clarity.",
        category: "Sound",
        unit: "seconds",
    },
    {
        term: "NRC (Noise Reduction Coefficient)",
        definition:
            "Average sound absorption coefficient across 250–2000 Hz frequencies, scaled 0–1. NRC 0.85+ indicates highly absorptive treatment. Values above 1.0 are possible with thick, porous materials.",
        category: "Sound",
        unit: "0–1 scale",
    },
    {
        term: "STC (Sound Transmission Class)",
        definition:
            "A rating of how well a building partition attenuates airborne sound. STC 50+ is required for confidential speech privacy; STC 60+ for complete isolation.",
        category: "Sound",
        unit: "dB reduction",
    },
    {
        term: "dB(A)",
        definition:
            "A-weighted decibels, adjusted to reflect human hearing sensitivity. Typical quiet office: 40–45 dB(A). Sustained exposure above 70 dB(A) damages hearing over time.",
        category: "Sound",
        unit: "decibels",
    },

    // General Category
    {
        term: "Circadian Rhythm",
        definition:
            "The approximately 24-hour internal biological clock that regulates sleep-wake cycles, hormone release, and metabolism. Primarily entrained by light exposure via the suprachiasmatic nucleus (SCN).",
        category: "General",
    },
    {
        term: "Melatonin",
        definition:
            "A hormone produced by the pineal gland that promotes sleep onset. Production is suppressed by light exposure (especially 450–480nm wavelengths) and begins increasing 2–3 hours before habitual sleep time.",
        category: "General",
    },
    {
        term: "Cortisol",
        definition:
            "The primary stress hormone, also responsible for the 'cortisol awakening response' that provides morning alertness. Bright light exposure in the morning amplifies this natural spike.",
        category: "General",
    },
    {
        term: "Deep Work",
        definition:
            "Focused, cognitively demanding work performed without distraction. Optimal environmental conditions for deep work include: <35 dB ambient noise, 500+ lux illumination, and <800 ppm CO₂.",
        category: "General",
    },
];
