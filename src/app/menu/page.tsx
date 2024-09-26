import Bakerymenu from '@/components/bakery-menu';
import KitchenMenu from '@/components/kitchen-menu';

export default function Menu() {
  return (
    <div className="h-screen flex flex-col">
      <div className="w-full p-4 border-r">
        <KitchenMenu />
      </div>
      <div className="w-full p-4 border-r">
        <Bakerymenu />
      </div>
    </div>
  );
}
