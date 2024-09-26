'use client';
import MenuItem from '@/components/menu';
import {
  KITCHEN_1,
  KITCHEN_2,
  COCKTAIL_1,
  COCKTAIL_2,
  FRESH_JUICE,
  BAKERY,
  COFFEE_1,
  COFFEE_2,
  LOGO,
} from '@/constants/menu';

export default function Menu() {
  const ListOfMenuPics = [
    COFFEE_1,
    COFFEE_2,
    FRESH_JUICE,
    BAKERY,
    KITCHEN_1,
    KITCHEN_2,
    COCKTAIL_1,
    COCKTAIL_2,
  ];
  return (
    <>
      <div className="my-16">
        <MenuItem pic={LOGO} />
      </div>
      <div className=" flex text-5xl font-bold justify-center w-full my-5">
        <p>Welcome to Zodiac Cafe & Bar </p>
      </div>

      <div className="h-screen flex flex-col">
        {ListOfMenuPics.map((pic) => (
          <MenuItem key={pic} pic={pic} />
        ))}
      </div>
    </>
  );
}
