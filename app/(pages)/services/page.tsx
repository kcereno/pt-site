import PageHeadingBanner from '@/components/Page/PageHeadingBanner';
import ServiceCard from '@/components/ServiceCard';
import React from 'react';

const ServicePage = () => {
  const services = [
    {
      title: 'Neck and Back Rehabilitation',
      description:
        'Herniated Disc, Whiplash, Headaches/Migraines, Sprain/Strain, Laminectomy, Sciatica, Spinal Fusion, Spinal Stenosis, Sacroillac Dusfunction & Low Back Pain.',
      imageSrc: '/assets/images/services/neckandback.jpeg',
    },
    {
      title: 'Knee Rehabilitation',
      description:
        'Sprain/Strain, Patellofemoral Syndrome, ACL Injury Reconstruction, Meniscus Tear/Repair, Tendonitis, Ligament Injury, Knee Joint Replacement',
      imageSrc: '/assets/images/services/knee.jpg',
    },
    {
      title: 'Shoulder Rehabilitation',
      description:
        'Fracture, Dislocation, Rotator Cuff Tear, Impingement, Frozen Shoulder, Pre/Post Operative Treatment.',
      imageSrc: '/assets/images/services/shoulder.jpeg',
    },
    {
      title: 'Hip Rehabilitation',
      description:
        'Joint Replacement, Piriformis Syndrome, Bursitis, Post Operative Fracture.',
      imageSrc: '/assets/images/services/hip.jpeg',
    },
    {
      title: 'Elbow and Wrist Rehabilitation',
      description: 'Carpel Tunnel, Tennis Elbow, Golfers Elbow, Fractures.',
      imageSrc: '/assets/images/services/elbow.jpeg',
    },
    {
      title: 'Ankle and Foot Rehabilitation',
      description:
        'Ankle & Foot Rehabilitation - Sprain/Strain, Plantar Fasclitis, Post Operative.',
      imageSrc: '/assets/images/services/ankle.jpeg',
    },
  ];

  return (
    <section>
      <PageHeadingBanner
        title="Services"
        subtext="Comprehensive Physical Therapy Services for Optimal Recovery and Wellness"
      />
      <div className="py-page container-fluid">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:justify-around">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
