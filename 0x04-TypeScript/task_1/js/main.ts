interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


interface Directors extends Teacher{
  numberOfReports:number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface printTeacherParams{
  firstName : string;
  lastName : string
}

function printTeacher({firstName, lastName} : printTeacherParams){
  return `${firstName[0]}. ${lastName}`
}

console.log(printTeacher({firstName: "Kofi", lastName: "Mintah"}))