import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Plane } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NotFoundPage() {
    return (
        <>
            <SEO
                title="Page Not Found | SACS"
                description="The page you are looking for could not be found. Please return to the homepage or contact us."
                path="/404"
            />
            <section className="min-h-screen flex items-center justify-center bg-[#2A1F4A] relative overflow-hidden">
                <div className="absolute inset-0 aviation-grid opacity-15" aria-hidden="true" />
                <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full border border-white/5" aria-hidden="true" />
                <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full border border-white/5" aria-hidden="true" />

                <div className="container-sacs relative z-10 text-center py-20">
                    <div className="flex items-center justify-center mb-8">
                        <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#A34354]/20">
                            <Plane className="w-8 h-8 text-[#E0BEC8]" />
                        </span>
                    </div>
                    <p className="font-display font-bold text-7xl md:text-8xl text-white leading-none">404</p>
                    <h1 className="font-display font-bold text-2xl md:text-3xl text-white mt-6 mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-[15px] text-white/60 max-w-md mx-auto leading-relaxed mb-8">
                        The page you are looking for may have been moved, removed, or is temporarily unavailable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/" className="btn-primary">
                            <Home className="w-4 h-4" />
                            Back to Homepage
                        </Link>
                        <Link to="/contact" className="btn-secondary">
                            <ArrowLeft className="w-4 h-4" />
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
