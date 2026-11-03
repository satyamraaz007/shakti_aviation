import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Phone, ChevronDown, HelpCircle } from 'lucide-react';
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
    const faqRef = useScrollReveal<HTMLDivElement>();
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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

    const faqJsonLd = service.faqs?.length
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: service.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        }
        : undefined;

    // Discuss Your Aviation Project (same index +/- 1)
    const currentIndex = services.findIndex((s) => s.slug === service.slug);
    const related = services.filter((_, i) => Math.abs(i - currentIndex) <= 2 && i !== currentIndex).slice(0, 3);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex((prev) => (prev === index ? null : index));
    };

    return (
        <>
            <SEO
                title={`${service.title} | Aviation Consultancy`}
                description={service.shortDescription}
                path={`/services/${service.slug}`}
                jsonLd={faqJsonLd ? [serviceJsonLd, faqJsonLd] : serviceJsonLd}
            />

            {/* Hero */}
            <section className="relative min-h-[400px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[620px] xl:min-h-[680px] flex items-center py-14 sm:py-16 lg:py-20 overflow-hidden">
                {/* Background image */}
                {service.image && (
                    <div className="absolute inset-0 select-none pointer-events-none">
                        <ImageWithFallback
                            src={service.image}
                            alt={`${service.title} background`}
                            className="w-full h-full object-cover object-center"
                            loading="eager"
                        />
                        {/* Clean cinematic vignette for full resolution & color clarity */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                    </div>
                )}

                <div className="absolute inset-0 aviation-grid opacity-20 pointer-events-none" aria-hidden="true" />
                <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full border border-white/5 pointer-events-none" aria-hidden="true" />

                <div className="container-sacs relative z-10">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: service.title }]} />
                    </div>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-inner">
                                <Icon className="w-7 h-7 text-[#E0BEC8]" />
                            </span>
                            <div className="flex items-center gap-2.5">
                                <span className="h-px w-6 bg-gradient-to-r from-[#8CCBFF] to-transparent" />
                                <span className="eyebrow-light text-[#8CCBFF]">Service</span>
                            </div>
                        </div>
                        <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-[52px] leading-[1.1] text-white text-balance drop-shadow-sm">
                            {service.title}
                        </h1>
                        {/* <p className="mt-5 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl text-pretty drop-shadow-xs">
                            {service.shortDescription}
                        </p> */}
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
                                <h2 className="font-display font-bold text-xl text-gray-900 mb-6">Project Consultancy Deliverables</h2>
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

            {/* Discuss Your Aviation Project */}
            <section className="py-16 lg:py-20 bg-section-alt">
                <div className="container-sacs">
                    <h2 className="font-display font-bold text-2xl text-gray-900 mb-8 text-center">Related Other Services</h2>
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
                title="Discuss Your Aviation Project"
                subtitle={`Contact our team to discuss your ${service.title.toLowerCase()} requirement in detail.`}
                primaryLabel="Contact SACS"
                primaryPath="/contact"
                secondaryLabel="View Our Projects"
                secondaryPath="/projects"
            />

            {/* 5 FAQs just below the Discuss Your Aviation Project section */}
            {service.faqs && service.faqs.length > 0 && (
                <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-gray-200/60">
                    <div className="container-sacs">
                        <SectionHeading
                            eyebrow="Frequently Asked Questions"
                            title={`Frequently Asked Questions on ${service.title}`}
                            subtitle={`Key questions and expert answers regarding our ${service.title.toLowerCase()} consultancy, regulatory processes, and implementation.`}
                            className="mb-12"
                        />

                        <div ref={faqRef} className="reveal max-w-4xl mx-auto space-y-4">
                            {service.faqs.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                return (
                                    <div
                                        key={faq.question}
                                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                            ? 'bg-white border-[#168DE2]/40 shadow-md shadow-[#168DE2]/5'
                                            : 'bg-white border-gray-200/80 hover:border-gray-300 hover:shadow-xs'
                                            }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleFaq(index)}
                                            className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors cursor-pointer group"
                                            aria-expanded={isOpen}
                                            aria-controls={`faq-answer-${index}`}
                                        >
                                            <div className="flex items-start sm:items-center gap-3.5">
                                                <span
                                                    className={`flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs sm:text-sm font-bold transition-colors ${isOpen
                                                        ? 'bg-[#168DE2] text-white'
                                                        : 'bg-[#402E6D]/8 text-[#402E6D] group-hover:bg-[#168DE2]/10 group-hover:text-[#168DE2]'
                                                        }`}
                                                >
                                                    0{index + 1}
                                                </span>
                                                <h3
                                                    className={`font-display font-semibold text-[16px] sm:text-[17px] leading-snug transition-colors ${isOpen
                                                        ? 'text-[#168DE2]'
                                                        : 'text-gray-900 group-hover:text-[#168DE2]'
                                                        }`}
                                                >
                                                    {faq.question}
                                                </h3>
                                            </div>
                                            <span
                                                className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${isOpen
                                                    ? 'bg-[#168DE2] text-white border-[#168DE2] rotate-180'
                                                    : 'bg-gray-50 text-gray-500 border-gray-200 group-hover:border-[#168DE2]/40 group-hover:text-[#168DE2]'
                                                    }`}
                                            >
                                                <ChevronDown className="w-4 h-4" />
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div
                                                id={`faq-answer-${index}`}
                                                className="px-5 sm:px-6 pb-6 pt-1 text-[14.5px] sm:text-[15px] leading-relaxed text-gray-600 border-t border-gray-100/80 animate-in fade-in duration-200"
                                            >
                                                <div className="pl-10 sm:pl-11 pr-2">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Quick enquiry banner under FAQ */}
                        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-white p-6 sm:p-8 border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4 text-center sm:text-left">
                                <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-[#168DE2]/10 items-center justify-center text-[#168DE2]">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-gray-900 text-[16px]">
                                        Have a specific query about {service.title.toLowerCase()}?
                                    </h4>
                                    <p className="text-[13.5px] text-gray-600 mt-1">
                                        Our senior aviation consultants can assess your technical requirements directly.
                                    </p>
                                </div>
                            </div>
                            <Link to="/contact" className="btn-primary flex-shrink-0 whitespace-nowrap text-[14px] px-6 py-3">
                                Contact Our Team
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
