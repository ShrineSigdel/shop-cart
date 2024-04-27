import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Button = ({text, handleClick}) => {

  const notify = (text) => toast(`${text} done successfully.`);

  function handleClickwithNotification() {
    notify(text)
    handleClick()
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 ">
      <button className="relative" onClick = {handleClickwithNotification}>
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
        <span className="font-bebas tracking-wider fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
          {text}
        </span>
      </button> 
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Button;
