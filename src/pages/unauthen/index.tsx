import { useRouter } from "next/router";

export default function UnauthenPage() {
  const router = useRouter();
  return (
    <div>
      <h1>Expired session, please login again</h1>
      <h1
        onClick={() => {
          router.push("/login");
        }}
      ></h1>
    </div>
  );
}
