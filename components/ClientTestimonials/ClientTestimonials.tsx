import { BsQuote } from 'react-icons/bs';
import ClientTestimonialsEntry from './ClientTestimonialsEntry';

const ClientTestimonials = () => {
  const iconClass = '"flex-shrink-0 hidden text-gray-400 w-14 h-14 sm:block"';

  const testimonials = [
    {
      id: 'item1',
      icon: <BsQuote className={iconClass} />,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, adipisci excepturi? Dolores, est. Iste neque magni ab sapiente enim corporis, voluptates sed laudantium fugit velit! Quod, inventore! Facere, aut. Voluptatibus.',
      person: 'John Doe',
    },
    {
      id: 'item2',
      icon: <BsQuote className={iconClass} />,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, adipisci excepturi? Dolores, est. Iste neque magni ab sapiente enim corporis, voluptates sed laudantium fugit velit! Quod, inventore! Facere, aut. Voluptatibus.',

      person: 'Jane Doe',
    },
    {
      id: 'item4',
      icon: <BsQuote className={iconClass} />,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, adipisci excepturi? Dolores, est. Iste neque magni ab sapiente enim corporis, voluptates sed laudantium fugit velit! Quod, inventore! Facere, aut. Voluptatibus.',

      person: 'Karl',
    },
    {
      id: 'item5',
      icon: <BsQuote className={iconClass} />,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, adipisci excepturi? Dolores, est. Iste neque magni ab sapiente enim corporis, voluptates sed laudantium fugit velit! Quod, inventore! Facere, aut. Voluptatibus.',

      person: 'Ana',
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-5">
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
