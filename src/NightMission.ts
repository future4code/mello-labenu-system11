import { Mission } from "./Mission";
import { FileManager } from "./FileManager";
import Student from "./Student";
import { Teacher } from "./Teacher";

export class NightMission extends Mission {
  // constructor(
  //   id: number | undefined,
  //   name: string,
  //   startDate: string,
  //   endDate: string,
  //   teachers: Teacher[],
  //   students: Student[],
  //   currentModule: number
  // ) {
  //   super(id, startDate, endDate, teachers, students, currentModule);

  // }

  public createNightMission(mission: NightMission): void {
    try {
      const fileManager = new FileManager("./missions.json");
      const allMissions: Mission[] = fileManager.readFile();

      this.id = allMissions.length + 1;

      const newMission = {
        name: this.name + "-na-night",
        id: this.id,
        startDate: this.startDate,
        endDate: this.endDate,
        teachers: this.teachers,
        students: this.students,
        currentModule: this.currentModule,
      };

      fileManager.writeFile([...allMissions, newMission]);
      console.log("Missão", newMission.name, "criada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }
}
