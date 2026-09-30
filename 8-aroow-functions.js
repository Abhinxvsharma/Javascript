// // ---- Arrow functions ----
// const add = (a,b) =>
// {
//     return a + b;
// };
// console.log(add(2,3))


// const double = (n)  => n * 2;
// console.log(double(5));



// // ---- Arrow functions ----
// const add = (a, b) => {
//   return a + b;
// };



const todoMessage = (text, isDone) => 
{
  if (isDone)   
  {
    return `[done] ${text}`;
  }
  return `[pending] ${text}`;
};

console.log(todoMessage("Doodh lana", true));
console.log(todoMessage("Sabzi lana", false));