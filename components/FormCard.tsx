import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  name: string;
  description: string;
  url: string;
  image: string;
}

const FormCard = ({ name, description, url, image }: Props) => {
  return (
    <div className="flex-1 w-auto border rounded-xl ">
      <Image
        src={image}
        alt={name}
        width={600}
        height={600}
        className="w-full"
      />
      <div className="mt-0 divider"></div>
      <div className="px-5 pb-5">
        <div className="">
          <h6>{name}</h6>
          <p className="mt-3 text-gray">{description}</p>
        </div>

        <div className="flex justify-end">
          <div className="">
            <Link
              href="http://www.procareptgroup.com/downloads/Pro%20Care%20Intake%20Form.pdf"
              target="_blank"
              className="w-full mt-5 btn btn-primary"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
