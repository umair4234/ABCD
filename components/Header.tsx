import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Download', path: '/download' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                        <Zap className="w-7 h-7 text-brand-violet" />
                        PixPilot
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-lg font-medium transition-colors duration-200 ${
                                        isActive ? 'text-brand-violet' : 'text-slate-600 hover:text-brand-violet'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="hidden md:block">
                        <Link
                            to="/download"
                            className="inline-block bg-brand-violet text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-violet-700 transition-colors duration-300"
                        >
                            Download Now
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-brand-violet">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white pb-4">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block w-full text-center px-3 py-2 rounded-md text-base font-medium ${
                                        isActive ? 'bg-violet-100 text-brand-violet' : 'text-slate-600 hover:bg-slate-100'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                         <Link
                            to="/download"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 w-full text-center bg-brand-violet text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-violet-700 transition-colors duration-300"
                        >
                            Download Now
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;