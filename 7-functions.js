// ---- Functions ----
// function greet(userName) {
//   console.log(`Hello ${userName}, welcome to Todo app`);
// }

// greet("Abhinav");
// greet("Riya");


// function remainingTodos(total, done) {
//   const left = total - done;
//   return left;
// }

// const result = remainingTodos(5, 2);
// console.log(`Bache hue: ${result}`);

// console.log(`Bache hue: ${remainingTodos(10, 4)}`);


//---Sahi tarika A — parameters ke saath (recommended)

function introduce(myName, age)
{
  console.log(`Mera naam ${myName} hai aur meri umar ${age} saal hai`);
}

introduce("abhinav", 23);
introduce("Riya", 30);



//---Sahi tarika B — agar values fix hi rakhni hain

function introduceAbhinav() {
  const myName = "abhinav";
  const age = 23;
  console.log(`Mera naam ${myName} hai aur meri umar ${age} saal hai`);
}

introduceAbhinav();