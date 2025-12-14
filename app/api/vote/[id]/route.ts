import { publicVote } from "@/data/fakeData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(params: Promise<{id: string}>){
    try {
        const id = (await params).id
        console.log(id)
        const data = publicVote
        return NextResponse.json({message: "success", data: data}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}

export async function POST(req: NextRequest,params: Promise<{id: string}>){
    try {
        const id = (await params).id
        console.log(id)
        const body = await req.json();
        console.log(body)
        return NextResponse.json({message: "success", success: true, optionId : "option_123"}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}