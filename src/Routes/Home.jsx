import bigImage from "../assets/images/content-big.jpg";
import smallImage from "../assets/images/content-small.jpg";
import CustomizedButton from "../Components/CustomizedButton";

const Home = () => {
  return (
    <section className="relative">
      <div
        className="bg-cover bg-no-repeat bg-center max-lg:hidden -z-10 h-svh "
        style={{ backgroundImage: `url(${bigImage})` }}
      ></div>
      <div
        className="bg-cover bg-no-repeat bg-center lg:hidden -z-10 h-svh "
        style={{ backgroundImage: `url(${smallImage})` }}
      ></div>
      <div className="flex-column absolute bottom-20 right-5 md:bottom-40 2xl:bottom-60 lg:left-20 text-xl 2xl:text-3xl font-bebas md:text-2xl">
        <div className="text-green-500 md:text-purple-500">Get yourself into the </div>
        <div className="text-4xl md:text-6xl 2xl:text-8xl text-yellow-500 md:text-orange-500">
          RIGHT GEAR
        </div>
      </div>
      <div className=" absolute  left-5 top-5 md:top-20 md:left-20  ">
        <CustomizedButton text= {`SHOP NOW`} link={`/shop`}/>
      </div>
    </section>
  );
};

export default Home;
