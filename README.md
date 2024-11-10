# FEND Project #3: Weather Journal

## Overview
**Weather Journal** is the third project in Udacity Front-end nanodegree program. It requires to build a single page javascript based web app which displays weather record based on user input and data from [OpenWeatherMap API](https://openweathermap.org/api).

The goal of project is to get experience with:
* setting up ***Node*** environment with ***Express*** and other project dependencies.

* setting up a server with ```GET``` and ```POST``` routes.

* using ```fetch API``` with [OpenWeatherMap API](https://openweathermap.org/api) credentials.

* promise chaining and asynchronous programming

* updating *HTML* elements properties dynamically.

## Features

* Local server (*server.js*) is running on port ```8000```

* Data is fetched from external  [OpenWeatherMap API](https://openweathermap.org/api) api in ```JSON``` format.
    
    * API calls use zip code entered by user, only US zip codes work.

* The following values are updated dynamically:
    * date
    * temperature
    * user input 

## Dependencies:

* Node.js
    *[website] (https://nodejs.org/en).

* Express framework
    *[website] (https://expressjs.com/).

* Node.js packages:
  *cors
## Getting started
### Prerequisites

* Download [Node.js] (https://nodejs.org/en/download/).
* Install the following packages using ```npm```:
```sh
npm install express
npm install cors
```
* You don't want to install body-parser as it has been deprecated, you can use express builtin middleware (express.json()).

### Running locally
* Clone this repository.
* ```cd``` into project folder.
* Start run the sever locaaly from command line.
```sh
node server.js
```
* open ```http://localhost:8000/``` in your browser.

### Using new API key
To use your own OpenWeatherMap API key
* create an account on [https://openweathermap.org/api](https://openweathermap.org/api) and follow the instructions.

* In ```app.js``` save your obtained key in ```apiKey``` constant.


## Authors:
Yomna Mohsen
ymn_mohsen@yahoo.com