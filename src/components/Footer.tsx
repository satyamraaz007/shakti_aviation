import { Link } from 'react-router-dom';
import { Plane, MapPin, Phone, ExternalLink, Mail } from 'lucide-react';
import { siteInfo, usefulLinks } from '@/data/siteInfo';
import { services } from '@/data/services';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#2A1F4A] text-white">
            {/* Top accent line */}
            <div className="h-1 gradient-sacs" />

            <div className="container-sacs py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* Company description */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2.5 mb-5">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#A34354]">
                                <Plane className="w-5 h-5 text-white" />
                            </span>
                            <span className="flex flex-col leading-none">
                                <span className="font-display font-bold text-[17px]">SACS</span>
                                <span className="text-[10px] font-medium tracking-wide text-white/50">
                                    Aviation Consultancy
                                </span>
                            </span>
                        </Link>
                        <p className="text-[14px] leading-relaxed text-white/60 mb-5">
                            Sakthi Aviation Consultancy Services combines decades of aviation, airport operations,
                            safety, security and technical expertise to deliver consultancy and implementation
                            solutions across India and international markets.
                        </p>
                        <div className="space-y-2.5">
                            <div className="flex items-start gap-2.5 text-[13px] text-white/60">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#E0BEC8]" />
                                <span>
                                    {siteInfo.address.line1}, {siteInfo.address.line2},<br />
                                    {siteInfo.address.line3},<br />
                                    {siteInfo.address.city} – {siteInfo.address.pincode}, {siteInfo.address.country}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Company links */}
                    <div>
                        <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-white/40 mb-5">Company</h3>
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
                                        className="text-[14px] text-white/70 hover:text-[#E0BEC8] transition-colors link-underline"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services links */}
                    <div>
                        <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-white/40 mb-5">Services</h3>
                        <ul className="space-y-3">
                            {services.slice(0, 6).map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="text-[14px] text-white/70 hover:text-[#E0BEC8] transition-colors link-underline"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Useful links + contact */}
                    <div>
                        <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-white/40 mb-5">Useful Links</h3>
                        <ul className="space-y-2.5 max-h-[200px] overflow-y-auto pr-2">
                            {usefulLinks.slice(0, 8).map((link) => (
                                <li key={link.url}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-[13px] text-white/60 hover:text-[#E0BEC8] transition-colors"
                                    >
                                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                            {siteInfo.phones.slice(0, 2).map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                                    className="flex items-center gap-2 text-[13px] text-white/60 hover:text-[#E0BEC8] transition-colors"
                                >
                                    <Phone className="w-3.5 h-3.5 text-[#E0BEC8]" />
                                    {phone}
                                </a>
                            ))}
                            <a
                                href={`mailto:${siteInfo.email}`}
                                className="flex items-center gap-2 text-[13px] text-white/60 hover:text-[#E0BEC8] transition-colors"
                            >
                                <Mail className="w-3.5 h-3.5 text-[#E0BEC8]" />
                                {siteInfo.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="container-sacs py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[13px] text-white/50 text-center md:text-left">
                        © {year} Sakthi Aviation Consultancy Services Private Limited. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/privacy-policy" className="text-[13px] text-white/50 hover:text-[#E0BEC8] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-and-conditions" className="text-[13px] text-white/50 hover:text-[#E0BEC8] transition-colors">
                            Terms &amp; Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
