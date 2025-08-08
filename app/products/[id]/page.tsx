import ProductDetail from "@/components/ProductDetail";
import { stripe } from "@/lib/stripe";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  try {
    // retrieve product id
    const product = await stripe.products.retrieve(params.id, {
      expand: ["default_price"],
    });

    return <ProductDetail product={product} />;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return <p>Product not found</p>;
  }
};

export default ProductPage;
