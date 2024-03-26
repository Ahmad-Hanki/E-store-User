import { Category } from "../../types";

const URL = `${process.env.Next_Public_Api_Url}/categories`;

export default async function getCategory(id: string):Promise <Category> {
  const res = await fetch(`${URL}/${id}`);
  return await res.json();
}
