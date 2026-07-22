//Day4

// 1. Largest Number
// [5, 3, 10, 2]
// ↓
// 10

// const data:number[]=[5,3,10,2];
// const findLargestNumber=(data:number[]):number=>{
//     let largestNum=data[0];
//     for(let i=1;i<data.length;i++){
//         largestNum=Math.max(data[i],largestNum)
//     }
//     return largestNum
// }
// console.log(findLargestNumber(data))
// ________________________________________
// 2. Character Frequency
// "mississippi"
// ↓
// {
//   m:1,
//   i:4,
//   s:4,
//   p:2
// }
// const findCharFrequency=(str:string): Record<string, number> =>{
//     let result:Record<string,number>={}
//     for (const char of str) {
//         result[char] = (result[char] || 0) + 1;
//     }
//     return result;
// }
// ________________________________________
// 3. Implement
// myFilter()
// without using .filter().
// const filterOddNumbers=(data:number[]):number[]=>{
//     let result:number[]=[];
//     for(let i=0;i<data.length;i++){
//         if(data[i]%2===0){
//             result.push(data[i])
//         }
//     }
//         return result;
// }
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