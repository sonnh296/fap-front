import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const clickAttendanceLink = () => {
    router.push("/teacher/attendance");
  };

  return (
    <div className="w-60 m-auto">
      <a
        className="text-cyan-400 cursor-pointer hover:underline"
        onClick={clickAttendanceLink}
      >
        take attendance
      </a>
    </div>
  );
}
