import { Link } from 'react-router-dom';
import { Plane, MapPin, Phone, ExternalLink, Mail } from 'lucide-react';
import { siteInfo, usefulLinks } from '@/data/siteInfo';
import { services } from '@/data/services';
import footerBg from '@/assets/footer_img.png';
import Logo from '@/assets/sacs_logo.png'

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#052640] text-white overflow-hidden">
            {/* Background image & blue translucent layer */}
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src={footerBg}
                    alt="Footer aviation background"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#09355E]/80 via-[#06243F]/82 to-[#041A2E]/86 backdrop-blur-[0.5px]" />
            </div>

            {/* Subtle aviation grid overlay */}
            <div className="absolute inset-0 aviation-grid opacity-20 pointer-events-none" aria-hidden="true" />

            {/* Top accent line */}
            <div className="relative z-10 h-1 bg-gradient-to-r from-[#168DE2] via-[#38BDF8] to-[#FACC15]" />

            <div className="container-sacs relative z-10 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* Company description */}
                    <div className="lg:col-span-1">
                        <Link
                            to="/"
                            className="flex items-center flex-shrink-0 mb-3"
                            aria-label={`${siteInfo.name} home`}
                        >
                            <img
                                src={Logo}
                                alt="SACS Aviation Consultancy Services"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-[14px] leading-relaxed text-blue-50/95 mb-5 font-normal">
                            Sakthi Aviation Consultancy Services combines decades of aviation, airport operations,
                            safety, security and technical expertise to deliver consultancy and implementation
                            solutions across India and international markets.
                        </p>
                        <div className="space-y-2.5">
                            <div className="flex items-start gap-2.5 text-[13.5px] text-blue-50/95">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#38BDF8]" />
                                <span className="leading-relaxed">
                                    {siteInfo.address.line1}, {siteInfo.address.line2},<br />
                                    {siteInfo.address.line3},<br />
                                    {siteInfo.address.city} – {siteInfo.address.pincode}, {siteInfo.address.country}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Company links */}
                    <div>
                        <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#38BDF8] mb-5">Company</h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'About', path: '/about' },
                                { label: 'Projects', path: '/projects' },
                                { label: 'Team', path: '/team' },
                                { label: 'Careers', path: '/careers' },
                                { label: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-[14px] text-blue-100 hover:text-white transition-colors link-underline"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services links */}
                    <div>
                        <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#38BDF8] mb-5">Services</h3>
                        <ul className="space-y-3">
                            {services.slice(0, 6).map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="text-[14px] text-blue-100 hover:text-white transition-colors link-underline"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Useful links + contact */}
                    <div>
                        <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#38BDF8] mb-5">Useful Links</h3>
                        <ul className="space-y-2.5 max-h-[200px] overflow-y-auto pr-2">
                            {usefulLinks.slice(0, 8).map((link) => (
                                <li key={link.url}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-[13px] text-blue-100 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-3 h-3 flex-shrink-0 text-[#38BDF8]" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-sky-400/20 space-y-2.5">
                            {siteInfo.phones.slice(0, 2).map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                                    className="flex items-center gap-2 text-[13.5px] text-blue-100 hover:text-white transition-colors"
                                >
                                    <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                                    <span>{phone}</span>
                                </a>
                            ))}
                            <a
                                href={`mailto:${siteInfo.email}`}
                                className="flex items-center gap-2 text-[13.5px] text-blue-100 hover:text-white transition-colors"
                            >
                                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                                <span>{siteInfo.email}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="relative z-10 border-t border-sky-400/20 bg-black/20">
                <div className="container-sacs py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[13px] text-blue-100/90 text-center md:text-left">
                        © {year} Sakthi Aviation Consultancy Services Private Limited. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/privacy-policy" className="text-[13px] text-blue-100/90 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-and-conditions" className="text-[13px] text-blue-100/90 hover:text-white transition-colors">
                            Terms &amp; Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
