
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import HowItWorksCarousel from '../components/HowItWorksCarousel';
import { Layers, Zap, Award, Crop, RefreshCcw, DownloadCloud, ShieldCheck, UserCheck, Clock, Sparkles } from 'lucide-react';

const features = [
  { icon: <Layers size={32} />, title: "Free & Premium Models", description: "Use the built-in free model for unlimited tests, or add your Runware API key for high-speed, premium quality generation." },
  { icon: <Zap size={32} />, title: "10-20x Faster Generation", description: "Premium models generate images in 5-15 seconds, a massive speed boost over the free model's 30-60 seconds." },
  { icon: <Award size={32} />, title: "Superior Image Quality", description: "Unlock maximum detail and realism with Runware's Flux Dev model, perfect for professional work and final outputs." },
  { icon: <Crop size={32} />, title: "Multiple Aspect Ratios", description: "Create images in various formats including 16:9, 9:16, 1:1, and 4:3 to fit any project's needs." },
  { icon: <RefreshCcw size={32} />, title: "Smart Regeneration", description: "Easily regenerate any failed images individually or all at once, ensuring you never lose a part of your batch." },
  { icon: <DownloadCloud size={32} />, title: "No Installation Needed", description: "PixPilot is a standalone app. Just download, extract, and run. No complex setup or dependencies required." },
];

const comparisonData = [
    { service: 'Runware Flux Schnell (Fast)', cost: '$0.0032', value: '≈ 313 images per $1' },
    { service: 'Runware Flux Dev (High Quality)', cost: '$0.0064', value: '≈ 156 images per $1' },
    { service: 'Leonardo AI (API)', cost: '≈ $0.018 per image', value: '≈ 55 images per $1' },
    { service: 'Midjourney (Standard Estimate)', cost: '≈ $0.033–$0.05 per image', value: '≈ 20–30 images per $1' },
];

const HomePage: React.FC = () => {

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

  const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-start gap-4"
      whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-violet-100 text-brand-violet p-3 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  );

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-slate-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 custom={0} initial="hidden" animate="visible" variants={heroVariants} className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Generate unlimited AI images in bulk.
          </motion.h1>
          <motion.p custom={1} initial="hidden" animate="visible" variants={heroVariants} className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600">
            Now with both a Free, unlimited model and support for high-speed, premium models. Paste prompts. Click Generate. Watch hundreds of images appear—fast.
          </motion.p>
          <motion.div custom={2} initial="hidden" animate="visible" variants={heroVariants} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/download" className="inline-block bg-brand-violet text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-violet-700 transition-all duration-300 text-lg">
              Get Lifetime Deal - $27
            </Link>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleScroll(e, 'how-it-works')}
              className="inline-block bg-white text-slate-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-slate-200 transition-all duration-300 ring-1 ring-slate-300 text-lg"
            >
              See How It Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* How it Works Carousel */}
      <AnimatedSection id="how-it-works" className="py-20 md:py-24 bg-slate-900 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How PixPilot Works</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">
              From prompt to hundreds of images in just a few clicks.
            </p>
          </div>
          <HowItWorksCarousel />
        </div>
      </AnimatedSection>

      {/* Video Demo Section */}
      <AnimatedSection className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            See PixPilot in Action
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Watch how PixPilot turns a simple list of prompts into a folder full of AI-generated images, completely on autopilot.
          </p>
          <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <div className="aspect-video bg-slate-900">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3hzJsjjMKVg?si=i2tYEVKtFDmcgtp-&autoplay=0&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Cost & Value Comparison */}
      <AnimatedSection className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 flex items-center justify-center gap-3">
                    <Sparkles className="w-8 h-8 text-brand-violet" />
                    Cost & Value Comparison
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                    With PixPilot's Bring-Your-Own-Key model, you get access to premium generation at a fraction of the cost of other services.
                </p>
            </div>
            <div className="mt-12 bg-slate-900 text-white rounded-2xl shadow-2xl p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4 text-left font-semibold text-slate-400 border-b border-slate-700 pb-4">
                    <h3>Model / Service</h3>
                    <h3>Cost per Image <span className="text-slate-500">(≈ 1024x1024)</span></h3>
                    <h3>Images per $1</h3>
                </div>
                {comparisonData.map((item) => (
                    <div key={item.service} className="grid grid-cols-3 gap-4 text-left py-4 border-b border-slate-800 last:border-b-0 items-center">
                        <p className="font-semibold text-white">{item.service}</p>
                        <p className="text-slate-300">{item.cost}</p>
                        <p className="text-slate-300">{item.value}</p>
                    </div>
                ))}
            </div>
            <p className="text-center text-sm text-slate-500 mt-4">Note: Costs are for using your own Runware API key and are subject to Runware's pricing. PixPilot does not charge for generation.</p>
        </div>
      </AnimatedSection>

      {/* Key Features */}
      <AnimatedSection className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">PixPilot 2.0: More Power, More Flexibility</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Trust & Clarity */}
      <AnimatedSection className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trust & Security</h2>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-3">
                <ShieldCheck size={32} className="text-brand-violet" />
                <h3 className="text-xl font-bold text-slate-900">100% Local & Private</h3>
                <p className="text-slate-600">Your prompts, images, and API keys never leave your PC. Keys are stored locally and encrypted.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-3">
                <UserCheck size={32} className="text-brand-violet" />
                <h3 className="text-xl font-bold text-slate-900">No Account Required</h3>
                <p className="text-slate-600">Download, extract, and start generating immediately. No sign-up or tracking.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-3">
                <Clock size={32} className="text-brand-violet" />
                <h3 className="text-xl font-bold text-slate-900">Work in the Background</h3>
                <p className="text-slate-600">Keep using your computer while PixPilot renders your image queue without interruption.</p>
              </div>
           </div>
        </div>
      </AnimatedSection>
      
      {/* FAQ Teaser */}
      <AnimatedSection className="py-12 text-center">
        <p className="text-lg text-slate-600">
          Have more questions? Check out our <Link to="/faq" className="text-brand-violet font-semibold hover:underline">full FAQ page</Link>.
        </p>
      </AnimatedSection>

      {/* Final CTA */}
      <section className="bg-brand-violet">
        <div className="max-w-4xl mx-auto text-center py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white">Ready to generate at scale?</h2>
          <div className="mt-8">
            <Link to="/download" className="inline-block bg-white text-brand-violet font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-slate-200 transition-all duration-300 text-lg">
              Get PixPilot - $27
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;