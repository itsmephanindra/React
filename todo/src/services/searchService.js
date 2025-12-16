import axiosinstance from "../apis/axiosinstance"
import { API_END_POINT } from "../constants/endpoints"

export const searchApi=async (data)=>{
  return await axiosinstance.post(API_END_POINT.SEARCH,data)
}
