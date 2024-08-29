import { getAllHotels } from "@/app/queries";
import HotelCard from "./HotelCard";

const HotelList = async () => {
  const allHotels = await getAllHotels();
  console.log(allHotels);

  return (
    <div classNameName="col-span-9">
      <div classNameName="space-y-4">
        <HotelCard />
      </div>
    </div>
  );
};

export default HotelList;
