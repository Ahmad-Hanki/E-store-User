import { Product } from "../../types";

const URL = `${process.env.Next_Public_Api_Url}/products`;

export default async function getProduct(id: string):Promise <Product> {
  const res = await fetch(`${URL}/${id}`);
  return await res.json();
}
