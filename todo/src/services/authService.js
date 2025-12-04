//signup, signIn , forgot password

import axiosinstance from "../apis/axiosinstance";
import { API_END_POINT } from "../constants/endpoints";


export const signUpApi = async (data) => {
  return await axiosinstance.post(API_END_POINT.SIGN_UP, data);

};

export const signInApi = async (data) => {
  return await axiosinstance.post(API_END_POINT.SIGN_IN, data);

};
