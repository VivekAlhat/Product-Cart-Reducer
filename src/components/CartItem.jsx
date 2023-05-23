const CartItem = ({ id, title, image, price, quantity, dispatch }) => {
  const handleItemQuantityIncrease = () => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const handleItemQuantityDecrease = () => {
    if (quantity === 1) {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
    } else {
      dispatch({ type: "DECREASE_QUANTITY", payload: id });
    }
  };

  return (
    <div className="p-2 m-2 border border-slate-600 flex items-center gap-5">
      <img src={image} alt={title} className="h-20 object-contain" />
      <div className="flex flex-col gap-3">
        <p>{title}</p>
        <p>
          Price: <span className="font-semibold">${price * quantity}</span>
        </p>
        <div className="flex items-center gap-5">
          <button
            className="bg-green-500 hover:bg-green-600 rounded-sm px-2 py-1 text-white font-bold"
            onClick={handleItemQuantityIncrease}
          >
            +
          </button>
          <p>{quantity}</p>
          <button
            className="bg-red-500 hover:bg-red-600 rounded-sm px-2 py-1 text-white font-bold"
            onClick={handleItemQuantityDecrease}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
