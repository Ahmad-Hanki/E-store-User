import { Size } from "../../types";

const URL = `${process.env.Next_Public_Api_Url}/sizes`;

export default async function  getSizes ():Promise<Size[]>  {
    const res = await fetch(URL);
    return await res.json()
}