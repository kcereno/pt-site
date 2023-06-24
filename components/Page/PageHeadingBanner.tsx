import React from 'react';

interface Props {
  title: string;
  subtext: string;
}

const PageHeadingBanner = ({ title, subtext }: Props) => {
  return (
    <div className="py-16 bg-slate-100 ">
      <div className="container-fluid">
        <h1 className="text-5xl bold-heading">{title}</h1>
        <p className="mt-2 text-gray-500">{subtext}</p>
      </div>
    </div>
  );
};

export default PageHeadingBanner;
