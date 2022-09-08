const harryPotter: {
  name: string;
  id: number;
  age: number;
  department: string;
  missions: { missinon: string };
}[] = [
  {
    id: 1,
    name: "Harry Potter",
    age: 14,
    department: "Gryffindor",
    missions: {
      missinon: "Kill Voldemort",
    },
  },
  {
    id: 2,
    name: "Albus Dumbledor",
    age: 899,
    department: "Gryffindor",
    missions: {
      missinon: "Keep safe eveyone",
    },
  },
  {
    id: 3,
    name: "Voldemort",
    age: 428,
    department: "Slytherin",
    missions: {
      missinon: "Kill Harry Potter",
    },
  },
  {
    id: 4,
    name: "Harmony",
    age: 14,
    department: "Gryffindor",
    missions: {
      missinon: "Safe Harry Potter",
    },
  },
  {
    id: 5,
    name: "Ronald Viesley",
    age: 14,
    department: "Gryffindor",
    missions: {
      missinon: "Safe Harry Potter",
    },
  },
];

const ageFilter = harryPotter.filter((data) => {
  return data.age > 250;
});

harryPotter.push({
  id: 6,
  name: "Mervan",
  age: 22,
  department: "Slytherin",
  missions: {
    missinon: "Learn ES6 Methods",
  },
});

const findName = harryPotter.findIndex((data) => {
  return data.name === "Mervan";
});
const findDep = harryPotter.findIndex((data) => {
  return data.department === "Slytherin";
});

harryPotter.splice(findName, 1, {
  id: 6,
  name: "Mero",
  age: 26,
  department: "Slytherin",
  missions: {
    missinon: "Learn ES6 Methods",
  },
});

const nameHarry = harryPotter.filter((data, key) => {
  return data.name === "Mero123";
});

nameHarry.forEach((data) => {
  console.log(data);
});

const filterVar = harryPotter.filter((data) => {
  return data.age > 15111 && data.department === "Gryffindor";
});

filterVar.forEach((data) => {
  console.log(data.name);
});

const mapHarry = harryPotter.map((data, key) => {
  return data.name;
});

mapHarry.forEach((data) => {
    console.log(data)
})