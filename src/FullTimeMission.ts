import { Mission } from "./Mission";
import { FileManager } from "./FileManager";

export class FullTimeMission extends Mission {
  public createFullTimeMission(mission: FullTimeMission): void {
    try {
      const fileManager = new FileManager("./missions.json");
      const allMissions: Mission[] = fileManager.readFile();

      this.id = allMissions.length + 1;

      const newMission = {
        name: this.name,
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
