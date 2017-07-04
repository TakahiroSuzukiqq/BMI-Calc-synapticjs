1. BMI  
  
2. Wine    
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

     