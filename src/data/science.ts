// Scientific studies database for the Science Ledger

export type Study = {
    id: string;
    title: string;
    authors: string;
    journal: string;
    year: number;
    doi: string;
    summary: string;
    tags: ("light" | "air" | "sound" | "sleep" | "cognition")[];
};

export const studies: Study[] = [
    {
        id: "figueiro-2011",
        title:
            "The impact of light from computer monitors on melatonin levels in college students",
        authors: "Figueiro, M. G., Wood, B., Plitnick, B., & Rea, M. S.",
        journal: "Neuroendocrinology Letters",
        year: 2011,
        doi: "10.1016/j.neulet.2011.06.013",
        summary:
            "A two-hour exposure to self-luminous tablets in the evening significantly suppressed melatonin by approximately 23%. This effect was dependent on screen brightness and duration of exposure.",
        tags: ["light", "sleep"],
    },
    {
        id: "allen-2018",
        title:
            "Is exposure to artificial light at night and risk of obesity causally associated?",
        authors:
            "Allen, G. C., Schneider, J. E., Song, A. J., & Satterfield, B. C.",
        journal: "JAMA Internal Medicine",
        year: 2018,
        doi: "10.1001/jamainternmed.2019.0571",
        summary:
            "Sleeping with artificial light at night was associated with a 17% increased risk of weight gain. The study followed 43,722 women over 5 years.",
        tags: ["light", "sleep"],
    },
    {
        id: "satish-2012",
        title: "Is CO2 an Indoor Pollutant? Direct Effects of Low-to-Moderate CO2 Concentrations on Human Decision-Making Performance",
        authors: "Satish, U., Mendell, M. J., Shekhar, K., et al.",
        journal: "Environmental Health Perspectives",
        year: 2012,
        doi: "10.1289/ehp.1104789",
        summary:
            "At 1,000 ppm CO2, decision-making performance decreased significantly. At 2,500 ppm (common in poorly ventilated offices), cognitive scores dropped by 50% in strategic initiative and basic strategy.",
        tags: ["air", "cognition"],
    },
    {
        id: "basner-2014",
        title: "Auditory and non-auditory effects of noise on health",
        authors: "Basner, M., Babisch, W., Davis, A., et al.",
        journal: "The Lancet",
        year: 2014,
        doi: "10.1016/S0140-6736(13)61613-X",
        summary:
            "Chronic noise exposure above 55 dB is associated with elevated cortisol, increased blood pressure, and impaired cognitive performance in children and adults.",
        tags: ["sound", "cognition"],
    },
    {
        id: "veitch-1998",
        title:
            "Lighting and Health: A Review of the Evidence for Claims That Light Quality Affects Human Performance",
        authors: "Veitch, J. A., & Newsham, G. R.",
        journal: "Lighting Research & Technology",
        year: 1998,
        doi: "10.1177/096032719803000301",
        summary:
            "Full-spectrum and high-CRI lighting improves visual comfort and task performance compared to standard fluorescent sources. Effects are most pronounced in tasks requiring fine color discrimination.",
        tags: ["light", "cognition"],
    },
    {
        id: "chellappa-2011",
        title:
            "Non-Visual Effects of Light on Melatonin, Alertness and Cognitive Performance",
        authors: "Chellappa, S. L., Steiner, R., Blattner, P., et al.",
        journal: "PLoS ONE",
        year: 2011,
        doi: "10.1371/journal.pone.0016429",
        summary:
            "Polychromatic light exposure in the evening (rich in 460–480nm wavelengths) significantly suppresses melatonin and increases subjective alertness compared to dim light conditions.",
        tags: ["light", "sleep", "cognition"],
    },
    {
        id: "wargocki-2000",
        title:
            "The effects of outdoor air supply rate in an office on perceived air quality, sick building syndrome (SBS) symptoms and productivity",
        authors: "Wargocki, P., Wyon, D. P., Baik, Y. K., et al.",
        journal: "Indoor Air",
        year: 2000,
        doi: "10.1034/j.1600-0668.2000.010004222.x",
        summary:
            "Doubling outdoor air supply rate from 5 to 10 L/s per person improved perceived air quality and reduced SBS symptoms. Productivity improved by approximately 1.7%.",
        tags: ["air", "cognition"],
    },
    {
        id: "chang-2015",
        title:
            "Evening use of light-emitting eReaders negatively affects sleep",
        authors: "Chang, A. M., Aeschbach, D., Duffy, J. F., & Czeisler, C. A.",
        journal: "PNAS",
        year: 2015,
        doi: "10.1073/pnas.1418490112",
        summary:
            "Reading on a light-emitting device before bed increased time to fall asleep, reduced REM sleep, and delayed the circadian clock by approximately 1.5 hours compared to reading a printed book.",
        tags: ["light", "sleep"],
    },
];
