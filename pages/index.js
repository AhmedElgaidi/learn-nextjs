import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("you clicked the place order button.");
    router.push("/products");
  };

  return (
    <>
      <h2>Home page</h2>

      <h5>
        <Link href="/blog">Go to blog</Link>
      </h5>
      <br />
      <h5>
        <Link href="/products">Go to products</Link>
      </h5>
      <br />
      <h5>
        <Link href="/docs">Go to docs</Link>
      </h5>
      <br />

      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
export default Home;
