import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Plane, Phone } from 'lucide-react';
import { navLinks } from '@/data/siteInfo';
import { services } from '@/data/services';
import { siteInfo } from '@/data/siteInfo';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    const isHome = location.pathname === '/';
    const isTransparent = isHome && !scrolled;

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#402E6D] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
            >
                Skip to content
            </a>

            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent
                        ? 'bg-transparent'
                        : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
                    }`}
            >
                <nav className="container-sacs flex items-center justify-between h-[72px] lg:h-[80px]" aria-label="Main navigation">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2.5 flex-shrink-0"
                        aria-label={`${siteInfo.name} home`}
                    >
                        <span
                            className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${isTransparent ? 'bg-white/10 backdrop-blur' : 'bg-[#402E6D]'
                                }`}
                        >
                            <Plane className="w-5 h-5 text-white" />
                        </span>
                        <span className="flex flex-col leading-none">
                            <span className={`font-display font-bold text-[17px] ${isTransparent ? 'text-white' : 'text-gray-900'}`}>
                                SACS
                            </span>
                            <span className={`text-[10px] font-medium tracking-wide ${isTransparent ? 'text-white/60' : 'text-gray-500'}`}>
                                Aviation Consultancy
                            </span>
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) =>
                            link.hasMegaMenu ? (
                                <div
                                    key={link.path}
                                    className="relative"
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    <Link
                                        to={link.path}
                                        className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-[15px] font-medium transition-colors ${isTransparent
                                                ? 'text-white/90 hover:text-white hover:bg-white/10'
                                                : 'text-gray-700 hover:text-[#402E6D] hover:bg-gray-50'
                                            } ${location.pathname.startsWith('/services') ? (isTransparent ? 'text-white' : 'text-[#402E6D]') : ''
                                            }`}
                                    >
                                        {link.label}
                                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                    </Link>

                                    {/* Mega menu */}
                                    {servicesOpen && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[680px]">
                                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-1.5">
                                                <div className="col-span-2 flex items-center justify-between pb-3 mb-2 border-b border-gray-100">
                                                    <span className="eyebrow">Our Services</span>
                                                    <Link
                                                        to="/services"
                                                        className="text-[13px] font-semibold text-[#A34354] hover:text-[#402E6D] transition-colors"
                                                    >
                                                        View All Services →
                                                    </Link>
                                                </div>
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.slug}
                                                        to={`/services/${service.slug}`}
                                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                                    >
                                                        <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#402E6D]/5 flex items-center justify-center transition-colors group-hover:bg-[#A34354]/10">
                                                            <service.icon className="w-4.5 h-4.5 text-[#402E6D] group-hover:text-[#A34354] transition-colors" />
                                                        </span>
                                                        <span className="flex flex-col min-w-0">
                                                            <span className="text-[14px] font-semibold text-gray-900 leading-tight">
                                                                {service.title}
                                                            </span>
                                                            <span className="text-[12px] text-gray-500 leading-snug mt-0.5 line-clamp-2">
                                                                {service.shortDescription}
                                                            </span>
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-3.5 py-2 rounded-lg text-[15px] font-medium transition-colors ${isTransparent
                                            ? 'text-white/90 hover:text-white hover:bg-white/10'
                                            : 'text-gray-700 hover:text-[#402E6D] hover:bg-gray-50'
                                        } ${location.pathname === link.path ? (isTransparent ? 'text-white' : 'text-[#402E6D]') : ''
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>

                    {/* CTA + mobile toggle */}
                    <div className="flex items-center gap-3">
                        <Link to="/contact" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 !text-[14px]">
                            <Phone className="w-4 h-4" />
                            Talk to Our Experts
                        </Link>
                        <button
                            onClick={() => setMobileOpen(true)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
                                }`}
                            aria-label="Open menu"
                            aria-expanded={mobileOpen}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
                <div
                    className={`absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex items-center justify-between p-5 border-b border-gray-100">
                        <span className="font-display font-bold text-[17px] text-gray-900">Menu</span>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>

                    <div className="p-3">
                        {navLinks.map((link) =>
                            link.hasMegaMenu ? (
                                <div key={link.path}>
                                    <button
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${location.pathname.startsWith('/services')
                                                ? 'text-[#402E6D] bg-[#402E6D]/5'
                                                : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        aria-expanded={mobileServicesOpen}
                                    >
                                        {link.label}
                                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {mobileServicesOpen && (
                                        <div className="ml-3 mt-1 mb-2 border-l border-gray-100 pl-3">
                                            <Link
                                                to="/services"
                                                className="block px-4 py-2.5 text-[14px] font-semibold text-[#A34354] hover:bg-gray-50 rounded-lg transition-colors"
                                            >
                                                All Services →
                                            </Link>
                                            {services.map((service) => (
                                                <Link
                                                    key={service.slug}
                                                    to={`/services/${service.slug}`}
                                                    className="block px-4 py-2.5 text-[14px] text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                                                >
                                                    {service.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${location.pathname === link.path
                                            ? 'text-[#402E6D] bg-[#402E6D]/5'
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}

                        <div className="mt-4 px-4">
                            <Link to="/contact" className="btn-primary w-full">
                                <Phone className="w-4 h-4" />
                                Talk to Our Experts
                            </Link>
                        </div>

                        <div className="mt-6 px-4 py-4 border-t border-gray-100">
                            <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Contact</p>
                            {siteInfo.phones.map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                                    className="block text-[14px] text-gray-600 hover:text-[#A34354] transition-colors py-1"
                                >
                                    {phone}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
