# 0. Installation  
````  
【 JSON package 】
"node-svm": "^2.1.8",  
"synaptic": "^1.0.12"
=======================  
【 Command line 】
$ npm init  
$ npm install synaptic --save *1 
$ npm install node-svm --save *2  
````  
  
  *1 To install these packages, you need to have python in your local.  
  *2 To install node-svm you need to use python2, not python3.  
    
# 1. Synaptic.js - BMI  
  
# 2. Synaptic.js - Wine  
  The machine can guess the rating of wine correctly with ○○%  
  Data is selected at rondom.   
  
 ・Process  
  *Data preparation  
  Using CSV data from web page and convert this file into JSON format.
  *Normalization  
  There are a lot of variation in each value of components so normalize to arrange each deature of the data scope between 0 - 1.  
   Calculate Standard Normal Distribution by (value - minvalue) / (maxvalue - minvalue).  
  
   Express 3 grades as bellow.  
    Grade1: [1,0,0]  
    Grade2: [0,1,0]  
    Grade3: [0,0,1]  
     
  *Creating neural network  
    
  *Training & Testing  
   Training by using the train method and testing as follows.  
    - Calling the activate method of wine_network which I built anables to predict the data.  
    - Once the precition is correct, the machine counts its number.  
    - Command line $ node make_data_wine.js  
                   $ node learn_data_wine.js  
  
# 3. Node-SVM - Wine  
   Node-SVM(Support vector machines) are supervised learning models that analyze data and recognize patterns.  
     
