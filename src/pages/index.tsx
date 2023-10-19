import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="border-4 border-collapse border-r-amber-100">
      <h1 className="text-5xl">FPT University Academic Portal</h1>
      <div className="p-20">
        <button
          className="w-60 h-20 border border-r-8 bg-slate-400"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
