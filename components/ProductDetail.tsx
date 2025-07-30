import Image from "next/image";
import Stripe from "stripe";

interface props {
  product: Stripe.Product;
}

const ProductDetail = ({ product }: props) => {
  const price = product.default_price as Stripe.Price;
  return (
    <div>
      {product.images && product.images[0] && (
        <div className="relative h-80 w-full flex justify-center items-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={50}
            className=" object-cover group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
          />
        </div>
      )}

      <div className="">
        <h1>{product.name}</h1>
        {product.description && <p>{product.description}</p>}

        {price && price.unit_amount && (
          <p className="text-lg font-semibold  text-gray-900">
            ₦{(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
