import { Mission } from "./Mission";

export class NightMission extends Mission {
  constructor(
    id: number | undefined,
    name: string, //"na-night"
    startDate: string,
    endDate: string,
    teachers: string[],
    students: string[],
    module: string
  ) {
    super(id, name, startDate, endDate, teachers, students, module);
  }
}

const mission = new NightMission(
  123,
  "Carlos",
  "25/12/1923",
  "25/12/1993",
  [],
  [],
  "Alou"
);

mission.getStudents();
