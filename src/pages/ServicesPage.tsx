import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';

export default function ServicesPage() {
    return (
        <>
            <SEO
                title="Aviation Consultancy Services | Airport, CNS/ATM, Safety, Security"
                description="Explore SACS aviation consultancy services: airport development, airport operations, airside equipment, safety management systems, CNS/ATM, aviation security, AAI/IAF/MoD NOC consultancy and project implementation."
                path="/services"
            />

            <PageHero
                eyebrow="Our Services"
                title="Integrated Aviation & Infrastructure Solutions"
                subtitle="Specialized consultancy, technical services and implementation support for aviation, infrastructure and security environments delivered by senior aviation professionals."
                image="https://images.pexels.com/photos/4318372/pexels-photo-4318372.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
                imageAlt="Modern airport terminal interior architecture"
                breadcrumbs={[{ label: 'Services' }]}
            />

            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <SectionHeading
                        eyebrow="Service Overview"
                        title="Comprehensive Consultancy Across the Aviation Lifecycle"
                        subtitle="From airport planning and development through operations, safety, security, CNS/ATM and regulatory height clearance SACS covers the full spectrum of aviation consultancy needs."
                        align="center"
                        className="mb-14"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard key={service.slug} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Security & Surveillance detail strip */}
            <section className="py-20 lg:py-28 bg-section-alt">
                <div className="container-sacs">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <SectionHeading
                                eyebrow="Security & Surveillance"
                                title="Technical Security Solutions for Aviation"
                                subtitle="Security and surveillance infrastructure designed, specified and implemented for aviation and large facility environments."
                                className="mb-6"
                            />
                            <Link to="/services/aviation-security-surveillance" className="btn-outline">
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: 'CCTV Systems', desc: 'Surveillance specification and deployment' },
                                { title: 'Fire Alarm Systems', desc: 'Detection and alarm compliance support' },
                                { title: 'Public Address Systems', desc: 'PA design for airport environments' },
                                { title: 'Traffic Law Enforcement', desc: 'Enforcement system specification' },
                            ].map((item) => (
                                <div key={item.title} className="card-sacs p-5">
                                    <h3 className="font-display font-semibold text-[15px] text-gray-900 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-[13px] text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Discuss Your Requirement with Our Experts"
                subtitle="Whether it's airport development, CNS/ATM, height clearance NOC or security systems our team is ready to help."
                primaryLabel="Talk to Our Experts"
                primaryPath="/contact"
                secondaryLabel="View Our Projects"
                secondaryPath="/projects"
            />
        </>
    );
}
