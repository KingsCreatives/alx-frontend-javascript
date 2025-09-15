```markdown
# 0x04. TypeScript - ALX Frontend Project

This project introduces **TypeScript** through practical tasks that cover interfaces, classes, DOM manipulation, generics, namespaces, declaration merging, ambient modules, and nominal typing.  

The main goal is to strengthen type safety in JavaScript applications and understand how TypeScript integrates with real-world frontend development.

---

## 📌 Learning Objectives

By the end of this project, you should be able to:

- Explain **basic types** in TypeScript  
- Use **interfaces, classes, and functions** with strong typing  
- Work with the **DOM** using TypeScript  
- Implement **generic types**  
- Use and merge **namespaces & declarations**  
- Write **ambient type definitions** for external libraries  
- Understand **nominal typing** in TypeScript  

---

## 🛠️ Requirements

- Allowed editors: `vi`, `vim`, `emacs`, **Visual Studio Code**
- All files must end with a new line  
- All `.ts` files will be transpiled on **Ubuntu 18.04**  
- TypeScript version: `^3.6.4`  
- Code will be checked with **Jest 24.9.\***  
- No TypeScript compilation warnings or errors allowed  
- Config files:  
  - `package.json`  
  - `.eslintrc.js`  
  - `tsconfig.json`  
  - `webpack.config.js`  

---

## 📂 Project Structure

```

0x04-TypeScript/
│
├── task\_0/
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── .eslintrc.js
│
├── task\_1/
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
│
├── task\_2/
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
│
├── task\_3/
│   ├── js/interface.ts
│   ├── js/crud.d.ts
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
│
├── task\_4/
│   ├── js/main.ts
│   ├── js/subjects/Teacher.ts
│   ├── js/subjects/Subject.ts
│   ├── js/subjects/Cpp.ts
│   ├── js/subjects/Java.ts
│   ├── js/subjects/React.ts
│   ├── package.json
│   └── tsconfig.json
│
├── task\_5/
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
│
└── README.md

````

---

## 📚 Tasks Overview

### **Task 0 - Creating an Interface for a Student**
- Define a `Student` interface  
- Create two students and store in `studentsList`  
- Render a table with only `firstName` and `location`  

### **Task 1 - Teacher Interface**
- Create `Teacher` interface  
- Make `yearsOfExperience` optional  
- Allow extra attributes (like `contract`)  

### **Task 2 - Extending Teacher**
- Define `Directors` interface extending `Teacher`  
- Add `numberOfReports` property  

### **Task 3 - Printing Teachers**
- Define `printTeacherFunction` interface  
- Implement `printTeacher("John", "Doe") -> J. Doe`  

### **Task 4 - Writing a Student Class**
- `StudentClass` with `workOnHomework()` and `displayName()`  

### **Task 5 - Advanced Types (Part 1)**
- Define `TeacherInterface` and `DirectorInterface`  
- Create `Teacher` and `Director` classes implementing them  
- Write `createEmployee(salary)` factory function  

### **Task 6 - Functions Specific to Employees**
- Implement `isDirector()` type predicate  
- Implement `executeWork()` to call appropriate methods  

### **Task 7 - String Literal Types**
- Define type `Subjects = "Math" | "History"`  
- Implement `teachClass(todayClass)`  

### **Task 8 - Ambient Namespaces**
- Create `RowID`, `RowElement` types  
- Define type declarations in `crud.d.ts`  
- Use external `crud.js` functions (`insertRow`, `updateRow`, `deleteRow`)  

### **Task 9 - Namespaces & Declaration Merging**
- Use `Subjects` namespace for `Teacher`, `Subject`, `Cpp`, `Java`, `React` classes  
- Implement declaration merging for extra attributes  

### **Task 10 - Updating main.ts**
- Instantiate subjects and teacher  
- Log requirements & available teachers for each subject  

### **Task 11 - Nominal Typing**
- Define `MajorCredits` and `MinorCredits` interfaces with branding  
- Implement `sumMajorCredits()` and `sumMinorCredits()`  

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/alx-frontend-javascript.git
   cd alx-frontend-javascript/0x04-TypeScript
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Run tests (if configured):

   ```bash
   npm test
   ```

---

## 📸 Example Output

**Task 0 - Student Table**

| First Name | Location    |
| ---------- | ----------- |
| John       | New York    |
| Jane       | Los Angeles |

**Task 5 - createEmployee()**

```ts
console.log(createEmployee(200));
// Teacher
console.log(createEmployee(1000));
// Director
console.log(createEmployee('$500'));
// Director
```

---

## 🧠 What I Learned

* How **TypeScript improves type safety** in frontend projects
* The power of **interfaces, classes, and generics**
* Using **namespaces and declaration merging** for large-scale applications
* Writing **ambient type declarations** for third-party libraries
* The concept of **nominal typing** to distinguish structurally similar types

---

## 🔮 Next Steps / Improvements

* Add **unit tests** for each task using Jest
* Style Task 0’s student table with CSS
* Add **form input** to dynamically add students
* Explore **TypeScript with React** for more advanced frontend applications

