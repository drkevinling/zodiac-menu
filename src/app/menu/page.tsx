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
  ADDRESS,
} from '@/constants/menu';

export default function Menu() {
  const ListOfMenuPics = [
    ADDRESS,
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
      <div className="my-5">
        <MenuItem pic={LOGO} />
      </div>
      <div className=" flex text-2xl font-bold justify-center w-full  p-5">
        <p>Welcome to Zodiac Coffee Lounge</p>
      </div>

      <div className="h-screen flex flex-col">
        {ListOfMenuPics.map((pic) => (
          <MenuItem key={pic} pic={pic} />
        ))}
      </div>
    </>
  );
}
