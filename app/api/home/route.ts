import { voteData } from "@/data/fakeData";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const data = voteData
        return NextResponse.json({message: "success", data: data}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}