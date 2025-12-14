import { adminVote } from "@/data/fakeData";
import { NextResponse } from "next/server";

export async function GET(params: Promise<{id: string}>){
    const id = (await params).id
    console.log(id)
    try {
        const data = adminVote
        return NextResponse.json({message: "success", data: data}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}

export async function PUT(params: Promise<{id: string}>){
    const id = (await params).id
    console.log(id)
    try {
        return NextResponse.json({message: "success", success: true}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}

export async function DELETE(params: Promise<{id: string}>){
    const id = (await params).id
    console.log(id)
    try {
        return NextResponse.json({message: "success", success: true}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}