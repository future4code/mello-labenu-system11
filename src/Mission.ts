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

  addStudents(newStudent: Student): Student[] | Student {
    this.students.push(newStudent);
    return this.students;
  }

  addTeachers(newTeacher: Teacher): Teacher[] {
    this.teachers.push(newTeacher);
    return this.teachers;
  }

  setName(name: string): void {
    this.name = name;
  }
}
