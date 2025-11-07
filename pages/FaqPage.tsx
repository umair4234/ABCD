
import React from 'react';
import FaqItem from '../components/FaqItem';
import AnimatedSection from '../components/AnimatedSection';

const faqs = [
  {
    question: 'Do I need my own API key?',
    answer: 'No, it\'s not required. PixPilot comes with an internal key for you to get started right away. However, for faster and more consistent generation, we recommend adding your own API key from your preferred provider in the app settings.'
  },
  {
    question: 'Is Mac or Linux supported?',
    answer: 'Currently, PixPilot is a Windows-only application (compatible with Windows 10 and 11, 64-bit). We are exploring the possibility of cross-platform support in the future based on user demand.'
  },
  {
    question: 'Is it really unlimited?',
    answer: 'Yes, from our side! PixPilot does not impose any generation limits. Your ability to generate is only limited by the fair use policies and Terms of Service of the AI model provider whose API key you are using.'
  },
  {
    question: 'Where do the generated images save?',
    answer: 'You have full control. In the application settings, you can choose any folder on your computer as the output directory. All generated images will be saved there.'
  },
  {
    question: 'What image generation models are supported?',
    answer: 'PixPilot is designed to be flexible. We support major image generation APIs. You can check the in-app documentation for a complete, up-to-date list of compatible providers.'
  },
  {
    question: 'Can I use it commercially?',
    answer: 'The rights to the images you create are generally determined by the Terms of Service of the AI model provider. PixPilot grants you non-exclusive rights, but you should always review your provider\'s TOS for commercial use specifics.'
  }
];

const FaqPage: React.FC = () => {
    return (
        <div className="bg-white py-20 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Find answers to common questions about PixPilot.
                    </p>
                </AnimatedSection>
                
                <AnimatedSection className="mt-16">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        {faqs.map((faq, index) => (
                            <FaqItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default FaqPage;
