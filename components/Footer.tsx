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
        <footer className="site-footer">
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <div className="logo">
                        <Zap size={24} color="var(--primary)" fill="var(--primary)" />
                        PixPilot
                    </div>
                    
                    <nav className="footer-links">
                        {footerLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="footer-link">
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="text-center text-muted" style={{ fontSize: '0.85rem', opacity: 0.7 }}>
                        <p style={{ marginBottom: '8px' }}>Please follow your model/API provider’s Terms of Service.</p>
                        <p>&copy; {new Date().getFullYear()} PixPilot. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;