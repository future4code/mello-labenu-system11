import User from "./User";
import { FileManager } from './FileManager'

export enum SPECIALTY {
  REACT = 'REACT',
  REDUX = 'REDUX',
  CSS = 'CSS',
  TESTES = 'TESTES',
  TYPESCRIPT = 'TYPESCRIPT',
  POO = "PROGRAMACAO_ORIENTADA_A_OBJETOS",
  BACKEND = 'BACKEND'
}

export class Teacher implements User {
  public id: number
  constructor(
    private specialties: SPECIALTY[],
    public birthday: string,
    public email: string,
    public name: string
  ) {
    try {
      const fileManager = new FileManager("./teachers.json")
      const allTeachers: Teacher[] = fileManager.readFile()
      this.id = allTeachers.length + 1
  
      const newTeacher = {
        name: this.name,
        id: this.id,
        email: this.email,
        birthday: this.birthday,
        specialties: this.specialties,
      }
      fileManager.writeFile([...allTeachers, newTeacher])
      console.log('Professor(a) ' + newTeacher.name + ' criado(a) com sucesso')
    } catch (error) {
      throw new Error('erro ao criar novo professor')
    }
  }
  public getSpecialties() {
    return this.specialties
  }
}