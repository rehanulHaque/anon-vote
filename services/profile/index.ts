import { UserProfile, VoteSummary } from "@/types";
import axios from "axios"

export const getUserProfileData = async (): Promise<{ profileData: UserProfile,userCreatedVotes: VoteSummary[] , message: string }> => {
    const response = await axios.get(`/api/profile`)
    return {
        profileData: response.data.profileData,
        userCreatedVotes: response.data.userCreatedVotes,
        message: response.data.message
    }
}