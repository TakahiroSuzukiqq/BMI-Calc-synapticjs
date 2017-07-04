//read and normalize wine data
const WINE_FILE = "wine.csv";
const JSON_FILE = "wine.json";
const fs = require('fs');

//read the file
let csv = readCSV(WINE_FILE);

//normalize the data
//look up minvalue and maxvalue
const maxv = [];
const minv = [];
for (var i = 0; i <= 13; i++) {
  maxv.push(Number.MIN_VALUE);
  minv.push(Number.MAX_VALUE);
}
for (var i = 0; i < csv.length; i++) {
  let row = csv[i];
  for (var c = 1; c <= 13; c++) {
    let v = row[c];
    if (maxv[c] < v) { maxv[c] = v; }
    if (minv[c] > v) { minv[c] = v; }
  }
}

//set each value within the scope of 0 - 1  
for (let i = 0; i < csv.length; i++) {
  let row = csv[i];
  for (var c = 1; c <= 13; c++) {
    let range = maxv[c] - minv[c];
    row[c] = (row[c] - minv[c]) / range;
    if (0 <= row[c] && row[c] <= 1) {
    } else {
      console.log("[ERROR]", c, i, row[c], row);
    }
  }
}

//convert into JSON file
const data = [];
for (var i = 0; i < csv.length; i++) {
  let row = csv[i];
  let cl = parseInt(row[0]) - 1;
  data.push([row.slice(1), cl]);
}
fs.writeFileSync(JSON_FILE, JSON.stringify(data), "utf8");
console.log("Success!!");

 //the function reads CSV file
 function readCSV(filename, delimiter) {
   if (delimiter == undefined) delimiter = ',';
   text = fs.readFileSync(filename, "utf8");    //read csv file
   const lines = text.split("\n");              //delimit row by row
   lines.shift();                               //delete the front header
   const result = [];
   for (var i = 0; i < lines.length; i++) {
     let cells = lines[i].split(delimiter);    //delimit
     if (cells.length <= 1) continue;
     cells = cells.map(parseFloat);            //convert to real number
     result.push(cells);
   }
   return result;
 }
