import User from "./User";
import { FileManager } from './FileManager'
import { setFlagsFromString } from "v8";

enum SPECIALTY {
  REACT = 'REACT',
  REDUX = 'REDUX',
  CSS = 'CSS',
  TESTES = 'TESTES',
  TYPESCRIPT = 'TYPESCRIPT',
  POO = "PROGRAMACAO_ORIENTADA_A_OBJETOS",
  BACKEND = 'BACKEND'
}

export default class Teacher implements User {
  constructor(
    private speacialty: SPECIALTY[],
    public birthday: string,
    public email: string,
    public id: number,
    public name: string
  ) {
    const fileManagerTeacher = new FileManager("../teachers.json")
    fileManagerTeacher.writeFile(Teacher)
  }
  public getSpecialties() {
    return this.speacialty
  }
}