
import React from 'react';
import { Download, HardDrive, Cpu, Wifi, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const DownloadPage: React.FC = () => {
    return (
        <div className="bg-white py-20 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Get PixPilot for Windows</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Start your bulk image generation journey in minutes.
                    </p>
                    <div className="mt-10">
                        <a 
                            href="https://example.com/pixpilot-installer.exe" // Placeholder Google Drive link
                            className="inline-flex items-center gap-3 bg-brand-violet text-white font-semibold py-4 px-10 rounded-lg shadow-lg hover:bg-violet-700 transition-all duration-300 text-xl"
                        >
                            <Download size={24} />
                            Download .exe
                        </a>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-20">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">System Requirements</h2>
                            <ul className="mt-6 space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <HardDrive className="w-6 h-6 text-brand-violet flex-shrink-0 mt-1" />
                                    <span><strong>OS:</strong> Windows 10 / 11 (64-bit)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Cpu className="w-6 h-6 text-brand-violet flex-shrink-0 mt-1" />
                                    <span><strong>Processor:</strong> Modern CPU recommended</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Wifi className="w-6 h-6 text-brand-violet flex-shrink-0 mt-1" />
                                    <span><strong>Connection:</strong> Active internet for model/API calls</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Quick Start Guide</h2>
                            <ol className="mt-6 space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span><strong>Install:</strong> Run the downloaded installer.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span><strong>Prompts:</strong> Paste or import your line-separated prompts.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span><strong>Generate:</strong> Click the "Generate Images" button.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span><strong>Collect:</strong> Check your chosen output folder for results.</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default DownloadPage;
