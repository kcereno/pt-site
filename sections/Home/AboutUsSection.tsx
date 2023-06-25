import Image from 'next/image';

const AboutUs = () => {
  const imgSrc = '';
  const aboutText =
    'Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health, quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. This includes, but is not limited to, your work and home stressors, overall body condition, nutrition, genetic & postural habits, emotional connections and patterns that are held in your muscles';
  const DUMMY_IMG_SRC = 'http://via.placeholder.com/640x360';

  return (
    <section className="bg-slate-100 py-section">
      <div className="container-fluid">
        <h3>
          About <span className="bold-heading">Us</span>
        </h3>
        <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10 md:mt-5">
          <div className="md:flex-1 md:my-auto lg:flex-none ">
            <Image
              src="/assets/images/team.jpeg"
              alt="team photo"
              className="mt-5 rounded-lg md:my-auto shadow-l w-full lg:max-h-[400px]"
              width={600}
              height={600}
            />
          </div>
          <div className="flex-1 my-auto">
            <p className="mt-5 text-lg text-gray lg:text-2xl md:mt-0 ">
              {aboutText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
