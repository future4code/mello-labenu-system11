import Student from "./Student";
import { Teacher, SPECIALTY } from "./Teacher";
import { FileManager } from "./FileManager";
import { FullTimeMission } from "./FullTimeMission";
import { NightMission } from "./NightMission";

const fileManagerStudents = new FileManager("./students.json");
const fileManagerTeacher = new FileManager("./teachers.json");

new Student(
  "Whellyda",
  "whellyda@gmail.com",
  "14/07/1998",
  ["estudar", "cozinhar"],
  fileManagerStudents
);
const student = new Student(
  "Lucas",
  "student1@gmail.com",
  "25/02/2001",
  ["voar", "ler"],
  fileManagerStudents
);

// const teacher = new Teacher(
//   "Oswaldo",
//   "teacher@hotmail.com",
//   "30/10/1993",
//   [SPECIALTY.REACT, SPECIALTY.POO, SPECIALTY.REDUX],
//   fileManagerTeacher
// );

// const mission1 = new NightMission(
//   "Mello",
//   1,
//   "16/04/2020",
//   "16/10/2020",
//   [],
//   [],
//   2
// );

// // mission1.createNightMission(mission1);

// const mission2 = new FullTimeMission(
//   "Mello",
//   3,
//   "16/04/2020",
//   "16/10/2020",
//   [],
//   [],
//   2
// );

// mission2.createFullTimeMission(mission2);

// mission1.addTeachers(teacher, 1);

// mission2.addStudents(student, 1);

student.getAgeById(100);
