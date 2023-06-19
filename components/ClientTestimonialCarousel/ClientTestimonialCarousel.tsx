'use client';
import React, { useState } from 'react';
import { BsBlockquoteRight, BsQuote } from 'react-icons/bs';
import ClientTestimonialCarouselEntry from './ClientTestimonialCarouselEntry';

const ClientTestimonialCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const targetHref = `#item${currentPage}`;

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
      text: 'Lted',
      person: 'Jane Doe',
    },
    {
      id: 'item4',
      icon: <BsQuote className={iconClass} />,
      text: 'Lted',
      person: 'Karl',
    },
    {
      id: 'item5',
      icon: <BsQuote className={iconClass} />,
      text: 'Lted',
      person: 'Ana',
    },
  ];

  const totalPages = testimonials.length;

  const handlePrevButtonClick = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  const handleNextButtonClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      <div className="w-full carousel">
        {testimonials.map(({ id, icon, text, person }) => (
          <ClientTestimonialCarouselEntry
            key={id}
            id={id}
            icon={icon}
            text={text}
            person={person}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="mt-10 join">
          <button
            className="btn join-item"
            disabled={currentPage === 1}
            onClick={handlePrevButtonClick}
          >
            <a href={targetHref}>Previous</a>
          </button>
          <button
            className="btn join-item"
            disabled={currentPage === totalPages}
            onClick={handleNextButtonClick}
          >
            <a href={targetHref}>Next</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ClientTestimonialCarousel;
