import Link from "next/link";

const Navber = () => {
  return (
    <div>
      <nav>
        <Link href="./index.html">
          {/* <Image src={logo} alt="Stay Swift Logo" srcset="" /> */}
        </Link>

        <ul>
          <li>
            <a href="#">Recommended Places</a>
          </li>

          <li>
            <a href="#">About Us</a>
          </li>

          <li>
            <a href="#">Contact us</a>
          </li>

          <li>
            <a href="./bookings.html">Bookings</a>
          </li>

          <li>
            <a href="./login.html" className="login">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
