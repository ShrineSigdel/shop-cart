import Navigation from "./Navigation";

const Header = ({cart}) => {
  return (
    <header className="">
      <Navigation cart={cart}/>
    </header>
  );
};

export default Header;
