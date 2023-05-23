import CartItem from "./CartItem";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const totalCost = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  return (
    <div className="min-h-screen w-[30%] border-l border-gray-600">
      <p className="font-semibold text-xl text-center p-2 border-b border-gray-500">
        Your cart
      </p>
      {cart.map((item) => {
        const { id, image, title, price, quantity } = item;
        return (
          <CartItem
            key={id}
            id={id}
            image={image}
            title={title}
            price={price}
            quantity={quantity}
            dispatch={dispatch}
          />
        );
      })}
      <p className="font-semibold text-xl text-center p-2">
        Total Price: ${totalCost.toFixed(2)}
      </p>
    </div>
  );
};

export default Cart;
