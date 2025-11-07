
import React from 'react';

const RefundPage: React.FC = () => {
    return (
        <div className="bg-white py-20">
            <div className="prose prose-lg max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1>Refund Policy</h1>
                <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
                
                <h2>Lifetime Deal Refunds</h2>
                <p>We want you to be satisfied with your purchase of PixPilot. We offer a 14-day, no-questions-asked refund policy for all lifetime deal purchases.</p>
                
                <h2>How to Request a Refund</h2>
                <p>To request a refund, please contact us at support@pixpilot.com within 14 days of your purchase. Please include your order number or the email address you used to purchase the license.</p>
                <p>Refunds will be processed within 5-7 business days and will be credited back to your original method of payment.</p>
                
                <h2>Late or Missing Refunds</h2>
                <p>If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, as it may take some time before your refund is officially posted. If you’ve done all of this and you still have not received your refund, please contact us at support@pixpilot.com.</p>
                
                <h2>Questions</h2>
                <p>If you have any questions concerning our refund policy, please contact us at support@pixpilot.com.</p>
            </div>
        </div>
    );
};

export default RefundPage;
