import ProductModule from "@/modules/ProductModule";
import JsPractice from "@/modules/js-practice";

import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <ProductModule />
      {/* <JsPractice /> */}
    </main>
  );
}
