import User from "./User";
import { FileManager } from "./FileManager";
import moment from 'moment'

export default class Student implements User {
  public id: number
  constructor(
    public name: string,
    public email: string,
    public birthday: string,
    private hobbies: string[],
    private fileManager: FileManager,
  ) {
    try {
      const allStudents: Student[] = fileManager.readFile()
      this.id = allStudents.length + 1
  
      const newStudent = {
        name: this.name,
        id: this.id,
        email: this.email,
        birthday: this.birthday,
        hobbies: this.hobbies,
      }
      fileManager.writeFile([...allStudents, newStudent])
      console.log('Estudante ' + newStudent.name + ' criado(a) com sucesso')
    } catch (error) {
      throw 'problema ao cadastrar estudante'
    }
  }

  public getHobbies() {
    return this.hobbies
  }
}