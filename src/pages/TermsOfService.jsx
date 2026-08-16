import React, { useEffect } from 'react';
import { businessConfig } from '../config/business';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-24 pb-xl bg-surface min-h-screen">
      <div className="max-w-[800px] mx-auto px-margin-mobile lg:px-gutter">
        <h1 className="font-headline-md text-headline-lg text-primary mb-lg">Terms of Service</h1>
        
        <div className="space-y-6 text-on-surface-variant font-body-md">
          <p>
            These Terms of Service govern your use of the {businessConfig.businessName} website and the purchase and delivery of our construction materials. By requesting a quote or placing an order, you agree to these terms.
          </p>

          <section>
            <h2 className="font-headline-md text-body-lg text-primary mb-xs">1. Quotes and Pricing</h2>
            <p>
              Any quote requested through our website is an estimate based on the information provided. Final prices may vary depending on current market rates, transportation costs, and material availability. The final price will be confirmed with you before the order is processed.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-body-lg text-primary mb-xs">2. Delivery Policy</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Time:</strong> Delivery times provided are estimates. Delays may occur due to traffic, weather conditions, or unforeseen circumstances.</li>
              <li><strong>Access:</strong> It is the customer's responsibility to ensure that the delivery location has a clear and safe access path for heavy transport vehicles (trucks/tippers). If the vehicle cannot safely access the site, the material may need to be unloaded at the nearest safe point.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md text-body-lg text-primary mb-xs">3. Inspection and Returns</h2>
            <p>
              Customers must inspect the materials upon arrival, <strong>before unloading</strong>. Once bulk materials (like sand or aggregate) are tipped/unloaded, or packaged materials (like cement) are delivered, returns or replacements cannot be processed. If you are unsatisfied with the quality, you must reject the load before it is unloaded.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-body-lg text-primary mb-xs">4. Payment Terms</h2>
            <p>
              Payment must be made according to the agreed terms at the time of order confirmation. We accept Cash, UPI, or Bank Transfer as discussed and approved by our team.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-body-lg text-primary mb-xs">5. Damage Liability</h2>
            <p>
              If a customer instructs our drivers to navigate narrow passages, unpaved roads, or personal property (such as tiled pavements or driveways), any resulting damage to the property is the sole responsibility of the customer. {businessConfig.businessName} will not be held liable for damages caused during delivery on the customer's instruction.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-body-lg text-primary mb-xs">6. Governing Law</h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of Hamirpur, Himachal Pradesh, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
