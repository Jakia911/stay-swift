import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = () => {
  return (
    <div classNameName="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image
        src=""
        classNameName="max-h-[162px] max-w-[240px]"
        alt=""
        width={300}
        height={300}
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;
