import Student from "./Student";
import {Teacher, SPECIALTY} from "./Teacher";
import {FileManager} from './FileManager'

const fileManagerStudents = new FileManager('./students.json')
const fileManagerTeacher = new FileManager('./teachers.json')

new Student('Whellyda', 'whellyda@gmail.com', '14/07/1998', ['estudar', 'cozinhar'], fileManagerStudents)
new Student('Lucas', 'student1@gmail.com', '25/02/2001', ['voar', 'ler'], fileManagerStudents)
new Teacher('Oswaldo', 'teacher@hotmail.com', '30/10/1993', [SPECIALTY.REACT, SPECIALTY.POO, SPECIALTY.REDUX], fileManagerTeacher)