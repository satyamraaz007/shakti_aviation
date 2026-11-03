export interface SubQuestion {
    id: string;
    question: string;
    answer: string;
    whatsappPrefill?: string;
}

export interface FaqCategory {
    id: string;
    title: string;
    iconLabel: string;
    shortDesc: string;
    subQuestions: SubQuestion[];
}

export const WHATSAPP_PHONE_NUMBER = '919773944770';

export const FAQ_CATEGORIES: FaqCategory[] = [
    {
        id: 'noc-height-clearance',
        title: 'AAI / IAF / MoD NOC & Height Clearance',
        iconLabel: '🏗️',
        shortDesc: 'NOCAS application, OLS criteria & aeronautical studies',
        subQuestions: [
            {
                id: 'noc-1',
                question: 'How do I apply for Height Clearance NOC from AAI or Defence?',
                answer:
                    'To obtain a No Objection Certificate (NOC) for height clearance, an online application must be submitted via AAI\'s NOCAS 2.0 system (or through the relevant IAF / Naval / MoD air station authorities for defence airfields). SACS provides complete end-to-end support including WGS-84 site coordinate survey verification, Obstacle Limitation Surface (OLS) calculations, documentation preparation, and liaison to secure your clearance smoothly.',
                whatsappPrefill: 'Hello SACS, I want guidance regarding applying for Height Clearance NOC from AAI / Defence.',
            },
            {
                id: 'noc-2',
                question: 'Which structures require an Aviation Height Clearance NOC?',
                answer:
                    'An aviation NOC is mandatory for high-rise residential & commercial buildings, industrial chimneys, wind turbine generators, power transmission lines, telecommunication towers, overhead construction cranes, and large infrastructure projects situated within the civil or military airport funnel zones (OLS & PANS-OPS surfaces).',
                whatsappPrefill: 'Hello SACS, I need to know if my project structure requires an Aviation Height Clearance NOC.',
            },
            {
                id: 'noc-3',
                question: 'What is an Aeronautical Study and when is it required?',
                answer:
                    'When a proposed building or structure exceeds the permissible height limit under standard OLS surfaces, an Aeronautical Study is conducted under DGCA CAR Section 4 guidelines. It evaluates whether the proposed height can be accommodated safely without affecting instrument flight procedures, CNS facilities, and flight safety.',
                whatsappPrefill: 'Hello SACS, I need assistance with conducting an Aeronautical Study for height clearance.',
            },
            {
                id: 'noc-4',
                question: 'Can SACS assist with appeals for rejected or height-restricted NOCs?',
                answer:
                    'Yes. If your NOC application has received a height restriction or rejection, SACS technical experts prepare technical appeal dossiers, radar/CNS shielding studies, and represent your case before the Ministry of Civil Aviation (MoCA) Appellate Committee.',
                whatsappPrefill: 'Hello SACS, my NOC was height-restricted or rejected. I need help preparing an appeal.',
            },
        ],
    },
    {
        id: 'airport-planning',
        title: 'Airport Planning & Greenfield Development',
        iconLabel: '🛫',
        shortDesc: 'Site selection, master planning & aerodrome licensing',
        subQuestions: [
            {
                id: 'air-1',
                question: 'What services does SACS provide for Greenfield & Brownfield Airports?',
                answer:
                    'SACS provides comprehensive advisory spanning airport site evaluation, Obstacle Limitation Surface (OLS) surveys, runway orientation & wind-rose analysis, air traffic forecasting, Techno-Economic Feasibility Studies (TEFS), Detailed Project Reports (DPR), and master plan preparation.',
                whatsappPrefill: 'Hello SACS, I would like to discuss consultancy services for greenfield airport development.',
            },
            {
                id: 'air-2',
                question: 'Do you assist with DGCA Aerodrome Licensing & Certification?',
                answer:
                    'Yes. We help airport operators draft the Aerodrome Manual, Safety Management System (SMS) manual, Emergency Response Plan (ERP), wildlife hazard management documentation, and fulfill all DGCA CAR Section 4 regulatory licensing prerequisites.',
                whatsappPrefill: 'Hello SACS, I require assistance with DGCA aerodrome licensing and certification.',
            },
            {
                id: 'air-3',
                question: 'What international airport consultancy experience does SACS possess?',
                answer:
                    'SACS has completed strategic international assignments, including CNS equipment evaluation and master plan review for New Libreville Airport in Gabon, and master plan review for Pokhara Regional International Airport in Nepal, along with pan-India projects.',
                whatsappPrefill: 'Hello SACS, I would like to know more about your international and domestic airport projects.',
            },
        ],
    },
    {
        id: 'cns-atm',
        title: 'CNS / ATM Systems Consultancy',
        iconLabel: '📡',
        shortDesc: 'VHF/HF, radar, ILS, VOR, DME, GAGAN & GBAS',
        subQuestions: [
            {
                id: 'cns-1',
                question: 'What are your CNS/ATM technical capabilities?',
                answer:
                    'Our senior professionals bring over 30 years of hands-on experience in Communication, Navigation, and Surveillance (CNS) and Air Traffic Management (ATM). We cover VHF/HF radio communication, VOR, DME, Instrument Landing Systems (ILS), ADS-B, radar systems, and air traffic control automation.',
                whatsappPrefill: 'Hello SACS, I want to discuss CNS/ATM systems consultancy for our aviation project.',
            },
            {
                id: 'cns-2',
                question: 'Do you support GAGAN, GBAS and Satellite Navigation?',
                answer:
                    'Yes. Our Managing Director Dr. Arjun Singh and senior team have been closely associated with national civil aviation programs, including technical planning and facility engineering for GAGAN (GPS Aided Geo Augmented Navigation) and Ground Based Augmentation Systems (GBAS).',
                whatsappPrefill: 'Hello SACS, I am interested in your GAGAN / GBAS navigation consultancy capabilities.',
            },
            {
                id: 'cns-3',
                question: 'Can you assist with CNS equipment procurement and commissioning?',
                answer:
                    'Yes, we provide end-to-end procurement guidance, technical specifications, vendor evaluation, Factory Acceptance Tests (FAT), Site Acceptance Testing (SAT), and commissioning supervision for airport CNS infrastructure.',
                whatsappPrefill: 'Hello SACS, we need technical guidance for CNS equipment specification and commissioning.',
            },
        ],
    },
    {
        id: 'safety-security',
        title: 'Aviation Safety Management (SMS) & Security',
        iconLabel: '🛡️',
        shortDesc: 'SMS compliance, CCTV, perimeter & airport security',
        subQuestions: [
            {
                id: 'safe-1',
                question: 'How do you assist with Safety Management System (SMS) implementation?',
                answer:
                    'We assist aerodrome operators and aviation organizations in designing and executing ICAO and DGCA-compliant SMS frameworks — covering hazard identification, safety risk assessment (SRA), safety performance monitoring, and internal safety auditing.',
                whatsappPrefill: 'Hello SACS, I would like consultation on implementing an Aviation Safety Management System (SMS).',
            },
            {
                id: 'safe-2',
                question: 'What Security & Surveillance systems do you consult on?',
                answer:
                    'SACS advises on integrated airport security infrastructure: Perimeter Intrusion Detection Systems (PIDS), high-resolution CCTV surveillance networks, access control systems, baggage screening, public address systems, and centralized security control rooms.',
                whatsappPrefill: 'Hello SACS, I want to discuss airport security and surveillance system consultancy.',
            },
        ],
    },
    {
        id: 'about-sacs',
        title: 'About SACS & Key Clientele',
        iconLabel: '🏢',
        shortDesc: 'Background, established 2005 & key clients',
        subQuestions: [
            {
                id: 'abt-1',
                question: 'Who are the experts behind Sakthi Aviation (SACS)?',
                answer:
                    'SACS was established in 2005 by retired senior management executives from the Airports Authority of India (AAI) and DGCA. Our multidisciplinary team combines 30+ years of senior-level experience across airport operations, CNS/ATM, engineering, and civil aviation regulations.',
                whatsappPrefill: 'Hello SACS, I would like to connect with your senior leadership team for a project enquiry.',
            },
            {
                id: 'abt-2',
                question: 'Who are some of your notable clients?',
                answer:
                    'Our clientele includes leading public sector undertakings, infrastructure conglomerates, and real estate developers such as Power Grid Corporation of India, Damodar Valley Corporation, M3M India, Anant Raj Limited, Confident Group, Leighton India, and Uttar Pradesh Cricket Association.',
                whatsappPrefill: 'Hello SACS, I am interested in discussing a partnership or consultancy requirement for our project.',
            },
        ],
    },
    {
        id: 'office-contact',
        title: 'Office Location & Direct Contact',
        iconLabel: '📞',
        shortDesc: 'Address, phone, email & working hours',
        subQuestions: [
            {
                id: 'cnt-1',
                question: 'Where is your office located and what are the contact details?',
                answer:
                    'Our office is located at:\n#537, DLF Prime Towers, F-79 & 80, Okhla Industrial Area Phase-1, New Delhi – 110020, India.\n\nPhone: +91-9773944770 / +91-9810789223 / +91-11-41112778\nEmail: info@saktiaviation.com',
                whatsappPrefill: 'Hello SACS Team, I would like to schedule a meeting or call regarding an aviation enquiry.',
            },
            {
                id: 'cnt-2',
                question: 'What are your working hours and consultation availability?',
                answer:
                    'Our office is open Monday to Friday, 9:00 AM – 5:30 PM IST. You can also reach our consultants directly via WhatsApp anytime for prompt coordination.',
                whatsappPrefill: 'Hello SACS, I would like to know your earliest availability for a consultation call.',
            },
        ],
    },
];

export function getWhatsAppUrl(prefillText: string = '', phone: string = WHATSAPP_PHONE_NUMBER): string {
    if (!prefillText) {
        return `https://wa.me/${phone}`;
    }
    const text = encodeURIComponent(prefillText);
    return `https://wa.me/${phone}?text=${text}`;
}
