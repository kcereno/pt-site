import React from 'react';

interface Props {
  id: string;
  icon: React.ReactNode;
  text: string;
  person: string;
}

const ClientTestimonialCarouselEntry = ({ id, icon, text, person }: Props) => {
  return (
    <div
      id={id}
      className="w-full carousel-item"
    >
      <div className="w-11/12 h-64 mx-auto card bg-base-200 text-base-200-content">
        <div className="justify-center card-body ">
          <div className="flex gap-5 align-center">
            {icon}
            <div className="flex flex-col justify-center">
              <div>
                <p className="text-xl">{text}</p>
                <p className="mt-5 font-bold text-end">{person}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonialCarouselEntry;
