'use client';
import MenuItem from '@/components/menu';
import {
  KITCHEN_1,
  KITCHEN_2,
  COCKTAIL_2_1,
  COCKTAIL_2_2,
  FRESH_JUICE,
  BAKERY,
  COFFEE_1,
  COFFEE_2,
  LOGO,
  ADDRESS,
  ASIAN_CUISINE,
  CHEESE_CAKE,
  FALOODA,
  JAPAN_MATCHA,
  KOREAN_CUISINE,
  PANDAN_CAKE,
  TOM_YUM_NOODLE,
  YOGURT,
  ZODIAC_BLISS,
} from '@/constants/menu';

export default function Menu() {
  const ListOfMenuPics = [
    ADDRESS,
    COFFEE_1,
    COFFEE_2,
    FALOODA,
    JAPAN_MATCHA,
    FRESH_JUICE,
    ZODIAC_BLISS,
    YOGURT,
    BAKERY,
    PANDAN_CAKE,
    CHEESE_CAKE,
    ASIAN_CUISINE,
    KOREAN_CUISINE,
    TOM_YUM_NOODLE,
    KITCHEN_1,
    KITCHEN_2,
    COCKTAIL_2_1,
    COCKTAIL_2_2,
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
