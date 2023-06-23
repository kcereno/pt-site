import { BsQuote } from 'react-icons/bs';
import ClientTestimonialsEntry from './ClientTestimonialsEntry';

const ClientTestimonials = () => {
  const iconClass = '"flex-shrink-0 hidden text-gray-400 w-14 h-14 sm:block"';

  const testimonials = [
    {
      id: 'item1',
      icon: <BsQuote className={iconClass} />,
      text: 'Thank you for giving me my life back. You understood what I wanted to accomplish, and helped me do that with good humor and fun. I always felt encouraged, hopeful and positive, You have been super and I will miss physical therapy. Your entire staff was wonderful too. Thanks so much again',
      person: 'Marie E.',
    },
    {
      id: 'item2',
      icon: <BsQuote className={iconClass} />,
      text: "Thanks for all your help with my ACL recovery. I was very pleased with my progress and was very happy with the care and attention you and your staff provided. I'll keep you up to date on my progress at home. You have a great staff there.",

      person: 'Lisa V.',
    },
    {
      id: 'item4',
      icon: <BsQuote className={iconClass} />,
      text: 'Pro Care from start to finish is an outstanding organization. It was a pleasure to be treated by such superb professionals. Everyone working at Pro Care shows consideration and care for the patients they treat.',

      person: 'Valerie M.',
    },
    {
      id: 'item5',
      icon: <BsQuote className={iconClass} />,
      text: "Thank you for getting me back on my feet following hip replacement surgery. I really appreciated Mauricio's expertise, care and sympathy during my time in physical therapy. Many thanks.",

      person: 'Joseph R.',
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-5 lg:grid lg:grid-cols-2">
        {testimonials.map(({ id, icon, text, person }) => (
          <ClientTestimonialsEntry
            key={id}
            id={id}
            icon={icon}
            text={text}
            person={person}
          />
        ))}
      </div>
    </>
  );
};

export default ClientTestimonials;
