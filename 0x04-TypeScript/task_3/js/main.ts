import {RowID, RowElement} from './interface'
import * as CRUD from './crud'

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}


function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher){
 return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks()
}

type Subjects =  "Math" | "History"

function teachClass(todayClass: Subjects){
  if(todayClass === "Math"){
    return "Teaching Math"
  }else if (todayClass === "History"){
    return "Teaching History"
  }
}


const row: RowElement = {
firstName : "Guillaume",
lastName : "Salva"
}


const newRowId: RowID = CRUD.insertRow(row)

const updatedRow:RowElement = {
  age: 23,
  ...row
}