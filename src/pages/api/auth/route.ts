import { setCookie } from "cookies-next";
import { AUTH_ID, COOKIE_NAME } from "@/constants";
import axios from "axios";

const AUTH_API = "http://localhost:8080/api/v1/auth/authenticate";

const MAX_AGE = 60 * 60 * 24;

export async function POST(request: RequestAuthen): Promise<AuthResponse> {
  const { data } = await axios.post(AUTH_API, request);

  if (!data) {
    return {
      role: null,
      error: "unauthorized",
    };
  }

  setCookie(COOKIE_NAME, data.token, { maxAge: MAX_AGE });
  setCookie(AUTH_ID, data.id, { maxAge: MAX_AGE });

  return {
    role: data.role,
    error: null,
  };
}
