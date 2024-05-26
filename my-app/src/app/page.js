import Card from "@/components/Card";
import JsChallenges from "@/modules/Js-challenges";
import ProductModule from "@/modules/ProductModule";
import JsPractice from "@/modules/js-practice";

import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto p-3">
      {/* <ProductModule /> */}
      {/* <JsPractice /> */}
      {/* <div className="w-full p-5">
        <Card />
      </div> */}

      <JsChallenges/>
    </main>
  );
}
