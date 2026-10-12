import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';

interface LegalPageProps {
    type: 'privacy' | 'terms';
}

export default function LegalPage({ type }: LegalPageProps) {
    const isPrivacy = type === 'privacy';
    const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';
    const eyebrow = isPrivacy ? 'Legal' : 'Legal';
    const path = isPrivacy ? '/privacy-policy' : '/terms-and-conditions';

    return (
        <>
            <SEO
                title={`${title} | SACS`}
                description={`${title} for Sakthi Aviation Consultancy Services Private Limited.`}
                path={path}
            />

            <PageHero
                eyebrow={eyebrow}
                title={title}
                image="https://images.pexels.com/photos/34298439/pexels-photo-34298439.jpeg?auto=compress&cs=tinysrgb&w=1920&h=500&dpr=1"
                imageAlt="Airport control tower in sunny weather"
                breadcrumbs={[{ label: title }]}
            />

            <section className="py-20 lg:py-28">
                <div className="container-sacs">
                    <div className="max-w-3xl mx-auto prose-sacs">
                        <p className="text-[13px] text-gray-400 mb-10">Last updated: January 2026</p>

                        {isPrivacy ? (
                            <div className="space-y-8">
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">1. Introduction</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        Sakthi Aviation Consultancy Services Private Limited ("SACS", "we", "us") respects
                                        your privacy and is committed to protecting your personal data. This Privacy Policy
                                        explains how we collect, use and safeguard information when you visit our website
                                        or contact us.
                                    </p>
                                </section>
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">2. Information We Collect</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        We may collect information you provide directly to us, such as your name, company
                                        name, email address, phone number and message content when you submit our contact
                                        form. We may also collect non-personal technical information such as browser type
                                        and pages visited for website improvement purposes.
                                    </p>
                                </section>
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">3. How We Use Your Information</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        We use the information you provide to respond to your enquiries, provide consultancy
                                        services, communicate with you about projects and improve our website. We do not
                                        sell or rent your personal information to third parties.
                                    </p>
                                </section>
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">4. Data Security</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        We implement appropriate technical and organizational measures to protect your
                                        personal data against unauthorized access, loss or misuse.
                                    </p>
                                </section>
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">5. External Links</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        Our website contains links to external websites. We are not responsible for the
                                        privacy practices or content of those sites.
                                    </p>
                                </section>
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">6. Contact Us</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        For questions about this Privacy Policy, please contact us at info@saktiaviation.com
                                        or at our office address: #544, DLF Prime Towers, F – 79 & 80, Okhla Industrial Area
                                        Phase – 1, New Delhi – 110020, India.
                                    </p>
                                </section>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">1. Acceptance of Terms</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        By accessing and using this website, you accept and agree to be bound by these
                                        Terms and Conditions. If you do not agree, please do not use this website.
                                    </p>
                                </section>
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">2. Use of Website</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        This website provides information about Sakthi Aviation Consultancy Services
                                        Private Limited, its services, projects and team. You may use this website for
                                        lawful purposes only. You must not misuse the website or attempt to gain
                                        unauthorized access to its systems.
                                    </p>
                                </section>
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">3. Intellectual Property</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        All content on this website, including text, graphics, logos and design elements,
                                        is the property of SACS or its content providers and is protected by applicable
                                        intellectual property laws. You may not reproduce or distribute content without
                                        prior written permission.
                                    </p>
                                </section>
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">4. Service Information</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        Information about our services is provided for general informational purposes.
                                        Specific consultancy engagements are governed by separate agreements. SACS reserves
                                        the right to modify or withdraw services without prior notice.
                                    </p>
                                </section>
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">5. Limitation of Liability</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        While we strive to provide accurate information, this website is provided "as is"
                                        without warranties of any kind. SACS shall not be liable for any direct, indirect
                                        or consequential damages arising from the use of this website.
                                    </p>
                                </section>
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">6. Governing Law</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        These Terms and Conditions are governed by the laws of India. Any disputes shall
                                        be subject to the jurisdiction of courts in New Delhi, India.
                                    </p>
                                </section>
                                <section>
                                    <h2 className="font-display font-bold text-xl text-gray-900 mb-3">7. Contact</h2>
                                    <p className="text-[15px] leading-relaxed text-gray-600">
                                        For questions about these Terms and Conditions, please contact us at
                                        info@saktiaviation.com.
                                    </p>
                                </section>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
