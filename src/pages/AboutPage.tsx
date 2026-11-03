import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users, Globe2, CheckCircle2, Building2, ShieldCheck } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import ImageWithFallback from '@/components/ImageWithFallback';
import YellowBorderBeam from '@/components/YellowBorderBeam';
import TeamCard from '@/components/TeamCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { teamMembers } from '@/data/team';
import about_hero from '@/assets/about_hero.png'

export default function AboutPage() {
    const overviewRef = useScrollReveal<HTMLDivElement>();
    const journeyRef = useScrollReveal<HTMLDivElement>();
    const expertiseRef = useScrollReveal<HTMLDivElement>();
    const whyRef = useScrollReveal<HTMLDivElement>();
    const intlRef = useScrollReveal<HTMLDivElement>();
    const regRef = useScrollReveal<HTMLDivElement>();

    const expertiseAreas = [
        'Airport Operations',
        'Air Traffic Services',
        'Airport Design & Development',
        'Airport Security',
        'Safety Management Systems',
        'Human Resource Development',
        'Civil Aviation Consultancy',
        'Security and Surveillance Solutions',
        'CNS/ATM Systems',
        'Aeronautical Studies',
    ];

    const whySacs = [
        {
            title: 'Senior Aviation Expertise',
            desc: 'Founded by retired senior management executives from the civil aviation ecosystem with 30+ years of combined experience among senior professionals.',
        },
        {
            title: 'Regulatory Knowledge',
            desc: 'Deep understanding of AAI, DGCA, IAF, MoD and Ministry of Civil Aviation regulatory frameworks and compliance requirements.',
        },
        {
            title: 'Technical Precision',
            desc: 'CNS/ATM, GAGAN, GBAS, airport infrastructure and safety management expertise grounded in hands-on implementation experience.',
        },
        {
            title: 'Pan-India & International Reach',
            desc: 'Project experience across India and international markets including Gabon and Nepal, covering diverse airport and infrastructure environments.',
        },
    ];

    return (
        <>
            <SEO
                title="About SACS | Aviation Consultancy Company Profile"
                description="Learn about Sakthi Aviation Consultancy Services, established in 2005 by senior aviation professionals. Discover our history, expertise, leadership and consultancy capabilities."
                path="/about"
                type="article"
            />

            <PageHero
                eyebrow="About SACS"
                title="About Sakthi Aviation Consultancy Services"
                // subtitle="Founded in 2005 by retired senior management executives from the civil aviation ecosystem, SACS provides specialised aviation consultancy and implementation solutions across India and international markets."
                image={about_hero}
                imageAlt="Air traffic control towers at Amsterdam Schiphol Airport"
                breadcrumbs={[{ label: 'About' }]}
            />

            {/* Company Overview */}
            <section className="py-20 lg:py-28 overflow-hidden">
                <div className="container-sacs">
                    <SectionHeading
                        eyebrow="Company Overview"
                        title="Aviation Consultancy Company Profile"
                        subtitle="Bridging the gap between deep civil aviation expertise and complex infrastructure execution."
                        className="mb-14"
                    />
                    <div ref={overviewRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="reveal-slide-left relative">
                            <div className="image-card-animated relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group">
                                <YellowBorderBeam rx={16} />
                                <ImageWithFallback
                                    src="https://images.pexels.com/photos/36011550/pexels-photo-36011550.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&dpr=1"
                                    alt="Modern airport terminal interior architecture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="card-sacs absolute -top-4 right-2 sm:-top-5 sm:-right-5 bg-[#402E6D] text-white rounded-xl p-4 sm:p-5 shadow-lg max-w-[170px] sm:max-w-[200px] group overflow-hidden">
                                <YellowBorderBeam rx={12} />
                                {/* Subtle radar pulse behind milestone badge */}
                                <div className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none overflow-visible flex items-center justify-center">
                                    <span className="absolute w-8 h-8 rounded-full border border-[#8CCBFF]/35 animate-radar-ring-1" />
                                    <span className="absolute w-8 h-8 rounded-full border border-[#168DE2]/25 animate-radar-ring-2" />
                                </div>
                                <p className="font-display font-bold text-3xl">30+</p>
                                <p className="text-[13px] text-white/70 mt-1">Years of experience among senior professionals</p>
                            </div>
                        </div>
                        <div className="reveal-slide-right">
                            <div className="space-y-4 text-[15px] md:text-[16px] leading-relaxed text-gray-600">
                                <p>
                                    Sakthi Aviation Consultancy Services Private Limited (SACS) was established in 2005
                                    by retired senior management executives from the civil aviation ecosystem. The
                                    company was founded to bridge the gap between deep aviation domain expertise and
                                    the growing demand for specialised consultancy in airport development, operations,
                                    safety, security and regulatory compliance.
                                </p>
                                <p>
                                    With over 30 years of experience among its senior professionals, SACS brings
                                    together expertise across airport operations, air traffic services, airport design
                                    and development, airport security, safety management systems, human resource
                                    development and civil aviation consultancy.
                                </p>
                                <p>
                                    Over the years, the company has undertaken consultancy assignments for greenfield
                                    and brownfield airport projects, CNS/ATM technical studies, aeronautical studies,
                                    structural height clearance for AAI and IAF/MoD, and security and surveillance
                                    system implementation both within India and in international markets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey */}
            <section className="py-20 lg:py-28 bg-section-alt">
                <div className="container-sacs">
                    <div ref={journeyRef} className="reveal">
                        <SectionHeading
                            eyebrow="Our Journey"
                            title="Our Journey Since 2005"
                            subtitle="Since 2005, SACS has grown alongside India's aviation expansion from airport privatization to greenfield development and regional connectivity."
                            align="center"
                            className="mb-14"
                        />
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#A34354] via-[#867698] to-transparent md:-translate-x-1/2" />

                        {[
                            {
                                year: '2005',
                                title: 'Founding',
                                desc: 'SACS established by retired senior management executives from the civil aviation ecosystem, bringing decades of operational, technical and regulatory experience.',
                            },
                            {
                                year: '2011',
                                title: 'Greenfield Airport CNS/ATM',
                                desc: 'CNS/ATM technical study for Green Field Airport, Bijapur, Karnataka early engagement in India\'s greenfield airport development wave.',
                            },
                            {
                                year: '2017',
                                title: 'International Expansion',
                                desc: 'CNS equipment evaluation and master plan review for New Libreville Airport, Gabon marking SACS\'s entry into international consultancy.',
                            },
                            {
                                year: '2019',
                                title: 'Operations & Planning',
                                desc: 'Apron markings redesign at Shirdi International Airport and master plan review for Pokhara Regional International Airport, Nepal.',
                            },
                            {
                                year: '2022',
                                title: 'Aviation Park & UDAN Studies',
                                desc: 'Techno-economic feasibility and conceptual master planning for Aviation Park at Rajkot Greenfield International Airport, and flight approach safety study for UDAN airports.',
                            },
                        ].map((item, index) => (
                            <div
                                key={item.year}
                                className={`relative flex gap-6 md:gap-0 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#A34354] md:-translate-x-1/2 ring-4 ring-white mt-2" />

                                {/* Content */}
                                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                    <span className="font-display font-bold text-2xl text-[#A34354]">{item.year}</span>
                                    <h3 className="font-display font-bold text-[18px] text-gray-900 mt-1 mb-2">{item.title}</h3>
                                    <p className="text-[14px] text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="hidden md:block flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Expertise */}
            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <div ref={expertiseRef} className="reveal">
                        <SectionHeading
                            eyebrow="Industry Expertise"
                            title="Aviation Consultancy Domains"
                            subtitle="Our expertise spans the full spectrum of aviation operations, infrastructure, safety, security and regulatory consultancy."
                            align="center"
                            className="mb-14"
                        />
                        <div className="reveal-stagger grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {expertiseAreas.map((area) => (
                                <div
                                    key={area}
                                    className="flex items-center gap-2.5 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-[#A34354] flex-shrink-0" />
                                    <span className="text-[13px] font-medium text-gray-700 leading-snug">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why SACS */}
            <section className="py-20 lg:py-28 bg-[#2A1F4A] relative overflow-hidden">
                <div className="absolute inset-0 aviation-grid opacity-15" aria-hidden="true" />
                <div className="container-sacs relative z-10">
                    <div ref={whyRef} className="reveal">
                        <SectionHeading
                            eyebrow="Why SACS"
                            title="Why Choose Sakthi Aviation Consultancy"
                            align="center"
                            light
                            className="mb-14"
                        />
                        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6">
                            {whySacs.map((item) => (
                                <div
                                    key={item.title}
                                    className="group relative p-7 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all hover:bg-white/[0.06] overflow-hidden"
                                >
                                    <YellowBorderBeam rx={16} />
                                    <h3 className="font-display font-bold text-[18px] text-white mb-3">{item.title}</h3>
                                    <p className="text-[14px] text-white/60 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership preview */}
            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <SectionHeading
                        eyebrow="Leadership"
                        title="Leadership Team"
                        subtitle="Our team brings direct experience from AAI, DGCA, CNS/ATM, airport operations and safety management."
                        align="center"
                        className="mb-14"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.slice(0, 3).map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link to="/team" className="btn-outline">
                            Meet the Full Team
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* International Experience */}
            <section className="py-20 lg:py-28 bg-section-alt">
                <div className="container-sacs">
                    <div ref={intlRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <SectionHeading
                                eyebrow="International Experience"
                                title="International Aviation Consultancy"
                                className="mb-6"
                            />
                            <div className="space-y-4 text-[15px] leading-relaxed text-gray-600">
                                <p>
                                    SACS has delivered aviation consultancy in international markets, supporting
                                    airport development and planning projects beyond India's borders.
                                </p>
                                <div className="space-y-3 mt-6">
                                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100">
                                        <Globe2 className="w-5 h-5 text-[#A34354] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[14px] font-semibold text-gray-900">New Libreville Airport, Gabon (2017)</p>
                                            <p className="text-[13px] text-gray-500 mt-1">CNS equipment evaluation and master plan review.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100">
                                        <Globe2 className="w-5 h-5 text-[#A34354] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[14px] font-semibold text-gray-900">Pokhara Regional International Airport, Nepal (2019)</p>
                                            <p className="text-[13px] text-gray-500 mt-1">Master plan review for regional international airport.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-card-animated group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                            <YellowBorderBeam rx={16} />
                            <ImageWithFallback
                                src="https://images.pexels.com/photos/30475501/pexels-photo-30475501.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&dpr=1"
                                alt="Airplanes on runway with mountain backdrop"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* AAI, DGCA, IAF & MoD Regulatory Expertise */}
            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <div ref={regRef} className="reveal">
                        <SectionHeading
                            eyebrow="Regulatory & Technical"
                            title="AAI, DGCA, IAF & MoD Regulatory Expertise"
                            subtitle="Direct experience with India's aviation regulatory framework and technical systems."
                            align="center"
                            className="mb-14"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'AAI', desc: 'Airports Authority of India, airport operations, CNS/ATM infrastructure and regulatory processes.' },
                            { title: 'DGCA', desc: 'Directorate General of Civil Aviation, safety oversight, compliance and regulatory framework.' },
                            { title: 'IAF / MoD', desc: 'Indian Air Force / Ministry of Defence, height clearance NOC and aeronautical studies.' },
                            { title: 'Ministry of Civil Aviation', desc: 'Policy framework, national aviation programmes and project coordination.' },
                        ].map((item) => (
                            <div key={item.title} className="card-sacs group p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all relative overflow-hidden">
                                <YellowBorderBeam rx={12} />
                                <h3 className="font-display font-bold text-[16px] text-[#402E6D] mb-2.5">{item.title}</h3>
                                <p className="text-[13.5px] text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Contact Our Aviation Consultants"
                subtitle="Our team is available to discuss your consultancy requirements from airport development to height clearance and CNS/ATM."
                primaryLabel="Talk to Our Experts"
                primaryPath="/contact"
                secondaryLabel="View Our Services"
                secondaryPath="/services"
            />
        </>
    );
}
