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
  The machine judges the test data that whether the data are "obesity" or "standard". The judgement is based on the knowledge which is coming from training with numerous number of the data.  
    
  1. Generate the sample dummy data by coding.  
  2. Setup 2 labels, "Obesity[0,1]", "Standard[1,0]".  
  3. Training the machine with the dummy data so that it can recognize and judge the data.  
  4. Give th machine some sample data and test whether it can judge each of the data.  
  
    
# 2. Synaptic.js - Wine  
  The machine can guess the rating of wine correctly with ○○%  
  Data is selected at rondom.   
  　 
  1. Data preparation  
  Using CSV data from web page and convert this file into JSON format.
  *Normalization  
  There are a lot of variation in each value of components so normalize to arrange each deature of the data scope between 0 - 1.  
   Calculate Standard Normal Distribution by (value - minvalue) / (maxvalue - minvalue).  
  
   Express 3 grades as bellow.  
    Grade1: [1,0,0]  
    Grade2: [0,1,0]  
    Grade3: [0,0,1]  
     
  2. Creating neural network  
    
  3. Training & Testing  
   Training by using the train method and testing as follows.  
    - Calling the activate method of wine_network which I built anables to predict the data.  
    - Once the precition is correct, the machine counts its number.  
    - Command line $ node make_data_wine.js  
                   $ node learn_data_wine.js  
    
# 3. Node-SVM - Wine  
   Node-SVM(Support vector machines) are supervised learning models that analyze data and recognize patterns.  

   1. Data preparetation  
   2. Use svm.CSVClass  
     To use node-svm use following.  
     ````  
     var svm = require('node-svm');  
     var clf = new svm.CSVC();  
     ````  
   3. Training and testing  
       
   Machine leaning process :  
   *Give the machine lots of data and train.  
   *Give the data which is new to the machine and test of its accuracy whether it can clacify the data correctly.  
   *If accuracy is bad, loop this cicle.  

    
         
  