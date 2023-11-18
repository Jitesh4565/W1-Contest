const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    var prof=data.filter(function(obj)
    {
        return obj.profession==="developer";
    });
   prof.forEach(function(obj){
    console.log(`Name:${obj.name},Age:${obj.age}`);
   });
    
  }
  
  // 2. Add Data
  function addData() {
    var newName=prompt("Enter Name:");
    var newAge=prompt("Enter your age");
    var newProfession=prompt("Enter your profession");

    var newObject ={
        name:newName,
        age:parseInt(newAge),
        profession:newProfession
    };
     data.push(newObject);
     console.log("New data added!");
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const filteredData = data.filter((person) => person.profession !== 'admin');
    console.log(filteredData);
    console.log("Updated Array:");
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const newData = [
      { name: "Jitesh", age: 22, profession: "Frontend Developer" },
      { name: "Amit", age: 29, profession: " Backend developer" },
    ];
    const concatenatedData = data.concat(newData);
    console.log(concatenatedData);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;
  console.log(average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const above25 = data.some((person) => person.age > 25);
    console.log(above25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(data.map((person) => person.profession))];
    console.log(professions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    const sortedData = [...data].sort((a, b) => a.age - b.age);
  console.log(sortedData);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const updatedData = data.map((person) => {
      if (person.name === 'john') {
        return { ...person, profession: 'manager' };
      }
      return person;
    });
    console.log(updatedData);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCount = data.reduce((count, person) => {
      count[person.profession] = (count[person.profession] || 0) + 1;
      return count;
    }, {});
    console.log(professionCount);
  }