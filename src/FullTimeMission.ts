import { Mission } from "./Mission";

export class FullTimeMission extends Mission {
  constructor(
    id: number | undefined,
    name: string,
    startDate: string,
    endDate: string,
    teachers: string[],
    students: string[],
    module: string
  ) {
    super(id, name, startDate, endDate, teachers, students, module);
  }
}

const mission = new FullTimeMission(
  123,
  "Carlos",
  "25/12/1923",
  "25/12/1993",
  [],
  [],
  "Alou"
);

mission.getStudents()
