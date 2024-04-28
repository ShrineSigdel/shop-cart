import { useEffect, useMemo } from "react";
import NoItem from "../Components/NoItem";
import { useOutletContext } from "react-router-dom";
import Button from "../Components/Button";
import CartCard from "../Components/CartCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cartData } = useOutletContext();
  const [cart, setCart] = cartData;

  const totalAmount = useMemo(() => {
    return cart.length > 0
      ? cart.reduce(
          (prev, curr) =>
            parseFloat(
              (prev + parseFloat((curr.price * curr.count).toFixed(2))).toFixed(
                2
              )
            ),
          0
        )
      : 0;
  }, [cart]);

  const totalCount = useMemo(() => {
    return cart.length > 0
      ? cart.reduce((prev, curr) => prev + curr.count, 0)
      : 0;
  }, [cart]);

  function clearTheCart() {
    setCart([]);
  }

  function finishYourOrder() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }

  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(cart));
  }, [cart]);

  function incrementCount(id) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    });
  }

function decrementCount(id) {
  setCart((prevCart) => {
    return prevCart.map((item) => {
      if (item.id === id) {
        const updatedCount = item.count - 1;
        if (updatedCount === 0) {
          return null; 
        }
        return { ...item, count: updatedCount };
      }
      return item;
    }).filter(Boolean); 
  });
}
  return (
    <section className="flex flex-col mt-0">
      {cart.length > 0 ? (
        <>
          <div className="buttons flex flex-col items-center gap-5 mt-2 lg:flex-row lg:justify-around lg:gap-0">
            <Button text={"Clear Cart"} handleClick={clearTheCart}></Button>
            <div className="flex font-bebas tracking-wide text-xl gap-2 text-blue-700 border-orange-700 border-2 rounded-md px-2 py-1 ">
              <span>{totalCount} ITEMS</span>
              <span>${totalAmount}</span>
              <FontAwesomeIcon
                icon={faCartShopping}
                flip="horizontal"
                size="lg"
                style={{ color: "black" }}
              />{" "}
            </div>

            <Button
              text={"Finish your order"}
              handleClick={finishYourOrder}
            ></Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 w-full justify-items-center content-center  p-6 pt-10 md:px-8 xl:px-16 2xl:px-32 ">
            {cart.map((item) => (
              <CartCard key={item.id} item = {item} incrementCount = {incrementCount} decrementCount = {decrementCount} />
            ))}
          </div>
        </>
      ) : (
        <NoItem />
      )}
    </section>
  );
};

export default Cart;
