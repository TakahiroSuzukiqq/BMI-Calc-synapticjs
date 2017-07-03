const synaptic = require('synaptic');
const Layer = synaptic.Layer;
const Network = synaptic.Network;
const Trainer = synaptic.Trainer;

//create each layer
const inputLayer = new Layer(2);    //2 input network 
const hiddenLayer = new Layer(30);  //30 hidden network
const outputLayer = new Layer(2);   //2 output network

//connect Layer and build nural newwork
inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);
const bmi_network = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer
});

 //reading training data 
 const fs = require('fs');
 const data = JSON.parse(fs.readFileSync('bmi.json'));

 //normalize above reed data within the scope of between 0 to 1
 let setInput = function(height, weight) {
   return [height / 200, weight / 100]
   };
   for (var i in data) {
    let v = data[i].input;
    data[i].input = setInput(v[0], v[1]);
  }

 //training the data
 const trainer = new Trainer(bmi_network);
 trainer.train(data, {
  rate: 0.2, iterations: 30, error: 0.1,
  shuffle: true, log: 1,
  cost: Trainer.cost.CROSS_ENTROPY
 });



 //testing the data
 test(150, 80);
 test(190, 50);
 test(160, 75);
 test(170, 50);

 //the data testing function
  function test(height, weight) {
  const labels = ["Standard", "Obesity"];
  let n = bmi_network.activate(setInput(height, weight));
  let result = labels[argmax(n)];
  
  console.log("+ height:", height, "weight:", weight);
  console.log("| - Result:", labels[argmax(n)]);
  console.log("| - Standard:", n[0]);
  console.log("| - Obesity:", n[1]);
}

//return the bigget number in an array
function argmax(n) {
  let v = Number.MIN_VALUE;
  let index = -1;
  for (let i = 0; i < n.length; i++) {
    if (v < n[i]) { index = i; v = n[i]; } 
   }
  return index;
 }