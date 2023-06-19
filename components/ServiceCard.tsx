import React from 'react';

interface Props {
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard = ({ title, description, imageSrc }: Props) => {
  return (
    <div className="flex-1 mt-10 md:mt-0">
      <img
        className="self-center w-full rounded-lg shadow-lg"
        src={imageSrc}
        alt=""
      />
      <div className="mt-5">
        <h3>{title}</h3>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
