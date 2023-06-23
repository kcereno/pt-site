import React from 'react';
import { AiFillMedicineBox, AiOutlineCheck } from 'react-icons/ai';
import { BsBuilding, BsFillPeopleFill, BsCheckCircle } from 'react-icons/bs';
import { GiGraduateCap } from 'react-icons/gi';

const AdvantagesSection = () => {
  const iconClass = 'h-8 w-8 my-auto';

  const advantages = [
    {
      title: 'Personalized Treatments',
      description: 'You will recieve a personalized treatment plan',
      icon: <AiFillMedicineBox className={iconClass} />,
    },
    {
      title: 'Comfortable Clinic',
      description:
        'Our clinic feels like a comfortable health & fitness center',
      icon: <BsBuilding className={iconClass} />,
    },
    {
      title: 'Licensed Therapists',
      description:
        'Your treatment will be performed by only licensed therapists',
      icon: <AiOutlineCheck className={iconClass} />,
    },
    {
      title: 'Practitioners Network',
      description: 'We will work closely with all your health practitioners',
      icon: <BsFillPeopleFill className={iconClass} />,
    },
    {
      title: 'Experienced Staff',
      description:
        'Our therapists are trained and certified in therapy technique',
      icon: <GiGraduateCap className={iconClass} />,
    },
    {
      title: 'Therapy Goals',
      description:
        'Setting goals is the best way to enjoy a successful outcome',
      icon: <BsCheckCircle className={iconClass} />,
    },
  ];

  return (
    <section className="py-section container-fluid ">
      <h2>
        Our <span className="bold-heading">Advantages</span>
      </h2>

      <div className="flex flex-col gap-5 mt-10 md:grid md:grid-cols-3 md:gap-10">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="p-5 outline outline-1 rounded-xl outline-gray-300 "
          >
            <div className="flex gap-5">
              <div className="my-auto">{advantage.icon}</div>
              <div className="flex flex-col">
                <p className="font-bold ">{advantage.title}</p>
                <p className="text-gray-400">{advantage.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
