import getProducts from "@/actions/get-products";
import getProduct from "@/actions/get-product"
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import Info from "@/components/gallery/Info";
import Container from "@/components/ui/Container";

interface ProductIdPageProps  {
    params:{
        productId:string
    }
}


const ProductId = async ({params: {productId}}:ProductIdPageProps) => {

    const product = await getProduct(productId);

    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    })

  return (
    <div className="bg-white ">
        <Container>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <div>
                       <Gallery images={product.images}/>
                    </div>
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <Info data = {product}/>
                    </div>
                </div>
                <hr className="my-10" />
                <ProductList title="RelatedItems" items={suggestedProducts}/>
            </div>

        </Container>
    </div>
  )
}

export default ProductId