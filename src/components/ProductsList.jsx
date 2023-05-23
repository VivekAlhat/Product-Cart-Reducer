import Product from "./Product";

const ProductsList = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div className="min-h-screen w-[70%] flex flex-wrap gap-5">
      {products?.map((product) => {
        const { id, title, price, description, image } = product;
        const isInCart = cart.filter((item) => item.id === id).length > 0;
        return (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            image={image}
            isInCart={isInCart}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
