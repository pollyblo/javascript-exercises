const findTheOldest = function (arr) {
   for (let people of arr) {
      if (typeof people.yearOfDeath == 'undefined') {
         people.yearOfDeath = new Date().getFullYear();
      }
      console.log(people.yearOfDeath);
   }
   const arrSorted = arr.sort((a, b) => {
      const lastGuy = a.yearOfDeath - a.yearOfBirth;
      const nextGuy = b.yearOfDeath - b.yearOfBirth;
      return lastGuy > nextGuy ? -1 : 1;
   });

   return arrSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
