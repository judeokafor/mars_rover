# Mars Rover Challenge
This repo contains solution to the Mars Rover kata challenge using TDD approach.

## Overview
Services used:
 * Language [Node/Express](https://expressjs.com/)

 * Testing Framework [Jest](https://jest.com)

 * Built with [Docker](https://docker.com)

 ## Usage and Information

 * Fork or clone this repo.

 * Cd into the work folder appropriately.

 ### Usage with Docker

 * To start the server on local:
 ``` 
 docker-compose up --build

 ```
 * To run the tests:
 ```
 docker-compose run mars_rover npm test   

 ```

 ### Usage without Docker
* Installing dependencies
```
npm i
```

 * To start the server on local:

 ```
npm run build && npm start
 ```

* To run the tests

```
npm run test
```
## Hit the server

* Make a `POST` request to url `http://localhost:8080` with payload:

orientation can be `NORTH` , `SOUTH`, `EAST`, `WEST`
instructions are a combination of `F`,`B`, `R`, `L`

Sample Request Body:=>
```
{
    "currentPosition": [
        1,
        2
    ],
    "obstacles": [
       [5, 4] , [1,4]
    ],
    "orientation": "NORTH",
    "instructions": "FFLBBBRLFF"  
}
```



## Author

* **Jude Okafor**