//generate height, weight, BMI data
const DATA_SIZE = 50000
const data = []

//generate the data
for (var i = 0; i < DATA_SIZE; i++) {
  let height = rand(120, 200);
  let weight = rand(30, 100);
  let bmi = calc_bmi(height, weight);
  let f = {
    'input': [height, weight],
    'output': bmi ? [0, 1] : [1, 0]
  };
  data.push(f);
}

//store the data into the file
data_json = JSON.stringify(data);
const fs = require('fs');
fs.writeFileSync("bmi.json", data_json);
console.log("ok, saved");

//calculate BMI and judge whether obesity or not
function calc_bmi(height, weight) {
  let m = height / 100;
  let v = weight / (m * m);
  return (v > 25);
}

//generate arbitrary scope of random number
function rand(n, m) {
  let range = m - n + 1;
  return Math.floor(Math.random() * range + n)
}