import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const steps = [
  {
    imgSrc: "https://i.ibb.co/wZC4XgFD/1-Enter-prompts.png",
    title: "1. Enter Prompts",
    text: "Launch PixPilot and switch to Bulk Mode. Paste your prompts, one per line. No limit on the number of prompts."
  },
  {
    imgSrc: "https://i.ibb.co/qYP5gmZ5/2-Select-folder-and-click-generate.png",
    title: "2. Choose Output",
    text: "Select where you want your images to be saved. Configure aspect ratios and model settings."
  },
  {
    imgSrc: "https://i.ibb.co/zTmLK1qz/6-Add-API-key.png",
    title: "3. Optional API Key",
    text: "Use the free built-in model or add a Runware API key for high-speed, premium generation."
  },
  {
    imgSrc: "https://i.ibb.co/Kpkr2dKC/3-Generation-progress.png",
    title: "4. Generate",
    text: "Click Generate and watch PixPilot work through your queue. Runs entirely in the background."
  },
  {
    imgSrc: "https://i.ibb.co/j9JmhVbq/4-Preview-images.png",
    title: "5. Preview Results",
    text: "Images appear instantly in the preview pane as they complete. Open them directly from the app."
  },
  {
    imgSrc: "https://i.ibb.co/4ZjxhcVX/5-Full-interface.png",
    title: "6. Full Control",
    text: "Manage your gallery, regenerate specific prompts, and streamline your workflow."
  }
];

const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (!isInView || isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView, isPaused]);

  return (
    <div 
      ref={containerRef} 
      style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
          alignItems: 'start' 
      }}>
        {/* Left: Step List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              style={{
                textAlign: 'left',
                padding: '20px',
                borderRadius: '12px',
                background: activeStep === index ? 'var(--bg-surface-hover)' : 'transparent',
                border: `1px solid ${activeStep === index ? 'var(--border-color)' : 'transparent'}`,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <h3 style={{ 
                  color: activeStep === index ? 'var(--primary)' : 'var(--text-main)',
                  marginBottom: '8px',
                  fontSize: '1.1rem'
                }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {step.text}
                </p>
              </div>
              {activeStep === index && (
                <div style={{ position: 'relative' }}>
                  <ChevronRight size={20} color="var(--primary)" />
                  {/* Simple progress indicator for the active step */}
                  {!isPaused && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3, ease: "linear" }}
                      style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: 0,
                        height: '2px',
                        background: 'var(--primary)',
                        borderRadius: '2px',
                        opacity: 0.5
                      }}
                    />
                  )}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Right: Image Preview */}
        <div style={{ position: 'relative', minHeight: '400px' }}>
           <div style={{ 
               position: 'sticky', 
               top: '100px',
               background: 'var(--bg-surface)',
               padding: '10px',
               borderRadius: '16px',
               border: '1px solid var(--border-color)',
               boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
           }}>
             <AnimatePresence mode="wait">
                <motion.img
                    key={activeStep}
                    src={steps[activeStep].imgSrc}
                    alt={steps[activeStep].title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        width: '100%',
                        borderRadius: '8px',
                        display: 'block'
                    }}
                />
             </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;