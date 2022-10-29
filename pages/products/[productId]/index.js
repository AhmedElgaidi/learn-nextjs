import { useRouter } from "next/router";

function ProductDetails() {
  const { productId } = useRouter().query;
  return (
    <>
      <h2>The product is: ({productId})</h2>
    </>
  );
}

export default ProductDetails;
