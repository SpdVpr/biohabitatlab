// Blueprint types for bio-optimization project guides

export type SciencePoint = {
    point: string;
    study: string;
};

export type MatrixRow = {
    time: string;
    temp: string;
    lux: string;
    goal: string;
};

export type FAQ = {
    question: string;
    answer: string;
};

export type Product = {
    name: string;
    role: string;
    spec: string;
    link: string;
    price?: string;
    whyThisOne?: string;
};

export type Blueprint = {
    slug: string;
    title: string;
    subtitle: string;
    category: "light" | "air" | "sound" | "recovery";
    objective: string;
    abstract: string;
    problemStatement: string;
    solutionOverview: string;
    whoIsThisFor: string[];
    expectedResults: string[];
    science: SciencePoint[];
    matrix: MatrixRow[];
    products: Product[];
    steps: string[];
    tips: string[];
    commonMistakes: string[];
    faq: FAQ[];
    image?: string;
};

export const blueprints: Blueprint[] = [

    {
        slug: "circadian-home-office",
        title: "The Circadian Home Office",
        subtitle: "Visual Cortex Optimization & Melatonin Management",
        category: "light",
        objective:
            "Create a home office lighting setup that keeps you alert and focused during work hours, then automatically transitions to help you sleep better at night.",
        abstract:
            "This protocol synchronizes your artificial lighting with your body's natural circadian rhythm. By shifting color temperature from energizing 5000K–6500K in morning hours to relaxing 2700K after sunset, you'll trigger the right hormonal responses at the right times. Studies show this approach can improve sleep quality by 23% and daytime cognitive performance by 15%.",
        problemStatement:
            "Most home offices use static lighting that never changes throughout the day. This creates two problems: during the day, the light may not be bright or 'blue' enough to signal alertness to your brain. In the evening, the same light suppresses melatonin and makes it harder to fall asleep. The result? You feel sluggish during work hours and wired at bedtime.",
        solutionOverview:
            "We'll set up a dynamic lighting system that automatically adjusts color temperature and brightness based on time of day. Bright, cool light in the morning triggers cortisol release for alertness. Warm, dim light in the evening allows natural melatonin production for quality sleep. The key is using high-CRI (95+) bulbs that render colors accurately, reducing eye strain during long work sessions.",
        whoIsThisFor: [
            "Remote workers spending 6+ hours daily at a desk",
            "People who struggle to fall asleep after evening work sessions",
            "Anyone experiencing eye strain or headaches from computer work",
            "Night owls trying to reset their sleep schedule",
            "Creative professionals who need accurate color perception",
        ],
        expectedResults: [
            "Fall asleep 15-25 minutes faster on average",
            "Feel more alert during morning hours without extra caffeine",
            "Reduced eye strain and fewer end-of-day headaches",
            "More consistent energy levels throughout the workday",
            "Better separation between 'work mode' and 'rest mode'",
        ],
        science: [
            {
                point:
                    "Blue light (450–480nm) suppresses melatonin production via melanopsin receptors in the retina. This is exactly what you want in the morning, but problematic at night.",
                study: "Figueiro et al., 2011 - Journal of Clinical Sleep Medicine",
            },
            {
                point:
                    "High-CRI (95+) lighting reduces visual cortex strain by eliminating the spectral gaps found in cheap LEDs. Your brain doesn't have to 'fill in' missing colors.",
                study: "Veitch & Newsham, 1998 - Lighting Research & Technology",
            },
            {
                point:
                    "Dynamic CCT (correlated color temperature) shifts throughout the day improve circadian entrainment—your internal clock syncs better with the 24-hour cycle.",
                study: "Chellappa et al., 2011 - PLoS ONE",
            },
        ],
        matrix: [
            {
                time: "06:00 – 09:00",
                temp: "5000K – 6500K",
                lux: "500 – 1000",
                goal: "Cortisol Awakening Response",
            },
            {
                time: "09:00 – 12:00",
                temp: "5000K",
                lux: "500",
                goal: "Peak Cognitive Performance",
            },
            {
                time: "12:00 – 15:00",
                temp: "4000K",
                lux: "400",
                goal: "Sustained Focus",
            },
            {
                time: "15:00 – 18:00",
                temp: "3500K",
                lux: "300",
                goal: "Afternoon Stability",
            },
            {
                time: "18:00 – 22:00",
                temp: "2700K – 2200K",
                lux: "< 100",
                goal: "Melatonin Onset",
            },
        ],
        products: [
            {
                name: "BenQ ScreenBar Halo",
                role: "Primary Task Lighting",
                spec: "CRI 95, 2700K–6500K, Asymmetric Optics",
                link: "https://amzn.to/49Fst7a",
                price: "$39.95",
                whyThisOne: "Mounts directly on your monitor, so it illuminates your desk without creating glare on the screen. The asymmetric optics are key—light goes down onto your workspace, not into your eyes. The wireless controller lets you adjust color temperature instantly.",
            },
            {
                name: "Philips Hue White and Color Starter Kit",
                role: "Ambient Room Automation",
                spec: "2000K–6500K, 16M colors, ZigBee + Bluetooth",
                link: "https://amzn.to/4k8i5d7",
                price: "$96.99",
                whyThisOne: "The Hue Bridge enables true automation—lights change color temperature automatically based on your schedule. Install bulbs in your main room fixture and any lamps. The 2000K–6500K range covers both energizing morning light and relaxing evening amber.",
            },
            {
                name: "Elgato Key Light Air",
                role: "Video Call Lighting",
                spec: "CRI 96, 2900K–7000K, 1400 Lumens",
                link: "https://amzn.to/4pRm3YP",
                price: "$139.99",
                whyThisOne: "If you're on video calls frequently, this provides professional-quality face lighting. The high CRI means you look natural on camera. Can be controlled via app to match your room's ambient light temperature.",
            },
        ],
        steps: [
            "Position your desk perpendicular to windows. This prevents direct glare on your screen while still allowing natural daylight to reach your workspace from the side.",
            "Install your monitor light (BenQ ScreenBar) so it illuminates your desk surface evenly. Adjust the angle so no light reflects off your screen.",
            "Replace bulbs in overhead fixtures and desk lamps with Philips Hue smart bulbs. At minimum, have one overhead and one lamp.",
            "Set up the Philips Hue app with automated scenes: 'Morning Focus' (6500K) triggers at 7:00 AM, 'Afternoon' (4000K) at 1:00 PM, and 'Evening Wind Down' (2700K) at 6:00 PM.",
            "Enable your computer's blue light filter (Windows Night Light, macOS Night Shift, or f.lux) to activate at sunset.",
            "After 8:00 PM, keep ambient room lighting below 50 lux. Use the dimmest Hue setting or switch to candles/salt lamps.",
        ],
        tips: [
            "Get morning sunlight within 30 minutes of waking—even 10 minutes outside boosts circadian rhythm more than any artificial light.",
            "Position your monitor so windows are to your side, never directly behind or in front of the screen.",
            "If you need to work late, use dark mode on all apps AND reduce ambient light. Blue light glasses help but aren't a substitute for dim lighting.",
            "Consider a sunrise alarm clock in your bedroom to start the circadian process before you even reach your office.",
        ],
        commonMistakes: [
            "Buying cheap 'daylight' bulbs with CRI below 80. They claim 5000K but have poor color rendering that causes eye strain.",
            "Setting up automation but never adjusting it. Your schedule changes seasonally—update your light timing in winter when days are shorter.",
            "Ignoring ambient light. A great desk lamp means nothing if your ceiling fixture is still blasting cool white light at 10 PM.",
            "Relying only on screen filters. f.lux helps, but your eyes still see all the room lighting around the screen.",
        ],
        faq: [
            {
                question: "What is the best color temperature for a home office?",
                answer: "For optimal productivity, use 5000K-6500K during morning hours (6 AM - 12 PM) to boost alertness, then transition to 4000K in the afternoon, and finally 2700K or lower after sunset to support natural melatonin production and better sleep."
            },
            {
                question: "What CRI should I look for in desk lamps for eye strain?",
                answer: "Look for CRI 95 or higher. High-CRI bulbs render all colors of the spectrum accurately, which reduces visual cortex strain. Cheap LEDs with CRI below 80 force your brain to 'fill in' missing colors, causing fatigue and headaches during long work sessions."
            },
            {
                question: "Do blue light glasses work for home office eye strain?",
                answer: "Blue light glasses help somewhat, but they only filter screen light—not the ambient lighting in your room. For real results, combine glasses with proper room lighting: high-CRI task lighting during the day and warm (2700K) ambient light in the evening."
            },
            {
                question: "How many lumens do I need for my home office?",
                answer: "Aim for 500-1000 lux at your desk surface during peak work hours. A combination of ambient overhead lighting (300-400 lux) plus a dedicated task light like the BenQ ScreenBar (which adds 500+ lux to your workspace) is ideal."
            },
            {
                question: "Can office lighting affect my sleep quality?",
                answer: "Yes, dramatically. Using cool, bright light (5000K+) after 6 PM suppresses melatonin production, making it harder to fall asleep. Studies show this can delay sleep onset by 15-30 minutes and reduce deep sleep quality throughout the night."
            },
        ],
    },
    {
        slug: "non-toxic-soundproofing",
        title: "Non-Toxic Soundproofing for Deep Work",
        subtitle: "Acoustic Isolation Without the Chemicals",
        category: "sound",
        objective:
            "Create a quiet, focused workspace by reducing room echo and blocking external noise—using materials that won't off-gas harmful chemicals into your breathing space.",
        abstract:
            "Acoustic optimization isn't just about blocking sound—it's about creating an environment where speech is clear, concentration is effortless, and your body isn't stressed by background noise. This protocol achieves RT60 < 0.5s (minimal echo) and noise floor < 35dB using fiber-free, low-VOC materials that keep your air quality pristine.",
        problemStatement:
            "Most home offices have terrible acoustics. Hard walls, floors, and ceilings create echo that makes video calls sound hollow and forces your brain to constantly filter noise. Cheap foam panels solve part of this but off-gas formaldehyde and VOCs for months—trading audio quality for respiratory health. External noise from traffic, neighbors, or family adds another layer of distraction.",
        solutionOverview:
            "We use a two-pronged approach: (1) Acoustic treatment to absorb internal reflections and reduce echo, using mineral wool panels that have zero off-gassing. (2) Sound isolation to block external noise, focusing on sealing gaps and adding mass to weak points like doors. The result is a space that's both quiet AND healthy to breathe in.",
        whoIsThisFor: [
            "Remote workers in apartments with noisy neighbors",
            "Anyone who takes frequent video calls from home",
            "People who find background noise distracting or stressful",
            "Those with chemical sensitivities concerned about foam panel off-gassing",
            "Parents who need focused work time despite household noise",
        ],
        expectedResults: [
            "Dramatically improved video call audio quality",
            "Easier concentration with reduced ambient noise",
            "Lower stress levels (noise activates cortisol response)",
            "No chemical smells or VOCs from acoustic treatment",
            "Better sleep if applied to bedroom (blocks street noise)",
        ],
        science: [
            {
                point:
                    "Chronic noise exposure above 55dB is associated with elevated cortisol, increased blood pressure, and impaired cognitive performance. Even moderate background noise affects complex task performance.",
                study: "Basner et al., 2014 - The Lancet",
            },
            {
                point:
                    "Optimal RT60 (reverberation time) for speech intelligibility in small rooms is 0.3–0.5 seconds. Higher values cause 'echo' that makes speech harder to process.",
                study: "Bradley, 2003 - Journal of the Acoustical Society",
            },
            {
                point:
                    "VOC off-gassing from polyurethane foam panels can exceed safe air quality thresholds for 6+ months after installation, causing headaches and respiratory irritation.",
                study: "EPA Indoor Air Quality Studies, 2018",
            },
        ],
        matrix: [
            {
                time: "Reverberation Time",
                temp: "RT60",
                lux: "< 0.5 seconds",
                goal: "Clear Speech / Less Fatigue",
            },
            {
                time: "Ambient Noise Floor",
                temp: "dB(A)",
                lux: "< 35 dB",
                goal: "Deep Focus Possible",
            },
            {
                time: "Material Toxicity",
                temp: "VOC Level",
                lux: "< 0.5 mg/m³",
                goal: "Healthy Breathing",
            },
            {
                time: "Noise Reduction",
                temp: "STC Rating",
                lux: "> 25 dB reduction",
                goal: "External Sound Blocked",
            },
        ],
        products: [
            {
                name: "KTOESHEO Pyramid Sound Proof Foam (2 Pack)",
                role: "Wall Cavity / DIY Panel Core",
                spec: "48x24x2 Inch, High Density Soundproof",
                link: "https://amzn.to/464abLJ",
                price: "$37.99",
                whyThisOne: "Large pyramid foam panels provide excellent sound absorption for recording spaces and home offices. The pyramid shape scatters sound waves effectively, reducing echo and reverberation. Easy to cut to size for custom installations.",
            },
            {
                name: "DEKIRU Self Adhesive Acoustic Panels (18 Pack)",
                role: "Ready-Made Wall Treatment",
                spec: "12x10x0.4 Inch Hexagon, Self-Adhesive",
                link: "https://amzn.to/45obGnU",
                price: "$29.99",
                whyThisOne: "Ready-to-mount hexagonal acoustic panels that look professional and work effectively. Self-adhesive backing means no tools needed—just peel and stick. The hexagon design creates a modern, geometric look.",
            },
            {
                name: "Keliiyo Door Weather Stripping Kit",
                role: "Sound Isolation",
                spec: "Silicone weatherstripping for doors and windows",
                link: "https://amzn.to/3LCMBPo",
                price: "$11.99",
                whyThisOne: "The biggest weak point in any room is the door. Sound travels through the gaps around the frame. This kit seals all four sides with dense silicone weatherstripping that blocks both sound and drafts. Easy 30-minute install.",
            },
        ],
        steps: [
            "Identify your primary reflection points using the 'mirror trick': sit in your work position and have someone slide a mirror along each wall. Wherever you can see your speakers/sound source in the mirror, that spot needs acoustic treatment first.",
            "Install acoustic panels on primary reflection points—typically the wall behind your monitor, side walls at ear level, and the wall directly behind you.",
            "Add bass traps in room corners where walls meet ceiling. Low-frequency sound builds up in corners and causes muddiness. Use 4-inch thick mineral wool panels mounted diagonally.",
            "Seal your door completely. Apply adhesive weatherstripping to the top and sides, and install a door sweep at the bottom. There should be no visible light (and therefore no air or sound) around the closed door.",
            "If you have hard floors, add a large area rug under your desk. Hard surfaces reflect sound; soft surfaces absorb it. Floor coverage makes a significant difference.",
            "Test your results by recording a voice memo before and after. The 'after' should sound clearer with less room echo.",
        ],
        tips: [
            "Aim to cover 25-40% of wall surface with acoustic treatment. More isn't always better—too much absorption makes a room feel 'dead' and uncomfortable.",
            "Bookshelves filled with books act as acoustic diffusers—they scatter sound waves and reduce flutter echo without absorbing too much.",
            "Heavy curtains over windows serve double-duty: acoustics AND light control for video calls.",
            "If DIY-ing panels, wrap them in breathable fabric like burlap or acoustic fabric—not plastic, which blocks sound absorption.",
        ],
        commonMistakes: [
            "Buying cheap Amazon foam tiles. They have minimal acoustic effect (too thin), often smell for weeks, and look unprofessional.",
            "Only treating one wall. Sound bounces between ALL surfaces. Treating just the wall behind you leaves reflections from other directions.",
            "Ignoring the door. A perfect acoustic room with a hollow-core door and gaps will still let in significant noise.",
            "Over-treating a small room. You need some reflection for the space to feel natural. Dead rooms are fatiguing.",
        ],
        faq: [
            {
                question: "What is the best acoustic panel material that doesn't smell?",
                answer: "Mineral wool (like Roxul Safe'n'Sound) is the best non-toxic option. Unlike polyurethane foam panels that off-gas VOCs for months, mineral wool is made from stone and contains zero formaldehyde binders. It's also more effective for sound absorption (NRC 1.05 vs typical foam's 0.3-0.5)."
            },
            {
                question: "How do I improve my home office for video calls?",
                answer: "Focus on three things: (1) Add acoustic panels at primary reflection points—the walls to your sides and behind you. (2) Seal door gaps with weatherstripping to block external noise. (3) Add a rug if you have hard floors. This reduces echo and background noise significantly."
            },
            {
                question: "Are cheap foam acoustic panels worth it?",
                answer: "No. They're typically too thin (1-2 inches) to absorb meaningful frequencies, they look unprofessional, and they off-gas VOCs that can cause headaches. Invest in proper mineral wool panels or professional fabric-wrapped panels—they actually work and won't pollute your air."
            },
            {
                question: "How much wall coverage do I need for acoustic treatment?",
                answer: "Aim to cover 25-40% of wall surface area. More isn't always better—over-treating makes a room feel 'dead' and uncomfortable. Focus first on the primary reflection points: walls at ear level to your left and right, and the wall behind your monitor."
            },
        ],
    },
    {
        slug: "blackout-sleep-sanctuary",
        title: "The 100% Blackout Sleep Sanctuary",
        subtitle: "Photon Elimination & Wind-Down Protocol",
        category: "recovery",
        objective:
            "Transform your bedroom into a perfectly dark sleep environment that supports deep, restorative sleep—then wake you gently with simulated sunrise instead of jarring alarms.",
        abstract:
            "Even minimal light exposure during sleep (as little as 5 lux—about a dim nightlight) can suppress melatonin, fragment sleep architecture, and impair glucose metabolism. This protocol eliminates every photon from your sleep environment while providing a dawn simulation that triggers natural cortisol awakening response—so you wake feeling refreshed without an alarm.",
        problemStatement:
            "Modern bedrooms are never truly dark. Streetlights filter through curtains, LED standby lights glow from devices, phone chargers blink, and hallway light seeps under doors. This 'light pollution' is invisible to you (your eyes are closed) but still detected by photoreceptors that suppress melatonin and disrupt deep sleep cycles. The result: you sleep 7-8 hours but wake tired.",
        solutionOverview:
            "We'll create complete darkness during sleep hours using blackout window treatments and elimination of all electronic LEDs. For nighttime bathroom trips, amber nightlights provide navigation without disrupting melatonin. A sunrise alarm clock gradually brightens to simulate dawn, triggering natural wake-up hormones so you feel alert—not groggy—when you rise.",
        whoIsThisFor: [
            "Anyone who wakes up tired despite 'enough' sleep",
            "Light sleepers who wake at sunrise (or earlier from street lights)",
            "People who rely on jarring phone alarms and hate the sound",
            "Shift workers who sleep during daylight hours",
            "Those in urban environments with significant light pollution",
        ],
        expectedResults: [
            "Deeper sleep with more time in restorative stages",
            "Faster sleep onset (typically 10-20 minutes faster)",
            "Wake up feeling genuinely rested, not groggy",
            "More consistent sleep/wake times as circadian rhythm stabilizes",
            "Reduced middle-of-night awakenings",
        ],
        science: [
            {
                point:
                    "Sleeping with even dim light (5–10 lux) in the room impairs glucose metabolism and increases heart rate during sleep, signaling the body is in a 'lighter' sleep state even while unconscious.",
                study: "Obayashi et al., 2019 - PNAS",
            },
            {
                point:
                    "Dawn simulation (gradual light increase before wake time) reduces sleep inertia—that groggy, disoriented feeling upon waking—by up to 50% compared to abrupt alarms.",
                study: "Giménez et al., 2010 - Chronobiology International",
            },
            {
                point:
                    "Blue light exposure before bed delays circadian phase by up to 3 hours, meaning you fall asleep later, wake later, and the cycle shifts further each night.",
                study: "Chang et al., 2015 - PNAS",
            },
        ],
        matrix: [
            {
                time: "20:00 – 22:00",
                temp: "2200K (Deep Amber)",
                lux: "< 50 lux",
                goal: "Melatonin Production Begins",
            },
            {
                time: "22:00 – 06:00",
                temp: "0K (Total Blackout)",
                lux: "0 lux",
                goal: "Deep Restorative Sleep",
            },
            {
                time: "06:00 – 06:30",
                temp: "2700K → 4000K",
                lux: "0 → 300 lux (gradual)",
                goal: "Natural Cortisol Awakening",
            },
        ],
        products: [
            {
                name: "Amazon Basics Portable Blackout Curtain",
                role: "Window Light Elimination",
                spec: "100% Light Block, Suction Cup Mount, Travel-Friendly",
                link: "https://amzn.to/3Lz7fjn",
                price: "$19.97",
                whyThisOne: "Uses suction cups to seal directly against the window frame for zero light gaps. Velcro tabs allow adjustable sizing for any window. Includes travel bag so you can take it on trips for consistent sleep quality in hotels. Machine washable.",
            },
            {
                name: "Philips SmartSleep Wake-Up Light HF3520",
                role: "Dawn Simulation Alarm",
                spec: "Colored Sunrise/Sunset, 5 Natural Sounds, FM Radio",
                link: "https://amzn.to/3Nu1dRJ",
                price: "$145.29",
                whyThisOne: "Starts as a dim red glow 30 minutes before your alarm time, gradually brightening to simulate sunrise. Your brain registers increasing light and prepares to wake naturally. Much gentler than a phone blaring. Backup sound alarm if you're a heavy sleeper.",
            },
            {
                name: "LOHAS Amber LED Night Light",
                role: "Safe Nighttime Navigation",
                spec: "Dimmable, Light Sensor, Yellow/Amber Glow",
                link: "https://amzn.to/3NpBNVn",
                price: "$17.99",
                whyThisOne: "For bathroom trips at night, you need some light—but not white or blue light that kills melatonin. These emit pure amber light that allows you to see without disrupting sleep hormones. Automatic light sensor so they turn on when it gets dark.",
            },
        ],
        steps: [
            "Audit your bedroom for light sources. Close the door, turn off lights, lie in bed, and wait 10 minutes for your eyes to adapt. Identify EVERY light source: standby LEDs, charging indicators, smoke detector lights, gaps around doors/windows.",
            "Install blackout treatment on all windows. Measure carefully—light sneaks through any gap. The Sleepout curtain creates an airtight seal against the glass.",
            "Eliminate or cover electronic LEDs. Use black electrical tape over standby lights. Unplug chargers that blink. Consider moving your phone to another room.",
            "Seal the door gap. Light from hallways is a common issue. Use a draft stopper or rolled towel at the bottom. If light leaks around the frame, add foam weatherstripping.",
            "Position amber nightlights between bedroom and bathroom at floor level. They provide enough light to navigate safely without activating alertness hormones.",
            "Set up your wake-up light. Position it near your bed at eye level. Set sunrise duration to 30 minutes and experiment with wake sounds—or try no sound at all once you adapt to light-based waking.",
            "Create an evening wind-down lighting routine. Starting at 8 PM, switch all bedroom lighting to warm (2700K or lower) and dim. Avoid screens, or use aggressive amber-tint night mode settings.",
        ],
        tips: [
            "Put your phone in another room overnight. This eliminates notification light, blue screen temptation, and forces you to physically get up at alarm time.",
            "If you can't fully blackout a window, wear a comfortable sleep mask as backup. Silk masks are comfortable for side sleepers.",
            "Room temperature matters too: 65-68°F (18-20°C) is optimal for most people. A cool room improves sleep quality.",
            "Keep a small amber flashlight by the bed if needed instead of turning on any lights.",
        ],
        commonMistakes: [
            "Getting blackout curtains that don't seal at the edges. Light sneaks around traditional rod-mounted curtains. You need edge-seal capability.",
            "Ignoring small LED lights. Your smoke detector's blinking light, your phone charger—these seem trivial but they prevent true darkness.",
            "Setting wake-up light too bright too fast. Start with lower maximum brightness and increase over days as you adapt.",
            "Using amber lights that are too bright. Nightlights should be the dimmest possible while still functional.",
        ],
        faq: [
            {
                question: "Does sleeping with lights on affect your health?",
                answer: "Yes. Even dim light (5-10 lux—about a nightlight) during sleep impairs glucose metabolism, increases heart rate, and fragments sleep architecture. Research shows sleeping with any light in the room is associated with higher rates of obesity and depression."
            },
            {
                question: "What is the best sunrise alarm clock for heavy sleepers?",
                answer: "The Philips SmartSleep Wake-Up Light is ideal—it features a 30-minute gradual sunrise simulation plus a backup audio alarm. The light starts dim red and increases to 300 lux, triggering natural cortisol awakening even before the sound alarm activates."
            },
            {
                question: "How do I completely blackout my bedroom windows?",
                answer: "Standard blackout curtains still leak light around edges. Use suction-cup blackout panels (like Sleepout) that seal directly against the window glass, eliminating all gaps. For complete darkness, also cover any LED standby lights with black electrical tape."
            },
            {
                question: "Are blackout curtains enough for better sleep?",
                answer: "Traditional blackout curtains help but aren't enough—light seeps around the edges and through any gaps at the rod. For true 0-lux darkness, you need curtains that seal against the window frame, plus elimination of all electronic LEDs in the room."
            },
            {
                question: "What color nightlight is best for sleep?",
                answer: "Amber (590nm wavelength) is best. Unlike white or blue light, amber light doesn't suppress melatonin production. Motion-activated amber nightlights let you navigate to the bathroom without disrupting your sleep hormones."
            },
        ],
    },
];
