import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard = ({ title, description, imageSrc }: Props) => {
  return (
    <div className="flex-1 mt-10 md:mt-0">
      <Image
        className="self-center object-cover w-full rounded-lg shadow-lg h-60 lg:h-40"
        src={imageSrc}
        alt={title}
        width={600}
        height={600}
      />
      <div className="mt-5">
        <p className="text-xl bold-heading">{title}</p>
        <p className="mt-1 text-gray">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
