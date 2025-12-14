import { AdminVote } from "@/types";
import axios from "axios"

export const getAdminVoteData = async (id: string): Promise<{ data: AdminVote, message: string }> => {
    const response = await axios.get(`/api/admin/vote/${id}`)
    return {
        data: response.data.data,
        message: response.data.message
    }
}

export const deleteAdminVote = async (id: string): Promise<{ message: string, success: boolean }> => {
    const response = await axios.delete(`/api/admin/vote/${id}`)
    return {
        message: response.data.message,
        success: response.data.success
    }
}

export const endAdminVote = async (id: string): Promise<{ message: string, success: boolean }> => {
    const response = await axios.put(`/api/admin/vote/${id}`)
    return {
        message: response.data.message,
        success: response.data.success
    }
}