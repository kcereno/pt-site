import React from 'react';

interface Props {
  id: string;
  icon: React.ReactNode;
  text: string;
  person: string;
}

const ClientTestimonialsEntry = ({ id, icon, text, person }: Props) => {
  return (
    <div
      id={id}
      className="w-full lg:flex-1 "
    >
      <div className="h-auto mx-auto card bg-base-200 text-base-200-content ">
        <div className="justify-center card-body ">
          <div className="flex gap-5 align-center">
            {icon}
            <div className="flex flex-col justify-center">
              <div className="lg:h-44">
                <p className="text-xl ">{text}</p>
              </div>
              <p className="mt-5 font-bold text-end">{person}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonialsEntry;
