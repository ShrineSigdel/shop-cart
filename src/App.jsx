import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import {  useState } from "react";

export default function App() {
  const [collection, setCollection] = useState(null);
  const [cart, setCart] = useState(() => {
    const response = localStorage.getItem("CART");
    const local = JSON.parse(response);
    if (local !== null) {
      return local;
    } else {
      return [];
    }
  });
  const [amount, setAmount] = useState(0);

  return (
    <>
      <div className="grid gap-0 min-h-svh">
        <Header cart = {cart} />
        <Outlet
          context={{
            collectionData: [collection, setCollection],
            cartData: [cart, setCart],
            amountData: [amount, setAmount]
          }}
        />
        <Footer />
      </div>
    </>
  );
}
