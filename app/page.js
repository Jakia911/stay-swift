export default function Home() {
  return (
    <section className="bg-[#F6F3E9] h-screen max-h-screen relative grid place-items-center bg-gray bg-cover bg-no-repeat bg-center">
      <div className="container items-center pb-12 ">
        <div className="col-span-7">
          <h1 className="font-bold text-3xl lg:text-5xl my-4 text-center lg:w-8/12 mx-auto">
            Hotel for memorable moments rich in emotions
          </h1>
          <p className="my-2 text-[#5f5e5e] text-center">
            We have 459 rooms spread throuout Indonesia with room standards
            equivalent to 5 star hotels.
          </p>

          <div className="lg:max-h-[250px] mt-6">
            <div id="searchParams">
              <div>
                <span>Destination</span>
                <h4 className="mt-2">
                  <select name="destination" id="destination">
                    <option value="Bali">Bali</option>
                    <option value="Bali">Coxs Bazar</option>
                    <option value="Bali">Sylhet</option>
                    <option value="Bali">Saint Martin</option>
                    <option value="Bali">Bali</option>
                  </select>
                </h4>
              </div>

              <div>
                <span>Check in</span>
                <h4 className="mt-2">
                  <input type="date" name="checkin" id="checkin" />
                </h4>
              </div>

              <div>
                <span>Checkout</span>
                <h4 className="mt-2">
                  <input type="date" name="checkout" id="checkout" />
                </h4>
              </div>
            </div>
          </div>

          <button className="search-btn">🔍️ Search</button>
        </div>
      </div>
    </section>
  );
}
