import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import TeamCard from '@/components/TeamCard';
import CTASection from '@/components/CTASection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { teamMembers } from '@/data/team';

export default function TeamPage() {
    const teamRef = useScrollReveal<HTMLDivElement>();

    return (
        <>
            <SEO
                title="Leadership & Technical Experts | SACS Aviation Team"
                description="Meet the senior leadership and technical experts of Sakthi Aviation Consultancy Services — experienced professionals from AAI, DGCA, CNS/ATM, airport operations and aviation safety management."
                path="/team"
            />

            <PageHero
                eyebrow="Our Team"
                title="Leadership & Technical Experts"
                subtitle="Our senior team brings decades of hands-on experience from the Airports Authority of India, DGCA, CNS/ATM systems, airport operations, safety management and aviation security."
                image="https://images.pexels.com/photos/14938295/pexels-photo-14938295.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
                imageAlt="Satellite communication tower with multiple dishes against blue sky"
                breadcrumbs={[{ label: 'Team' }]}
            />

            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <SectionHeading
                        eyebrow="Senior Professionals"
                        title="Experienced Aviation Leaders"
                        subtitle="Founded by retired senior management executives from the civil aviation ecosystem, our team combines regulatory knowledge with technical execution capability."
                        align="center"
                        className="mb-14"
                    />
                    <div ref={teamRef} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member) => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Expertise summary */}
            <section className="py-20 lg:py-28 bg-section-alt">
                <div className="container-sacs">
                    <SectionHeading
                        eyebrow="Collective Expertise"
                        title="Domain Knowledge That Drives Results"
                        subtitle="Our team's combined expertise covers the full aviation consultancy spectrum."
                        align="center"
                        className="mb-14"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {[
                            'AAI & DGCA',
                            'CNS/ATM Systems',
                            'GAGAN & GBAS',
                            'Airport CNS Facilities',
                            'Airport Operations',
                            'Air Traffic Services',
                            'Safety Management Systems',
                            'Airport Design & Development',
                            'Aviation Security',
                            'Aeronautical Studies',
                            'Height Clearance / NOC',
                            'Project Implementation',
                        ].map((skill) => (
                            <div
                                key={skill}
                                className="flex items-center gap-2.5 p-4 rounded-xl bg-white border border-gray-100"
                            >
                                <span className="w-2 h-2 rounded-full bg-[#A34354] flex-shrink-0" />
                                <span className="text-[13px] font-medium text-gray-700 leading-snug">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Work with Our Team"
                subtitle="Get in touch to discuss how our aviation expertise can support your project."
                primaryLabel="Talk to Our Experts"
                primaryPath="/contact"
                secondaryLabel="View Our Services"
                secondaryPath="/services"
            />
        </>
    );
}
