import { IconContext } from 'react-icons';

interface Props {
  icon: React.ReactNode;
  label: string;
  detail: string;
}

const NavDetailEntry = ({ icon, label, detail }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 lg:gap-5">
        <div>
          <div className="p-3 lg:px-0">{icon}</div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-md">{label}</p>
          <p className="text-sm">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default NavDetailEntry;
