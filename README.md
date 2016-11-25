# Timestamp-Microservice


#TIMESTAMP MICROSERVICE

#User stories:

* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

* If it does, it returns both the Unix timestamp and the natural language form of that date.

* If it does not contain a date or Unix timestamp, it returns null for those properties.

##Example usage:

* [https://timestamp-microservice-chan.herokuapp.com/November%2022,%202016](https://timestamp-microservice-chan.herokuapp.com/November%2022,%202016)

* [https://timestamp-microservice-chan.herokuapp.com/1479772800](https://timestamp-microservice-chan.herokuapp.com/1479772800)

##Example output:

* ```{ "unix" : 1479772800 , "natural" : "November 22, 2016"}```
