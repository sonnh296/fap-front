import React, { useState } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { POST } from "../api/auth/route";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { push } = useRouter();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await POST(formData);

      if (response.error) {
        setError(response.error);
      } else if (response.role === "TEACHER") {
        push("/teacher/home");
      } else if (response.role === "STUDENT") {
        push("student");
      }
    } catch (e) {
      const error = e as AxiosError;
      alert(error.message);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 w-1/2 m-auto mt-10 p-5"
      >
        <label>username</label>
        <input
          className="m-4"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label>password</label>
        <input
          className="m-4"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button className="border-b-blue-500" type="submit">
          Login
        </button>
      </form>
      {error ? <h1>{error}</h1> : <></>}
    </div>
  );
};

export default Login;
