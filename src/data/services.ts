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

export interface ServiceItem {
    id: string;
    slug: string;
    icon: LucideIcon;
    title: string;
    shortDescription: string;
    longDescription: string;
    deliverables: string[];
    image?: string;
}

export const services: ServiceItem[] = [
    {
        id: '1',
        slug: 'airport-development',
        icon: Building2,
        title: 'Airport Development',
        shortDescription:
            'Airport planning, development, master planning, technical studies, feasibility inputs and infrastructure consultancy.',
        image: 'https://images.pexels.com/photos/30475501/pexels-photo-30475501.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
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
    },
    {
        id: '2',
        slug: 'airport-operations',
        icon: Plane,
        title: 'Airport Operations',
        shortDescription:
            'Operational consultancy, ground management, airport procedures, SOP development and operational improvement.',
        image: 'https://images.pexels.com/photos/12858453/pexels-photo-12858453.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
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
    },
    {
        id: '3',
        slug: 'airside-equipment',
        icon: Wrench,
        title: 'Airside Equipment',
        shortDescription:
            'Consultancy related to airport airside systems, equipment selection, procurement, installation, testing and commissioning.',
        image: 'https://images.pexels.com/photos/19996007/pexels-photo-19996007.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
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
    },
    {
        id: '4',
        slug: 'safety-management-systems',
        icon: ShieldCheck,
        title: 'Safety Management Systems',
        shortDescription:
            'Aviation safety management consultancy, safety studies, compliance support and operational safety improvement.',
        image: 'https://images.pexels.com/photos/15273870/pexels-photo-15273870.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
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
    },
    {
        id: '5',
        slug: 'cns-atm-consultancy',
        icon: Radio,
        title: 'CNS/ATM Consultancy',
        shortDescription:
            'Communication, Navigation and Surveillance / Air Traffic Management planning, technical evaluation, implementation and project support.',
        image: 'https://images.pexels.com/photos/18822289/pexels-photo-18822289.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
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
    },
    {
        id: '6',
        slug: 'aviation-security-surveillance',
        icon: Cctv,
        title: 'Aviation Security & Surveillance',
        shortDescription:
            'Security and surveillance systems, CCTV, fire alarm, public address and related security infrastructure solutions.',
        image: 'https://images.pexels.com/photos/4318372/pexels-photo-4318372.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
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
    },
    {
        id: '7',
        slug: 'aai-iaf-mod-noc-consultancy',
        icon: FileCheck,
        title: 'AAI / IAF / MoD NOC Consultancy',
        shortDescription:
            'Technical consultancy for structural height clearance, aeronautical studies, AAI NOC, IAF/MoD cases and related aviation obstruction matters.',
        image: 'https://images.pexels.com/photos/1928072/pexels-photo-1928072.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
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
    },
    {
        id: '8',
        slug: 'project-consultancy',
        icon: PackageCheck,
        title: 'Project Consultancy',
        shortDescription:
            'Project planning, procurement guidance, installation, testing, commissioning, maintenance and implementation support.',
        image: 'https://images.pexels.com/photos/14018325/pexels-photo-14018325.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&dpr=1',
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
