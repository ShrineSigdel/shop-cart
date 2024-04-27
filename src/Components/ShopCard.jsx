import Button from "./Button";
// const {title, image, price} = {
//   title: "Ram",
//   image: "#",
//   price: "Rs. abc"
// }

const ShopCard = ({title, image, price, addToCart}) => {



  return (
    <div className="flex flex-col justify-between items-center w-72 bg-white border border-gray-200 rounded-lg shadow">
        <img
          className="p-8 rounded-t-lg"
          src={image}
          alt={title}
          width={300}
        />  
      <div className="px-5 pb-5 w-full">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900">
            {title}
          </h5>
        <div className="flex items-center justify-around">
          <span className="text-2xl font-bold font-bebas text-orange-700">
            ${price}
          </span>
          <Button text={`Add to Cart`} handleClick = {addToCart}></Button>
        </div>
      </div>
    </div>
  );  
};

export default ShopCard;
