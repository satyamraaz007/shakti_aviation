import drArjunSinghImg from '@/assets/Dr. Arjun Singh.png';
import mrMSBhargavaImg from '@/assets/Mr. M. S. Bhargava.png';
import mrDKBeheraImg from '@/assets/Mr. D. K. Behera.png';
import mrDhirajSoniImg from '@/assets/Mr. Dhiraj Soni.png';
import mrHemchandSharmaImg from '@/assets/Mr. Hemchand Sharma.png';
import mrHarshEnkhiaImg from '@/assets/Mr. Harsh Enkhia.png';

export interface TeamMember {
    id: string;
    name: string;
    designation: string;
    photo: string;
    photoAlt: string;
    summary: string;
    detailedBio: string[];
    expertise: string[];
}

export const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Dr. Arjun Singh',
        designation: 'Managing Director',
        photo: drArjunSinghImg,
        photoAlt: 'Dr. Arjun Singh, Managing Director of SACS',
        summary:
            'Managing Director of SACS with extensive experience in AAI, DGCA, CNS/ATM systems, GAGAN, GBAS and airport CNS facilities. Dr. Singh has led technical planning, engineering and project implementation across multiple civil aviation and Ministry of Civil Aviation initiatives.',
        detailedBio: [
            'Dr. Arjun Singh serves as the Managing Director of Sakthi Aviation Consultancy Services. His career spans senior leadership and technical roles within the Airports Authority of India (AAI) and the Directorate General of Civil Aviation (DGCA), where he contributed to CNS/ATM infrastructure, airport CNS facilities and national aviation programmes.',
            'His technical expertise encompasses Communication, Navigation and Surveillance (CNS) systems, Air Traffic Management (ATM), GAGAN (GPS Aided Geo Augmented Navigation), GBAS (Ground Based Augmentation System) and the planning, engineering and implementation of airport CNS facilities.',
            'Dr. Singh has been closely associated with project implementation, technical planning and engineering activities related to the Ministry of Civil Aviation, bringing a deep understanding of both the regulatory framework and the technical execution required for complex aviation infrastructure projects.',
            'Under his leadership, SACS has undertaken consultancy assignments across India and in international markets, including CNS/ATM technical studies, airport master plan reviews, aeronautical studies and height clearance consultancy.',
        ],
        expertise: [
            'AAI & DGCA',
            'CNS/ATM Systems',
            'GAGAN & GBAS',
            'Airport CNS Facilities',
            'Project Implementation',
            'Technical Planning & Engineering',
            'Ministry of Civil Aviation',
        ],
    },
    {
        id: '2',
        name: 'Mr. M. S. Bhargava',
        designation: 'Senior Consultant',
        photo: mrMSBhargavaImg,
        photoAlt: 'Mr. M. S. Bhargava, Senior Consultant at SACS',
        summary:
            'Senior professional with extensive experience in airport operations, air traffic services and civil aviation consultancy, contributing to SACS project advisory and technical consultancy.',
        detailedBio: [
            'Mr. M. S. Bhargava is a senior professional at Sakthi Aviation Consultancy Services with decades of experience in the civil aviation sector. His expertise spans airport operations, air traffic services and aviation consultancy.',
            'He contributes to SACS project advisory roles, bringing operational knowledge and technical understanding to airport development, operations and safety management assignments.',
        ],
        expertise: [
            'Airport Operations',
            'Air Traffic Services',
            'Aviation Consultancy',
        ],
    },
    {
        id: '3',
        name: 'Mr. D. K. Behera',
        designation: 'Senior Consultant',
        photo: mrDKBeheraImg,
        photoAlt: 'Mr. D. K. Behera, Senior Consultant at SACS',
        summary:
            'Experienced aviation professional contributing to SACS consultancy in airport operations, safety management and technical advisory across multiple project assignments.',
        detailedBio: [
            'Mr. D. K. Behera is a senior member of the SACS team with extensive experience in the aviation sector. He contributes to consultancy assignments covering airport operations, safety management systems and technical advisory.',
            'His practical operational knowledge supports SACS projects across airport development, operations improvement and safety compliance.',
        ],
        expertise: [
            'Airport Operations',
            'Safety Management Systems',
            'Technical Advisory',
        ],
    },
    {
        id: '4',
        name: 'Mr. Dhiraj Soni',
        designation: 'Consultant',
        photo: mrDhirajSoniImg,
        photoAlt: 'Mr. Dhiraj Soni, Consultant at SACS',
        summary:
            'Aviation consultant contributing to SACS technical consultancy, project support and implementation across airport infrastructure and CNS/ATM related assignments.',
        detailedBio: [
            'Mr. Dhiraj Soni is part of the SACS consultancy team, contributing to technical consultancy and project implementation support across airport infrastructure and CNS/ATM related assignments.',
            'He works on project coordination, technical documentation and implementation support, helping ensure that consultancy deliverables are translated effectively into project outcomes.',
        ],
        expertise: [
            'Airport Infrastructure',
            'CNS/ATM',
            'Project Support',
        ],
    },
    {
        id: '5',
        name: 'Mr. Hemchand Sharma',
        designation: 'Consultant',
        photo: mrHemchandSharmaImg,
        photoAlt: 'Mr. Hemchand Sharma, Consultant at SACS',
        summary:
            'Aviation consultant with experience in airport operations, security systems and surveillance solutions, contributing to SACS security and surveillance consultancy practice.',
        detailedBio: [
            'Mr. Hemchand Sharma is a consultant at SACS with experience in airport operations, security systems and surveillance solutions.',
            'He contributes to the SACS security and surveillance consultancy practice, supporting the design, specification and implementation guidance for CCTV, fire alarm, public address and integrated security infrastructure projects.',
        ],
        expertise: [
            'Airport Operations',
            'Security Systems',
            'Surveillance Solutions',
        ],
    },
    {
        id: '6',
        name: 'Mr. Harsh Enkhia',
        designation: 'Consultant',
        photo: mrHarshEnkhiaImg,
        photoAlt: 'Mr. Harsh Enkhia, Consultant at SACS',
        summary:
            'Consultant at SACS contributing to project consultancy, technical support and implementation across aviation infrastructure and height clearance consultancy assignments.',
        detailedBio: [
            'Mr. Harsh Enkhia is a consultant at SACS, contributing to project consultancy and technical support across aviation infrastructure and height clearance / NOC consultancy assignments.',
            'He supports the preparation of technical documentation, aeronautical studies and coordination activities related to AAI, IAF and MoD NOC cases.',
        ],
        expertise: [
            'Project Consultancy',
            'Height Clearance / NOC',
            'Technical Support',
        ],
    },
];
