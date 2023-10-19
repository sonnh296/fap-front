type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type RequestAuthen = {
  email: string;
  password: string;
};

interface AuthResponse {
  role: string | null;
  error: string | null;
}

interface TeacherGroups {
  gid: number;
  gname: string;
  year: number;
  semester: {
    name: string;
    id: number;
  };
  subject: {
    id: number;
    subjectName: string;
  };
}

interface TeacherSession {
  sesId: number;
  date_time: string;
  theIndex: number;
  room: {
    id: number;
    name: string;
  };
  timeSlot: {
    id: number;
    description: string;
  };
  teacher: {
    id: number;
    name: string;
    email: string;
  };
  attandence: boolean;
  subject: string;
  group: string;
}
