import { Size } from "../../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export default async function  getSizes ():Promise<Size[]>  {
    const res = await fetch(URL);
    return await res.json()
}