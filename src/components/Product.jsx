const Product = ({
  id,
  title,
  price,
  description,
  image,
  isInCart,
  dispatch,
}) => {
  const handleCartRemoval = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleCartAddition = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, image, title, price, quantity: 1 },
    });
  };

  return (
    <div className="max-w-[280px] h-fit shadow-md p-5 m-2 flex flex-col gap-3">
      <img src={image} alt={title} className="object-contain h-48" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p>{description}</p>
      <p>
        Price: <span>${price}</span>
      </p>
      {isInCart ? (
        <button
          className="bg-red-500 hover:bg-red-600 text-white rounded-sm p-2 font-semibold"
          onClick={handleCartRemoval}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="bg-green-500 hover:bg-green-600 text-white rounded-sm p-2 font-semibold"
          onClick={handleCartAddition}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Product;
