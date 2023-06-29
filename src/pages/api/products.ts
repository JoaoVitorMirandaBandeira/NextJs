import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import products from '../../../database.json'

export default function handler(
    req:NextApiRequest,
    res:NextResponse
){
    res.status(200).json(products)
}