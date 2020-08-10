import User from "./User";
import { FileManager } from "./FileManager";
import moment from "moment";

export default class Student implements User {
  public id: number;
  constructor(
    public name: string,
    public email: string,
    public birthday: string,
    private hobbies: string[],
    private fileManager: FileManager
  ) {
    try {
      const allStudents: Student[] = fileManager.readFile();
      this.id = allStudents.length + 1;

      const newStudent = {
        name: this.name,
        id: this.id,
        email: this.email,
        birthday: this.birthday,
        hobbies: this.hobbies,
      };
      fileManager.writeFile([...allStudents, newStudent]);
      console.log("Estudante " + newStudent.name + " criado(a) com sucesso");
    } catch (error) {
      throw "problema ao cadastrar estudante";
    }
  }

  public getHobbies() {
    return this.hobbies;
  }

  public getAgeById(studentId: number): void {
    try {
      const fileManager = new FileManager("./students.json");
      const allStudents: Student[] = fileManager.readFile();
      const singleStudent: Student | undefined = allStudents.find(
        (student: Student) => student.id === studentId
      );
      if (singleStudent !== undefined) {
        const studentBirthday: string = singleStudent.birthday;
        const birthday: moment.Moment = moment(
          singleStudent.birthday,
          "DD/MM/YYYY"
        );
        const diff: number = moment().diff(birthday, "years");
        console.log(diff);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
