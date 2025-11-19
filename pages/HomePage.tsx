import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import HowItWorksSection from '../components/HowItWorksCarousel'; // Using the new tabbed component
import { Layers, Zap, Award, Crop, RefreshCcw, ShieldCheck, DownloadCloud } from 'lucide-react';

const features = [
  { icon: <Layers />, title: "Free & Premium", description: "Unlimited generations with the built-in free model. Or attach a Runware key for 10x speed." },
  { icon: <Zap />, title: "Blazing Fast", description: "Premium models generate images in 5-15 seconds. Bulk process 1000s of prompts while you sleep." },
  { icon: <Award />, title: "High Fidelity", description: "Support for Flux Dev/Schnell models ensures professional-grade details and coherence." },
  { icon: <Crop />, title: "Aspect Ratios", description: "Generate in 16:9, 9:16, 1:1, or 4:3. Perfect for social media, wallpapers, or assets." },
  { icon: <RefreshCcw />, title: "Smart Retry", description: "Failed generations? One click to retry just the failed ones. No waste." },
  { icon: <DownloadCloud />, title: "Portable App", description: "No installer. No dependencies. Just unzip and run PixPilot.exe." },
];

const comparisonData = [
    { service: 'PixPilot (with Runware)', cost: '$0.003', value: '300+ imgs/$1' },
    { service: 'PixPilot (Free Model)', cost: '$0.00', value: 'Unlimited' },
    { service: 'Midjourney', cost: '$0.05', value: '20 imgs/$1' },
    { service: 'Leonardo AI', cost: '$0.018', value: '55 imgs/$1' },
];

const HomePage: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
          padding: '120px 0 60px', 
          textAlign: 'center', 
          background: 'radial-gradient(circle at 50% 0%, #1e1b4b 0%, #050507 60%)',
          overflow: 'hidden'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ 
                display: 'inline-block', 
                padding: '6px 16px', 
                background: 'rgba(99, 102, 241, 0.1)', 
                color: 'var(--primary)', 
                borderRadius: '50px', 
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '24px',
                border: '1px solid rgba(99, 102, 241, 0.2)'
            }}>
              v2.0 Now Available — Unlimited Free Generation
            </span>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '24px', lineHeight: 1.1 }}>
              Bulk Generate AI Images.<br />
              <span className="text-gradient">On Autopilot.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px' }}>
              The ultimate Windows desktop app for mass image generation. Paste prompts, click generate, walk away.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/download" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                Get PixPilot Lifetime - $27
              </Link>
              <button onClick={() => scrollToSection('how-it-works')} className="btn btn-secondary">
                See How It Works
              </button>
            </div>
          </motion.div>

          {/* Hero Image with 3D Tilt */}
          <motion.div 
            initial={{ opacity: 0, rotateX: 20, y: 50 }}
            animate={{ opacity: 1, rotateX: 10, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ 
                marginTop: '80px', 
                perspective: '2000px',
                display: 'flex',
                justifyContent: 'center'
            }}
          >
            <div style={{
                transform: 'rotateX(15deg)',
                borderRadius: '12px',
                boxShadow: '0 0 100px rgba(99, 102, 241, 0.15), 0 20px 40px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden',
                maxWidth: '1000px'
            }}>
                <img src="https://i.ibb.co/4ZjxhcVX/5-Full-interface.png" alt="PixPilot Interface" style={{ width: '100%', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Demo Section */}
      <AnimatedSection className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
            <div className="text-center" style={{ marginBottom: '40px' }}>
                <h2>See PixPilot in Action</h2>
                <p className="text-muted mt-4" style={{ maxWidth: '600px', margin: '16px auto 0' }}>
                    Watch how PixPilot turns a simple list of prompts into a folder full of AI-generated images, completely on autopilot.
                </p>
            </div>
            
            <div style={{ 
                maxWidth: '900px', 
                margin: '0 auto', 
                borderRadius: '16px', 
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '1px solid var(--border-color)',
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                height: 0,
                background: '#000'
            }}>
                <iframe 
                    src="https://www.youtube.com/embed/3hzJsjjMKVg" 
                    title="PixPilot Demo"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                ></iframe>
            </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection id="how-it-works" className="section" style={{ background: 'var(--bg-body)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2>How It Works</h2>
            <p className="text-muted mt-4">Stop generating one by one. Batch process your ideas.</p>
          </div>
          <HowItWorksSection />
        </div>
      </AnimatedSection>

      {/* Features Grid */}
      <AnimatedSection className="section">
        <div className="container">
            <div className="text-center" style={{ marginBottom: '60px' }}>
                <h2>Power User Features</h2>
                <p className="text-muted mt-4">Everything you need for serious AI art production.</p>
            </div>
            <div className="grid-3">
                {features.map((f, i) => (
                    <div key={i} className="card">
                        <div style={{ color: 'var(--primary)', marginBottom: '20px' }}>
                            {React.cloneElement(f.icon as React.ReactElement<any>, { size: 32 })}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{f.title}</h3>
                        <p className="text-muted">{f.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </AnimatedSection>

      {/* Comparison Table */}
      <AnimatedSection className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
            <div className="text-center" style={{ marginBottom: '60px' }}>
                <h2>Unbeatable Value</h2>
                <p className="text-muted mt-4">Bring your own key (BYOK) means you pay wholesale prices.</p>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--bg-body)', borderRadius: '16px', padding: '2px', border: '1px solid var(--border-color)' }}>
                 <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '20px', borderBottom: '1px solid var(--border-color)', fontWeight: 600, color: 'var(--text-muted)' }}>
                     <div>Provider</div>
                     <div>Cost / Image</div>
                     <div>Efficiency</div>
                 </div>
                 {comparisonData.map((row, i) => (
                     <div key={i} style={{ 
                         display: 'grid', 
                         gridTemplateColumns: '2fr 1fr 1fr', 
                         padding: '20px', 
                         borderBottom: i === comparisonData.length - 1 ? 'none' : '1px solid var(--border-color)',
                         alignItems: 'center'
                     }}>
                         <div style={{ color: i < 2 ? 'var(--primary)' : 'white', fontWeight: i < 2 ? 600 : 400 }}>
                            {row.service} {i === 0 && <span style={{ fontSize: '0.7em', background: 'var(--primary)', color: 'white', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px' }}>RECOMMENDED</span>}
                         </div>
                         <div className="text-muted">{row.cost}</div>
                         <div className="text-muted">{row.value}</div>
                     </div>
                 ))}
            </div>
            <p className="text-center text-muted mt-4" style={{ fontSize: '0.9rem' }}>
                * Prices based on standard resolution. PixPilot takes 0% commission on API usage.
            </p>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section">
        <div className="container text-center">
            <div style={{ 
                background: 'linear-gradient(180deg, var(--bg-surface-hover) 0%, var(--bg-surface) 100%)', 
                padding: '80px 20px', 
                borderRadius: '24px', 
                border: '1px solid var(--border-color)',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Start Generating Today</h2>
                <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
                    Join smart creators who save time and money with PixPilot.
                </p>
                <Link to="/download" className="btn btn-primary" style={{ padding: '18px 48px', fontSize: '1.2rem' }}>
                    Buy Lifetime License - $27
                </Link>
                <p style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Windows 10/11 (64-bit) • Instant Download
                </p>
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;