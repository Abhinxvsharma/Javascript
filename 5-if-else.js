// ---- if / else ----
const totalTodos = 5;
const doneTodos = 5;

if (doneTodos === totalTodos) 
{
  console.log("Sab kaam ho gaya!");
} 
else
{
  console.log(`Abhi ${totalTodos - doneTodos} kaam bache hain`);
}

const daysLeft = 1;

if (daysLeft === 0)
{
  console.log("Aaj hi karna hai!");
} else if (daysLeft <= 2)
{
  console.log("Jaldi karo, time kam hai");
} else
{
  console.log("Aaram se, time hai");
}