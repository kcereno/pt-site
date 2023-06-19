import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'Neck and Back Rehabilitation',
      description:
        'Herniated Disc, Whiplash, Headaches/Migraines, Sprain/Strain, Laminectomy, Sciatica, Spinal Fusion, Spinal Stenosis, Sacroillac Dusfunction & Low Back Pain.',
      imageSrc: 'http://via.placeholder.com/640x360',
    },
    {
      title: 'Knee Rehabilitation',
      description:
        'Sprain/Strain, Patellofemoral Syndrome, ACL Injury Reconstruction, Meniscus Tear/Repair, Tendonitis, Ligament Injury, Knee Joint Replacement',
      imageSrc: 'http://via.placeholder.com/640x360',
    },
    {
      title: 'Shoulder Rehabilitation',
      description:
        'Fracture, Dislocation, Rotator Cuff Tear, Impingement, Frozen Shoulder, Pre/Post Operative Treatment.',
      imageSrc: 'http://via.placeholder.com/640x360',
    },
  ];

  return (
    <section
      id="features"
      className="min-w-full"
    >
      <div className="section-container ">
        <div className="flex flex-col mx-4 md:flex-row md:gap-10 ">
          <div className="flex-1">
            <h2>
              We Offer Various <span className="bold-heading">Services</span>
            </h2>
            <p className="mt-5">
              We are proud to offer a wide range of comprehensive services to
              meet the needs of adults, seniors, and pediatric patients. Our
              team of professional caregivers specialize in providing
              personalized medical care, rehabilitative therapy and companion
              assistance.
            </p>
            <button className="mt-5 btn">See All Services</button>
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
