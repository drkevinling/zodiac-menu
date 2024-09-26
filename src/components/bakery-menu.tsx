import Image from 'next/image';

const Bakerymenu = () => {
  return (
    <Image
      src="https://mcvqsddwagugbgswsepk.supabase.co/storage/v1/object/public/zodiac-menu/zodiac-menu/bakery-menu.jpeg"
      alt="bakery menu"
      width={1600}
      height={1600}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Bakerymenu;
