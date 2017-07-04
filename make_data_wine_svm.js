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
   let row = csv[i];
   for (var c = 1; c <= 13; c++) {
     let rande = maxv[c] - minv[c];
     row[c] = (row[c] - minv[c]) / range;
     if (0 <= row[c] && row[c] <= 1) {
        } else {
         console.log("[ERROR", c, i, row[c], row);
      }
    }
  }
