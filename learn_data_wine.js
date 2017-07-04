//read the synaptic.js lib
const synaptic = require('synaptic');
const Layer = synaptic.Layer;
const Network = synaptic.Network;
const Trainer = synaptic.Trainer;

//create each Layer
const inputLayer = new Layer(13);    //13 conditions like phenol, malic acid, alcohol, etc... 
const hiddenLayer = new Layer(110);  //this number can be anything
const outputLayer = new Layer(3);    //rating wine by 3 grade

//connect Layer and build the neural network
inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);
const wine_network = new Network({
   input: inputLayer,
   hidden: [hiddenLayer],
   output: outputLayer
 });

 //read the data
 const fs = require('fs');
 let data = JSON.parse(fs.readFileSync('wine.json'));
 data = shuffle(data);  //shuffle the data

 //seperate the data into training and testing data
 const test_n = Math.floor(data.length * 0.7);
 const train_a = data.slice(0, test_n);
 const test_a = data.slice(test_n);

 //training the data
 const trainer = new Trainer(wine_network);
 trainer.train(train_a, {
    rate: 0.2, 
    iterations: 50, 
    error: 0.1,
    cost: Trainer.cost.CROSS_ENTROPY
  });

  //test the data
  let ok = 0, count = 0;
  for (var i = 0; i < test_a.length; i++) {
     in_a = test_a[i].input;
     out_v = argmax(test_a[i].output);
     predict = argmax(wine_network.activate(in_a));
     if (out_v == predict) ok++;
     count++;
   }
  console.log("Accuracy rate=", ok / count, ok, "/", count);

  //shuffle the data
  function shuffle(array) { 
     var n = array.length, t, i;
     while (n) {
       i = Math.floor(Math.random() * n--);
       t = array[n];
       array[n] = array[i];
       array[i] = t;
     }
     return array;   
   }
 
  //return the biggest element number in n of array
  function argmax(n) {
     let v = Number.MIN_VALUE;
     let index = -1;
     for (let i = 0; i < n.length; i++) {
        if (v < n[i]) { index = i; v = n[i]; }
     }
     return index;
   }
