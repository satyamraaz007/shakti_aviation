import drArjunSinghImg from '@/assets/Dr. Arjun Singh.png';
import mrMSBhargavaImg from '@/assets/Mr. M. S. Bhargava.png';
import mrDKBeheraImg from '@/assets/Mr. D. K. Behera.png';
import mrDhirajSoniImg from '@/assets/Mr. Dhiraj Soni.png';
import mrHemchandSharmaImg from '@/assets/Mr. Hemchand Sharma.png';
import mrHarshEnkhiaImg from '@/assets/Mr. Harsh Enkhia.png';

import aaiNocImg from '@/assets/servicesPageImage/aai_iaf_mod_noc.png';
import cnsAtmImg from '@/assets/servicesPageImage/cns_atm_consultancy_aviation_consultancy.png';
import airportDevImg from '@/assets/servicesPageImage/airportDevelopment.png';
import airportOpsImg from '@/assets/servicesPageImage/airportOperations.png';
import securityImg from '@/assets/servicesPageImage/aviationSecurity&SurveillanceAviationConsultancy.png';
import airsideImg from '@/assets/servicesPageImage/airsideEquipment.png';

export interface BlogNestedLink {
    text: string;
    url: string;
    isExternal: boolean;
    description: string;
}

export interface BlogCallout {
    type: 'tip' | 'warning' | 'info' | 'regulation';
    title: string;
    content: string;
}

export interface BlogTable {
    headers: string[];
    rows: string[][];
    caption?: string;
}

export interface BlogSectionImage {
    src: string;
    alt: string;
    caption: string;
}

export interface BlogSection {
    id: string;
    heading: string;
    paragraphs: string[];
    image?: BlogSectionImage;
    callout?: BlogCallout;
    table?: BlogTable;
    bullets?: string[];
    nestedLinks?: BlogNestedLink[];
    quote?: {
        text: string;
        author: string;
        role: string;
    };
}

export interface BlogFAQ {
    question: string;
    answer: string;
}

export interface BlogAuthor {
    id: string;
    name: string;
    designation: string;
    avatar: string;
    bio: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    eyebrow: string;
    excerpt: string;
    category: string;
    tags: string[];
    author: BlogAuthor;
    publishedDate: string;
    updatedDate: string;
    readTime: string;
    featuredImage: string;
    featuredImageAlt: string;
    featuredImageCaption: string;
    isFeatured?: boolean;
    keyTakeaways: string[];
    tableOfContents: { id: string; title: string }[];
    sections: BlogSection[];
    faqs?: BlogFAQ[];
    relatedServiceSlugs: string[];
    relatedBlogSlugs: string[];
    regulatoryLinks: { label: string; url: string; org: string }[];
}

export const blogCategories = [
    'All',
    'AAI & DGCA Regulations',
    'CNS & Air Traffic',
    'Airport Infrastructure',
    'Aviation Safety & SMS',
    'Security & Tech',
    'Regional Connectivity (UDAN)',
] as const;

export const blogPosts: BlogPost[] = [
    {
        id: 'blog-1',
        slug: 'mastering-aai-noc-clearances-building-near-airports',
        title: 'The Comprehensive Guide to AAI & IAF Height NOC Clearances: Building High-Rises Near Indian Airports',
        eyebrow: 'Regulatory & Height Clearances',
        excerpt:
            'A strategic blueprint for real estate developers, EPC contractors, and infrastructure planners navigating Ministry of Civil Aviation GSR 751(E) rules, NOCAS 2.0 submissions, OLS surfaces, and Aeronautical Studies.',
        category: 'AAI & DGCA Regulations',
        tags: ['AAI NOC', 'GSR 751(E)', 'NOCAS 2.0', 'Aeronautical Studies', 'IAF Clearances', 'OLS Surfaces'],
        author: {
            id: '6',
            name: 'Mr. Harsh Enkhia',
            designation: 'Senior Aviation Infrastructure Consultant',
            avatar: mrHarshEnkhiaImg,
            bio: 'Over 14 years advising top-tier real estate developers and infrastructure groups across India on AAI, IAF, and MoD height clearances, shielding criteria, and aeronautical studies.',
        },
        publishedDate: 'October 18, 2024',
        updatedDate: 'November 02, 2024',
        readTime: '9 min read',
        featuredImage: aaiNocImg,
        featuredImageAlt: 'Runway Obstacle Limitation Surfaces and high-rise building height clearance analysis diagram',
        featuredImageCaption: 'Figure 1: Obstacle Limitation Surfaces (OLS) geometry relative to airport runways as defined under ICAO Annex 14 & DGCA CAR.',
        isFeatured: true,
        keyTakeaways: [
            'All civil construction within 20 km of an aerodrome reference point (ARP) requires strict assessment under Ministry of Civil Aviation GSR 751(E) rules.',
            'NOCAS 2.0 automation calculates permissible heights based on AGA (Aerodrome Ground Aids), CNS facilities, and PANS-OPS flight procedures.',
            'When standard NOCAS height calculation truncates planned floors, an Aeronautical Study conducted by accredited aviation consultants provides the lawful pathway to unlock additional height.',
            'Joint Defence-Civil airports (such as Pune, Goa Dabolim, Srinagar) require specialized Air HQ / MoD NOC processing with specific security and radar clearances.',
        ],
        tableOfContents: [
            { id: 'statutory-framework', title: '1. The Statutory Framework: GSR 751(E) & NOCAS 2.0' },
            { id: 'ols-criteria', title: '2. Understanding Obstacle Limitation Surfaces (OLS)' },
            { id: 'cns-criteria', title: '3. CNS Equipment & Radar Line-of-Sight Protection' },
            { id: 'aeronautical-studies', title: '4. When & How to Commission an Aeronautical Study' },
            { id: 'step-by-step-process', title: '5. Step-by-Step NOC Approval Roadmap' },
            { id: 'frequently-asked-questions', title: '6. Frequently Asked Questions' },
        ],
        sections: [
            {
                id: 'statutory-framework',
                heading: '1. The Statutory Framework: GSR 751(E) & NOCAS 2.0',
                paragraphs: [
                    'In rapidly expanding Indian metropolises like Delhi-NCR, Mumbai (MMR), Bengaluru, and Hyderabad, prime urban land often lies within proximity of civil and defence aerodromes. To ensure aircraft operating in the vicinity of airports are safeguarded from physical hazards and electronic interference, the Ministry of Civil Aviation (MoCA) promulgated GSR 751(E) under the Aircraft Act of 1934.',
                    'Under these rules, no building, chimney, wind turbine, high-tension transmission line, or construction crane can be erected within the designated Colour Coded Zoning Map (CCZM) grid without an authentic No Objection Certificate (NOC) issued by the Airports Authority of India (AAI) or relevant Defence Authorities (IAF, Indian Navy, Indian Army).',
                    'Failure to procure an AAI NOC or erecting structures in excess of sanctioned top elevations constitutes a cognizable offence under Section 9A of the Aircraft Act, leading to demolition orders and structural penalties.',
                ],
                callout: {
                    type: 'regulation',
                    title: 'Statutory Notice: GSR 751(E) Compliance',
                    content: 'Any proposed top elevation (including overhead water tanks, lift machine rooms, lightning arrestors, and rooftop parapets) must be fully accounted for in the initial NOCAS submission. Omission of architectural crowns is the number one cause of NOC rejection.',
                },
                nestedLinks: [
                    {
                        text: 'Explore SACS AAI / IAF / MoD NOC Consultancy Services',
                        url: '/services/aai-iaf-mod-noc',
                        isExternal: false,
                        description: 'Detailed scope of our turnkey height clearance, DGPS survey verification, and appeal handling.',
                    },
                    {
                        text: 'Airports Authority of India NOCAS 2.0 Official Portal',
                        url: 'https://www.nocas2.aai.aero',
                        isExternal: true,
                        description: 'Official Government of India portal for filing civil aviation height clearance applications.',
                    },
                ],
            },
            {
                id: 'ols-criteria',
                heading: '2. Understanding Obstacle Limitation Surfaces (OLS)',
                paragraphs: [
                    'Obstacle Limitation Surfaces (OLS) define the conceptual three-dimensional envelope around an aerodrome that must be kept free from dangerous obstacles. These surfaces are determined based on runway classification (Code 1 to Code 4) and approach categories (Non-Instrument, Non-Precision Approach, or Precision Approach Category I/II/III).',
                    'The primary surfaces that govern building height limitations include the Approach Surface, Take-Off Climb Surface, Transitional Surface, Inner Horizontal Surface (IHS), and Conical Surface. In dense metropolitan centers, the Transitional and Inner Horizontal Surfaces govern the majority of urban real estate parcels.',
                ],
                image: {
                    src: 'https://images.pexels.com/photos/12858453/pexels-photo-12858453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    alt: 'Aerial perspective of an international airport runway showing approach paths and obstacle clearance zones',
                    caption: 'Figure 2: Aircraft on final approach requiring completely uncompromised 3-dimensional safety cones.',
                },
                table: {
                    caption: 'Table 1: Key Obstacle Limitation Surfaces and Governing Dimensions (Code 4 Instrument Runways)',
                    headers: ['Surface Name', 'Slope / Elevation Limit', 'Governing Factor', 'Impact on Real Estate'],
                    rows: [
                        ['Approach Surface', '1:50 (2%) to 1:40 (2.5%)', 'Aircraft glide path alignment', 'Severe height restrictions within 3 km of runway threshold'],
                        ['Transitional Surface', '1:7 (14.3%) ascending outward', 'Runway centerline lateral clearance', 'Height increases proportionally as distance from runway increases'],
                        ['Inner Horizontal Surface', '45m above aerodrome elevation (4km radius)', 'Visual maneuvering & circling approach', 'Uniform ceiling over high-density commercial/residential zones'],
                        ['Conical Surface', '1:20 (5%) slope from IHS edge (up to 6km)', 'Transition to circling area', 'Moderate restriction allowing gradual high-rise development'],
                    ],
                },
            },
            {
                id: 'cns-criteria',
                heading: '3. CNS Equipment & Radar Line-of-Sight Protection',
                paragraphs: [
                    'A frequent surprise for real estate developers is when their project is cleared under OLS criteria, but is subsequently rejected or drastically restricted by CNS (Communication, Navigation, and Surveillance) facility clearances.',
                    'Modern civil aviation relies heavily on high-frequency and microwave signals emitted by VHF Omni-directional Range (VOR), Instrument Landing Systems (ILS Localizer & Glide Path), Secondary Surveillance Radars (SSR), and Airport Surveillance Radars (ASR). Metallic and reinforced concrete structures create multi-path signal reflections, radar blind spots, and false aircraft target tracks.',
                ],
                image: {
                    src: cnsAtmImg,
                    alt: 'CNS ATM Radar facility monitoring air traffic signals with strict line of sight constraints',
                    caption: 'Figure 3: CNS Radar line-of-sight analysis and multi-path reflection mitigation study.',
                },
                callout: {
                    type: 'warning',
                    title: 'ILS Critical & Sensitive Areas',
                    content: 'No building of any height is permitted in the ILS Localizer and Glide Path critical areas, as any signal distortion can directly endanger an aircraft conducting an auto-land maneuver in zero-visibility conditions.',
                },
                nestedLinks: [
                    {
                        text: 'Learn about SACS CNS/ATM Technical Studies',
                        url: '/services/cns-atm-consultancy',
                        isExternal: false,
                        description: 'In-depth radar multi-path simulation, electromagnetic compatibility, and GBAS/GAGAN reviews.',
                    },
                    {
                        text: 'Directorate General of Civil Aviation (DGCA) India',
                        url: 'https://www.dgca.gov.in',
                        isExternal: true,
                        description: 'Civil Aviation Requirements (CAR) Series B governing aerodrome planning.',
                    },
                ],
            },
            {
                id: 'aeronautical-studies',
                heading: '4. When & How to Commission an Aeronautical Study',
                paragraphs: [
                    'When an initial application on NOCAS 2.0 generates an automated height that is significantly lower than the municipal FAR/FSI potential of the plot, developers have a legitimate statutory recourse: applying for an Aeronautical Study under the guidelines established by the Appellate Committee of the Ministry of Civil Aviation.',
                    'An Aeronautical Study assesses whether an obstacle exceeding standard OLS or CNS surfaces can be permitted through alternative operational procedures, shielding principles, or instrument flight procedure (PANS-OPS) redesign without compromising target safety levels (Target Level of Safety: 1 × 10⁻⁷ accidents per flight).',
                ],
                quote: {
                    text: 'An Aeronautical Study is not a rubber stamp; it is a mathematically rigorous aerospace assessment that evaluates the physical flight path of every aircraft type utilizing that aerodrome. Having senior former DGCA and AAI technical experts prepare your study makes all the difference between approval and rejection.',
                    author: 'Dr. Arjun Singh',
                    role: 'Managing Director, Sakthi Aviation Consultancy Services',
                },
                bullets: [
                    'Physical Shielding Analysis: Demonstrating that existing natural terrain or legally sanctioned high-rises already shield the proposed structure.',
                    'PANS-OPS Procedure Evaluation: Re-evaluating Minimum Sector Altitudes (MSA), missed approach climb gradients, and RNAV/RNP departure routes.',
                    'CNS Signal Attenuation Modeling: Proving that electromagnetic reflection from the proposed building facade does not corrupt SSR or VOR azimuth accuracy.',
                    'Mitigation Engineering: Proposing non-reflective architectural materials, obstacle lighting, and day marking configurations in accordance with ICAO Annex 14.',
                ],
                nestedLinks: [
                    {
                        text: 'Review SACS Proven Track Record in High-Rise Projects',
                        url: '/projects',
                        isExternal: false,
                        description: 'Case studies including landmark residential and commercial towers cleared via aeronautical studies.',
                    },
                    {
                        text: 'Meet Our Leadership & Aviation Technical Team',
                        url: '/team',
                        isExternal: false,
                        description: 'Profiles of former AAI and DGCA directors leading our technical advisory team.',
                    },
                ],
            },
            {
                id: 'step-by-step-process',
                heading: '5. Step-by-Step NOC Approval Roadmap',
                paragraphs: [
                    'Executing an AAI or Defence NOC clearance requires meticulous coordination between site surveyors, architects, structural consultants, and aviation specialists. A typical project proceeds through four rigorous phases:',
                    'Phase 1 involves site DGPS survey conducted with dual-frequency geodetic GPS receivers, tied back to WGS-84 coordinates and the Survey of India (SOI) benchmark for Site Elevation above Mean Sea Level (AMSL).',
                    'Phase 2 entails online filing through the NOCAS portal with precise 1-second coordinate accuracy. Phase 3 monitors the AAI Aerodrome & CNS vetting committee reviews. Phase 4, if required, handles representation before the Appellate Committee at Rajiv Gandhi Bhawan, New Delhi.',
                ],
                image: {
                    src: 'https://images.pexels.com/photos/15273870/pexels-photo-15273870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    alt: 'Air traffic control tower overlooking modern airport apron and runway operations',
                    caption: 'Figure 4: Active air traffic management environment demanding zero tolerance for unapproved obstacles.',
                },
            },
        ],
        faqs: [
            {
                question: 'What is the validity period of an AAI NOC for height clearance?',
                answer: 'Under GSR 751(E), an AAI NOC for buildings is typically valid for 8 years from the date of issuance, extendable by up to an additional period upon formal revalidation, provided construction has commenced and no new runway orientation has been commissioned.',
            },
            {
                question: 'Can I start construction while my NOC application is under review?',
                answer: 'No. Local civic authorities (such as DDA, MCGM, BBMP, HMDA) require the final AAI NOC before approving building plans or granting commencement certificates. Constructing without an NOC risks statutory notices and demolition.',
            },
            {
                question: 'How do Defence (IAF / Navy) NOC clearances differ from Civil AAI NOCs?',
                answer: 'While AAI manages civil aerodromes via NOCAS, defence airfields (such as Hindon, Pune, Jamnagar, Goa INS Hansa) require manual submissions to the respective Command Headquarters (e.g., Western Air Command) and Air HQ (Vayu Bhawan), followed by MoD security vetting.',
            },
            {
                question: 'What is the role of Sakthi Aviation (SACS) in this process?',
                answer: 'SACS provides complete turnkey support: precision DGPS survey verification, NOCAS filing, 3D obstacle modeling, CNS radar interference simulations, Aeronautical Study documentation, and liaison with AAI and Defence committees.',
            },
        ],
        relatedServiceSlugs: ['aai-iaf-mod-noc', 'airport-development', 'cns-atm-consultancy'],
        relatedBlogSlugs: [
            'nextgen-cns-atm-indian-airspace-modernization',
            'greenfield-airport-development-master-planning',
            'safety-management-systems-sms-airport-operations',
        ],
        regulatoryLinks: [
            { label: 'AAI NOCAS 2.0 Online System', url: 'https://www.nocas2.aai.aero', org: 'Airports Authority of India' },
            { label: 'DGCA Civil Aviation Requirements (CAR)', url: 'https://www.dgca.gov.in', org: 'Directorate General of Civil Aviation' },
            { label: 'Ministry of Civil Aviation (MoCA)', url: 'https://www.civilaviation.gov.in', org: 'Government of India' },
            { label: 'ICAO Annex 14 Aerodromes', url: 'https://www.icao.int', org: 'International Civil Aviation Organization' },
        ],
    },
    {
        id: 'blog-2',
        slug: 'nextgen-cns-atm-indian-airspace-modernization',
        title: 'Modernizing Indian Airspace: Next-Gen CNS/ATM with GAGAN, ADS-B & Digital Remote Towers',
        eyebrow: 'Air Traffic Management & Avionics',
        excerpt:
            'How Indian Air Navigation Services (ANS) are undergoing a monumental transformation: transitioning from terrestrial radar to satellite-based navigation, Performance Based Navigation (PBN), and AI-augmented digital remote towers.',
        category: 'CNS & Air Traffic',
        tags: ['CNS/ATM', 'GAGAN', 'ADS-B', 'Digital Towers', 'PBN', 'Air Traffic Management'],
        author: {
            id: '1',
            name: 'Dr. Arjun Singh',
            designation: 'Managing Director & Former AAI/DGCA Senior Official',
            avatar: drArjunSinghImg,
            bio: 'Recognized authority in CNS/ATM systems, satellite navigation (GAGAN/GBAS), and airport CNS master planning with more than 35 years steering national civil aviation technical programs.',
        },
        publishedDate: 'October 25, 2024',
        updatedDate: 'November 03, 2024',
        readTime: '11 min read',
        featuredImage: cnsAtmImg,
        featuredImageAlt: 'CNS ATM Radar facility monitoring air traffic signals with precision navigation screens',
        featuredImageCaption: 'Figure 1: SACS CNS/ATM Consultancy: Advanced air traffic management and radar surveillance systems.',
        isFeatured: false,
        keyTakeaways: [
            'Indian airspace handles over 3 million aircraft movements annually; conventional radar separation standards are being replaced by ADS-B and PBN routes.',
            'GAGAN (GPS Aided GEO Augmented Navigation), developed jointly by ISRO and AAI, delivers vertical guidance down to Category-I precision landing thresholds without ground ILS.',
            'Digital Remote Towers (R-TWR) are set to revolutionize tier-2 and tier-3 regional aerodromes under the UDAN scheme, enabling centralized ATC hubs.',
            'Airport operators must design CNS infrastructure with multi-redundancy, fiber-optic backbone networks, and strict electromagnetic interference (EMI) containment.',
        ],
        tableOfContents: [
            { id: 'airspace-congestion', title: '1. The Capacity Crunch in Indian Flight Information Regions (FIRs)' },
            { id: 'gagan-satellite-navigation', title: '2. GAGAN & Space-Based Augmentation Systems' },
            { id: 'ads-b-revolution', title: '3. Space-Based ADS-B & Surveillance Modernization' },
            { id: 'digital-remote-towers', title: '4. Digital Remote Towers: The Future for Regional Hubs' },
            { id: 'consultancy-insights', title: '5. SACS Advisory in Airport CNS/ATM Engineering' },
            { id: 'frequently-asked-questions', title: '6. Frequently Asked Questions' },
        ],
        sections: [
            {
                id: 'airspace-congestion',
                heading: '1. The Capacity Crunch in Indian Flight Information Regions (FIRs)',
                paragraphs: [
                    'India represents the third-largest domestic civil aviation market globally. With major hubs like Delhi (DEL), Mumbai (BOM), Bengaluru (BLR), and Hyderabad (HYD) operating near peak runway capacity, the burden on Indian Flight Information Regions (Delhi, Mumbai, Kolkata, Chennai, and Guwahati FIRs) has intensified drastically.',
                    'Historically, air traffic controllers relied on terrestrial Primary Surveillance Radars (PSR) and Secondary Surveillance Radars (SSR), enforcing wide 5-to-10 nautical mile en-route separation buffers. Today, modern Air Navigation Services (ANS) demand Performance-Based Navigation (PBN), Continuous Descent Operations (CDO), and Collaborative Decision Making (A-CDM) to slash holding times, fuel burn, and carbon emissions.',
                ],
                image: {
                    src: 'https://images.pexels.com/photos/14999417/pexels-photo-14999417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    alt: 'Air traffic control towers at an international airport with radar domes',
                    caption: 'Figure 2: Modern Air Traffic Control tower combining visual oversight with synthetic sensor fusion displays.',
                },
                callout: {
                    type: 'info',
                    title: 'Environmental Impact of PBN & CDO',
                    content: 'Implementing PBN RNAV/RNP procedures across Indian airspace saves an estimated 48,000 tonnes of aviation fuel and over 150,000 tonnes of CO₂ emissions annually by eliminating stepped descent profiles.',
                },
            },
            {
                id: 'gagan-satellite-navigation',
                heading: '2. GAGAN & Space-Based Augmentation Systems',
                paragraphs: [
                    'The Indian Satellite-Based Augmentation System (SBAS), branded GAGAN (GPS Aided GEO Augmented Navigation), was engineered by ISRO and AAI to deliver sub-meter horizontal and vertical positioning accuracy over the entire Indian landmass and maritime waters.',
                    'For civil aerodromes that lack the physical real estate or capital budget for expensive Instrument Landing System (ILS) ground transmitters—especially mountainous regional airstrips in the Northeast and Himalayan foothills—GAGAN enables Localizer Performance with Vertical Guidance (LPV-200) approach procedures down to a 200-foot decision height.',
                ],
                table: {
                    caption: 'Table 2: Comparison of Conventional ILS vs. Satellite-Based GAGAN LPV Approaches',
                    headers: ['Attribute', 'Conventional ILS Cat-I', 'GAGAN SBAS (LPV-200)', 'Operational Advantage'],
                    rows: [
                        ['Ground Equipment', 'Localizer, Glide Path, Marker Beacons, Monitor Towers', 'Zero ground equipment at the airport (Satellite broadcast)', 'Reduces airport capital outlay by up to 70%'],
                        ['Maintenance & Calibration', 'Requires routine flight calibration aircraft twice a year', 'Monitored continuously via AAI/ISRO master control station', 'Virtually zero ground maintenance downtime'],
                        ['Decision Height (DH)', '200 ft (60 m)', '200 ft (60 m)', 'Identical operational minimums in adverse weather'],
                        ['Curved Approach Path', 'No (strictly linear runway centerline alignment)', 'Yes (enables terrain avoidance around hills)', 'Unlocks previously inaccessible high-terrain airports'],
                    ],
                },
                nestedLinks: [
                    {
                        text: 'Review SACS CNS Facility Monitoring Experience across 140+ Airports',
                        url: '/services/cns-atm-consultancy',
                        isExternal: false,
                        description: 'Detailed technical audit capabilities for VHF, DVOR, ILS, and Radar installations.',
                    },
                    {
                        text: 'Airports Authority of India Air Navigation Services (ANS)',
                        url: 'https://www.aai.aero/ans',
                        isExternal: true,
                        description: 'Official AAI portal outlining Indian airspace sectorization and route network improvements.',
                    },
                ],
            },
            {
                id: 'ads-b-revolution',
                heading: '3. Space-Based ADS-B & Surveillance Modernization',
                paragraphs: [
                    'Automatic Dependent Surveillance-Broadcast (ADS-B) marks the definitive departure from radar sweeps to real-time digital broadcast. Aircraft continuously broadcast their GNSS position, altitude, velocity, and flight identification twice per second.',
                    'With the integration of space-based ADS-B constellations (satellites carrying ADS-B payloads in low Earth orbit), the oceanic airspace gaps over the Bay of Bengal and Arabian Sea have been successfully bridged, giving Indian controllers 100% continuous oceanic surveillance and reducing trans-oceanic separation to just 3 nautical miles.',
                ],
                image: {
                    src: 'https://images.pexels.com/photos/30475501/pexels-photo-30475501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    alt: 'Commercial aircraft taking off into clear skies over mountain backdrop',
                    caption: 'Figure 3: ADS-B tracking and PBN routes enable seamless vectoring in high-density airspace corridors.',
                },
            },
            {
                id: 'digital-remote-towers',
                heading: '4. Digital Remote Towers: The Future for Regional Hubs',
                paragraphs: [
                    'Erecting a 50-meter concrete air traffic control tower at an aerodrome that accommodates only four flight movements a day under the RCS-UDAN scheme is economically unviable. Enter Digital Remote Towers (R-TWR).',
                    'By deploying high-definition 360-degree optical cameras, pan-tilt-zoom infrared thermal sensors, and pan-directional microphones along the runway and apron, visual and acoustic data is streamed via encrypted high-speed links to a Centralized Remote Tower Control Facility located hundreds of kilometers away.',
                ],
                callout: {
                    type: 'tip',
                    title: 'Economic Feasibility for Regional Operators',
                    content: 'Remote tower operations reduce regional airport lifecycle capital and staffing costs by up to 45%, while augmenting controller vision through augmented reality overlays, runway movement detection, and automatic drone spotting.',
                },
            },
            {
                id: 'consultancy-insights',
                heading: '5. SACS Advisory in Airport CNS/ATM Engineering',
                paragraphs: [
                    'Planning and implementing CNS/ATM infrastructure demands specialized interdisciplinary know-how spanning radio frequency propagation, electro-magnetic spectrum management, aerodrome geometry, and DGCA/ICAO statutory compliance.',
                    'Sakthi Aviation Consultancy Services has delivered technical studies, equipment evaluations, and facility master plan inputs for major national and international airport projects—including greenfield airports in Karnataka, international airports in Africa, and regional airfields across South Asia.',
                ],
                nestedLinks: [
                    {
                        text: 'Contact Our CNS/ATM Engineering Experts',
                        url: '/contact',
                        isExternal: false,
                        description: 'Schedule a technical consultation on radar line-of-sight or airport avionics planning.',
                    },
                ],
            },
        ],
        faqs: [
            {
                question: 'What is the role of GBAS compared to GAGAN in civil aviation?',
                answer: 'While GAGAN is a satellite-based wide-area augmentation system covering the entire subcontinent, GBAS (Ground-Based Augmentation System) uses localized airport reference receivers to support precision Category II and III approach and autoland operations at busy hubs.',
            },
            {
                question: 'How does SACS support airport developers during CNS equipment procurement?',
                answer: 'SACS provides complete technical specifications, vendor evaluation, electromagnetic compatibility studies, coverage contour modeling, and commissioning acceptance testing for DVOR, DME, ILS, ADS-B, and voice communication systems.',
            },
        ],
        relatedServiceSlugs: ['cns-atm-consultancy', 'safety-management-systems', 'airport-development'],
        relatedBlogSlugs: [
            'mastering-aai-noc-clearances-building-near-airports',
            'smart-airport-perimeter-surveillance-pids',
            'regional-connectivity-rcs-udan-technical-feasibility',
        ],
        regulatoryLinks: [
            { label: 'ICAO Global Air Navigation Plan (GANP)', url: 'https://www.icao.int', org: 'ICAO Montreal' },
            { label: 'AAI Air Navigation Services', url: 'https://www.aai.aero/ans', org: 'Airports Authority of India' },
            { label: 'ISRO GAGAN Program Overview', url: 'https://www.isro.gov.in', org: 'Indian Space Research Organisation' },
        ],
    },
    {
        id: 'blog-3',
        slug: 'greenfield-airport-development-master-planning',
        title: 'Developing Greenfield Airports in Emerging Hubs: From Master Plan to Commercial Licensing',
        eyebrow: 'Infrastructure & Aerodrome Development',
        excerpt:
            'A comprehensive walkthrough of the end-to-end lifecycle of greenfield airport development: site selection, wind rose analysis, runway orientation, terminal capacity sizing, DGCA aerodrome licensing, and AERA economic models.',
        category: 'Airport Infrastructure',
        tags: ['Greenfield Airport', 'Master Planning', 'Runway Design', 'DGCA Licensing', 'AERA', 'Terminal Design'],
        author: {
            id: '2',
            name: 'Mr. M. S. Bhargava',
            designation: 'Principal Airport Operations Specialist',
            avatar: mrMSBhargavaImg,
            bio: 'Over 32 years of senior leadership in airport operations, air traffic management, and airport master plan advisory across public and private sector aerodromes.',
        },
        publishedDate: 'November 01, 2024',
        updatedDate: 'November 04, 2024',
        readTime: '10 min read',
        featuredImage: airportDevImg,
        featuredImageAlt: 'Architectural rendering and master planning layout of an airport terminal and runway system',
        featuredImageCaption: 'Figure 1: Comprehensive greenfield airport master planning layout and airspace integration.',
        isFeatured: false,
        keyTakeaways: [
            'Greenfield airport site identification begins with 30-year meteorological wind rose data to achieve a minimum 95% runway crosswind usability factor.',
            'Master planning must be modular and phased to avoid front-loaded capital debt, balancing initial Code 3C/4C capabilities with future expansion corridors.',
            'DGCA Aerodrome Licensing under CAR Section 4 Series F requires rigorous verification of obstacle clearance, runway friction, RFFS fire category, and security perimeter.',
            'Synergy between airside efficiency, city-side multimodal transit, and non-aeronautical commercial revenue drives long-term financial viability.',
        ],
        tableOfContents: [
            { id: 'site-selection', title: '1. Strategic Site Selection & Wind Rose Analysis' },
            { id: 'airside-geometry', title: '2. Airside Geometry: Runways, Taxiways & Aprons' },
            { id: 'terminal-sizing', title: '3. Modular Terminal Design & Passenger Processing' },
            { id: 'dgca-licensing', title: '4. The DGCA Aerodrome Licensing Procedure' },
            { id: 'economic-viability', title: '5. Non-Aero Revenue & Airport City (Aerotropolis) Synergies' },
            { id: 'frequently-asked-questions', title: '6. Frequently Asked Questions' },
        ],
        sections: [
            {
                id: 'site-selection',
                heading: '1. Strategic Site Selection & Wind Rose Analysis',
                paragraphs: [
                    'Developing a greenfield airport is among the most capital-intensive and complex infrastructure undertakings in modern civil engineering. A successful project starts not with concrete or steel, but with wind, terrain, and airspace.',
                    'Under ICAO Annex 14 and DGCA CAR standards, runway alignment must achieve at least 95% wind usability factor. This requires analyzing 10 years of hourly surface wind observations (speed and direction) through specialized Wind Rose software to determine the optimal runway headings that minimize hazardous crosswinds for landing aircraft.',
                ],
                image: {
                    src: 'https://images.pexels.com/photos/12858453/pexels-photo-12858453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    alt: 'Aerial perspective of airport infrastructure layout showing runway and taxiway relationships',
                    caption: 'Figure 2: Optimal runway alignment designed for maximum crosswind coverage and terrain obstacle clearance.',
                },
                callout: {
                    type: 'regulation',
                    title: 'MoCA Greenfield Airport Policy (GAP) 2008',
                    content: 'In India, setting up a greenfield airport requires Site Clearance from the Steering Committee headed by the Secretary (Civil Aviation), followed by formal In-Principle Approval from the Central Government.',
                },
                nestedLinks: [
                    {
                        text: 'Discover SACS Airport Development Consultancy Services',
                        url: '/services/airport-development',
                        isExternal: false,
                        description: 'From preliminary feasibility reports (PFR) to detailed master plans and airside layout optimization.',
                    },
                    {
                        text: 'Airports Economic Regulatory Authority (AERA)',
                        url: 'https://www.aera.gov.in',
                        isExternal: true,
                        description: 'Regulatory body governing aeronautical tariffs, user development fees (UDF), and airport economic models.',
                    },
                ],
            },
            {
                id: 'airside-geometry',
                heading: '2. Airside Geometry: Runways, Taxiways & Aprons',
                paragraphs: [
                    'Airside layout determines an airport’s maximum peak-hour movement capacity. Key design decisions revolve around the Aerodrome Reference Code (e.g., Code 4E for wide-body Boeing 777 / Airbus A350 operations or Code 3C for domestic Airbus A320 / Boeing 737 traffic).',
                    'A well-engineered airport features parallel taxiways and rapid-exit taxiways (RETs) positioned at optimal deceleration distances, reducing runway occupancy time (ROT) from 75 seconds to under 45 seconds, thereby enabling 35+ aircraft movements per hour on a single runway.',
                ],
                table: {
                    caption: 'Table 3: Aerodrome Reference Code Dimensions (ICAO Annex 14 / DGCA CAR)',
                    headers: ['Code Element', 'Aircraft Type Examples', 'Reference Runway Width', 'Taxiway Separation Distance'],
                    rows: [
                        ['Code 3C', 'ATR-72, Airbus A320, Boeing 737-800', '45 meters', '168 meters (Centerline to Centerline)'],
                        ['Code 4D', 'Boeing 767, Airbus A300, Boeing 757', '45 meters', '176 meters'],
                        ['Code 4E', 'Boeing 777-300ER, Boeing 787, Airbus A350', '45–60 meters', '182.5 meters'],
                        ['Code 4F', 'Airbus A380-800, Boeing 747-8 Intercontinental', '60 meters (with 7.5m shoulders)', '190 meters'],
                    ],
                },
            },
            {
                id: 'terminal-sizing',
                heading: '3. Modular Terminal Design & Passenger Processing',
                paragraphs: [
                    'Modern terminal engineering balances passenger comfort with peak operational throughput. Sizing models use IATA Airport Development Reference Manual (ADRM) Level of Service (LoS) standards (Level of Service: Optimum).',
                    'Key processing nodes—including curbside drop-off lanes, check-in islands (incorporating DigiYatra biometric gates), baggage screening CTX machines, immigration kiosks, and boarding gate lounges—must be dimensioned against PHP (Peak Hour Passenger) forecasts to prevent bottleneck congestion during travel bank peaks.',
                ],
                image: {
                    src: airportOpsImg,
                    alt: 'Airport terminal boarding gates and passenger apron operations',
                    caption: 'Figure 3: Seamless flow between terminal security gates and aircraft stands.',
                },
            },
            {
                id: 'dgca-licensing',
                heading: '4. The DGCA Aerodrome Licensing Procedure',
                paragraphs: [
                    'An airport cannot commence commercial flight operations without a formal Aerodrome License granted by the Directorate General of Civil Aviation under Rule 78 of the Aircraft Rules 1937.',
                    'The licensing procedure requires compiling a comprehensive Aerodrome Manual containing detailed operational procedures, emergency response protocols, wildlife hazard control programs, and Rescue and Fire Fighting Services (RFFS Category 7 to 10).',
                ],
                nestedLinks: [
                    {
                        text: 'Review SACS Airside Equipment & Operational Advisory',
                        url: '/services/airside-equipment',
                        isExternal: false,
                        description: 'Specification and commissioning of airfield ground lighting (AGL), visual docking guidance, and pushback tugs.',
                    },
                ],
            },
            {
                id: 'economic-viability',
                heading: '5. Non-Aero Revenue & Airport City (Aerotropolis) Synergies',
                paragraphs: [
                    'Aeronautical revenues (landing, parking, housing, and terminal navigation fees) alone rarely service the massive debt of greenfield airport capital expenditure. Modern airports generate up to 50% of their net operating income from non-aeronautical activities.',
                    'This includes duty-free retail, F&B concessions, premium car parking, hospitality, bonded logistics parks, and surrounding Aerotropolis commercial real estate development.',
                ],
                quote: {
                    text: 'An airport is no longer just a piece of transit infrastructure; it is an economic growth engine that transforms entire regional economies. Successful airport design ensures every square meter of real estate works harmoniously with aviation safety regulations.',
                    author: 'Mr. M. S. Bhargava',
                    role: 'Principal Airport Operations Specialist, SACS',
                },
            },
        ],
        faqs: [
            {
                question: 'What is the typical timeline to develop a greenfield airport in India?',
                answer: 'A greenfield airport typically takes 3 to 5 years from land acquisition and MoCA in-principle approval to commercial commissioning, depending on environmental clearances, terrain grading, and construction speed.',
            },
            {
                question: 'How does SACS assist private concessionaires and state governments?',
                answer: 'SACS provides complete advisory: pre-bid technical due diligence, master plan validation, obstacle surveys, DGCA licensing assistance, CNS equipment planning, and operational readiness & airport transfer (ORAT) frameworks.',
            },
        ],
        relatedServiceSlugs: ['airport-development', 'airport-operations', 'airside-equipment'],
        relatedBlogSlugs: [
            'mastering-aai-noc-clearances-building-near-airports',
            'safety-management-systems-sms-airport-operations',
            'regional-connectivity-rcs-udan-technical-feasibility',
        ],
        regulatoryLinks: [
            { label: 'DGCA Aerodrome Standards (CAR Section 4)', url: 'https://www.dgca.gov.in', org: 'DGCA India' },
            { label: 'Ministry of Civil Aviation Greenfield Policy', url: 'https://www.civilaviation.gov.in', org: 'MoCA' },
            { label: 'Airports Economic Regulatory Authority of India', url: 'https://www.aera.gov.in', org: 'AERA' },
        ],
    },
    {
        id: 'blog-4',
        slug: 'safety-management-systems-sms-airport-operations',
        title: 'Proactive Safety Management Systems (SMS) in Civil Aviation: Meeting DGCA CAR Series "F"',
        eyebrow: 'Safety, Quality & Regulatory Compliance',
        excerpt:
            'A practical blueprint for implementing an audit-proof, proactive Safety Management System (SMS) across airport operators and ground handling agencies in strict alignment with ICAO Annex 19 and DGCA requirements.',
        category: 'Aviation Safety & SMS',
        tags: ['SMS', 'Aviation Safety', 'DGCA CAR Series F', 'Risk Management', 'Runway Incursions', 'FOD Prevention'],
        author: {
            id: '3',
            name: 'Mr. D. K. Behera',
            designation: 'Senior Safety & Compliance Advisor',
            avatar: mrDKBeheraImg,
            bio: 'Distinguished aviation operations and safety auditor with 28+ years steering safety management, airport ramp operations, and regulatory audit compliance.',
        },
        publishedDate: 'November 02, 2024',
        updatedDate: 'November 04, 2024',
        readTime: '8 min read',
        featuredImage: airportOpsImg,
        featuredImageAlt: 'Airport safety operations team conducting airside runway and taxiway friction inspections',
        featuredImageCaption: 'Figure 1: Airside safety management: continuous runway friction testing and FOD monitoring.',
        isFeatured: false,
        keyTakeaways: [
            'A Safety Management System (SMS) transforms airport safety culture from reactive accident investigation to predictive, data-driven hazard mitigation.',
            'DGCA CAR Section 1 Series C Part I and CAR Section 4 Series F mandate SMS across all licensed aerodromes, air operators, and maintenance organizations.',
            'The 4 Pillars of SMS (Policy, Risk Management, Safety Assurance, and Promotion) establish non-punitive voluntary hazard reporting loops.',
            'Effective runway safety teams (RST) and ramp safety committees drastically curtail runway excursions, incursions, and ground support equipment (GSE) collisions.',
        ],
        tableOfContents: [
            { id: 'four-pillars', title: '1. The Four Pillars of an ICAO Annex 19 SMS' },
            { id: 'hazard-identification', title: '2. Proactive Hazard Identification & Risk Matrix' },
            { id: 'airside-critical-hazards', title: '3. Mitigating Top Airside Risks: Runway Incursions & FOD' },
            { id: 'safety-culture', title: '4. Fostering a Just Culture & Voluntary Reporting' },
            { id: 'audit-readiness', title: '5. Preparing for DGCA Safety Oversight Audits' },
            { id: 'frequently-asked-questions', title: '6. Frequently Asked Questions' },
        ],
        sections: [
            {
                id: 'four-pillars',
                heading: '1. The Four Pillars of an ICAO Annex 19 SMS',
                paragraphs: [
                    'Aviation safety was historically governed by forensic investigations: an incident occurred, findings were published, and new rules were inscribed. Today, modern aviation operates on the proactive principles of ICAO Annex 19 and DGCA CAR Series F.',
                    'A compliant Safety Management System is constructed upon four interlocking organizational pillars:',
                ],
                bullets: [
                    'Pillar 1: Safety Policy & Objectives – Clear accountability from the Accountable Executive, organizational safety committees, and dedicated Safety Managers.',
                    'Pillar 2: Safety Risk Management (SRM) – Continuous hazard identification, consequence analysis, risk assessment, and mitigation implementation.',
                    'Pillar 3: Safety Assurance – Safety performance indicators (SPIs), safety performance targets (SPTs), and routine internal safety audits.',
                    'Pillar 4: Safety Promotion – Training, education, and transparent safety communication across all airside ground handlers, airlines, and airport contractors.',
                ],
                callout: {
                    type: 'info',
                    title: 'The Role of the Accountable Executive',
                    content: 'Under DGCA regulations, the Accountable Executive (typically the Airport CEO or Managing Director) holds ultimate personal and statutory accountability for ensuring adequate resources are dedicated to safety management.',
                },
                nestedLinks: [
                    {
                        text: 'Explore SACS Safety Management Systems (SMS) Practice',
                        url: '/services/safety-management-systems',
                        isExternal: false,
                        description: 'Turnkey SMS manual drafting, risk workshops, and pre-audit readiness reviews.',
                    },
                    {
                        text: 'DGCA CAR Series on Safety Management',
                        url: 'https://www.dgca.gov.in',
                        isExternal: true,
                        description: 'Official regulations mandating SMS framework implementation across Indian aerodromes.',
                    },
                ],
            },
            {
                id: 'hazard-identification',
                heading: '2. Proactive Hazard Identification & Risk Matrix',
                paragraphs: [
                    'At the core of SRM is the standard 5x5 Aviation Risk Matrix, plotting Hazard Severity (Catastrophic, Hazardous, Major, Minor, Negligible) against Likelihood of Occurrence (Frequent, Occasional, Remote, Improbable, Extremely Improbable).',
                    'Any risk indexed in the "Red" zone (Unacceptable) requires immediate stop-work or operational restriction until engineering or procedural controls reduce the residual risk to ALARP (As Low As Reasonably Practicable).',
                ],
                table: {
                    caption: 'Table 4: Standard Aviation Risk Assessment Tolerability Matrix (ICAO Doc 9859)',
                    headers: ['Likelihood / Severity', '1. Negligible', '2. Minor', '3. Major', '4. Hazardous', '5. Catastrophic'],
                    rows: [
                        ['A. Frequent', 'Moderate (Low)', 'High', 'Unacceptable', 'Unacceptable', 'Unacceptable'],
                        ['B. Occasional', 'Low', 'Moderate', 'High', 'Unacceptable', 'Unacceptable'],
                        ['C. Remote', 'Low', 'Low', 'Moderate', 'High', 'Unacceptable'],
                        ['D. Improbable', 'Low', 'Low', 'Low', 'Moderate', 'High'],
                        ['E. Extremely Improbable', 'Low', 'Low', 'Low', 'Low', 'Moderate'],
                    ],
                },
            },
            {
                id: 'airside-critical-hazards',
                heading: '3. Mitigating Top Airside Risks: Runway Incursions & FOD',
                paragraphs: [
                    'Airside operations feature massive moving aircraft sharing tight tarmac spaces with baggage tugs, fuel bowsers, catering trucks, and passenger coaches. Two hazards top the agenda of every Aerodrome Safety Committee:',
                    'Foreign Object Debris (FOD): Discarded bolts, luggage tags, or pavement asphalt chips sucked into turbofan jet engines cause billions of dollars in damage annually. Deploying automated FOD radar cameras and daily high-magnet sweepers is vital.',
                    'Runway Incursions: Any unauthorized presence of an aircraft, vehicle, or person on the runway protected zone. Modern prevention relies on Runway Status Lights (RWSL), Stop Bars, and rigorous driver airside certification.',
                ],
                image: {
                    src: airsideImg,
                    alt: 'Airside support vehicles and aircraft turnaround ground operations on busy apron',
                    caption: 'Figure 2: Tight operational coordination during quick 25-minute aircraft turnaround cycles.',
                },
            },
            {
                id: 'safety-culture',
                heading: '4. Fostering a Just Culture & Voluntary Reporting',
                paragraphs: [
                    'An SMS is only as effective as the honesty of the frontline workforce. If a ramp marshaller or maintenance engineer fears immediate termination for admitting an inadvertent mistake, errors will be concealed until they cause a disaster.',
                    'A "Just Culture" clearly delineates between honest, human procedural slips (which are protected under confidential voluntary reporting schemes) and willful, reckless negligence or substance abuse (which face disciplinary action).',
                ],
                quote: {
                    text: 'Safety is not the absence of incidents; it is the presence of robust, proactive defenses. When a ramp worker voluntarily reports a near-miss without fear of retribution, that is when you know your airport has achieved a world-class safety culture.',
                    author: 'Mr. D. K. Behera',
                    role: 'Senior Safety & Compliance Advisor, SACS',
                },
            },
            {
                id: 'audit-readiness',
                heading: '5. Preparing for DGCA Safety Oversight Audits',
                paragraphs: [
                    'DGCA conducts rigorous annual aerodrome safety audits to inspect documentation, emergency response preparedness, fire category maintenance, and safety committee minutes. SACS provides pre-audit gap audits that pinpoint non-conformances before government inspectors arrive.',
                ],
                nestedLinks: [
                    {
                        text: 'Contact Our Safety Advisory Team',
                        url: '/contact',
                        isExternal: false,
                        description: 'Schedule a comprehensive safety gap audit for your airport or ground handling operations.',
                    },
                ],
            },
        ],
        faqs: [
            {
                question: 'What is the difference between SMS and Quality Management System (QMS)?',
                answer: 'While QMS focuses on product consistency, customer satisfaction, and process repeatability (e.g., ISO 9001), SMS focuses strictly on the identification and mitigation of safety hazards and the preservation of human life and equipment.',
            },
            {
                question: 'Does SACS provide SMS training for airside staff?',
                answer: 'Yes. SACS delivers tailored SMS workshops for executives, safety managers, runway safety teams, and ground support vehicle operators, compliant with ICAO Doc 9859 guidelines.',
            },
        ],
        relatedServiceSlugs: ['safety-management-systems', 'airport-operations', 'project-consultancy'],
        relatedBlogSlugs: [
            'greenfield-airport-development-master-planning',
            'smart-airport-perimeter-surveillance-pids',
            'nextgen-cns-atm-indian-airspace-modernization',
        ],
        regulatoryLinks: [
            { label: 'ICAO Annex 19 (Safety Management)', url: 'https://www.icao.int', org: 'ICAO' },
            { label: 'DGCA India Safety Regulations', url: 'https://www.dgca.gov.in', org: 'DGCA' },
            { label: 'Civil Aviation Safety Team (CAST)', url: 'https://www.faa.gov', org: 'International Safety Forum' },
        ],
    },
    {
        id: 'blog-5',
        slug: 'smart-airport-perimeter-surveillance-pids',
        title: 'Smart Airport Security: Integrating PIDS, AI Video Analytics & Drone Countermeasures',
        eyebrow: 'Aviation Security & Surveillance',
        excerpt:
            'How international and domestic airports are securing critical operational boundaries by integrating fiber-optic Perimeter Intrusion Detection Systems (PIDS), thermal thermal cameras, and anti-drone electronic shields in compliance with BCAS norms.',
        category: 'Security & Tech',
        tags: ['Airport Security', 'BCAS', 'PIDS', 'AI Surveillance', 'Anti-Drone', 'CCTV Analytics'],
        author: {
            id: '4',
            name: 'Mr. Dhiraj Soni',
            designation: 'Aviation Security & Systems Architect',
            avatar: mrDhirajSoniImg,
            bio: 'Over 16 years designing integrated security, perimeter intrusion detection, and surveillance architectures for critical infrastructure and major civil airports.',
        },
        publishedDate: 'October 29, 2024',
        updatedDate: 'November 03, 2024',
        readTime: '9 min read',
        featuredImage: securityImg,
        featuredImageAlt: 'Integrated airport security operations center monitoring perimeter surveillance screens',
        featuredImageCaption: 'Figure 1: SACS Security & Surveillance Consultancy: Advanced command-and-control architectures.',
        isFeatured: false,
        keyTakeaways: [
            'Airport perimeter fences spanning 15 to 30 km require continuous, zero-blind-spot surveillance to thwart unauthorized entry into sterile airside zones.',
            'Fiber-optic vibration sensors mounted on boundary fences provide pinpoint location accuracy (±5 meters) in real time.',
            'BCAS (Bureau of Civil Aviation Security) mandates multi-tier security incorporating PIDS, thermal PTZ cameras, automated boom barriers, and access control.',
            'The emergence of rogue consumer drones (UAVs) requires deploying specialized RF scanning, radar detection, and soft-kill electronic jamming countermeasures.',
        ],
        tableOfContents: [
            { id: 'perimeter-challenge', title: '1. The Perimeter Challenge: 25 Kilometers of Vulnerability' },
            { id: 'pids-technology', title: '2. Modern PIDS: Fiber Optics, Geophones & Microwave Barriers' },
            { id: 'ai-video-analytics', title: '3. AI-Powered Video Analytics & Thermal Camera Networks' },
            { id: 'counter-drone-threat', title: '4. Countering Unmanned Aerial Vehicles (C-UAV)' },
            { id: 'bcas-compliance', title: '5. BCAS Standards & Security Master Planning' },
            { id: 'frequently-asked-questions', title: '6. Frequently Asked Questions' },
        ],
        sections: [
            {
                id: 'perimeter-challenge',
                heading: '1. The Perimeter Challenge: 25 Kilometers of Vulnerability',
                paragraphs: [
                    'Large international aerodromes occupy thousands of acres of land, bounded by perimeter boundary walls (PBWs) stretching between 15 and 35 kilometers. This vast perimeter traverses varied topography: agricultural fields, dense foliage, nullahs, rivers, and urban slums.',
                    'Physical walls topped with concertina razor coils alone are insufficient against determined intrusions. In modern aviation security, the goal is Early Detection and Immediate Interception before an intruder can reach the runway or parked aircraft.',
                ],
                image: {
                    src: 'https://images.pexels.com/photos/15273870/pexels-photo-15273870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    alt: 'Air traffic control and security boundary overlooking the runway threshold',
                    caption: 'Figure 2: Safeguarding airside operational zones requires real-time intrusion alerting.',
                },
                callout: {
                    type: 'regulation',
                    title: 'BCAS Circular on Perimeter Security',
                    content: 'The Bureau of Civil Aviation Security (BCAS) mandates that hyper-sensitive and major airports implement automated Perimeter Intrusion Detection Systems (PIDS) integrated with CCTV and dedicated Quick Reaction Teams (QRT).',
                },
                nestedLinks: [
                    {
                        text: 'Explore SACS Aviation Security & Surveillance Consultancy',
                        url: '/services/aviation-security-surveillance',
                        isExternal: false,
                        description: 'Detailed security system design, procurement specification, and BCAS compliance support.',
                    },
                    {
                        text: 'Bureau of Civil Aviation Security (BCAS) India',
                        url: 'https://www.bcasindia.gov.in',
                        isExternal: true,
                        description: 'National regulatory authority for civil aviation security in India.',
                    },
                ],
            },
            {
                id: 'pids-technology',
                heading: '2. Modern PIDS: Fiber Optics, Geophones & Microwave Barriers',
                paragraphs: [
                    'Contemporary PIDS architecture relies on distributed acoustic sensing (DAS) via fiber-optic cables clamped directly to the perimeter mesh. When an intruder attempts to cut, climb, or breach the fence, microscopic optical phase shifts are detected by an opto-electronic interrogator unit, pinpointing the breach zone to within 5 meters.',
                    'In culvert and nullah openings where fences cannot be erected, bistatic microwave barriers and ground-buried seismic geophones provide an invisible electronic tripwire.',
                ],
                table: {
                    caption: 'Table 5: Comparison of Perimeter Intrusion Detection Technologies',
                    headers: ['Technology', 'Detection Principle', 'False Alarm Rate (FAR)', 'Environmental Resistance'],
                    rows: [
                        ['Fence-Mounted Fiber Optic', 'Micro-vibration & acoustic pulse reflections', 'Very Low (filtered by AI neural algorithms)', 'Unaffected by lightning, EMI, rain, or extreme heat'],
                        ['Bistatic Microwave Barrier', 'RF beam disruption between transmitter/receiver', 'Low-to-Medium (sensitive to heavy fog & heavy vegetation)', 'Excellent for open gate and water culvert crossings'],
                        ['Thermal PTZ Cameras', 'Heat contrast differential detection', 'Low (when paired with analytics)', 'Operates in complete pitch blackness, smoke, and light dust'],
                        ['Ground Radar (SMR/PIDS)', 'Radar micro-doppler target tracking', 'Extremely Low', 'Covers 360-degree approach fields up to 1,500m away'],
                    ],
                },
            },
            {
                id: 'ai-video-analytics',
                heading: '3. AI-Powered Video Analytics & Thermal Camera Networks',
                paragraphs: [
                    'Human operators monitoring hundreds of CCTV video monitors suffer from vigilance fatigue within 20 minutes. Modern airport security centers solve this through AI video analytics (VCA).',
                    'When a PIDS fence sensor alerts, the nearest pan-tilt-zoom (PTZ) thermal camera automatically slews and focuses on the exact GPS coordinate, tracking the moving human target while raising an automated alarm on the central video wall for CISF/QRT deployment.',
                ],
                image: {
                    src: 'https://images.pexels.com/photos/14999417/pexels-photo-14999417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    alt: 'Surveillance towers and communications antennas securing the flight area',
                    caption: 'Figure 3: Thermal cameras mounted on perimeter security watchtowers ensure round-the-clock visibility.',
                },
            },
            {
                id: 'counter-drone-threat',
                heading: '4. Countering Unmanned Aerial Vehicles (C-UAV)',
                paragraphs: [
                    'Consumer and commercial drones pose a critical hazard to jet engine intakes and aircraft windscreens during low-altitude approach and climb-out phases. A rogue drone sighting can paralyze an airport, diverting dozens of flights.',
                    'Next-generation smart airports deploy multi-layered Anti-Drone Systems: RF spectrum analyzers detect the command-and-control telemetry between the pilot and drone; specialized micro-doppler radars track low-RCS targets; and directional radio frequency jammers disrupt the drone’s GPS navigation and force it to land safely.',
                ],
                callout: {
                    type: 'warning',
                    title: 'Airspace Drone Protection Zone',
                    content: 'Under Ministry of Civil Aviation Drone Rules 2021, the airspace within 5 km of an international airport boundary is a designated "Red Zone" where no drone flight is permitted without prior Air HQ and DGCA clearance.',
                },
            },
            {
                id: 'bcas-compliance',
                heading: '5. BCAS Standards & Security Master Planning',
                paragraphs: [
                    'Designing airport security systems requires harmonizing technology specifications with BCAS AVSEC orders, CISF operational requirements, and international ICAO Annex 17 conventions.',
                    'Sakthi Aviation Consultancy Services works alongside airport concessionaires to engineer integrated security architectures covering access control (ACS), baggage explosive detection systems (CT-EDS), public address systems, and central security control centers.',
                ],
                nestedLinks: [
                    {
                        text: 'Review SACS Technical Team & Security Practice',
                        url: '/team',
                        isExternal: false,
                        description: 'Learn about our specialists in airport operations and security engineering.',
                    },
                ],
            },
        ],
        faqs: [
            {
                question: 'What is the role of CISF vs. the airport operator in perimeter security?',
                answer: 'In Indian civil airports, the CISF (Central Industrial Security Force) acts as the operational armed security agency, while the airport operator is legally responsible for funding, procuring, installing, and maintaining the PIDS and surveillance infrastructure.',
            },
            {
                question: 'How do you prevent false alarms triggered by animals or windy weather on PIDS?',
                answer: 'Modern fiber-optic PIDS systems use digital signal processing (DSP) and machine learning algorithms that distinguish the high-frequency signature of a human cutting or climbing wire from the low-frequency ambient sway caused by wind, rain, or small animals.',
            },
        ],
        relatedServiceSlugs: ['aviation-security-surveillance', 'project-consultancy', 'airport-operations'],
        relatedBlogSlugs: [
            'safety-management-systems-sms-airport-operations',
            'nextgen-cns-atm-indian-airspace-modernization',
            'greenfield-airport-development-master-planning',
        ],
        regulatoryLinks: [
            { label: 'Bureau of Civil Aviation Security (BCAS)', url: 'https://www.bcasindia.gov.in', org: 'BCAS India' },
            { label: 'ICAO Annex 17 (Security)', url: 'https://www.icao.int', org: 'ICAO' },
            { label: 'Ministry of Civil Aviation Drone Regulations', url: 'https://www.civilaviation.gov.in', org: 'MoCA' },
        ],
    },
    {
        id: 'blog-6',
        slug: 'regional-connectivity-rcs-udan-technical-feasibility',
        title: 'Unlocking Tier-2 & Tier-3 Regional Skies: Engineering Feasibility for RCS-UDAN Airstrips',
        eyebrow: 'Regional Aviation & Policy',
        excerpt:
            'How the Regional Connectivity Scheme (RCS-UDAN) is revitalizing unserved and underserved airstrips across Bharat: key technical feasibility factors, Code 2B/3C runway rehabilitation, modular terminals, and economic sustainability.',
        category: 'Regional Connectivity (UDAN)',
        tags: ['RCS UDAN', 'Regional Airports', 'Code 2B Runway', 'ATR-72', 'Airstrip Revamp', 'Tier-2 Aviation'],
        author: {
            id: '5',
            name: 'Mr. Hemchand Sharma',
            designation: 'Regional Aerodrome Consultant',
            avatar: mrHemchandSharmaImg,
            bio: 'Over 18 years consulting on regional aerodrome revival, small airstrip licensing, security infrastructure, and civil aviation operational planning.',
        },
        publishedDate: 'November 03, 2024',
        updatedDate: 'November 04, 2024',
        readTime: '8 min read',
        featuredImage: 'https://images.pexels.com/photos/30475501/pexels-photo-30475501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        featuredImageAlt: 'Regional turboprop aircraft parked on tarmac at a regional airport with scenic backdrop',
        featuredImageCaption: 'Figure 1: RCS-UDAN: Connecting Tier-2 and Tier-3 towns via turboprop regional airliners.',
        isFeatured: false,
        keyTakeaways: [
            'RCS-UDAN (Ude Desh ka Aam Nagrik) has operationalized over 85 previously unserved or abandoned airstrips and heliports across India.',
            'Revitalizing old World War II or state government airstrips requires pavement core testing (PCN vs ACN) and runway extension to at least 1,400 meters for ATR-72 / Q400 aircraft.',
            'Low-cost, pre-engineered modular terminals enable rapid commissioning within 9 months at a fraction of conventional civil terminal costs.',
            'DGCA 2B/2C licensing requires targeted obstacle clearance surveys, VFR/IFR lighting installations, and basic RFFS Category 4 to 6 emergency capabilities.',
        ],
        tableOfContents: [
            { id: 'udan-vision', title: '1. The UDAN Revolution: Connecting Tier-2 & Tier-3 Bharat' },
            { id: 'pavement-evaluation', title: '2. Pavement Engineering: Core Testing & Runway Extension' },
            { id: 'modular-terminals', title: '3. Pre-Engineered Modular Terminals: Fast-Track Execution' },
            { id: 'navigation-aids', title: '4. Essential CNS/ATM Aids for Regional Airfields' },
            { id: 'sacs-advisory', title: '5. SACS Turnkey Technical Feasibility for Regional Aerodromes' },
            { id: 'frequently-asked-questions', title: '6. Frequently Asked Questions' },
        ],
        sections: [
            {
                id: 'udan-vision',
                heading: '1. The UDAN Revolution: Connecting Tier-2 & Tier-3 Bharat',
                paragraphs: [
                    'The launch of the Regional Connectivity Scheme (RCS-UDAN) by the Ministry of Civil Aviation transformed Indian aviation from an elite metro-to-metro mode of transport into an engine of nationwide economic democratization.',
                    'Dozens of tier-2 and tier-3 towns—including Darbhanga, Jharsuguda, Kishangarh, Rupsi, and Belagavi—have experienced astronomical passenger demand once commercial air connections were established. However, transforming a dormant, weed-covered airstrip into a fully licensed DGCA commercial aerodrome demands rigorous technical engineering.',
                ],
                image: {
                    src: 'https://images.pexels.com/photos/12858453/pexels-photo-12858453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    alt: 'Regional runway strip and apron area prepared for turboprop aircraft operations',
                    caption: 'Figure 2: Revitalized regional airstrips unlocking industrial and pilgrimage corridors.',
                },
                callout: {
                    type: 'info',
                    title: 'Viability Gap Funding (VGF) Mechanism',
                    content: 'Under RCS-UDAN, selected airline operators receive Viability Gap Funding (VGF) from the Central and State Governments to cap passenger airfares on 50% of regional aircraft seats for the first three years.',
                },
                nestedLinks: [
                    {
                        text: 'Review SACS Airport Development & Planning Services',
                        url: '/services/airport-development',
                        isExternal: false,
                        description: 'Detailed site evaluation, master planning, and runway engineering consultancy.',
                    },
                    {
                        text: 'Ministry of Civil Aviation UDAN Information Portal',
                        url: 'https://www.civilaviation.gov.in/en/udan',
                        isExternal: true,
                        description: 'Official bidding rounds, operational routes, and policy circulars for RCS-UDAN.',
                    },
                ],
            },
            {
                id: 'pavement-evaluation',
                heading: '2. Pavement Engineering: Core Testing & Runway Extension',
                paragraphs: [
                    'Most abandoned or unserved state government airstrips were originally designed for small 6-to-8 seater trainer aircraft (like Cessna 172s) with runway lengths under 900 meters and unknown pavement load ratings.',
                    'To accommodate modern 70-seater regional turboprops like the ATR 72-600 or Bombardier Q400, the runway length must typically be extended to 1,400–1,600 meters. Pavement engineers must conduct Heavy Weight Deflectometer (HWD) tests, plate load tests, and core extraction to establish the Pavement Classification Rating (PCR) under the new ICAO ACR-PCR system.',
                ],
                table: {
                    caption: 'Table 6: Regional Aircraft Fleet Technical Operating Requirements',
                    headers: ['Aircraft Type', 'Passenger Capacity', 'Take-Off Distance (MTOW)', 'Required Runway Width', 'Fire Category'],
                    rows: [
                        ['Dornier 228 / Twin Otter', '19 Passengers', '800 – 1,000 meters', '23 – 30 meters', 'RFFS Cat 3 / 4'],
                        ['ATR 72-600', '70 – 72 Passengers', '1,333 meters', '30 – 45 meters', 'RFFS Cat 5'],
                        ['De Havilland Q400', '78 – 86 Passengers', '1,402 meters', '30 – 45 meters', 'RFFS Cat 5 / 6'],
                        ['Embraer E175 / E190', '76 – 100 Passengers', '1,650 meters', '45 meters', 'RFFS Cat 6'],
                    ],
                },
            },
            {
                id: 'modular-terminals',
                heading: '3. Pre-Engineered Modular Terminals: Fast-Track Execution',
                paragraphs: [
                    'Traditional concrete brick-and-mortar terminals take 24 to 36 months to build. Regional UDAN airfields overcome this through Pre-Engineered Building (PEB) modular steel construction.',
                    'Featuring insulated sandwich panels, high-ceiling glass facades, energy-efficient HVAC, and integrated baggage conveyor carousels, these modular terminals can be fabricated offsite and erected in under 9 months, handling 150 to 300 peak-hour passengers with ease.',
                ],
                image: {
                    src: 'https://images.pexels.com/photos/15273870/pexels-photo-15273870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    alt: 'Regional airport control station and tarmac access',
                    caption: 'Figure 3: Compact, efficient regional airport terminal layout optimized for rapid turnarounds.',
                },
            },
            {
                id: 'navigation-aids',
                heading: '4. Essential CNS/ATM Aids for Regional Airfields',
                paragraphs: [
                    'Small regional airfields cannot afford the high capital cost of full ILS Category I equipment. Instead, regional connectivity is powered by cost-efficient solutions:',
                    'Deploying VHF aeronautical ground stations, Simple Approach Lighting Systems (SALS), Precision Approach Path Indicators (PAPI), and GAGAN satellite-based LPV approach procedures enables all-weather commercial flight schedules without bankrupting the municipal operator.',
                ],
                nestedLinks: [
                    {
                        text: 'Read More on GAGAN & Satellite Navigation in Our CNS Guide',
                        url: '/blog/nextgen-cns-atm-indian-airspace-modernization',
                        isExternal: false,
                        description: 'Detailed analysis of satellite approach procedures replacing terrestrial navigational aids.',
                    },
                ],
            },
            {
                id: 'sacs-advisory',
                heading: '5. SACS Turnkey Technical Feasibility for Regional Aerodromes',
                paragraphs: [
                    'Sakthi Aviation Consultancy Services has provided comprehensive advisory for state governments, regional development authorities, and infrastructure EPC contractors.',
                    'Our deliverables encompass obstacle limitation surveys (OLS), soil and pavement strength audits, airside geometry redesign, terminal sizing, and complete DGCA aerodrome licensing liaison.',
                ],
                nestedLinks: [
                    {
                        text: 'Consult SACS for Regional Airfield Revival Projects',
                        url: '/contact',
                        isExternal: false,
                        description: 'Direct consultation with our senior aerodrome engineering and operations specialists.',
                    },
                ],
            },
        ],
        faqs: [
            {
                question: 'Can private airstrips be licensed for commercial flights under UDAN?',
                answer: 'Yes. State governments or private airfield owners can partner with AAI or operate directly as a licensed aerodrome under DGCA CAR Section 4 to bid for and host commercial flights under the RCS-UDAN framework.',
            },
            {
                question: 'What is the minimum land requirement for a regional airstrip?',
                answer: 'A standard Code 2B/3C regional runway supporting 70-seater turboprops typically requires a minimum land parcel of approximately 100 to 150 acres to accommodate the runway strip, RESA (Runway End Safety Area), terminal, and basic apron.',
            },
        ],
        relatedServiceSlugs: ['airport-development', 'aai-iaf-mod-noc', 'airport-operations'],
        relatedBlogSlugs: [
            'greenfield-airport-development-master-planning',
            'mastering-aai-noc-clearances-building-near-airports',
            'safety-management-systems-sms-airport-operations',
        ],
        regulatoryLinks: [
            { label: 'Ministry of Civil Aviation UDAN Scheme', url: 'https://www.civilaviation.gov.in/en/udan', org: 'MoCA' },
            { label: 'Airports Authority of India (AAI)', url: 'https://www.aai.aero', org: 'AAI' },
            { label: 'DGCA Aerodrome Licensing (CAR Section 4)', url: 'https://www.dgca.gov.in', org: 'DGCA' },
        ],
    },
];

// Helper functions for easy filtering and querying
export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlog(): BlogPost {
    return blogPosts.find((post) => post.isFeatured) || blogPosts[0];
}

export function getRelatedBlogs(currentSlug: string, count = 3): BlogPost[] {
    const currentPost = getBlogPost(currentSlug);
    if (!currentPost) return blogPosts.slice(0, count);

    // First try explicitly assigned related slugs
    if (currentPost.relatedBlogSlugs && currentPost.relatedBlogSlugs.length > 0) {
        const explicitRelated = currentPost.relatedBlogSlugs
            .map((s) => getBlogPost(s))
            .filter((p): p is BlogPost => p !== undefined && p.slug !== currentSlug);
        if (explicitRelated.length >= count) {
            return explicitRelated.slice(0, count);
        }
    }

    // Otherwise match by same category or matching tags
    const otherPosts = blogPosts.filter((p) => p.slug !== currentSlug);
    const categoryMatches = otherPosts.filter((p) => p.category === currentPost.category);
    const remaining = otherPosts.filter((p) => p.category !== currentPost.category);

    return [...categoryMatches, ...remaining].slice(0, count);
}

export function getBlogsByCategory(category: string): BlogPost[] {
    if (category === 'All') return blogPosts;
    return blogPosts.filter((post) => post.category === category);
}

