import React from 'react';
import { Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
    return (
        <div className="page-content">
            <div className="container">
                <AnimatedSection className="text-center" style={{ marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem' }}>Get in Touch</h1>
                    <p className="text-muted mt-4">We'd love to hear from you.</p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="card" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '60px 40px' }}>
                        <Mail size={48} color="var(--primary)" style={{ margin: '0 auto 24px' }} />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Email Support</h2>
                        <p className="text-muted" style={{ marginBottom: '24px' }}>
                            For questions, bug reports, or feedback.
                        </p>
                        <a 
                            href="mailto:umairdildar02@gmail.com"
                            style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: 600 }}
                        >
                            umairdildar02@gmail.com
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ContactPage;