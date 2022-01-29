var firstName = 'Max';
var age = 29;
var hasHobbies = true;

age = 30;



const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );

  
};

//const add = (a,b) =>  a + b;
//const addOne = a => a + 1;
const addRandom = () => 1 + 2;

//console.log(add(1,2));
//console.log(addOne(1));
console.log(addRandom());


console.log(summarizeUser(firstName, age, hasHobbies));

const person = {
    Fname: 'Max',
    Age: 29,
    greet(){
        console.log('Hi, I am ' + this.Fname);
    
    }
};

const printName = ({ Fname }) => {
  console.log(Fname);
}
printName(person);

const { Fname, Age } = person;
console.log(Fname, Age);

const hobbies = ['Sports', 'Cokking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);


// const hobbies = ['Sports', 'Cooking'];
//for (let hobby of hobbies) {
// console.log(hobby);
//}
//console.log(hobbies.map(hobby => 'Hobby:' + hobby));
//console.log(hobbies);

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...arg) => {
//     //return [arg1, arg2, arg3];
// };

// console.log(toArray(1,2,3,4));