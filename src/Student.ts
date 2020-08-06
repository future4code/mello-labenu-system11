import User from "./User";
import { FileManager } from "./FileManager";

export default class Student implements User {
  constructor(
   private hobbies: string,
   public id: number,
   public birthday: string,
   public email: string,
   public name: string,
  ) {

  }

  public getHobbies() {
    return this.hobbies
  }
}