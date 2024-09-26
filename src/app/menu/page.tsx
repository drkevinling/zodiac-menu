'use client';
import MenuItem from '@/components/menu';
import {
  KITCHEN_1,
  KITCHEN_2,
  COCKTAIL_1,
  COCKTAIL_2,
  FRESH_JUICE,
  BAKERY,
} from '@/constants/menu';

export default function Menu() {
  const ListOfMenuPics = [
    KITCHEN_1,
    KITCHEN_2,
    COCKTAIL_1,
    COCKTAIL_2,
    FRESH_JUICE,
    BAKERY,
  ];
  return (
    <div className="h-screen flex flex-col">
      {ListOfMenuPics.map((pic) => (
        <MenuItem key={pic} pic={pic} />
      ))}
    </div>
  );
}
