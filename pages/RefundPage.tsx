import React from 'react';
import { Link } from 'react-router-dom';

const RefundPage: React.FC = () => {
    return (
        <div className="page-content">
            <div className="container">
                <div className="prose">
                    <h1>Refund Policy</h1>
                    <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
                    
                    <h2>All Sales Are Final</h2>
                    <p>Due to the nature of PixPilot being a digital product that is delivered instantly upon purchase, we have a strict <strong>no refund policy</strong>.</p>
                    <p>Once you have downloaded the software, we are unable to revoke your access or verify that it has been uninstalled from your system. This policy is in place to protect our intellectual property and prevent fraud. We thank you for your understanding.</p>
                    
                    <h2>Make an Informed Decision</h2>
                    <p>We encourage you to review all available information on our website before making a purchase to ensure PixPilot is the right fit for your needs:</p>
                    <ul>
                        <li>Watch the video demo on our <Link to="/">homepage</Link>.</li>
                        <li>Read through the features and capabilities.</li>
                        <li>Check the <Link to="/faq">FAQ page</Link> for answers to common questions.</li>
                    </ul>
                    
                    <h2>Questions</h2>
                    <p>If you have any questions about PixPilot before purchasing, or if you encounter any technical issues after your purchase, please don't hesitate to contact us. We are here to help.</p>
                    <p>Please contact us at <a href="mailto:umairdildar02@gmail.com">umairdildar02@gmail.com</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default RefundPage;