import { isAxiosError } from "axios";
import axiosInstance from "./axiosConfig";
import Cookies from "js-cookie";
import {
  SigninFormValues,
  SignupFormValues,
  AuthResponse,
} from "../types/auth";
import DefaultAvatar from "@/images/ui/ic_profile.svg";

const setUserImage = (image: string | null) => {
  if (image) {
    Cookies.set("userImage", image);
  } else {
    Cookies.set("userImage", DefaultAvatar.src);
  }
};

const setCookie = (name: string, value: string, expires: number) => {
  Cookies.set(name, value, { expires, secure: true, sameSite: "strict" });
};

export const signIn = async (
  formData: SigninFormValues
): Promise<AuthResponse | null> => {
  try {
    const response = await axiosInstance.post("/auth/signIn", formData);

    if (response.status === 400) {
      throw new Error("Invalid request");
    }

    const { accessToken, refreshToken, user } = response.data;
    const { id, nickname, image } = user;

    setCookie("accessToken", accessToken, 1 / 48); // 30분
    setCookie("refreshToken", refreshToken, 7); // 7일
    setCookie("userId", id.toString(), 1 / 48);
    setCookie("nickname", nickname, 1 / 48);
    setUserImage(image);

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error) && error.response?.status === 400) {
      console.error("400 Bad Request:", error.response.data);
      alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    } else {
      console.error("Unknown error occurred");
      alert("알 수 없는 오류가 발생했습니다");
    }

    return null;
  }
};

export const signUp = async (
  formData: SignupFormValues
): Promise<AuthResponse | null> => {
  try {
    const response = await axiosInstance.post("/auth/signUp", formData);

    if (response.status === 400) {
      throw new Error("Invalid request");
    }

    const { accessToken, refreshToken, user } = response.data;
    const { id, nickname, image } = user;

    setCookie("accessToken", accessToken, 1 / 48); // 30분
    setCookie("refreshToken", refreshToken, 7); // 7일
    setCookie("userId", id.toString(), 1 / 48);
    setCookie("nickname", nickname, 1 / 48);
    setUserImage(image);

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error) && error.response?.status === 400) {
      console.error("400 Bad Request:", error.response.data);
      alert("이메일 또는 닉네임이 이미 사용 중입니다.");
    } else {
      console.error("Unknown error occurred");
      alert("알 수 없는 오류가 발생했습니다");
    }

    return null;
  }
};

export const signOut = async () => {
  try {
    // 쿠키에서 토큰 및 사용자 정보 제거
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("userId");
    Cookies.remove("nickname");
    Cookies.remove("userImage");

    // Axios 인스턴스의 기본 헤더에서 Authorization 제거
    delete axiosInstance.defaults.headers.common["Authorization"];

    console.log("로그아웃 성공");
    // 로그아웃 후 필요한 추가 작업 수행 (예: 상태 초기화, 리다이렉션 등)
  } catch (error) {
    console.error("로그아웃 중 오류 발생:", error);
  }
};
