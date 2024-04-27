import CustomizedButton from "../Components/CustomizedButton";
import { Link } from "react-router-dom";
const ResponsiveNav = () => {
  return (
    <section className="flex flex-col items-center h-96 p-4 border-2 border-stone-500 rounded-lg mx-4 mt-10">
      <CustomizedButton text={`Exit`} link={"/"}></CustomizedButton>
      <ul className="flex flex-col h-full justify-evenly rounded-lg font-bebas text-3xl">
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
    </section>
  );
};

export default ResponsiveNav;
