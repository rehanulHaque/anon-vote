import { VoteSession } from "@/types";
import axios from "axios"

export const getVoteData = async (id: string): Promise<{ data: VoteSession, message: string }> => {
    const response = await axios.get(`/api/vote/${id}`)
    return {
        data: response.data.data,
        message: response.data.message
    }
}

export const publicVote = async (id: string, optionId: string): Promise<{ message: string, success: boolean, optionId: string }> => {
    const response = await axios.post(`/api/vote/${id}`, { optionId })
    return {
        message: response.data.message,
        success: response.data.success,
        optionId: response.data.optionId
    }
}