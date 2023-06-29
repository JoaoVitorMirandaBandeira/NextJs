import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import products from '../../../../database.json'

export default function handler(
    req:NextApiRequest,
    res:NextResponse
){
    const { id } = req.query
    const produc = products.find(prod => prod.id ===Number(id))
    res.status(200).json(produc)
}