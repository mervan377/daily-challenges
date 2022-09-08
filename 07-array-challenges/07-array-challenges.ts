interface IStudent {
  id: number;
  name: string;
  age: number;
  gender: number;
}

interface IPerson {
  namesurname: string;
}

const studentList: IStudent[] = [
  {
    id: 1,
    name: "Ali",
    age: 22,
    gender: 0,
  },
  {
    id: 2,
    name: "Ayse",
    age: 17,
    gender: 1,
  },
  {
    id: 3,
    name: "Ahmet",
    age: 27,
    gender: 0,
  },
  {
    id: 4,
    name: "Hatice",
    age: 19,
    gender: 1,
  },
];

const personListFinder = (students: IStudent[]): IPerson[] => {
  const personList: IPerson[] = students
    .filter((student) => student.age < 20)
    .map((student) => {
      return {
        namesurname: student.name,
      };
    });

  return personList;
};

const s = personListFinder(studentList);
console.log(s.pop());
