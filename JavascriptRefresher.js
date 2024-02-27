// Revisiting Variables 

// console.log("Hello world");

// *********************** Variables store values *********************
// Variables :  Variables are Data Containers 

// let userMessage = "Hello World";
// const message ="Hi"

// console.log(userMessage);
// console.log(message);

// **************** Operators ************************ 

// console.log(2+1);
// console.log("Hello" + "World");
// console.log(20-10);
// console.log(20/10);
// console.log(2*5);
// console.log(10===10);
// console.log(2<=3);
// console.log(3>=2);

// if(10===10){
//     console.log("works");
// }

// ********************* Functions **************************

// 1. Creating Functions using function keyword 

// function greet() {
//     console.log("This is named function");
// }

// 2. Parameterized function 

// function greetUser(userName, message){
//     console.log(userName);
//     console.log(message);
// }
// adding the default values to parameter 
// function greetUserDef(userName, message="Hello"){
//     console.log(userName);
//     console.log(message);
// }

// 3. Function with return keyword 

// function greetUserRet(userName,message){
//     return "Hi i am "+ userName+" "+message;
// }

// invoking the function 

// greet();
// greetUser("Sneha", "Hello");
// greetUserDef("Sneha"); //Without providing second parameter value. It will take the default value given while creating the function.
// greetUserDef("Santhosh", "Hello, Whatsup");

//When invoking the function wirth return keyword it should be stored in a variable or invoke the function inside console.log

// console.log(greetUserRet("Sneha","Hello"));
// const greetings = greetUserRet("Chukku","Welcom Home");
// console.log(greetings);

// Arrow Function

// const greetArrow = (userName,message) => {
//     console.log("Hello");
//     return userName +" "+ message;
// }

// console.log(greetArrow("Sneha","Good Moring"));


// Revisiting Objects 

// const user ={
//     name : "Sneha",
//     age : 20,
//     greet(){
//         console.log("Hello")
//         console.log(this.age);
//     }
// };

// console.log(user.name);
// user.greet();

// class User { 

//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log('Hi')
//     }
// }

// const user1=new User('Santhosh',38);
// console.log(user1);
// const user2=new User('Samantha',4);
// console.log(user2)

// Arrays and Array Methods.

// const hobbies =["sports", "cooking", "shopping"];
// console.log(hobbies);
// console.log(hobbies[1]);

//Some methods in Array

// 1.push

// hobbies.push("working")

// console.log(hobbies);

// 2. findIndex 

// const index = hobbies.findIndex((item)=>{
//     return item === "sports"
// });

// console.log(index)

// 3. map method 

// const editedHobbies = hobbies.map((item) => {
// return item + "!"
// });

// console.log(editedHobbies);

// Destructuring 

// const userNameData = ["Sneha", "Samson"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// instead of above code we can shortend the code by destructuring the array 

// const[firstName , lastName] = ["Sneha", "Samson"];
// console.log(firstName);
// console.log(lastName);

// Destructuring can be done for objects also 

// - Destructuring in Object must contain same name as property name but it is not same in Array
// - By giving the alias name to the property we can use the alias name to access the property.

// const {name,age} = {
//     name:"Santhosh",
//     age:37
// };

// console.log(name);

// const {name:userName,age:userAge} = {
//     name:"Santhosh",
//     age:37
// };
// console.log(userName);
// console.log(userAge);


// ******************* Spread Operator ******************** 

// const hobbies =["sports", "cooking", "shopping"];
// const newHobbies =["Travelling"];

// const mergedHobbies = [...hobbies , ...newHobbies]
// console.log(mergedHobbies);

// const user = {
//     name: "Sneha",
//     age: 29
// };

// const extendedUser = {
//     isAdmin : true,
//     ...user
// }

// console.log(extendedUser);

// ************************** Revisiting Control Statements ******************* 

// const password = prompt('Your Password');
// if(password === "Hello") {
//     console.log("Password correct")
// }
// else if (password === "hello") {
//     console.log("Password correct")
// }

// else { 
//     console.log("Access Denied")
// }


// const hobbies =["sports", "cooking", "shopping"];

// for (const hobby of hobbies) { 
//     console.log(hobby);
// }


// ********************** Functions as Values **************************** 

// function handleTimeout () {
//     console.log("Timed out")
// }


// const handleTimeout2 = () => {
//     console.log("Timed out..... again");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//     console.log("More timing out .....");
// },4000);

// function greeter(greetFn){
//     greetFn();
// }

// greeter(() => console.log("Hello"))


// Defining Functions inside of Functions : 

// function init() {
//     function greet(){
//         console.log("Hi")
//     }

//     greet();
// }

// init();

// ****************** Reference Vs Primitive Values *********************** 

// let userMessage = "Hello";
// userMessage = 'Hello there';

// userMessage = userMessage.concat(" How are you");
// console.log(userMessage);