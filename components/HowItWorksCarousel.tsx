
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    imgSrc: "https://i.ibb.co/wZC4XgFD/1-Enter-prompts.png",
    title: "Choose Bulk Image Generator",
    text: "Launch PixPilot and select the Bulk Image Generator option to start creating AI images in bulk."
  },
  {
    imgSrc: "https://i.ibb.co/qYP5gmZ5/2-Select-folder-and-click-generate.png",
    title: "Enter Prompts and Choose Folder",
    text: "Paste or import your prompts (each prompt on a new line), choose your output folder, and pick between Free or Paid models."
  },
  {
    imgSrc: "https://i.ibb.co/zTmLK1qz/6-Add-API-key.png",
    title: "Add API Key (Optional)",
    text: "If you select the paid model, enter your Runware API key for faster generation. Free mode lets you create unlimited images without it."
  },
  {
    imgSrc: "https://i.ibb.co/Kpkr2dKC/3-Generation-progress.png",
    title: "Watch the Progress",
    text: "Once you hit Generate, PixPilot starts processing your prompts. Watch live progress updates in real time."
  },
  {
    imgSrc: "https://i.ibb.co/j9JmhVbq/4-Preview-images.png",
    title: "Preview and Save Your Images",
    text: "As images are generated, they appear in the Preview Area, ready to be saved or opened directly in your folder."
  },
  {
    imgSrc: "https://i.ibb.co/4ZjxhcVX/5-Full-interface.png",
    title: "Full Interface Overview",
    text: "Here’s the full PixPilot interface — clean, fast, and easy to use for bulk AI image creation."
  }
];

const HowItWorksCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, 4000); // Faster autoplay
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const getAnimationProps = (i: number) => {
    const totalSlides = slides.length;
    let offset = i - activeIndex;
    if (offset > totalSlides / 2) offset -= totalSlides;
    if (offset < -totalSlides / 2) offset += totalSlides;
    
    const isVisible = Math.abs(offset) <= 1;

    return {
      x: `${offset * 45}%`,
      scale: offset === 0 ? 1 : 0.8,
      rotateY: offset * -20,
      opacity: isVisible ? 1 : 0,
      zIndex: offset === 0 ? 3 : Math.abs(offset) === 1 ? 2 : 1,
      filter: offset === 0 ? 'blur(0px)' : 'blur(4px)',
      transition: { type: 'spring', stiffness: 260, damping: 25 }, // Faster animation
    };
  };

  return (
    <div 
      className="w-full flex flex-col items-center"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="relative w-full h-80 md:h-[500px]" style={{ perspective: '1200px' }}>
        {slides.map((slide, i) => {
          const animationProps = getAnimationProps(i);
          const totalSlides = slides.length;
          let offset = i - activeIndex;
          if (offset > totalSlides / 2) offset -= totalSlides;
          if (offset < -totalSlides / 2) offset += totalSlides;
          const isVisible = Math.abs(offset) <= 1;

          return (
            <motion.div
              key={i}
              className="absolute w-[80%] md:w-[65%] lg:w-[55%] top-0 left-[10%] md:left-[17.5%] lg:left-[22.5%] rounded-xl shadow-2xl border-4 border-slate-700 overflow-hidden"
              animate={animationProps}
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={animationProps.zIndex === 3 ? { scale: 1.1, transition: { type: 'spring', stiffness: 300 } } : {}}
            >
              <div className="aspect-[16/10] bg-slate-800 flex items-center justify-center">
                <img 
                  src={slide.imgSrc} 
                  alt={slide.title}
                  className="w-full h-full object-contain"
                  loading={isVisible ? 'eager' : 'lazy'}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative w-full text-center mt-12 md:mt-20 h-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Step {activeIndex + 1}: {slides[activeIndex].title}
            </h3>
            <p className="mt-2 max-w-xl mx-auto text-slate-400 px-4">
              {slides[activeIndex].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-3 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${i === activeIndex ? 'bg-brand-violet' : 'bg-slate-500 hover:bg-slate-400'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorksCarousel;