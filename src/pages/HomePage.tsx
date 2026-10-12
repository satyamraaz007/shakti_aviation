import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Radio, ShieldCheck, FileCheck, Globe2, BookOpen, Building2, MapPin, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TeamCard from '@/components/TeamCard';
import StatCard from '@/components/StatCard';
import CTASection from '@/components/CTASection';
import ImageWithFallback from '@/components/ImageWithFallback';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { teamMembers } from '@/data/team';
import { stats, clients, publications, noApplicationTypes, siteInfo } from '@/data/siteInfo';

const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sakthi Aviation Consultancy Services Private Limited',
    alternateName: 'SACS',
    url: 'https://www.saktiaviation.com/',
    foundedDate: '2005',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '#544, DLF Prime Towers, F – 79 & 80, Okhla Industrial Area Phase – 1',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110020',
        addressCountry: 'IN',
    },
    telephone: ['+91-9773944770', '+91-9810789223', '+91-8860948094', '+91-11-41112778'],
    description:
        'Aviation consultancy, airport development, airport operations, CNS/ATM, safety management, security, surveillance and aviation infrastructure solutions in India and international markets.',
    knowsAbout: [
        'Aviation Consultancy',
        'Airport Development',
        'CNS/ATM',
        'Aviation Safety Management',
        'Aviation Security',
        'AAI NOC Consultancy',
        'Airport Infrastructure',
    ],
};

const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sakthi Aviation Consultancy Services',
    url: 'https://www.saktiaviation.com/',
};

const professionalServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Sakthi Aviation Consultancy Services Private Limited',
    image: 'https://www.saktiaviation.com/og-image.jpg',
    telephone: '+91-11-41112778',
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '#544, DLF Prime Towers, F – 79 & 80, Okhla Industrial Area Phase – 1',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110020',
        addressCountry: 'IN',
    },
    url: 'https://www.saktiaviation.com/',
    areaServed: ['India', 'International'],
    serviceType: 'Aviation Consultancy',
};

export default function HomePage() {
    const aboutRef = useScrollReveal<HTMLDivElement>();
    const expertiseRef = useScrollReveal<HTMLDivElement>();
    const nocRef = useScrollReveal<HTMLDivElement>();
    const intlRef = useScrollReveal<HTMLDivElement>();
    const clientsRef = useScrollReveal<HTMLDivElement>();
    const teamPreviewRef = useScrollReveal<HTMLDivElement>();
    const knowledgeRef = useScrollReveal<HTMLDivElement>();
    const contactPreviewRef = useScrollReveal<HTMLDivElement>();

    const expertiseBlocks = [
        {
            icon: Building2,
            title: 'Airport Infrastructure',
            desc: 'Master planning, development consultancy, feasibility inputs and infrastructure guidance for greenfield and brownfield airport projects.',
        },
        {
            icon: Radio,
            title: 'CNS / ATM',
            desc: 'Communication, Navigation and Surveillance / Air Traffic Management planning, technical evaluation, implementation and project support.',
        },
        {
            icon: ShieldCheck,
            title: 'Safety & Security',
            desc: 'Aviation safety management systems, security and surveillance infrastructure including CCTV, fire alarm and public address systems.',
        },
        {
            icon: FileCheck,
            title: 'Regulatory & Technical Consultancy',
            desc: 'AAI, IAF, MoD, DGCA regulatory consultancy, height clearance NOC, aeronautical studies and technical compliance support.',
        },
    ];

    return (
        <>
            <SEO
                title="Sakthi Aviation Consultancy Services | Aviation & Airport Consultancy India"
                description="Sakthi Aviation Consultancy Services provides aviation consultancy, airport development, airport operations, CNS/ATM, safety management, security, surveillance and aviation infrastructure solutions in India and international markets."
                path="/"
                jsonLd={[orgJsonLd, websiteJsonLd, professionalServiceJsonLd]}
            />

            <Hero />

            {/* Trust / Introduction */}
            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <div ref={aboutRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="eyebrow">About SACS</span>
                                <span className="h-px w-8 bg-gradient-to-r from-[#168DE2] to-transparent" />
                            </div>
                            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[44px] leading-[1.15] text-gray-900 text-balance mb-6">
                                Decades of Aviation Expertise. Built for Complex Projects.
                            </h2>
                            <div className="space-y-4 text-[15px] md:text-[16px] leading-relaxed text-gray-600">
                                <p>
                                    Established in 2005, Sakthi Aviation Consultancy Services was founded by retired
                                    senior management executives from the civil aviation ecosystem. With over 30 years
                                    of experience among its senior professionals, SACS brings together expertise across
                                    airport operations, air traffic services, airport design and development, airport
                                    security, safety management systems, human resource development and civil aviation
                                    consultancy.
                                </p>
                                <p>
                                    The company provides specialised consultancy and implementation solutions covering
                                    aviation infrastructure, CNS/ATM systems, security and surveillance systems, and
                                    regulatory height clearance consultancy for AAI, IAF and Ministry of Defence
                                    requirements.
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {[
                                    'Airport Operations',
                                    'Air Traffic Services',
                                    'Airport Design & Development',
                                    'Airport Security',
                                    'Safety Management Systems',
                                    'Civil Aviation Consultancy',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#052640] flex-shrink-0" />
                                        <span className="text-[13.5px] text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-[#168DE2] hover:text-[#0056A6] transition-colors group">
                                Read Our Story
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                                <ImageWithFallback
                                    src="https://images.pexels.com/photos/15273870/pexels-photo-15273870.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&dpr=1"
                                    alt="Air traffic control tower at Amsterdam Schiphol Airport"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 max-w-[240px] border border-gray-100">
                                <p className="font-display font-bold text-3xl text-[#402E6D]">2005</p>
                                <p className="text-[13px] text-gray-500 mt-1">Established by senior aviation professionals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="bg-[#052640] py-16 lg:py-20 relative overflow-hidden">
                <div className="absolute inset-0 aviation-grid opacity-15" aria-hidden="true" />
                <div className="container-sacs relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
                        {stats.map((stat, index) => (
                            <StatCard key={index} {...stat} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 lg:py-28 bg-section-alt">
                <div className="container-sacs">
                    <SectionHeading
                        eyebrow="Our Services"
                        title="Integrated Aviation & Infrastructure Solutions"
                        subtitle="Specialized consultancy, technical services and implementation support for aviation, infrastructure and security environments."
                        align="center"
                        className="mb-14"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service) => (
                            <ServiceCard key={service.slug} service={service} />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link to="/services" className="btn-outline">
                            View All Services
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Aviation Expertise — Dark premium section */}
            <section className="bg-[#052640] py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 aviation-grid opacity-15" aria-hidden="true" />
                <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full border border-white/5" aria-hidden="true" />
                <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full border border-white/5" aria-hidden="true" />

                <div className="container-sacs relative z-10">
                    <div ref={expertiseRef} className="reveal">
                        <SectionHeading
                            eyebrow="Core Expertise"
                            title="Where Aviation Knowledge Meets Engineering Execution"
                            align="center"
                            light
                            className="mb-14"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {expertiseBlocks.map((block) => {
                            const Icon = block.icon;
                            return (
                                <div
                                    key={block.title}
                                    className="group p-7 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
                                >
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#168DE2]/20 mb-5 transition-colors group-hover:bg-[#168DE2]/30">
                                        <Icon className="w-6 h-6 text-[#168DE2]" />
                                    </span>
                                    <h3 className="font-display font-bold text-[17px] text-white mb-3 leading-snug">
                                        {block.title}
                                    </h3>
                                    <p className="text-[13.5px] leading-relaxed text-white/60">{block.desc}</p>
                                    <div className="mt-5 h-px w-full bg-gradient-to-r from-[#A34354]/40 to-transparent" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* AAI / IAF / MoD NOC Consultancy */}
            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <div ref={nocRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                                <ImageWithFallback
                                    src="https://images.pexels.com/photos/18822289/pexels-photo-18822289.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&dpr=1"
                                    alt="City skyline with construction cranes and tall buildings near airport"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#052640]/60 to-transparent" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="eyebrow">Specialized Consultancy</span>
                                <span className="h-px w-8 bg-gradient-to-r from-[#A34354] to-transparent" />
                            </div>
                            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[44px] leading-[1.15] text-gray-900 text-balance mb-6">
                                Specialized Aviation Height Clearance & NOC Consultancy
                            </h2>
                            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600 mb-6">
                                SACS has successfully undertaken projects relating to structural height clearance by
                                the Airports Authority of India (AAI) and the Indian Air Force / Ministry of Defence
                                (IAF/MoD). Our consultancy covers aeronautical studies, technical documentation,
                                coordination with regulatory authorities and support through the complete NOC
                                application and approval process.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {noApplicationTypes.map((type) => (
                                    <div key={type} className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50">
                                        <FileCheck className="w-4 h-4 text-[#168DE2] flex-shrink-0 mt-0.5" />
                                        <span className="text-[13px] text-gray-700 font-medium">{type}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/services/aai-iaf-mod-noc-consultancy" className="btn-primary">
                                Discuss Height Clearance / NOC
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 lg:py-28 bg-section-alt">
                <div className="container-sacs">
                    <SectionHeading
                        eyebrow="Selected Work"
                        title="Selected Projects & Industry Experience"
                        subtitle="A cross-section of consultancy assignments spanning airport development, CNS/ATM, aeronautical studies and international aviation projects."
                        align="center"
                        className="mb-14"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.slice(0, 6).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link to="/projects" className="btn-outline">
                            View All Projects
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* International Experience */}
            <section className="py-20 lg:py-28 bg-[#052640] relative overflow-hidden">
                <div className="absolute inset-0 aviation-grid opacity-15" aria-hidden="true" />
                {/* World map decorative circles */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 1200 600" fill="none" aria-hidden="true">
                    <circle cx="200" cy="280" r="3" fill="white" />
                    <circle cx="200" cy="280" r="40" stroke="white" strokeWidth="1" />
                    <circle cx="200" cy="280" r="80" stroke="white" strokeWidth="0.5" />
                    <circle cx="700" cy="250" r="3" fill="white" />
                    <circle cx="700" cy="250" r="40" stroke="white" strokeWidth="1" />
                    <circle cx="700" cy="250" r="80" stroke="white" strokeWidth="0.5" />
                    <circle cx="950" cy="300" r="3" fill="white" />
                    <circle cx="950" cy="300" r="40" stroke="white" strokeWidth="1" />
                    <path d="M 200 280 Q 450 150 700 250" stroke="white" strokeWidth="1" strokeDasharray="6 4" className="flight-path-line" />
                    <path d="M 700 250 Q 820 280 950 300" stroke="white" strokeWidth="1" strokeDasharray="6 4" className="flight-path-line" />
                </svg>

                <div className="container-sacs relative z-10">
                    <div ref={intlRef} className="reveal">
                        <SectionHeading
                            eyebrow="Global Reach"
                            title="International Consultancy Experience"
                            subtitle="SACS has delivered aviation consultancy beyond India, supporting airport projects in international markets."
                            align="center"
                            light
                            className="mb-12"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                title: 'New Libreville Airport, Gabon',
                                desc: 'CNS equipment evaluation consultancy and master plan review for New Libreville Airport (2017).',
                                location: 'Libreville, Gabon',
                            },
                            {
                                title: 'Pokhara Regional International Airport, Nepal',
                                desc: 'Master plan review for Pokhara Regional International Airport (2019).',
                                location: 'Pokhara, Nepal',
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all hover:bg-white/[0.06]"
                            >
                                <Globe2 className="w-7 h-7 text-[#168DE2] mb-4" />
                                <h3 className="font-display font-bold text-[18px] text-white mb-2">{item.title}</h3>
                                <div className="flex items-center gap-1.5 text-[13px] text-[#168DE2] mb-3">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {item.location}
                                </div>
                                <p className="text-[14px] text-white/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients / Organizations */}
            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <SectionHeading
                        eyebrow="Our Clients"
                        title="Selected Organizations & Clients"
                        subtitle="SACS has provided consultancy and technical services to organizations across infrastructure, real estate, energy, construction, aviation and government sectors."
                        align="center"
                        className="mb-14"
                    />
                    <div ref={clientsRef} className="reveal-stagger grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
                        {clients.map((client) => (
                            <div
                                key={client}
                                className="bg-white px-6 py-8 flex items-center justify-center text-center min-h-[110px] hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-[13.5px] font-semibold text-gray-700 leading-snug">{client}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-center text-[13px] text-gray-400">
                        Client names are listed for reference. This should not be construed as an endorsement.
                        Some client names are withheld due to contractual confidentiality.
                    </p>
                </div>
            </section>

            {/* Leadership / Team preview */}
            <section className="py-20 lg:py-28 bg-section-alt">
                <div className="container-sacs">
                    <SectionHeading
                        eyebrow="Leadership"
                        title="Experienced Aviation Professionals"
                        subtitle="Our senior team brings decades of hands-on experience from AAI, DGCA, airport operations, CNS/ATM and aviation safety management."
                        align="center"
                        className="mb-14"
                    />
                    <div ref={teamPreviewRef} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.slice(0, 4).map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link to="/team" className="btn-outline">
                            Meet the Full Team
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Knowledge & Publications */}
            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <SectionHeading
                        eyebrow="Knowledge & Research"
                        title="Knowledge, Research & Industry Contributions"
                        subtitle="Publications and reports authored by our senior professionals, contributing to the body of knowledge in aviation and air navigation."
                        align="center"
                        className="mb-14"
                    />
                    <div ref={knowledgeRef} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {publications.map((pub, index) => (
                            <div
                                key={index}
                                className="group flex items-start gap-4 p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all"
                            >
                                <span className="flex-shrink-0 w-11 h-14 rounded-md gradient-sacs flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-white" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[11px] font-bold uppercase tracking-wide text-[#A34354] mb-1.5">
                                        Publication
                                    </p>
                                    <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
                                        {pub.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Have an Aviation Consultancy Requirement?"
                subtitle="From airport development to height clearance NOC and CNS/ATM consultancy, our team is ready to discuss your project."
                primaryLabel="Talk to Our Experts"
                primaryPath="/contact"
                secondaryLabel="Explore Our Services"
                secondaryPath="/services"
            />

            {/* Contact preview */}
            <section className="py-20 lg:py-28 bg-section-alt">
                <div className="container-sacs">
                    <div ref={contactPreviewRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeading
                                eyebrow="Get in Touch"
                                title="Contact SACS"
                                subtitle="Reach out to our team for consultancy enquiries, project discussions or general information."
                                className="mb-8"
                            />
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#402E6D]/8 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-[#402E6D]" />
                                    </span>
                                    <div>
                                        <p className="text-[13px] font-semibold text-gray-900">Office Address</p>
                                        <p className="text-[14px] text-gray-600 leading-relaxed mt-1">
                                            {siteInfo.address.line1}, {siteInfo.address.line2},<br />
                                            {siteInfo.address.line3},<br />
                                            {siteInfo.address.city} – {siteInfo.address.pincode}, {siteInfo.address.country}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#A34354]/8 flex items-center justify-center">
                                        <Plane className="w-5 h-5 text-[#A34354]" />
                                    </span>
                                    <div>
                                        <p className="text-[13px] font-semibold text-gray-900">Office Timings</p>
                                        <p className="text-[14px] text-gray-600 mt-1">{siteInfo.officeTimings}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {siteInfo.phones.map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                                    className="card-sacs p-5 flex flex-col items-center text-center group hover:border-[#A34354]/30"
                                >
                                    <Phone className="w-5 h-5 text-[#A34354] mb-2.5" />
                                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">Call</span>
                                    <span className="text-[14px] font-semibold text-gray-900 mt-1">{phone}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
