import { VoteItem } from "@/types";
import axios from "axios"

export const getHomeData = async (): Promise<{ data: VoteItem[], message: string }> => {
    const response = await axios.get("/api/home")
    return {
        data: response.data.data,
        message: response.data.message
    }
}