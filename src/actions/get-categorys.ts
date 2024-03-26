import { Category } from "../../types";

const URL = `${process.env.Next_Public_Api_Url}/categories`;

export default async function  getCategories ():Promise<Category[]>  {
    const res = await fetch(URL);
    return await res.json()
}