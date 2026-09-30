// ---- forEach & map ----
const tasks = ["Doodh lana", "Sabzi lana", "Gym jana"];

tasks.forEach((task) => {
  console.log(`Karna hai: ${task}`);
});

tasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task}`);
});

const bigTasks = tasks.map((task) => task.toUpperCase());
console.log(bigTasks);

const taskLengths = tasks.map((task) => task.length);
console.log(taskLengths);

console.log(tasks);