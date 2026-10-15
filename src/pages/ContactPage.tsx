import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import YellowBorderBeam from '@/components/YellowBorderBeam';
import { siteInfo } from '@/data/siteInfo';

export default function ContactPage() {
    const mapsQuery = encodeURIComponent(
        `${siteInfo.address.line1}, ${siteInfo.address.line3}, ${siteInfo.address.city} ${siteInfo.address.pincode}`
    );

    const contactJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Sakthi Aviation Consultancy Services',
        url: 'https://www.saktiaviation.com/contact',
        mainEntity: {
            '@type': 'Organization',
            name: 'Sakthi Aviation Consultancy Services Private Limited',
            telephone: siteInfo.phones,
            email: siteInfo.email,
            address: {
                '@type': 'PostalAddress',
                streetAddress: `${siteInfo.address.line1}, ${siteInfo.address.line2}, ${siteInfo.address.line3}`,
                addressLocality: siteInfo.address.city,
                addressRegion: siteInfo.address.state,
                postalCode: siteInfo.address.pincode,
                addressCountry: 'IN',
            },
        },
    };

    return (
        <>
            <SEO
                title="Contact SACS | Aviation Consultancy Enquiries"
                description="Contact Sakthi Aviation Consultancy Services for aviation consultancy, airport development, CNS/ATM, height clearance NOC and security system requirements. Located in New Delhi, India."
                path="/contact"
                jsonLd={contactJsonLd}
            />

            <PageHero
                eyebrow="Get in Touch"
                title="Contact SACS"
                subtitle="Reach out to our team for consultancy enquiries, project discussions or general information. We respond to all genuine enquiries at the earliest."
                image="https://images.pexels.com/photos/33860211/pexels-photo-33860211.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
                imageAlt="Modern airport terminal architecture interior"
                breadcrumbs={[{ label: 'Contact' }]}
            />

            {/* Contact info + form */}
            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Info column */}
                        <div className="lg:col-span-2">
                            <SectionHeading
                                eyebrow="Contact Information"
                                title="Reach Our Team"
                                className="mb-8"
                            />
                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#402E6D]/8 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-[#402E6D]" />
                                    </span>
                                    <div>
                                        <p className="text-[14px] font-semibold text-gray-900 mb-1">Office Address</p>
                                        <address className="text-[14px] text-gray-600 leading-relaxed not-italic">
                                            {siteInfo.address.line1}, {siteInfo.address.line2},<br />
                                            {siteInfo.address.line3},<br />
                                            {siteInfo.address.city} – {siteInfo.address.pincode},<br />
                                            {siteInfo.address.country}
                                        </address>
                                    </div>
                                </div>

                                {/* Phones */}
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#A34354]/8 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-[#A34354]" />
                                    </span>
                                    <div>
                                        <p className="text-[14px] font-semibold text-gray-900 mb-1.5">Phone Numbers</p>
                                        <div className="space-y-1">
                                            {siteInfo.phones.map((phone) => (
                                                <a
                                                    key={phone}
                                                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                                                    className="block text-[14px] text-gray-600 hover:text-[#A34354] transition-colors"
                                                >
                                                    {phone}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#867698]/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-[#867698]" />
                                    </span>
                                    <div>
                                        <p className="text-[14px] font-semibold text-gray-900 mb-1">Email</p>
                                        <a
                                            href={`mailto:${siteInfo.email}`}
                                            className="text-[14px] text-gray-600 hover:text-[#A34354] transition-colors"
                                        >
                                            {siteInfo.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Office timings */}
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#402E6D]/8 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#402E6D]" />
                                    </span>
                                    <div>
                                        <p className="text-[14px] font-semibold text-gray-900 mb-1">Office Timings</p>
                                        <p className="text-[14px] text-gray-600">{siteInfo.officeTimings}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form column */}
                        <div className="lg:col-span-3">
                            <SectionHeading
                                eyebrow="Send a Message"
                                title="Tell Us About Your Requirement"
                                className="mb-8"
                            />
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="pb-20 lg:pb-28">
                <div className="container-sacs">
                    <div className="image-card-animated relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[400px] group">
                        <YellowBorderBeam rx={16} />
                        <iframe
                            title="SACS Office Location Map"
                            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
                        <p className="text-[13px] text-gray-500">
                            {siteInfo.address.line1}, {siteInfo.address.line3}, {siteInfo.address.city} – {siteInfo.address.pincode}
                        </p>
                        <a
                            href={`https://www.google.com/maps?q=${mapsQuery}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#A34354] hover:text-[#402E6D] transition-colors"
                        >
                            Open in Google Maps
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
