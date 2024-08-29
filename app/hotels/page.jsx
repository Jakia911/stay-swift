import HotelList from "@/components/hotels/HotelList";
import Filter from "@/components/search/Filter";
import Search from "@/components/search/Search";

const HotelListPage = () => {
  return (
    <>
      <section classNameName="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div classNameName="container items-center py-12 ">
          <Search fromList={true} />
        </div>
      </section>
      <section classNameName="py-12">
        <div classNameName="container grid grid-cols-12">
          <Filter />
          <HotelList />
        </div>
      </section>
    </>
  );
};

export default HotelListPage;
