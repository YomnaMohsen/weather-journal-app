// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;

// Setup Server
app.listen(port, () => console.log(`server is running on ${port}`));


app.get('/all', (req, res) => {
    console.log(projectData);
    res.send(projectData);
});

app.post('/addtemp', (req, res) => {
    projectData['date'] = req.body.date;
    projectData['temp'] = req.body.temp;
    projectData['city'] = req.body.city;
    projectData['feelings'] = req.body.feelings;

});