import PageHeadingBanner from '@/components/Page/PageHeadingBanner';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const NewPatientFormsPage = () => {
  return (
    <section>
      <PageHeadingBanner
        title="New Patient Forms"
        subtext="Please fill out the following forms before your first appointment."
      />
      <div className="py-10 container-fluid">
        <div>
          <p className="text-gray">
            The links below will provide you with our patient forms. You can
            print these out and complete them before you come in for your first
            visit. You will need Adobe Reader to view and print these files.
            Please click on this{' '}
            <Link
              href="https://get.adobe.com/reader/"
              target="_blanks"
              className="font-bold text-secondary"
            >
              link
            </Link>{' '}
            to download and install Adobe Reader if you do not already have it
            installed.
          </p>
        </div>
        <div className="mt-10">
          <h6>New Patient Intake Form</h6>
          <div className="flex flex-col gap-5 mt-5 md:flex-row md:mt-3 ">
            <div className="order-last mt-3 md:order-first md:mt-0 md:w-4/5">
              <p className="text-gray">
                We kindly ask you to complete the New Patient Intake Form,
                providing your personal and insurance information. Your accuracy
                in filling out this form is greatly appreciated.
              </p>
              <Link
                href="http://www.procareptgroup.com/downloads/Pro%20Care%20Intake%20Form.pdf"
                target="_blank"
                className="mt-5 btn btn-primary"
              >
                Download
              </Link>
            </div>
            <Link
              href="http://www.procareptgroup.com/downloads/Health_History.pdf"
              target="_blank"
            >
              <Image
                src="/assets/images/forms/patientintakeform.jpeg"
                alt="new patient intake form"
                width={800}
                height={800}
                className="border rounded-lg shadow-lg max-h-96"
              />
            </Link>
          </div>
        </div>
        <div className="divider"></div>
        <div className="mt-10">
          <h6>Patient Health History Form</h6>
          <div className="flex flex-col gap-5 mt-5 md:flex-row md:mt-3">
            <div className="order-last mt-3 md:order-first md:mt-0 md:w-4/5">
              <p className="text-gray">
                We would like to gather important information about your health
                through the Personal Health History form. This form allows us to
                understand your past and current physical condition, as well as
                any specific medication allergies you may have. Your input in
                this form is vital and greatly appreciated.
              </p>
              <Link
                href="http://www.procareptgroup.com/downloads/Health_History.pdf"
                target="_blank"
                className="mt-5 btn btn-primary"
              >
                Download
              </Link>
            </div>
            <Link
              href="http://www.procareptgroup.com/downloads/Health_History.pdf"
              target="_blank"
            >
              <Image
                src="/assets/images/forms/patienthealth.jpeg"
                alt="new patient intake form"
                width={800}
                height={800}
                className="border rounded-lg shadow-lg max-h-96"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPatientFormsPage;
