import PageHeadingBanner from '@/components/Page/PageHeadingBanner';
import TeamMemberCard from '@/components/TeamMemberCard';
import React from 'react';

import Image from 'next/image';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Mark Zamora',
      title: 'Physical Therapist',
      description:
        '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis rem atque dignissimos impedit asperiores assumenda voluptatibus porro. Laborum, odit accusamus.',
    },
    {
      name: 'Harry Bacalan',
      title: 'Physical Therapist',
      description:
        '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis rem atque dignissimos impedit asperiores assumenda voluptatibus porro. Laborum, odit accusamus.',
    },
  ];

  return (
    <section>
      <PageHeadingBanner
        title="About Us"
        subtext="Helping patients regain their movement since 2001"
      />

      <div className="py-10 container-fluid">
        {/* Mission */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          <div>
            <div>
              <h3>
                Our <span className="bold-heading">Vision</span>
              </h3>
              <p className="mt-2 text-gray">
                To be a company that attracts, rewards, and retains highly
                skilled physical therapy staff. Our proactive approach to the
                development of best business practices and promotion of
                effective treatment methods will help us accomplish this.
              </p>
            </div>
            <div className="mt-10">
              <h3>
                Our <span className="bold-heading">Philosophy</span>
              </h3>
              <p className="mt-2 text-gray">
                Physio Physical Therapy is committed to providing high quality
                outpatient physical therapy services in beautiful
                state-of-the-art facilities.
                <br /> <br />
                As a healthcare leader we partner with groups and events within
                the communities we serve. Our focus on our physical therapists
                continuing education is unmatched and guarantees our physical
                therapists understand and put into practice cutting-edge
                treatments and rehabilitation techniques available for all types
                of injuries and conditions.
              </p>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <h3>
              Our <span className="bold-heading">Mission</span>
            </h3>
            <p className="mt-2 text-gray">
              We are committed as primary healthcare professionals to help our
              clients resume their lifelong pursuit of health, fitness, and
              well-being.
            </p>
            <div className="mt-5">
              <strong className="text-secondary">High Quality</strong>
              <p className="mt-2 text-gray">
                We take a goal-oriented approach to healing. Whatever your goals
                might be we want to help you achieve them
              </p>
            </div>
            <div className="mt-5">
              <strong className="text-secondary">Patient Care</strong>
              <p className="mt-2 text-gray">
                We’ll provide hands-on treatment in the office and education you
                can take home with you, enabling you to become an active
                participant in your recovery and future physical health.
              </p>
            </div>
            <div className="mt-5">
              <strong className="text-secondary">Proffesional Services</strong>
              <p className="mt-2 text-gray">
                Our team has a combined 30 years of clinical experience and a
                shared passion for helping our community stay active.
              </p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {/* Team */}
        <div className="py-10">
          <h3>
            Our <span className="bold-heading">Team</span>
          </h3>
          <div className="flex flex-col gap-10 mt-5 md:flex-row">
            {teamMembers.map((teamMember) => (
              <TeamMemberCard
                key={teamMember.name}
                {...teamMember}
              />
            ))}
          </div>
        </div>
        {/* Clinic */}
        <div className="divider"></div>
        <div className="py-10">
          <h3>
            Our <span className="bold-heading">Clinic</span>
          </h3>
          <div className="flex flex-col gap-10 mt-5 md:flex-row">
            <div className="flex-1">
              <Image
                className="w-auto rounded-lg shadow-lg"
                src="/assets/images/treatmentroom.jpeg"
                alt="clinic"
                width={600}
                height={600}
              />
              <p className="mt-3 text-xl text-center bold-heading">
                Main Treatment Room
              </p>
            </div>
            <div className="flex-1">
              <Image
                className="flex-1 rounded-lg shadow-lg"
                src="/assets/images/gym.jpeg"
                alt="clinic"
                width={600}
                height={600}
              />
              <p className="mt-3 text-xl text-center bold-heading">
                Fully Equipped Gym in Basement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
