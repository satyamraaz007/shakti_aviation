import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import YellowBorderBeam from '@/components/YellowBorderBeam';

interface FormData {
    name: string;
    email: string;
    phone: string;
    organization: string;
    service: string;
    message: string;
}

const initialFormData: FormData = {
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: '',
};

const serviceOptions = [
    'Airport Planning & Development',
    'CNS / ATM Facility Management',
    'AAI / IAF / MoD NOC & Height Clearance',
    'Aviation Safety Management System (SMS)',
    'Security & Surveillance Systems',
    'Aeronautical Studies & Safeguarding',
    'General Aviation Consultancy',
    'Other Enquiry',
];

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        return (
            <div className="card-sacs p-8 md:p-10 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">
                    Thank You for Reaching Out
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
                    Your enquiry has been received successfully. A member of our aviation consultancy team will review your requirement and respond shortly.
                </p>
                <button
                    type="button"
                    onClick={handleReset}
                    className="btn-outline text-[14px]"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="card-sacs p-6 md:p-8 space-y-6 relative overflow-hidden group">
            <YellowBorderBeam rx={16} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                    <label htmlFor="contact-name" className="label-sacs">
                        Full Name <span className="text-[#A34354]">*</span>
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        className="input-sacs"
                    />
                </div>

                {/* Email Address */}
                <div>
                    <label htmlFor="contact-email" className="label-sacs">
                        Work / Personal Email <span className="text-[#A34354]">*</span>
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rajesh@example.com"
                        className="input-sacs"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div>
                    <label htmlFor="contact-phone" className="label-sacs">
                        Phone Number <span className="text-[#A34354]">*</span>
                    </label>
                    <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="input-sacs"
                    />
                </div>

                {/* Organization */}
                <div>
                    <label htmlFor="contact-organization" className="label-sacs">
                        Organization / Company
                    </label>
                    <input
                        id="contact-organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. ABC Developers / Infrastructure"
                        className="input-sacs"
                    />
                </div>
            </div>

            {/* Service of Interest */}
            <div>
                <label htmlFor="contact-service" className="label-sacs">
                    Service of Interest
                </label>
                <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-sacs"
                >
                    <option value="">Select a service / area of enquiry</option>
                    {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>

            {/* Message / Requirement */}
            <div>
                <label htmlFor="contact-message" className="label-sacs">
                    Requirement Details / Message <span className="text-[#A34354]">*</span>
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project, facility location, NOC requirement, or any specific query..."
                    className="input-sacs resize-none"
                />
            </div>

            {/* Privacy notice and submit button */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[12px] text-gray-500 leading-normal max-w-sm">
                    We respect your privacy. Information shared is confidential and used only to evaluate your enquiry.
                </p>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto self-start sm:self-auto cursor-pointer"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
