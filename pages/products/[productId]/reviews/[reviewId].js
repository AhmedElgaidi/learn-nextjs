import { useRouter } from "next/router";

function ProductDetails() {
  const { productId, reviewId } = useRouter().query;
  return (
    <>
      <h2>
        Review Number: ({reviewId}) for product: ({productId})
      </h2>
    </>
  );
}

export default ProductDetails;
