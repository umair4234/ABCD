
import React from 'react';
import { Zap, HardDrive, Cpu, Wifi, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const DownloadPage: React.FC = () => {
    const paymentLink = "https://www.paypal.com/ncp/payment/KVHMQQPHD8U9Q";

    return (
        <div className="bg-white py-20 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Purchase Your PixPilot Lifetime License</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        One-time payment of $27 for unlimited access. You will be redirected to the download link after successful payment.
                    </p>
                    
                    <div className="mt-12">
                        <a 
                            href={paymentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-brand-violet text-white font-semibold py-4 px-10 rounded-lg shadow-lg hover:bg-violet-700 transition-all duration-300 text-xl"
                        >
                            <Zap size={24} />
                            Buy Now - $27
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
                                    <span><strong>RAM:</strong> 4GB minimum (8GB recommended)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Wifi className="w-6 h-6 text-brand-violet flex-shrink-0 mt-1" />
                                    <span><strong>Connection:</strong> Active internet for model calls</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Quick Start Guide</h2>
                            <ol className="mt-6 space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span><strong>Download:</strong> Get the `PixPilot.zip` file after purchase.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span><strong>Extract:</strong> Unzip the file to any folder on your computer.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span><strong>Launch:</strong> Double-click `PixPilot.exe` to run the app (no installation needed!).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span><strong>Generate:</strong> Start with the Free model or add a Runware API key for premium quality.</span>
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
