import { FRESH_JUICE } from '@/constants/menu';
import Image from 'next/image';

const Bakerymenu = () => {
  return (
    <Image
      src= {FRESH_JUICE}
      alt="bakery menu"
      width={1600}
      height={1600}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Bakerymenu;
