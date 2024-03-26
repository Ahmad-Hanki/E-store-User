import { Product } from "../../types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}
const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className="space-y-4 ">
      <h2 className="font-bold text-3xl">{title}</h2>
      {items.length == 0 && <NoResults />}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 ">
        {items.map((item) => (
          <ProductCard key={item.id} data ={item}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
