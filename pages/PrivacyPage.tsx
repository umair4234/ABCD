
import React from 'react';

const PrivacyPage: React.FC = () => {
    return (
        <div className="bg-white py-20">
            <div className="prose prose-lg max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1>Privacy Policy</h1>
                <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
                
                <h2>1. Introduction</h2>
                <p>Welcome to PixPilot. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our Windows application ("App") and our website ("Site"). As PixPilot is a local-first application, our data collection is minimal.</p>

                <h2>2. Information We Do Not Collect</h2>
                <p>PixPilot is designed to run locally on your computer. We do not collect, store, or have access to:</p>
                <ul>
                    <li>The prompts you enter into the application.</li>
                    <li>The images you generate using the application.</li>
                    <li>Your API keys, which are stored encrypted on your local machine.</li>
                    <li>Any personal files or data on your computer outside of the application's own settings files.</li>
                </ul>

                <h2>3. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                    <li><strong>Anonymous Usage Data:</strong> We may collect anonymous, aggregated data about application usage to help us understand how our App is being used and to identify areas for improvement. This may include information like application version, operating system, and feature usage frequency. This data is not linked to any personal identifiers.</li>
                    <li><strong>Contact Information:</strong> If you contact us for support via email or other channels, we will collect your name, email address, and any other information you provide in your correspondence.</li>
                </ul>

                <h2>4. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide, maintain, and improve our App and Site.</li>
                    <li>Respond to your comments, questions, and support requests.</li>
                    <li>Communicate with you about product updates, and other news about PixPilot.</li>
                </ul>
                
                <h2>5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at support@pixpilot.com.</p>
            </div>
        </div>
    );
};

export default PrivacyPage;
