export interface ProjectItem {
    id: string;
    name: string;
    location: string;
    year: string;
    category: string;
    description: string;
    image: string;
    imageAlt: string;
}

export const projects: ProjectItem[] = [
    {
        id: '1',
        name: 'CNS/ATM Technical Study — Green Field Airport, Bijapur',
        location: 'Karnataka, India',
        year: '2011',
        category: 'CNS/ATM',
        description:
            'Comprehensive CNS/ATM technical study for the proposed greenfield airport at Bijapur, Karnataka, covering communication, navigation and surveillance system planning and technical evaluation.',
        image: 'https://images.pexels.com/photos/15273870/pexels-photo-15273870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Airport with control tower representing CNS/ATM infrastructure',
    },
    {
        id: '2',
        name: 'CNS Equipment Evaluation — New Libreville Airport',
        location: 'Libreville, Gabon',
        year: '2017',
        category: 'International Consultancy',
        description:
            'Consultancy on CNS equipment evaluation for New Libreville Airport, Gabon, providing technical assessment of communication, navigation and surveillance systems for the airport project.',
        image: 'https://images.pexels.com/photos/14999417/pexels-photo-14999417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Air traffic control towers at an international airport',
    },
    {
        id: '3',
        name: 'Master Plan Review — New Libreville Airport',
        location: 'Libreville, Gabon',
        year: '2017',
        category: 'Airport Development',
        description:
            'Detailed master plan review for New Libreville Airport, Gabon, covering infrastructure planning, operational layout and technical feasibility inputs.',
        image: 'https://images.pexels.com/photos/14018325/pexels-photo-14018325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Modern airport terminal interior with architectural design',
    },
    {
        id: '4',
        name: 'Apron Markings Redesign — Shirdi International Airport',
        location: 'Maharashtra, India',
        year: '2019',
        category: 'Airport Operations',
        description:
            'Redesign of apron markings at Shirdi International Airport to improve operational safety, aircraft parking guidance and ground handling efficiency.',
        image: 'https://images.pexels.com/photos/12858453/pexels-photo-12858453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Aerial view of airport runway and apron area',
    },
    {
        id: '5',
        name: 'Master Plan Review — Pokhara Regional International Airport',
        location: 'Pokhara, Nepal',
        year: '2019',
        category: 'International Consultancy',
        description:
            'Master plan review for Pokhara Regional International Airport, Nepal, covering infrastructure planning, operational layout and technical development inputs.',
        image: 'https://images.pexels.com/photos/30475501/pexels-photo-30475501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Airplanes on runway with mountain backdrop',
    },
    {
        id: '6',
        name: 'UDAN Airports — Flight Approach Safety & Efficiency Study',
        location: 'India (Multiple Airports)',
        year: '2022',
        category: 'Aeronautical Studies',
        description:
            'Scoping study for enhancing safety and efficiency of flight approaches for select UDAN airports, covering approach procedures, safety assessment and operational efficiency recommendations.',
        image: 'https://images.pexels.com/photos/1928072/pexels-photo-1928072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Airplane wing during landing approach',
    },
    {
        id: '7',
        name: 'Aviation Park Conceptual Master Planning — Rajkot Greenfield International Airport',
        location: 'Hirasar, Gujarat, India',
        year: '2022',
        category: 'Aviation Infrastructure',
        description:
            'Techno-economic feasibility study and conceptual master planning for an Aviation Park at Rajkot Greenfield International Airport, Hirasar, Gujarat, covering land use, infrastructure and commercial viability.',
        image: 'https://images.pexels.com/photos/4318372/pexels-photo-4318372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Modern airport terminal architecture',
    },
];

export const projectCategories = [
    'All',
    'Airport Development',
    'NOC Consultancy',
    'CNS/ATM',
    'Aeronautical Studies',
    'Aviation Infrastructure',
    'International Consultancy',
    'Airport Operations',
];

export function getProjectsByCategory(category: string): ProjectItem[] {
    if (category === 'All') return projects;
    return projects.filter((p) => p.category === category);
}
