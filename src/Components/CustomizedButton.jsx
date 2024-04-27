import { Link } from "react-router-dom";

const CustomizedButton = ({ text, link }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 ">
      <Link className="relative" to={link}>
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
        <span className="font-bebas tracking-wider fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-6 py-2 text-xl md:text-3xl font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
          {text}
        </span>
      </Link>
    </div>
  );
};

export default CustomizedButton;
