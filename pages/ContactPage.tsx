
import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-white py-20 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Get in Touch</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        We're here to help. Choose your preferred way to contact us.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mt-20">
                    <div className="grid md:grid-cols-2 gap-8">
                        <a 
                            href="https://wa.me/1234567890" // Placeholder WhatsApp link
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <MessageSquare className="mx-auto w-12 h-12 text-green-500" />
                            <h2 className="mt-6 text-2xl font-bold text-slate-900">WhatsApp</h2>
                            <p className="mt-2 text-slate-600">For quick questions and support.</p>
                            <span className="mt-4 inline-block text-brand-violet font-semibold">Chat with us</span>
                        </a>
                        <a 
                            href="mailto:support@pixpilot.com"
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <Mail className="mx-auto w-12 h-12 text-blue-500" />
                            <h2 className="mt-6 text-2xl font-bold text-slate-900">Email</h2>
                            <p className="mt-2 text-slate-600">For detailed inquiries and feedback.</p>
                            <span className="mt-4 inline-block text-brand-violet font-semibold">support@pixpilot.com</span>
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ContactPage;
