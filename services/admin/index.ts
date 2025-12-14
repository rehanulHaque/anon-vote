import { AdminVoteItem } from "@/types";
import axios from "axios"

export const getAdminData = async (): Promise<{ data: AdminVoteItem[], message: string }> => {
    const response = await axios.get("/api/admin")
    return {
        data: response.data.data,
        message: response.data.message
    }
}