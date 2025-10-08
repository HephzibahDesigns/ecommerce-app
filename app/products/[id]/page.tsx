import ProductDetail from "@/components/ProductDetail";
import { stripe } from "@/lib/stripe";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  try {
    // retrieve product id
    const { id } = await params;
    const product = await stripe.products.retrieve(id, {
      expand: ["default_price"],
    });

    //  convert to plain product
    const plainProduct = JSON.parse(JSON.stringify(product));

    return <ProductDetail product={plainProduct} />;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return <p>Product not found</p>;
  }
};

export default ProductPage;
