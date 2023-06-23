import Link from 'next/link';
import { IconContext } from 'react-icons';

interface Props {
  icon: React.ReactNode;
  label: string;
  detail: string;
  url?: string;
}

const NavDetailEntry = ({ icon, label, detail, url }: Props) => {
  const link = url ? url : '#';

  return (
    <Link
      href={link}
      className="flex flex-col hover:text-secondary"
      target={url ? '_blank' : '_self'}
    >
      <div className="flex gap-2 lg:gap-5">
        <div>
          <div className="p-3 lg:px-0 ">{icon}</div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-md">{label}</p>
          <p className="text-sm">{detail}</p>
        </div>
      </div>
    </Link>
  );
};

export default NavDetailEntry;
