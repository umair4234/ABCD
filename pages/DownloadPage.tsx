import React from 'react';
import { Zap, HardDrive, Cpu, Wifi, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const DownloadPage: React.FC = () => {
    const paymentLink = "https://www.paypal.com/ncp/payment/KVHMQQPHD8U9Q";

    return (
        <div className="page-content">
            <div className="container">
                <AnimatedSection className="text-center" style={{ marginBottom: '80px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Get PixPilot Lifetime</h1>
                    <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
                        One-time payment. Unlimited access. No monthly fees.
                    </p>
                    
                    <a 
                        href={paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ fontSize: '1.2rem', padding: '20px 50px' }}
                    >
                        <Zap size={24} />
                        Buy Now - $27
                    </a>
                    <p style={{ marginTop: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        Secure checkout via PayPal. Instant delivery.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                        <div className="card">
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>System Requirements</h2>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--text-muted)' }}>
                                    <HardDrive size={20} color="var(--primary)" />
                                    <span><strong>OS:</strong> Windows 10 / 11 (64-bit)</span>
                                </li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--text-muted)' }}>
                                    <Cpu size={20} color="var(--primary)" />
                                    <span><strong>RAM:</strong> 4GB minimum (8GB recommended)</span>
                                </li>
                                <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: 'var(--text-muted)' }}>
                                    <Wifi size={20} color="var(--primary)" />
                                    <span><strong>Internet:</strong> Required for AI model access</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>What happens next?</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                {[
                                    "Complete payment via PayPal.",
                                    "You'll be redirected to the download page.",
                                    "Unzip the file and run PixPilot.exe.",
                                    "Start generating images immediately."
                                ].map((step, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <CheckCircle size={24} style={{ color: 'var(--success)', flexShrink: 0 }} />
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default DownloadPage;