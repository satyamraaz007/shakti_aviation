import {
    Plane,
    Building2,
    Wrench,
    ShieldCheck,
    Radio,
    Cctv,
    FileCheck,
    PackageCheck,
    type LucideIcon,
} from 'lucide-react';
import airport_development_img from '@/assets/servicesPageImage/airportDevelopment.png'
import airport_operations_img from '@/assets/servicesPageImage/airportOperations.png'
import airside_equipment_img from '@/assets/servicesPageImage/airsideEquipment.png'
import airport_security_img from '@/assets/servicesPageImage/safetyManagementSystems.png'
import cns_atm_consultancy from '@/assets/servicesPageImage/cns_atm_consultancy_aviation_consultancy.png'
import aviation_security_surveillance from '@/assets/servicesPageImage/aviationSecurity&SurveillanceAviationConsultancy.png'
import aai_iaf_mod_noc_consultancy from '@/assets/servicesPageImage/aai_iaf_mod_noc.png'
import project_consultancy from '@/assets/servicesPageImage/projectConsultancy.png'

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface ServiceItem {
    id: string;
    slug: string;
    icon: LucideIcon;
    title: string;
    shortDescription: string;
    longDescription: string;
    deliverables: string[];
    image?: string;
    faqs: ServiceFAQ[];
}

export const services: ServiceItem[] = [
    {
        id: '1',
        slug: 'airport-development',
        icon: Building2,
        title: 'Airport Development',
        shortDescription:
            'Airport planning, development, master planning, technical studies, feasibility inputs and infrastructure consultancy.',
        image: airport_development_img,
        longDescription:
            'SACS provides comprehensive airport development consultancy covering master planning, site evaluation, technical studies and feasibility inputs. Our team supports greenfield airport projects, brownfield modernisation and tier-II/tier-III airport development with planning grounded in operational, regulatory and infrastructural realities. We bring the perspective of senior aviation professionals who have managed airport operations and infrastructure firsthand, ensuring that development plans are not only technically sound but also operationally viable.',
        deliverables: [
            'Master planning review and inputs',
            'Site evaluation and technical studies',
            'Feasibility study support',
            'Greenfield and brownfield airport development consultancy',
            'Infrastructure planning and phasing guidance',
            'Regulatory compliance inputs for airport development',
        ],
        faqs: [
            {
                question: 'What stages of airport development does SACS support?',
                answer:
                    'SACS provides end-to-end consultancy across all airport development stages—from initial site selection, Obstacle Limitation Surface (OLS) surveys, and Techno-Economic Feasibility Studies (TEFS) to airport master planning, terminal and airside infrastructure sizing, phased expansion strategies, and DGCA licensing assistance for both greenfield and brownfield projects.',
            },
            {
                question: 'How does SACS assist with greenfield airport site selection and feasibility?',
                answer:
                    'We conduct comprehensive site evaluations including meteorological analysis (wind-rose distribution), topographical assessments, aeronautical airspace suitability, environmental considerations, regional air traffic demand forecasting, and multi-modal connectivity to determine the optimal airport location and runway orientation.',
            },
            {
                question: 'What is included in an Airport Master Plan review?',
                answer:
                    'Our master plan review assesses ultimate site capacity, phased airside layout (runway, taxiways, aprons), passenger and cargo terminal requirements, ATC tower positioning, landside road networks, utility corridors, and aviation support facilities in compliance with ICAO Annex 14 and DGCA CAR standards.',
            },
            {
                question: 'How do you ensure regulatory compliance with DGCA and MoCA guidelines?',
                answer:
                    'With over three decades of institutional experience involving former senior officials from AAI and DGCA, SACS aligns all development plans with DGCA Civil Aviation Requirements (CAR Section 4 - Aerodrome Standards), MoCA Greenfield Airport Policy guidelines, and international ICAO Annex 14 specifications.',
            },
            {
                question: 'Can SACS assist with brownfield airport modernisation and expansion?',
                answer:
                    'Yes, SACS specializes in brownfield modernization. We evaluate existing capacity constraints, formulate runway recarpeting and extension plans, design apron expansions, optimize terminal throughput, and plan infrastructure upgrades with minimal disruption to ongoing commercial flight operations.',
            },
        ],
    },
    {
        id: '2',
        slug: 'airport-operations',
        icon: Plane,
        title: 'Airport Operations',
        shortDescription:
            'Operational consultancy, ground management, airport procedures, SOP development and operational improvement.',
        image: airport_operations_img,
        longDescription:
            'Our airport operations consultancy draws on decades of hands-on experience in managing airport operations. We assist airport operators and developers with operational planning, ground management procedures, standard operating procedure (SOP) development, and continuous operational improvement. Our approach is grounded in practical, field-tested knowledge of how airports function day-to-day, enabling us to identify bottlenecks, improve efficiency and enhance the passenger and aircraft handling experience.',
        deliverables: [
            'Operational consultancy and advisory',
            'Ground management and handling procedures',
            'SOP development and documentation',
            'Operational efficiency improvement studies',
            'Apron and airside operations guidance',
            'Airport procedures and process optimisation',
        ],
        faqs: [
            {
                question: 'What operational areas are covered under your Airport Operations consultancy?',
                answer:
                    'SACS covers airside operations, apron management, aircraft turnaround optimization, runway inspection protocols, bird and wildlife hazard management, terminal passenger flow management, emergency preparedness, and ground handling coordination in accordance with DGCA and ICAO guidelines.',
            },
            {
                question: 'How does SACS help airports develop Standard Operating Procedures (SOPs)?',
                answer:
                    'We draft, review, and standardize tailored SOPs for airside inspections, aircraft marshalling, pushback operations, emergency response protocols, winter/monsoon operations, and terminal management, ensuring standardisation, regulatory alignment, and streamlined day-to-day coordination.',
            },
            {
                question: 'Can you assist in preparing an Aerodrome Manual for DGCA licensing?',
                answer:
                    'Yes. Preparing a comprehensive Aerodrome Manual is a statutory requirement under DGCA CAR Section 4, Series F. SACS compiles and reviews all mandatory parts—including aerodrome data, operating procedures, SMS, administration, and safety arrangements—to secure or renew aerodrome operating licenses.',
            },
            {
                question: 'How do you optimize airside capacity and reduce aircraft turnaround times?',
                answer:
                    'We carry out detailed apron movement analysis, stand allocation reviews, Ground Support Equipment (GSE) staging optimizations, and airside flow studies to eliminate operational bottlenecks, reduce turnaround times, and enhance ramp safety.',
            },
            {
                question: 'Does SACS provide guidance for aerodrome emergency planning (AEP) and drills?',
                answer:
                    'Yes, SACS assists aerodrome operators in formulating comprehensive Aerodrome Emergency Plans (AEP), establishing Emergency Operations Centres (EOC), defining mutual aid agreements with local authorities, and planning full-scale mock emergency exercises as mandated by DGCA.',
            },
        ],
    },
    {
        id: '3',
        slug: 'airside-equipment',
        icon: Wrench,
        title: 'Airside Equipment',
        shortDescription:
            'Consultancy related to airport airside systems, equipment selection, procurement, installation, testing and commissioning.',
        image: airside_equipment_img,
        longDescription:
            'SACS provides specialised consultancy for airport airside equipment, covering equipment selection, technical specification, procurement guidance, installation supervision, testing and commissioning. Our team understands the technical and regulatory requirements of airside systems from ground lighting and visual aids to specialised operational equipment and helps clients navigate the procurement and commissioning lifecycle with confidence.',
        deliverables: [
            'Equipment selection and technical specification',
            'Procurement guidance and vendor evaluation',
            'Installation supervision support',
            'Testing and commissioning consultancy',
            'Airside systems technical evaluation',
            'Compliance and acceptance support',
        ],
        faqs: [
            {
                question: 'What types of airside equipment does SACS provide consultancy for?',
                answer:
                    'Our consultancy covers Airfield Ground Lighting (AGL) systems, constant current regulators (CCR), visual docking guidance systems (VDGS), Precision Approach Path Indicators (PAPI), runway friction testers, illuminated airfield signage, aircraft pushback tractors, Ground Power Units (GPU), Baggage Handling Systems (BHS), and Bird Aircraft Strike Hazard (BASH) equipment.',
            },
            {
                question: 'How do you assist clients in technical specification and procurement?',
                answer:
                    'We prepare detailed technical specifications and tender documents aligned with ICAO Annex 14, FAA guidelines, and DGCA standards, evaluate vendor bids on technical and commercial merit, and help airport operators select reliable, cost-effective, and future-proof equipment.',
            },
            {
                question: 'What is SACS\'s role during Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT)?',
                answer:
                    'SACS senior technical experts conduct thorough inspections during FAT at manufacturer facilities to ensure compliance with specifications before dispatch. We subsequently supervise on-site SAT, functional testing, photometric measurements for AGL, and integration testing with airfield control systems.',
            },
            {
                question: 'How do you ensure airside equipment meets DGCA and ICAO compliance?',
                answer:
                    'All equipment specifications, installation topologies, and commissioning protocols are benchmarked against ICAO Aerodrome Design Manuals (Doc 9157) and DGCA CAR Section 4 requirements to ensure seamless safety audits and aerodrome certification.',
            },
            {
                question: 'Can SACS advise on modernization or retrofitting of existing airside systems?',
                answer:
                    'Yes. We assess aged or obsolete systems—such as transitioning halogen airfield lighting to energy-efficient LED AGL systems or upgrading legacy VDGS—providing feasibility studies, migration phasing, and turnkey implementation guidance without compromising active runway operations.',
            },
        ],
    },
    {
        id: '4',
        slug: 'safety-management-systems',
        icon: ShieldCheck,
        title: 'Safety Management Systems',
        shortDescription:
            'Aviation safety management consultancy, safety studies, compliance support and operational safety improvement.',
        image: airport_security_img,
        longDescription:
            'Safety is fundamental to aviation. SACS offers safety management system (SMS) consultancy, safety studies, compliance support and operational safety improvement services. Our senior professionals bring deep experience in aviation safety management, enabling us to help organisations build, implement and refine safety frameworks that meet regulatory expectations and genuinely improve operational safety outcomes.',
        deliverables: [
            'Safety management system (SMS) development and review',
            'Safety studies and assessments',
            'Regulatory compliance support',
            'Operational safety improvement advisory',
            'Safety risk identification and mitigation guidance',
            'Safety culture and procedure development',
        ],
        faqs: [
            {
                question: 'What are the core components of an Aviation Safety Management System (SMS)?',
                answer:
                    'An ICAO-compliant SMS consists of four fundamental pillars: Safety Policy and Objectives, Safety Risk Management (hazard identification and risk mitigation), Safety Assurance (monitoring, measurement, and audits), and Safety Promotion (training, communication, and safety culture). SACS builds robust frameworks across all four components.',
            },
            {
                question: 'How does SACS support compliance with DGCA CAR Section 1, Series C?',
                answer:
                    'DGCA mandates SMS implementation for aerodrome operators, air operators, and air navigation service providers. SACS assists in formulating SMS manuals, safety performance indicators (SPIs), acceptable levels of safety (ALoS), and internal safety audit systems that satisfy all DGCA regulatory mandates.',
            },
            {
                question: 'What methodology does SACS use for Aeronautical Safety Risk Assessments (SRA)?',
                answer:
                    'We utilize established ICAO Safety Management Manual (Doc 9859) matrices and Bow-Tie risk assessment methodologies to identify hazards, assess risk severity and probability, and formulate defensive barriers and actionable mitigation strategies for operational changes or new infrastructure.',
            },
            {
                question: 'Can SACS assist during DGCA regulatory safety audits and deficiency rectifications?',
                answer:
                    'Yes. SACS conducts pre-audit readiness reviews (mock audits) to detect potential findings beforehand. When regulatory observations or non-compliances are raised, we help operators formulate effective Corrective Action Plans (CAP) and coordinate closure with regulatory bodies.',
            },
            {
                question: 'How do you help foster an active safety culture within an aviation organisation?',
                answer:
                    'We develop non-punitive (just culture) reporting policies, safety induction and training curricula, safety committee operational guidelines, and safety communication bulletins that encourage proactive incident reporting and continuous safety improvement across all organizational levels.',
            },
        ],
    },
    {
        id: '5',
        slug: 'cns-atm-consultancy',
        icon: Radio,
        title: 'CNS/ATM Consultancy',
        shortDescription:
            'Communication, Navigation and Surveillance / Air Traffic Management planning, technical evaluation, implementation and project support.',
        image: cns_atm_consultancy,
        longDescription:
            'Communication, Navigation and Surveillance (CNS) and Air Traffic Management (ATM) form the technical backbone of modern aviation infrastructure. SACS provides CNS/ATM consultancy covering system planning, technical evaluation, implementation support and project management. Our team includes professionals with direct experience in CNS facilities, GAGAN, GBAS and air navigation services, enabling us to deliver technically precise and practically informed consultancy.',
        deliverables: [
            'CNS system planning and technical evaluation',
            'Air Traffic Management (ATM) consultancy',
            'Communication, navigation and surveillance system specification',
            'Implementation and project support',
            'CNS equipment evaluation and technical studies',
            'GAGAN and GBAS related technical inputs',
        ],
        faqs: [
            {
                question: 'What CNS (Communication, Navigation, Surveillance) systems does SACS consult on?',
                answer:
                    'SACS provides high-level consultancy for VHF/HF air-ground voice communication, Voice Communication Control Systems (VCCS), radio navigational aids (ILS, DVOR, DME, NDB), surveillance systems (Primary/Secondary Surveillance Radar, ADS-B, Multilateration), and Air Traffic Management (ATM) automation systems.',
            },
            {
                question: 'What experience does SACS have with satellite navigation like GAGAN and GBAS?',
                answer:
                    'Our senior management, including Managing Director Dr. Arjun Singh, has extensive firsthand experience in the planning, facility engineering, and operational trials of India\'s GAGAN (GPS Aided Geo Augmented Navigation) system and Ground-Based Augmentation Systems (GBAS) developed in coordination with AAI and ISRO.',
            },
            {
                question: 'How does SACS assist with Instrument Flight Procedure (IFP) and airspace design?',
                answer:
                    'We evaluate airspace classification, standard instrument departures (SIDs), standard terminal arrivals (STARs), and PBN (Performance Based Navigation) instrument approach procedures in accordance with ICAO Doc 8168 (PANS-OPS) to ensure seamless ATM flow and obstacle clearance.',
            },
            {
                question: 'Can SACS assist in CNS facility siting and electromagnetic interference (EMI) studies?',
                answer:
                    'Yes. We conduct technical siting studies for DVOR, ILS (Localizer and Glide Path), and radars ensuring conformity with ICAO Annex 10 obstacle-free and reflection-free zones, and perform EMI/EMC assessments to safeguard critical navigation frequencies against nearby constructions or industrial emissions.',
            },
            {
                question: 'What international CNS/ATM projects has SACS executed?',
                answer:
                    'SACS has completed prominent international assignments including CNS equipment technical evaluation and master plan review for the New Libreville Airport in Gabon, Central Africa, as well as CNS/ATM technical review for Pokhara Regional International Airport in Nepal.',
            },
        ],
    },
    {
        id: '6',
        slug: 'aviation-security-surveillance',
        icon: Cctv,
        title: 'Aviation Security & Surveillance Systems Consultancy',
        shortDescription:
            'Security and surveillance systems, CCTV, fire alarm, public address and related security infrastructure solutions.',
        image: aviation_security_surveillance,
        longDescription:
            'SACS delivers aviation security and surveillance solutions including CCTV systems, fire alarm systems, public address systems and integrated security infrastructure. We approach security not as a commodity product set but as a technical system that must be designed, specified and implemented to meet the specific operational and regulatory demands of aviation and large infrastructure environments. Our consultancy covers the full lifecycle from system design and specification through procurement guidance, installation supervision and commissioning.',
        deliverables: [
            'Security and surveillance system design',
            'CCTV specification and deployment consultancy',
            'Fire alarm system specification and compliance support',
            'Public address system design and guidance',
            'Integrated security infrastructure solutions',
            'Traffic law enforcement system specification',
        ],
        faqs: [
            {
                question: 'What types of security and surveillance systems does SACS design?',
                answer:
                    'SACS specializes in designing integrated airport and high-security facility infrastructure, including IP-based CCTV surveillance, Perimeter Intrusion Detection Systems (PIDS), automated Access Control Systems (ACS), Public Address and Voice Alarm (PA/VA) systems, intelligent video analytics, and central command control rooms.',
            },
            {
                question: 'How do you ensure compliance with BCAS (Bureau of Civil Aviation Security) norms?',
                answer:
                    'In India, aviation security is strictly governed by BCAS standards and circulars. SACS ensures that system architectures, camera resolutions, storage retention periods, backup power requirements, and perimeter monitoring systems fully comply with BCAS and AVSEC regulatory mandates.',
            },
            {
                question: 'What is SACS\'s approach to CCTV camera placement and field-of-view (FOV) design?',
                answer:
                    'We utilize advanced 3D visual coverage simulations to eliminate blind spots across terminal halls, boarding gates, baggage sorting areas, apron zones, and perimeter fences. Each camera specification is chosen based on operational needs: detection, observation, recognition, or identification (DORI criteria).',
            },
            {
                question: 'Do you consult on Fire Detection and Alarm Systems (FDAS) for airports?',
                answer:
                    'Yes. We provide engineering specifications and compliance guidance for addressable fire alarm networks, aspirating smoke detection systems (VESDA) for high-ceiling hangars and terminal concourses, and seamless integration with HVAC damper shutdowns, public address systems, and building management systems (BMS).',
            },
            {
                question: 'Can SACS handle security consultancy for non-aviation large infrastructure projects?',
                answer:
                    'Yes. Our expertise in high-consequence aviation security transfers seamlessly to large corporate campuses, industrial townships, stadium complexes, smart cities, and transport hubs that demand mission-critical surveillance, robust access control, and automated traffic law enforcement systems.',
            },
        ],
    },
    {
        id: '7',
        slug: 'aai-iaf-mod-noc-consultancy',
        icon: FileCheck,
        title: 'Height Clearance & AAI NOC Consultancy in India',
        shortDescription:
            'Technical consultancy for structural height clearance, aeronautical studies, AAI NOC, IAF/MoD cases and related aviation obstruction matters.',
        image: aai_iaf_mod_noc_consultancy,
        longDescription:
            'SACS has successfully undertaken numerous projects relating to structural height clearance by the Airports Authority of India (AAI) and the Indian Air Force / Ministry of Defence (IAF/MoD). We provide end-to-end consultancy for obtaining height clearance NOCs for a wide range of structures including residential and commercial buildings, wind turbine generators, chimneys, construction cranes, power transmission lines and large infrastructure projects. Our consultancy includes aeronautical studies, technical documentation, coordination with relevant authorities and support through the NOC application and approval process. Where appeals or additional aeronautical studies are required, we provide the technical basis and documentation to support the case.',
        deliverables: [
            'Structural height clearance consultancy',
            'AAI NOC application and technical support',
            'IAF / MoD NOC case management',
            'Aeronautical studies and reports',
            'Wind turbine height clearance consultancy',
            'Construction crane and temporary structure NOC support',
            'Power transmission line clearance consultancy',
            'Appeal support and additional aeronautical study documentation',
        ],
        faqs: [
            {
                question: 'Why is an Aviation Height Clearance NOC required, and who issues it?',
                answer:
                    'Under Ministry of Civil Aviation regulations, any building, industrial chimney, telecom tower, power line, or wind turbine located within designated airport surveillance and obstacle limitation zones must secure an NOC to prevent hazards to aircraft operations. Clearance is issued by the Airports Authority of India (AAI) for civil airports, and by the Indian Air Force, Navy, or MoD for military airfields.',
            },
            {
                question: 'How does SACS assist with online NOCAS 2.0 applications?',
                answer:
                    'SACS provides end-to-end guidance including DGPS/Total Station WGS-84 survey coordinate and AMSL height verification, CCZM (Colour Coded Zoning Map) analysis, document compilation, NOCAS 2.0 portal submission, and rigorous follow-up with the designated AAI regional offices.',
            },
            {
                question: 'What happens if a proposed structure exceeds the permissible CCZM height?',
                answer:
                    'When a proposed structure is height-restricted or penetrates the standard Obstacle Limitation Surface (OLS), SACS conducts in-depth Aeronautical Studies or Shielding Studies under DGCA CAR Section 4 guidelines, evaluating PANS-OPS surfaces, CNS facility coverage, and radar line-of-sight to demonstrate that the structure can be erected safely without compromising aviation safety.',
            },
            {
                question: 'Can SACS help with Defence (IAF / Naval / Coast Guard) NOC applications and approvals?',
                answer:
                    'Yes. Defence airfields follow specific IAF/MoD procedures and guidelines that differ from civil AAI NOCAS processes. SACS has extensive experience in coordinating with Air Force Stations, Naval Air Stations, and Command Headquarters across India to navigate defence height clearance cases.',
            },
            {
                question: 'What recourse is available if an NOC application is restricted or rejected?',
                answer:
                    'If an NOC is rejected or restricted, applicants can file an appeal with the Ministry of Civil Aviation (MoCA) Appellate Committee. SACS prepares the technical appeal dossier, presents shielding and aeronautical safety arguments, and coordinates reviews by the Appellate Committee to achieve maximum permissible height allowances.',
            },
        ],
    },
    {
        id: '8',
        slug: 'project-consultancy',
        icon: PackageCheck,
        title: 'Project Consultancy',
        shortDescription:
            'Project planning, procurement guidance, installation, testing, commissioning, maintenance and implementation support.',
        image: project_consultancy,
        longDescription:
            'SACS offers project consultancy support that spans the full project lifecycle. From initial project planning and procurement guidance through installation, testing, commissioning and ongoing maintenance support, we provide the technical and managerial backbone to ensure complex aviation and infrastructure projects are delivered to specification. Our turnkey approach is particularly valuable for clients who need a single, accountable partner across multiple project phases.',
        deliverables: [
            'Project planning and scheduling',
            'Procurement guidance and technical specification',
            'Installation supervision and project management',
            'Testing and commissioning',
            'Maintenance and lifecycle support',
            'Turnkey implementation for multi-phase projects',
        ],
        faqs: [
            {
                question: 'What scope of project consultancy does SACS deliver?',
                answer:
                    'SACS provides comprehensive project management consultancy (PMC) across the entire project lifecycle: from initial concept design, DPR preparation, and detailed engineering specifications to procurement advisory, contractor oversight, site installation supervision, testing, commissioning, and handover.',
            },
            {
                question: 'How does SACS manage procurement and tender evaluation?',
                answer:
                    'We draft transparent, rigorous Requests for Proposal (RFPs), bills of quantities (BOQ), and technical compliance matrices. We subsequently assist clients in conducting pre-bid conferences, evaluating technical and financial bids, and negotiating contractual frameworks to ensure quality and budget adherence.',
            },
            {
                question: 'What is SACS\'s role during on-site installation and execution?',
                answer:
                    'Our senior engineers provide on-site supervision to verify that civil, electrical, IT, and specialized aviation installations conform precisely to approved drawings, technical specifications, safety standards, and project delivery milestones.',
            },
            {
                question: 'How do you manage testing, commissioning, and final authority approvals?',
                answer:
                    'We formulate comprehensive testing protocols, witness Site Acceptance Tests (SAT), supervise integrated systems performance verification, resolve snag-list deficiencies, and prepare documentation needed for regulatory clearances and project handover to the client.',
            },
            {
                question: 'Does SACS provide post-commissioning lifecycle and maintenance advisory?',
                answer:
                    'Yes. We help clients establish Operation and Maintenance (O&M) manuals, formulate Preventive Maintenance Schedules (PMS), define Service Level Agreements (SLAs) for equipment vendors, and perform periodic operational audits to guarantee long-term system reliability.',
            },
        ],
    },
];

export const serviceCategories = [
    'All',
    'Airport Development',
    'Airport Operations',
    'CNS/ATM',
    'Aeronautical Studies',
    'NOC Consultancy',
    'International Consultancy',
    'Aviation Infrastructure',
];

export function getService(slug: string): ServiceItem | undefined {
    return services.find((s) => s.slug === slug);
}
