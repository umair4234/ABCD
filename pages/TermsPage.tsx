
import React from 'react';

const TermsPage: React.FC = () => {
    return (
        <div className="bg-white py-20">
            <div className="prose prose-lg max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1>Terms of Service</h1>
                <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

                <h2>1. Agreement to Terms</h2>
                <p>By downloading, installing, or using the PixPilot application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>

                <h2>2. License</h2>
                <p>PixPilot grants you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal and commercial purposes, subject to these Terms.</p>

                <h2>3. User Responsibilities</h2>
                <ul>
                    <li>You are responsible for the prompts you provide and the content you generate. You agree not to use the App to create any content that is illegal, harmful, or infringes on the rights of others.</li>
                    <li>If you use your own API key, you are responsible for complying with the Terms of Service of the API provider (e.g., OpenAI, Stability AI, etc.). PixPilot is not responsible for any violations of third-party terms.</li>
                    <li>You are responsible for securing your own API keys.</li>
                </ul>

                <h2>4. Ownership of Generated Content</h2>
                <p>You own the rights to the images you generate, subject to the terms of your API provider. PixPilot claims no ownership over the content you create.</p>

                <h2>5. Disclaimer of Warranties</h2>
                <p>The App is provided "as is," without warranty of any kind. We do not warrant that the App will meet your requirements or that its operation will be uninterrupted or error-free.</p>
                
                <h2>6. Limitation of Liability</h2>
                <p>In no event shall PixPilot be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of the use of or inability to use the App.</p>
                
                <h2>7. Changes to Terms</h2>
                <p>We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website. Your continued use of the App after any such change constitutes your acceptance of the new Terms.</p>
            </div>
        </div>
    );
};

export default TermsPage;
