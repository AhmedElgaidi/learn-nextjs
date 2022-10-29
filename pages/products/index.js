import Link from "next/link";

function ProductList() {
  return (
    <>
      <Link href="/products/one">
        <h2> Product one</h2>
      </Link>
      <Link href="/products/two">
        <h2> Product two</h2>
      </Link>
      <Link href="/products/three">
        <h2> Product three</h2>
      </Link>
    </>
  );
}

export default ProductList;
