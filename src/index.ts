import Student from "./Student";
import { Teacher, SPECIALTY } from "./Teacher";
import { NightMission } from "./NightMission";
import { FullTimeMission } from "./FullTimeMission";

new Student(["nadar", "brincar"], "25/02/1987", "student@gmail.com", "Mayara");
new Student(["voar", "ler"], "25/02/2001", "student1@gmail.com", "Lucas");
new Teacher(
  [SPECIALTY.REACT, SPECIALTY.POO, SPECIALTY.REDUX],
  "30/10/1993",
  "teacher@hotmail.com",
  "Oswaldo"
);
const mission1 = new NightMission(
  "Mello",
  1,
  "16/04/2020",
  "16/10/2020",
  [],
  [],
  2
);

mission1.createNightMission(mission1);

const mission2 = new FullTimeMission(
  "Mello",
  1,
  "16/04/2020",
  "16/10/2020",
  [],
  [],
  2
);

mission2.createFullTimeMission(mission2);
