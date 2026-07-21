// interface User{
//     firstName:string;
//     lastName:string;
//     age?:number;
//     getUsername?:()=>string
//     getKeys?:()=>{}
// }
// const user1:User={
//  firstName: "Sudip",
//  lastName: "Khadka"
// }
// const user2:User={
//  firstName: "Phoenix",
//  lastName: "Devs",
//  age:21
// }


// //task1
// function getUsername(this:User):string{
//     return `${this.firstName} ${this.lastName}`
// }
// user1.getUsername=getUsername;
// console.log(user1.getUsername())
// //task2
// function getKeys(obj:User):void{
//     for(const keys in obj){
//         console.log(keys)
//     }
// }
// getKeys(user1)

// //task3
// const obj2={...user1,...user2}//last obj overrides the values of previous obj if properties collide
// console.log(obj2)
// //task4
// console.log(user1?.address)