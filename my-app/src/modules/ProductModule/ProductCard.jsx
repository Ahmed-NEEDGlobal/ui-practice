import ProductModule from ".";
import Image from "next/image";
const ProductCard = ({
  i,
  title,
  price,
  description,
  category,
  rate,
  count,
}) => {
  return (
    <div className="bg-slate-500 grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 mt-4">
      {/* <figure>
        <Image src={image} width={20} height={20} alt={title} />
      </figure> */}
      <h1>{title}</h1>
      <h4>Price: {price}</h4>
      <p>Description: {description}</p>
      <h4>Category: {category}</h4>
      <span>Rate: {rate} </span>
      <span>Count: {count}</span>
    </div>
  );
};
export default ProductCard;
