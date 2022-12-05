const findTheOldest = (people) => {
  let today = new Date();
  let currentYear = today.getFullYear();

  for (const person of people) {
    const age = (person.yearOfDeath - person.yearOfBirth) || (currentYear - person.yearOfBirth);
    person.age = age;
  }

  let oldest = people[0];

  for (const person of people) {
    if (oldest.age < person.age) {
      oldest = person;
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
