import PastBookings from "@/components/PastBookings";
import ProfileInfo from "@/components/profileInfo/ProfileInfo";
import UpcomingBooking from "@/components/UpcomingBooking";

const BookingPage = () => {
  return (
    <main>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBookings />

            <UpcomingBooking />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
