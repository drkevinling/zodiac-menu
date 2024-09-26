import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface MenuItemProps {
  pic: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ pic }) => {
  return (
    <div className="w-full p-4 border-r">
      <Image
        src={pic}
        alt="bakery menu"
        width={1600}
        height={1600}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

export default MenuItem;
