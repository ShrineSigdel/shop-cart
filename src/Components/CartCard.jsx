import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
const CartCard = ({item, incrementCount, decrementCount}) => {

  const {id, title, image, count, price} = item 

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
      <div className="flex gap-2">
        <button onClick={() => incrementCount(id) }>
        <FontAwesomeIcon icon={faPlus} size="xl" style={{color: "#B197FC",}} />
        </button>
        <span className="text-xl font-bold font-bebas text-orange-700 border-2 border-purple-950 pl-2 pr-2.5 rounded-md">
         {count}
        </span>
        <button onClick={() => decrementCount(id)}>
        <FontAwesomeIcon icon={faMinus} size="xl" style={{color: "#B197FC",}} />
        </button>
      </div>
      <span className="text-xl font-bold font-bebas text-orange-700">
        Amount: ${price*count}
      </span>
    </div>
  </div>    
</div>
  )
}

export default CartCard