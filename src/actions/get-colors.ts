import { Color } from "../../types";

const URL = `${process.env.Next_Public_Api_Url}/colors`;

export default async function  getColors ():Promise<Color[]>  {
    const res = await fetch(URL);
    return await res.json()
}