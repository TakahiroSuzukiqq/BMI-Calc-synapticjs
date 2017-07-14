//learn grade of wine from components of wine
var svm = require('node-svm');
var clf = new svm.CSVC();        //CSV class??

//read the data
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('wine.json'));
data = shuffle(data);     //shuffle the data

//seperate the data to training and testing one
const test_n = Math.floor(data.length * 0.7);
const train_a = data.slice(0, test_n);
const test_a = data.slice(test_n);

//training the data
clf.train(train_a)
  .done(myTest);

//testing the data
function myTest() {
  //test one by one
  let ok = 0, count = 0;
  for (var i = 0; i < test_a.length; i++) {
     in_a = test_a[i][0];
     out_v = test_a[i][1];
     predict = clf.predictSync(in_a);
     if (out_v == predict) ok++;
     count++;
   }
    console.log("Accuracy rate=", ok / count, "=", ok, "/", count);
 } 

 //shuffle the data
 function shuffle(array) {
    var n = array.length, t, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n] = array[i];
      array[i] = t;
    }
    return array;
  }