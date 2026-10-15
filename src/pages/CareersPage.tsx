import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, Users, TrendingUp, Mail, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import YellowBorderBeam from '@/components/YellowBorderBeam';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { siteInfo } from '@/data/siteInfo';

export default function CareersPage() {
    const whyRef = useScrollReveal<HTMLDivElement>();
    const areasRef = useScrollReveal<HTMLDivElement>();
    const resumeRef = useScrollReveal<HTMLDivElement>();

    return (
        <>
            <SEO
                title="Careers at SACS | Aviation Consultancy Careers India"
                description="Build the future of aviation with Sakthi Aviation Consultancy Services. Explore career opportunities in aviation consultancy, CNS/ATM, airport development and safety management."
                path="/careers"
            />

            <PageHero
                eyebrow="Careers"
                title="Build the Future of Aviation With SACS"
                subtitle="Join a team of senior aviation professionals delivering consultancy and implementation solutions across India and international markets."
                image="https://images.pexels.com/photos/16099588/pexels-photo-16099588.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
                imageAlt="Airport runway illuminated at night with mountains in background"
                breadcrumbs={[{ label: 'Careers' }]}
            />

            {/* Why Work With Us */}
            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <div ref={whyRef} className="reveal">
                        <SectionHeading
                            eyebrow="Why Work With Us"
                            title="A Career Grounded in Aviation Expertise"
                            subtitle="SACS offers the opportunity to work alongside senior aviation professionals on projects that shape airport infrastructure, safety and regulatory compliance."
                            align="center"
                            className="mb-14"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Users,
                                title: 'Learn from Senior Experts',
                                desc: 'Work alongside retired senior management executives from AAI, DGCA and the civil aviation ecosystem with 30+ years of experience.',
                            },
                            {
                                icon: TrendingUp,
                                title: 'Diverse Project Exposure',
                                desc: 'Engage with airport development, CNS/ATM, safety management, security systems and regulatory height clearance projects.',
                            },
                            {
                                icon: GraduationCap,
                                title: 'Technical Growth',
                                desc: 'Develop deep expertise in aviation infrastructure, regulatory frameworks and technical consultancy methodologies.',
                            },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="card-sacs p-7 relative overflow-hidden group">
                                    <YellowBorderBeam rx={16} />
                                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#402E6D]/8 mb-5">
                                        <Icon className="w-6 h-6 text-[#402E6D]" />
                                    </span>
                                    <h3 className="font-display font-bold text-[17px] text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-[14px] text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Areas of Expertise */}
            <section className="py-20 lg:py-28 bg-section-alt">
                <div className="container-sacs">
                    <div ref={areasRef} className="reveal">
                        <SectionHeading
                            eyebrow="Areas of Expertise"
                            title="Where We Seek Talent"
                            subtitle="We look for professionals with experience or interest in the following aviation and infrastructure domains."
                            align="center"
                            className="mb-14"
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            'Airport Operations',
                            'CNS/ATM Systems',
                            'Aviation Safety Management',
                            'Airport Planning & Development',
                            'Aviation Security & Surveillance',
                            'AAI / IAF / MoD NOC',
                            'Aeronautical Studies',
                            'Project Consultancy',
                        ].map((area) => (
                            <div
                                key={area}
                                className="flex items-center gap-2.5 p-4 rounded-xl bg-white border border-gray-100"
                            >
                                <Briefcase className="w-4 h-4 text-[#A34354] flex-shrink-0" />
                                <span className="text-[13px] font-medium text-gray-700 leading-snug">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions / Submit Resume */}
            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <div ref={resumeRef} className="reveal max-w-3xl mx-auto">
                        <SectionHeading
                            eyebrow="Open Positions"
                            title="Current Vacancies"
                            className="mb-6"
                        />
                        <div className="card-sacs p-8 lg:p-10 text-center relative overflow-hidden group">
                            <YellowBorderBeam rx={16} />
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-5">
                                <Briefcase className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                                No Specific Vacancies Currently Listed
                            </h3>
                            <p className="text-[15px] text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
                                Currently, no specific vacancies are listed. Please send your profile to our team for
                                future opportunities. We are always interested in connecting with experienced
                                aviation professionals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={`mailto:${siteInfo.email}?subject=Career%20Opportunity%20Enquiry`}
                                    className="btn-primary"
                                >
                                    <Mail className="w-4 h-4" />
                                    Submit Your Resume
                                </a>
                                <Link to="/contact" className="btn-outline">
                                    Contact Us
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Interested in Joining Our Team?"
                subtitle="Send us your profile and we'll reach out when a matching opportunity arises."
                primaryLabel="Submit Your Resume"
                primaryPath="/contact"
                secondaryLabel="Explore Our Services"
                secondaryPath="/services"
            />
        </>
    );
}
