import Logo from "../assets/icons/favicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="relative bg-white border-gray-200 border-2 flex flex-wrap items-center justify-between p-2 px-4 text-black font-lato tracking-wide xl:px-32 w-full">
      <Link to="/" className="flex items-center space-x-3 ">
        <img src={Logo} className="h-8" alt="Logo" />
      </Link>
      <div className="flex lg:order-2 py-1 px-2 ">
        <Link to="/navigation">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            style={{ color: "black" }}
            className="lg:hidden"
          />
        </Link>
      </div>
      <div
        className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
        id="navbar-cta"
      >
        <ul className="flex flex-col  rounded-lg  lg:space-x-8  lg:flex-row lg:mt-0">
          <li>
            <Link to="/">
              <span className="custom-hover">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/shop">
              <span className="custom-hover">Shop</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <span className="custom-hover">Cart </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
