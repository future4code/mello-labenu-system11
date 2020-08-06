import moment from "moment";

import { FileManager } from "./FileManager";

export abstract class Mission {
  constructor(
    protected id: number | undefined,
    protected name: string,
    protected startDate: string,
    protected endDate: string,
    protected teachers: string[],
    protected students: string[],
    protected module: string
  ) {}

  getStudents(): string[] {
    const students = new FileManager("students.json").readFile();
    console.log(students);
    return students;
  }

  getTeachers(): string[] {
    return this.teachers;
  }

  setStudents(newStudent: string): string[] {
    this.students.push(newStudent);
    return this.students;
  }

  setTeachers(newTeacher: string): string[] {
    this.teachers.push(newTeacher);
    return this.teachers;
  }

  //   createNewMission(shift: string, information: string[]): {
  //       if (shift === "night") {
  //         cria missão de noite
  //       } else {
  //           cria missão de tarde
  //       }
  //   };
}
