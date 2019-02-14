'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

-------------------------------------------First Solustion------------------------------------------------------------------
//Map the tasks to durations in hours.
let tasksInHour = maartjesTasks.map(tasks => tasks.duration / 60);

//Filter out everything that took less than two hours
let longTasks = tasksInHour.filter(task => {
  return task >= 2;
});

//Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up
let profits = longTasks.map(task => {
  return task * 20;
});

let totalProfit = 0;
profits.forEach(function(profit) {
  totalProfit += profit;
});

//Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34
let roundedTotalProfit = totalProfit.toFixed(2);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)
console.log(`Maartje has earned €${roundedTotalProfit}`);


------------------------------------------Second Solution-------------------------------------------------------------------
function computeEarnings(tasks, hourlyRate) {
    let profits = [];
    tasks.forEach(function(task) {
      let duration = task.duration / 60;
      if (duration >= 2) {
        profits.push(duration * hourlyRate);
      }
    });
    let totalProfits = profits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return totalProfits;
  }

  // eslint-disable-next-line no-unused-vars
  const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate).toFixed(2);

  // add code to convert `earnings` to a string rounded to two decimals (euro cents)
  console.log(`Maartje has earned €${earnings}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
