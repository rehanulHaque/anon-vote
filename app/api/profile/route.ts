import { userProfile, voteData } from "@/data/fakeData";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const profileData = userProfile
        const userCreatedVotes = voteData
        return NextResponse.json({message: "success", profileData, userCreatedVotes}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}