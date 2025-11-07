
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const footerLinks = [
    { name: 'Download', path: '/download' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
    { name: 'Refund', path: '/refund' },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-100 border-t border-slate-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                     <div className="flex justify-center items-center gap-2 text-2xl font-bold text-slate-900">
                        <Zap className="w-7 h-7 text-brand-violet" />
                        PixPilot
                    </div>
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
                        {footerLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="text-base text-slate-600 hover:text-brand-violet">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <p className="text-center text-sm text-slate-500">
                        Please follow your model/API provider’s Terms of Service.
                    </p>
                    <p className="text-center text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} PixPilot. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
