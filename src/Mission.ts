import moment from "moment";
import { Teacher } from "./Teacher";
import Student from "./Student";

import { FileManager } from "./FileManager";

export abstract class Mission {
  constructor(
    protected name: string = "",
    protected id: number,
    protected startDate: string,
    protected endDate: string,
    protected teachers: Teacher[] = [],
    protected students: Student[] = [],
    protected currentModule: number | undefined
  ) {}

  getStudents(): Student[] {
    const students = new FileManager("students.json").readFile();
    console.log(students);
    return students;
  }

  getStartDate(): string {
    return this.startDate;
  }

  getEndDate(): string {
    return this.endDate;
  }

  getCurrentModule(): number | undefined {
    return this.currentModule;
  }

  getTeachers(): Teacher[] | Teacher {
    return this.teachers;
  }

  addStudents(newStudent: Student, missionId: number): void {
    try {
      const fileManager = new FileManager("./missions.json");
      const allMissions: Mission[] = fileManager.readFile();
      const singleMission: Mission | undefined = allMissions.find(
        (mission: Mission) => mission.id === missionId
      );
      if (singleMission !== undefined) {
        singleMission.students.push(newStudent);
        fileManager.writeFile(allMissions);
        console.log(
          "Estudante",
          newStudent.name,
          "adicionado com sucesso à turma",
          singleMission.name,
          "identificação",
          singleMission.id
        );
      }
    } catch (error) {}
  }

  addTeachers(newTeacher: Teacher, missionId: number): void {
    try {
      const fileManager = new FileManager("./missions.json");
      const allMissions: Mission[] = fileManager.readFile();

      const singleMission: Mission | undefined = allMissions.find(
        (mission: Mission) => mission.id === missionId
      );

      if (singleMission !== undefined) {
        singleMission.teachers.push(newTeacher);
        fileManager.writeFile(allMissions);
        console.log(
          "Professor",
          newTeacher.name,
          "adicionado com sucesso à turma",
          singleMission.name,
          "identificação",
          singleMission.id
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  setName(name: string): void {
    this.name = name;
  }

  // findMission(missionId: number): Mission | undefined {
  //   try {
  //     const fileManager = new FileManager("./missions.json");
  //     const allMissions: Mission[] = fileManager.readFile();

  //     const singleMission: Mission | undefined = allMissions.find(
  //       (mission: Mission) => mission.id === missionId
  //     );
  //     return singleMission;
  //   } catch (error) {
  //     console.log("Não foi encontrada a missão com o id", missionId);
  //   }
  //   return undefined
  // }
}
