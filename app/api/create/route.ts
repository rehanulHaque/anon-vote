import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log(body)
        return NextResponse.json({
            message: "success",
            success: true,
            voteId: "vote_123",
            shareUrl: "/vote/vote_123",
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}