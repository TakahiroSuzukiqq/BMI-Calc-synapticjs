//read the wine data and normalize
const WINE_FILE = "wine.csv";
const JSON_FILE = "wine.json";
const fs = require('fs');

//read the file
let csv = readCSV(WINE_FILE);

//normalize the data(標準正規分布計算)
//search min value and max value
const maxv = [];
const minv = [];
for (var i = 0; i <= 13; i++) {
    maxv.push(Number.MIN_VALUE);
    minv.push(Number)
 }
for (var i = 0; i <= 13; i++) {
   let row = csv[i];
   for (var c = 1; c <= 13; c++) {
     let v = row = csv[c];
     if (maxv[c] < v) { maxv[c] = v;}
     if (minv[c] > v) { min[c] = v;}       
   }
 }

//setup each value between the scpoe of 0 - 1
for (let i = 0; i < csv.length; i++) {
  let row = csv[i];
  for (var c = 1; c <= 13; c++) {
      let range = maxv[c] - minv[c];
      row[c] = (row[c] -minv[c]) / range;
      if ( 0 <= row[c] && row[c] <= 1) {
      } else {
       console.log("[ERROR]", c, i, row[c], row);
     }
   }
 }

const pat = [];
for (var i = 0; i < 3; i++) {
    pat[i] = [0, 0, 0];
    pat[i][i] = 1;
 }

 //convert into JSON format
 const data = [];
 for (var i = 0; i < csv.length; i++) {
   let row = csv[i];
   let cl = parseInt(row[0]) -1;
   let a = {
      "input": row.slice(1),
      "output": pat[cl]
    };
    console.log(a);
    data.push(a);
  }
 fs.writeFileSync(JSON_FILE, JSON.stringify(data), "utf8");
 console.log("OK");

 //the function which reads CSV file
 function readCSV(filename, delimiter) {
    if (delimiter == undefined) delimiter = ',';
    text = fs.readFileSync(filename, "utf8"); //read CSV file
    const lines = text.split("\n");           //一行区切
    lines.shift();                            //delete the head of header
    const result = [];
    for (var i = 0; i < lines.length; i++) {
      let cells = lines[i].split(delimiter); //convert into real number
      result.push(cells);
    }
    return result;
 }