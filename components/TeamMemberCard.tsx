import React from 'react';

interface Props {
  name: string;
  title: string;
  description: string;
}

const TeamMemberCard = ({ name, title, description }: Props) => {
  return (
    <div>
      <img
        className="w-full rounded-lg rounded-b-none"
        src="http://via.placeholder.com/640x360"
        alt=""
      />
      <div className="p-5 border rounded-b-lg ">
        <div>
          <p className="text-xl bold-heading">{name}</p>
          <p className="bold-heading text-secondary">{title}</p>
        </div>
        <div className="divider"></div>
        <div className="text-gray">{description}</div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
