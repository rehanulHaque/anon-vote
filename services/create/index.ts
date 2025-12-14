import { CreateVotePayload } from "@/types"
import axios from "axios"

export const createVote = async (payload: CreateVotePayload): Promise<{  message: string, success: boolean, voteId: string, shareUrl: string }> => {
    const response = await axios.post("/api/create", {...payload})
    return {
        message: response.data.message,
        success: response.data.success,
        voteId: response.data.voteId,
        shareUrl: response.data.shareUrl
    }
}