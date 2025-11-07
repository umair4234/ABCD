import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Layers, Zap, KeyRound, Infinity, DownloadCloud, Award, ShieldCheck, UserCheck, Clock } from 'lucide-react';

const features = [
  { icon: <Layers size={32} />, title: "Bulk Prompts", description: "Paste or import .txt files. Each line becomes a unique image generation job." },
  { icon: <Zap size={32} />, title: "Queue & Run", description: "Set up your entire batch, click generate, and let PixPilot work in the background." },
  { icon: <KeyRound size={32} />, title: "API-Key Optional", description: "Bring your own API key for faster generation, or use the included internal key." },
  { icon: <Infinity size={32} />, title: "Unlimited Generations", description: "No hard limits. Your only constraint is fair-use policies of your chosen model/API." },
  { icon: <DownloadCloud size={32} />, title: "Windows Installer", description: "A quick and simple setup process gets you running in less than a minute." },
  { icon: <Award size={32} />, title: "Own Your Outputs", description: "You receive non-exclusive rights to all images you generate. Use them anywhere." },
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

  // Fix: Explicitly type FeatureCard as a React Function Component to ensure TypeScript correctly handles the 'key' prop.
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
          <motion.p custom={1} initial="hidden" animate="visible" variants={heroVariants} className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
            Paste prompts. Click Generate. Watch hundreds of images appear—fast.
          </motion.p>
          <motion.div custom={2} initial="hidden" animate="visible" variants={heroVariants} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/download" className="inline-block bg-brand-violet text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-violet-700 transition-all duration-300 text-lg">
              Download for Windows
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

      {/* Problem -> Solution */}
      <AnimatedSection className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Stop creating images one-by-one.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            PixPilot turns a list of prompts into a folder of finished images in minutes.
          </p>
        </div>
      </AnimatedSection>
      
      {/* How it Works */}
      <AnimatedSection id="how-it-works" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">See PixPilot in Action</h2>
             <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
              Watch this quick demo to see how you can go from a list of prompts to a folder full of images in just a few clicks.
            </p>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative aspect-video w-full rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/3hzJsjjMKVg"
                    title="How to generate 100s of AI images at once with PixPilot"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
          </div>
          
          <div className="mt-20 grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-violet-100 text-brand-violet rounded-full text-2xl font-bold">1</div>
              <h3 className="mt-6 text-xl font-bold">Paste or Import Prompts</h3>
              <p className="mt-2 text-slate-600">Each line you paste or import from a .txt file becomes a separate prompt.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-violet-100 text-brand-violet rounded-full text-2xl font-bold">2</div>
              <h3 className="mt-6 text-xl font-bold">Click Generate Images</h3>
              <p className="mt-2 text-slate-600">Start the queue and let PixPilot handle the rest, right on your PC.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-violet-100 text-brand-violet rounded-full text-2xl font-bold">3</div>
              <h3 className="mt-6 text-xl font-bold">Collect Your Images</h3>
              <p className="mt-2 text-slate-600">Find all your generated images neatly organized in your chosen output folder.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Performance */}
      <AnimatedSection className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-100 p-10 rounded-2xl">
            <Zap className="mx-auto w-12 h-12 text-brand-violet" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Blazing Fast Performance</h2>
            <p className="mt-4 text-lg text-slate-600">On a typical PC, PixPilot cranks out ~100 images in under 4 minutes.</p>
            <p className="mt-2 text-sm text-slate-500">Actual speed varies by hardware and network conditions.</p>
        </div>
      </AnimatedSection>

      {/* Key Features */}
      <AnimatedSection className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Powerful Features, Simple Interface</h2>
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
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trust & Clarity</h2>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-3">
                <ShieldCheck size={32} className="text-brand-violet" />
                <h3 className="text-xl font-bold text-slate-900">Runs Locally</h3>
                <p className="text-slate-600">Your prompts and images are processed on your PC, not our servers.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-3">
                <UserCheck size={32} className="text-brand-violet" />
                <h3 className="text-xl font-bold text-slate-900">No Account Required</h3>
                <p className="text-slate-600">Download, install, and start generating. No sign-up needed.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center gap-3">
                <Clock size={32} className="text-brand-violet" />
                <h3 className="text-xl font-bold text-slate-900">Work in the Background</h3>
                <p className="text-slate-600">Keep using your computer while PixPilot renders your image queue.</p>
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
              Download PixPilot
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;