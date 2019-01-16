// Brain Teaser //
* You have three jars: 
1) The first one is an 8 cup capacity jar full of water

2) The second jar is an empty 5 cup capacity jar

3) The third jar is an empty 3 cup capacity jar


* You can only pour water from one jar into another until the jar you're pouring water into is full or the jar you're pouring from is empty.

* You CANNOT pour the water from jars anywhere except into another jar

* By only pouring water back and forth between the three jars, end up with exactly 4 cups of water in either the 8-cup jar of the 5-cup jar

* Write every pour I have to do inside:

 Below are my jars, the first one can fit 8 cups and it's currently full. 
 The second one can fit 5 cups of water and it is currently empty.
 The third one can fit 3 cups of water and it is currently empty.

   (1)         (2)        (3)
 -------     ------     ------
|       |   |      |   |      |
|   8   |   |   5  |   |   3  |
|       |   |      |    ------
|       |    ------  
 -------                      

This is what the cups currently look like:
 -------     ------     ------
|       |   |      |   |      |
|   8   |   |   0  |   |   0  |
|       |   |      |    ------
|       |    ------  
 -------                      

1) The first step will be to fill up my second jar with the first jar: 

 -------     ------     ------
|       |   |      |   |      |
|   3   |   |  5   |   |   0  |
|       |   |      |    ------
|       |    ------  
 -------                      

2) The second step will be to fill up the third jar with the second jar:
 -------     ------     ------
|       |   |      |   |      |
|   3   |   |   2  |   |   3  |
|       |   |      |    ------
|       |    ------  
 -------                      

3) The third step will be to fill up the first jar with the third jar until jar is empty:
 -------     ------     ------
|       |   |      |   |      |
|   6   |   |   2  |   |   0  |
|       |   |      |    ------
|       |    ------  
 -------                      

 4) The fourth step is to fill up the third jar with the second one until the second one is empty:
 -------     ------     ------
|       |   |      |   |      |
|   6   |   |   0  |   |   2  |
|       |   |      |    ------
|       |    ------  
 -------                     

 5) The fifth step is to fill up the second jar with the first jar until the jar is full:
 -------     ------     ------
|       |   |      |   |      |
|   1   |   |   5  |   |   2  |
|       |   |      |    ------
|       |    ------  
 -------                      

 6) The sixth step is to fill up the third jar with the second jar until the jar is full. 
 -------     ------     ------
|       |   |      |   |      |
|   1   |   |   4  |   |   3  |
|       |   |      |    ------
|       |    ------  
 -------                    
 7) This gives us the result of a second jar having 4 cups of water exactly.   

 

