import { GET } from "@/pages/api/teacher/session/route";
import { error } from "console";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function Home() {
  const router = useRouter();
  const [groups, setGroups] = useState<TeacherSession[]>();

  useEffect(() => {
    const getGroup = async () => {
      const data = await GET();
      console.log(data);
      setGroups(data);
    };

    getGroup();
    //console.log("hello");
  }, []);

  return (
    <div className="text-black w-screen p-5">
      <table className="table-auto">
        <thead>
          <tr className="bg-slate-400">
            <th>SLOT</th>
            <th>TIME</th>
            <th>SUBJECT</th>
            <th>CLASS</th>
            <th>ROOM</th>
            <th>HAS TAKEN</th>
            <th>EDIT</th>
          </tr>
        </thead>
        <tbody>
          {groups?.map((group) => (
            <tr key={group.sesId}>
              <td>{group.theIndex}</td>
              <td>{group.timeSlot.description}</td>
              <td>{group.subject}</td>
              <td>{group.group}</td>
              <td>{group.room.name}</td>
              <td>{group.attandence ? "taken" : "false"}</td>
              <td>
                <h2
                  className="text-cyan-400 cursor-pointer hover:underline"
                  onClick={() => {
                    router.push("/teacher/take-attendance");
                  }}
                >
                  EDIT
                </h2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
