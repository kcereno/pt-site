import PageHeadingBanner from '@/components/Page/PageHeadingBanner';
import Link from 'next/link';
import React from 'react';

const InsurancePage = () => {
  const insurance = [
    'All No-Fault or Car Accident Insurances',
    'All Workers’ Compensation Insurances',
    'Medicare',
    'UnitedHealthCare',
    'BlueCross BlueShield',
    'HealthFirst',
    'MetroPlus',
    'Cigna',
    '1199SEIU Benefit Fund',
    'Aetna',
    'PPOs',
    'CASH',
  ];

  return (
    <section>
      <PageHeadingBanner
        title="Insurance"
        subtext="We accept most major insurance plans."
      />

      <div className="py-10 container-fluid">
        {/* Know Your Insurance */}
        <div>
          <h3>
            Know Your <span className="bold-heading">Insurance</span>
          </h3>
          <p className="mt-5 text-gray">
            We accept most of the insurances. The following are the ones we most
            often take.
          </p>

          <ul className="mt-5 list-disc list-inside text-gray lg:grid-cols-2">
            {insurance.map((ins) => (
              <li key={ins}>{ins}</li>
            ))}
          </ul>
          <p className="mt-5 text-gray">
            Please call{' '}
            <Link
              href="tel:7182744400"
              className="font-bold text-secondary text-md"
            >
              718-274-4400
            </Link>{' '}
            to confirm your insurance and the benefits. We will verify if you
            have a deductible, copay, or reach maximum benefits.
          </p>
        </div>

        <div className="my-5 divider"></div>
        {/* Deductible */}
        <div>
          <h3>
            What is a <span className="bold-heading">Deductible</span>?
          </h3>
          <p className="mt-3">
            You are responsible for the deductible. This amount is what you pay
            first before your insurance benefit kicks in. Shall we say yours is
            $1000? When you go to doctors’ visits, your payment adds up until
            you reach that amount. Only then insurance starts to cover the
            expenses.
          </p>
        </div>

        <div className="my-5 divider"></div>
        {/* Copay */}
        <div>
          <h3>
            What is a <span className="bold-heading">Co-Pay</span>?
          </h3>
          <p className="mt-3">
            A co-pay is the amount you pay in part because your insurance
            doesn’t cover the total amount. It may be in percentage or amount
            specified by your insurance.
          </p>
        </div>

        <div className="my-5 divider"></div>
        {/* with insurance */}
        <div>
          <h3>
            What is the fee for a session{' '}
            <span className="bold-heading">with insurance</span>?
          </h3>
          <p className="mt-3">
            We have a contract with most of the insurances. They have their
            setup fee, which we agreed to accept. In each session, this is the
            amount you and your insurance payments in total. Shall we say your
            insurance pays $60 for each visit. They will only pay this amount
            for any services given. If your co-pay is $40, insurance pays only
            $20.
          </p>
        </div>
        <div className="my-5 divider"></div>
        {/* without insurance */}
        <div>
          <h3>
            What is the fee for a session{' '}
            <span className="bold-heading">without insurance</span>?
          </h3>
          <p className="mt-3">
            We have our fee for each service. Our regular charge is $100 for the
            initial check-up, and a follow-up visit is $70, depending on the
            services given. We also offer packages and promotions. Please call{' '}
            <Link
              href="tel:7182744400"
              className="font-bold text-secondary text-md"
            >
              718-274-4400
            </Link>{' '}
            for inquiries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsurancePage;
