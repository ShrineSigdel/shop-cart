

const CartCard = ({title, image, count, price}) => {

  return (
    <div className="flex flex-col justify-between items-center w-72 bg-white border border-gray-200 rounded-lg shadow">
    <img
      className="p-8 rounded-t-lg"
      src={image}
      alt={title}
      width={300}
    />  
  <div className="px-5 pb-5 w-full flex flex-col items-center gap-1">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900">
        {title}
      </h5>
    <div className="flex items-center justify-around w-full">
      <span className="text-xl font-bold font-bebas text-orange-700">
        Count: {count}
      </span>
      <span className="text-xl font-bold font-bebas text-orange-700">
        Amount: ${price*count}
      </span>
    </div>
  </div>    
</div>
  )
}

export default CartCard