import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
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
  ];

  return (
    <section
      id="features"
      className="py-section"
    >
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row md:gap-10 md:justify-around">
          <div className="flex-1">
            <h3>
              We Offer Various <span className="bold-heading">Services</span>
            </h3>
            <p className="mt-3 text-gray">
              We are proud to offer a wide range of comprehensive services to
              meet the needs of adults, seniors, and pediatric patients. Our
              team of professional caregivers specialize in providing
              personalized medical care, rehabilitative therapy and companion
              assistance.
            </p>
            <button className="mt-5 btn btn-primary">See All Services</button>
          </div>
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

export default ServicesSection;
