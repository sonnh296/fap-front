import { AUTH_ID, COOKIE_NAME } from "@/constants";
import axios from "axios";
import { getCookie } from "cookies-next";
import { NextResponse } from "next/server";

export async function GET(): Promise<TeacherGroups[]> {
  const id = await getCookie(AUTH_ID);
  const token = await getCookie(COOKIE_NAME);

  if (!id || !token) {
    NextResponse.redirect("/login");
  }

  const { data } = await axios.get(
    `http://localhost:8080/api/v1/auth/group/teacher/${id}`,
    {
      headers: {
        authorization: "bearer " + token,
      },
    }
  );

  return data;
}
