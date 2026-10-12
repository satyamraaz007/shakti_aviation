import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import ImageWithFallback from '@/components/ImageWithFallback';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { getService, services } from '@/data/services';

export default function ServiceDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const service = slug ? getService(slug) : undefined;
    const deliverablesRef = useScrollReveal<HTMLDivElement>();

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const Icon = service.icon;

    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.shortDescription,
        provider: {
            '@type': 'Organization',
            name: 'Sakthi Aviation Consultancy Services Private Limited',
            url: 'https://www.saktiaviation.com/',
        },
        areaServed: ['India', 'International'],
    };

    // Related services (same index +/- 1)
    const currentIndex = services.findIndex((s) => s.slug === service.slug);
    const related = services.filter((_, i) => Math.abs(i - currentIndex) <= 2 && i !== currentIndex).slice(0, 3);

    return (
        <>
            <SEO
                title={`${service.title} | Aviation Consultancy`}
                description={service.shortDescription}
                path={`/services/${service.slug}`}
                jsonLd={serviceJsonLd}
            />

            {/* Hero */}
            <section className="relative pt-[120px] pb-16 lg:pt-[160px] lg:pb-20 overflow-hidden bg-[#2A1F4A]">
                <div className="absolute inset-0 aviation-grid opacity-20" aria-hidden="true" />
                <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full border border-white/5" aria-hidden="true" />

                <div className="container-sacs relative z-10">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: service.title }]} />
                    </div>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#A34354]/20">
                                <Icon className="w-7 h-7 text-[#E0BEC8]" />
                            </span>
                            <span className="eyebrow-light">Service</span>
                        </div>
                        <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-[52px] leading-[1.1] text-white text-balance">
                            {service.title}
                        </h1>
                        <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl text-pretty">
                            {service.shortDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                        <div className="lg:col-span-2">
                            <SectionHeading
                                eyebrow="Overview"
                                title={`About Our ${service.title} Practice`}
                                className="mb-6"
                            />
                            <div className="text-[15px] md:text-[16px] leading-relaxed text-gray-600 space-y-4">
                                <p>{service.longDescription}</p>
                            </div>

                            {/* Deliverables */}
                            <div ref={deliverablesRef} className="reveal mt-12">
                                <h2 className="font-display font-bold text-xl text-gray-900 mb-6">Key Deliverables</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.deliverables.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3 p-4 rounded-lg border border-gray-100 bg-white hover:shadow-sm transition-all"
                                        >
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A34354]/10 flex items-center justify-center mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-[#A34354]" />
                                            </span>
                                            <span className="text-[14px] text-gray-700 leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-28 space-y-6">
                                <div className="card-sacs p-6">
                                    <h3 className="font-display font-bold text-[16px] text-gray-900 mb-4">Discuss This Service</h3>
                                    <p className="text-[13.5px] text-gray-600 leading-relaxed mb-5">
                                        Have a requirement related to {service.title.toLowerCase()}? Our team is ready to discuss your project.
                                    </p>
                                    <Link to="/contact" className="btn-primary w-full">
                                        <Phone className="w-4 h-4" />
                                        Talk to Our Experts
                                    </Link>
                                </div>

                                <div className="card-sacs p-6">
                                    <h3 className="font-display font-bold text-[15px] text-gray-900 mb-4">Other Services</h3>
                                    <div className="space-y-2">
                                        {services
                                            .filter((s) => s.slug !== service.slug)
                                            .slice(0, 5)
                                            .map((s) => (
                                                <Link
                                                    key={s.slug}
                                                    to={`/services/${s.slug}`}
                                                    className="flex items-center justify-between gap-2 p-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                                                >
                                                    <span className="text-[13.5px] font-medium text-gray-700 group-hover:text-[#402E6D] transition-colors">
                                                        {s.title}
                                                    </span>
                                                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#A34354] transition-colors" />
                                                </Link>
                                            ))}
                                    </div>
                                    <Link
                                        to="/services"
                                        className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#A34354] hover:text-[#402E6D] transition-colors"
                                    >
                                        <ArrowLeft className="w-3.5 h-3.5" />
                                        All Services
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Related services */}
            <section className="py-16 lg:py-20 bg-section-alt">
                <div className="container-sacs">
                    <h2 className="font-display font-bold text-2xl text-gray-900 mb-8">Related Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {related.map((s) => {
                            const RelatedIcon = s.icon;
                            return (
                                <Link
                                    key={s.slug}
                                    to={`/services/${s.slug}`}
                                    className="card-sacs group p-6"
                                >
                                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#402E6D]/8 mb-4 transition-colors group-hover:bg-[#A34354]/12">
                                        <RelatedIcon className="w-5.5 h-5.5 text-[#402E6D] group-hover:text-[#A34354] transition-colors" />
                                    </span>
                                    <h3 className="font-display font-bold text-[16px] text-gray-900 mb-2">{s.title}</h3>
                                    <p className="text-[13.5px] text-gray-600 leading-relaxed line-clamp-2">{s.shortDescription}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to Move Forward?"
                subtitle={`Contact our team to discuss your ${service.title.toLowerCase()} requirement in detail.`}
                primaryLabel="Contact SACS"
                primaryPath="/contact"
                secondaryLabel="View Our Projects"
                secondaryPath="/projects"
            />
        </>
    );
}
