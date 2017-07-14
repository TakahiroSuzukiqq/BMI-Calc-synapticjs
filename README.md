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


# 1. Synaptic -- Synaptic-BMI  
  The machine judges the test data that whether the data are "obesity" or "standard". The judgement is based on the knowledge which is coming from training with numerous number of the data.  
    
  * Generate the sample dummy data by coding.  
  * Setup 2 labels, "Obesity[0,1]", "Standard[1,0]".  
  * Training the machine with the dummy data so that it can recognize and judge the data.  
  * Give th machine some sample data and test whether it can judge each of the data.  
  * Generating the data, training and testing it.  
    ````  
    - $ node create_data.js     <= To generate the random height, weight and [0,1], [1,0] data and store into bmi.json file.  
    - $ node learn_data.js      <= To train and test the machine by using generated data.  
    ````  
       
  * App image  
    <a href="https://ibb.co/jrrpUa"><img src="https://preview.ibb.co/bGb1aF/bmi1.png" alt="bmi1" border="0"></a>  
    <a href="https://ibb.co/gwTshv"><img src="https://preview.ibb.co/mxOQ2v/bmi2.png" alt="bmi2" border="0"></a>  
    
   
# 2. Synaptic -- Synaptic-Wine  
  The machine can guess the rating of wine.  
  In this app, the machine uses the data from wine.csv file. In the file there are descriptions about wine such ad wine grade(good: 1 - bad: 3), alcohol or malic acid. With these data the machine learn the connection between wine grade and their components by using neural network methodology. As a test, the machine predict wine grade from its component.  
  The machine pick the data at random and test, then retun the accuracy rate.  
  　 
  * Data preparation  
    Using CSV data from web page and convert this file into JSON format.
  * Normalization  
    There are a lot of variation in each value of components so normalize to arrange each deature of the data scope between 0 - 1.  
  * Calculate Standard Normal Distribution by (value - minvalue) / (maxvalue - minvalue).  
  
  * Express 3 grades as bellow.  
     Grade1: [1,0,0]  
     Grade2: [0,1,0]  
     Grade3: [0,0,1]  
     
  * Creating neural network  
    
  * Training & Testing  
    Training by using the train method and testing as follows.  
    - Calling the activate method of wine_network which I built anables to predict the data.  
    - Once the precition is correct, the machine counts its number.  
    - Training and testing  
    ````  
    $ node make_data_wine.js  
    $ node learn_data_wine.js  
    ````  

  * App image  
    <a href="https://ibb.co/iaeZUa"><img src="https://preview.ibb.co/mZrRaF/winea1.png" alt="winea1" border="0"></a>  
    <a href="https://ibb.co/eTwsFF"><img src="https://preview.ibb.co/dvLKvF/winea2.png" alt="winea2" border="0"></a>  
        
          
# 3. Node-SVM -- Node-SVM-Wine  
   Node-SVM(Support vector machines) are supervised learning models that analyze data and recognize patterns.  
   Using SVM algorithm and answer wine grade. The machine compile the data and learn the pattern by using pattern recognition.  
  
   * Data preparetation  
   * Use svm.CSVClass  
     To use node-svm use following.  
     ````  
     var svm = require('node-svm');    
     var clf = new svm.CSVC();  
     ````  
   * Training and testing  
      ````  
      $ node make_data_wine_svm.js  
      $ node learn_data_wine_svm.js  
      ````  
            
   * App image  
     <a href="https://ibb.co/etYxFF"><img src="https://preview.ibb.co/fR8WaF/wineb3.png" alt="wineb3" border="0"></a>


   Machine leaning process :  
   *Give the machine lots of data and train.  
   *Give the data which is new to the machine and test of its accuracy whether it can clacify the data correctly.  
   *If accuracy is bad, loop this cycle.  

    
         
  