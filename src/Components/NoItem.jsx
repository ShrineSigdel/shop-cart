import CustomizedButton from "../Components/CustomizedButton";

const NoItem = () => {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold text-purple-600">No Item added yet</h1>
        <p className="text-gray-600">
          You haven't added any item to the cart yet . Visit our shop 
        </p>
        <CustomizedButton text={`GO TO SHOP`} link={`/shop`} ></CustomizedButton>
      </div>
    </div>
  );
};

export default NoItem;
