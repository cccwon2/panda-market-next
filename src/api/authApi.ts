import { LoginFormValues, SignupFormValues } from "../types/auth-types";

export const requestSignup = async (
  data: SignupFormValues
): Promise<unknown> => {
  const response = await fetch(
    "https://panda-market-api.vercel.app/auth/signUp",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const requestLogin = async (data: LoginFormValues): Promise<unknown> => {
  const response = await fetch(
    "https://panda-market-api.vercel.app/auth/signIn",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};