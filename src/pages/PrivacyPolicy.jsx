import React, { useEffect } from 'react';
import { businessConfig } from '../config/business';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-24 pb-xl bg-surface min-h-screen">
      <div className="max-w-[800px] mx-auto px-margin-mobile lg:px-gutter">
        <h1 className="font-headline-md text-headline-lg text-primary mb-lg">Privacy Policy</h1>
        
        <div className="space-y-6 text-on-surface-variant font-body-md">
          <p>
            Welcome to {businessConfig.businessName}. This Privacy Policy explains how we collect, use, and protect your information when you visit our website and use our services.
          </p>

          <section>
            <h2 className="font-headline-md text-body-lg text-primary mb-xs">1. Information We Collect</h2>
            <p>
              When you request a quote or contact us, we collect the following personal information:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Delivery Location/Address</li>
              <li>Material Requirements and other relevant details</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md text-body-lg text-primary mb-xs">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Provide you with accurate price estimates (quotes)</li>
              <li>Process and manage your material orders</li>
              <li>Coordinate and fulfill delivery to your specified location</li>
              <li>Communicate with you regarding your order or any support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md text-body-lg text-primary mb-xs">3. Data Sharing and Security</h2>
            <p>
              We respect your privacy. Your personal information is never sold to third parties for marketing purposes. We only share necessary details (such as your phone number and delivery location) with our internal team and drivers strictly for the purpose of fulfilling your delivery. We implement basic security measures to protect your data from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-body-lg text-primary mb-xs">4. Cookies</h2>
            <p>
              Our website may use basic cookies to enhance your browsing experience and analyze website traffic. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-body-lg text-primary mb-xs">5. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-2">
              <strong>Phone:</strong> {businessConfig.phone}<br />
              <strong>Email:</strong> {businessConfig.email}<br />
              <strong>Address:</strong> {businessConfig.address}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
