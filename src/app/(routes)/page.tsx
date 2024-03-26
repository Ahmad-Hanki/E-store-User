import getProducts from "@/actions/GetProduct";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
export const revalidate = 0;
const HomePage = async () => {
  const billboard = await getBillboard("f772aa0d-3260-4d8f-aa80-0ffbd8aa4211");
  const products = await getProducts({
    isFeatured: true,
  });
  console.log(products[0].name);
  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
