import { Billboard } from "../../types";

const URL = `${process.env.Next_Public_Api_Url}/billboards`;

export default async function getBillboard(id: string):Promise <Billboard> {
  const res = await fetch(`${URL}/${id}`);
  return await res.json();
}
