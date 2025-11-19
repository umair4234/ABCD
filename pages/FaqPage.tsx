import React from 'react';
import FaqItem from '../components/FaqItem';
import AnimatedSection from '../components/AnimatedSection';

const faqs = [
  {
    question: "What's new in PixPilot 2.0?",
    answer: 'PixPilot 2.0 introduces a powerful free, built-in model for unlimited image generation. We also added support for premium, high-speed Runware AI models (Flux Schnell & Flux Dev), multiple aspect ratios, smart regeneration for failed images, and made the app a standalone executable—no installation required!'
  },
  {
    question: 'What is the difference between the Free and Paid models?',
    answer: 'The Free model is built-in, requires no API key, and offers unlimited generations. It\'s great for testing and bulk jobs where speed isn\'t critical (30-60s/image). The Paid models (via a Runware API key) are 10-20x faster (5-15s/image), provide superior image quality, and support more features like varied aspect ratios.'
  },
  {
    question: 'Do I need my own API key?',
    answer: 'No, it\'s not required. You can use the built-in Free model forever without an API key. To unlock higher-quality, faster generation, you can optionally add your own API key from Runware AI in the app settings.'
  },
  {
    question: 'How much does the Paid model cost?',
    answer: 'PixPilot itself is a one-time purchase. The paid generation models use a pay-as-you-go system directly with Runware AI. Costs are very low, starting at ~$0.0032 per image. You only pay for what you generate. You can get a free Runware account and API key from their website.'
  },
  {
    question: 'Is any installation required?',
    answer: 'No! PixPilot 2.0 is a standalone application. Simply download the .zip file, extract it to a folder, and double-click PixPilot.exe to run it.'
  },
  {
    question: 'Is Mac or Linux supported?',
    answer: 'Currently, PixPilot is a Windows-only application (compatible with Windows 10 and 11, 64-bit). A macOS build is planned for the future.'
  },
  {
    question: 'Can I use it commercially?',
    answer: 'Yes. The rights to the images you create are determined by the Terms of Service of the AI model provider (either our free model\'s policy or Runware\'s). PixPilot grants you non-exclusive rights, but you should always review the provider\'s TOS for specific commercial use cases.'
  }
];

const FaqPage: React.FC = () => {
    return (
        <div className="page-content">
            <div className="container">
                <AnimatedSection className="text-center" style={{ marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Frequently Asked Questions</h1>
                    <p className="text-muted">
                        Everything you need to know about the product and billing.
                    </p>
                </AnimatedSection>
                
                <AnimatedSection>
                    <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--bg-surface)', padding: '40px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
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