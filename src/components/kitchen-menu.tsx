import Image from 'next/image';

const KitchenMenu = () => {
  return (
    <Image
      src="https://mcvqsddwagugbgswsepk.supabase.co/storage/v1/object/public/zodiac-menu/zodiac-menu/kitchen-1.jpeg"
      alt="kitchen menu"
      width={1600}
      height={1600}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default KitchenMenu;
