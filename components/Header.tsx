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
        <header className="site-header">
            <div className="container header-inner">
                <Link to="/" className="logo" style={{ color: 'var(--text-main)' }}>
                    <Zap size={24} color="var(--primary)" fill="var(--primary)" />
                    PixPilot
                </Link>
                
                <nav className="nav-desktop">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="header-cta">
                    <Link to="/download" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                        Download Now
                    </Link>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-btn">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                            style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'var(--text-muted)' })}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div style={{ marginTop: '20px' }}>
                        <Link
                            to="/download"
                            onClick={() => setIsOpen(false)}
                            className="btn btn-primary"
                            style={{ width: '100%' }}
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