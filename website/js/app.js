/* Global Variables */
const url = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "67f28016d91f6a14e0e35476de0e72b7&units=imperial";
// Create a new date instance dynamically with JS
let d = new Date().toDateString();

const feelings = document.getElementById("feelings").value;


document.getElementById("generate").addEventListener('click', generateData);

// generate temp
function generateData(e) {
    const newZip = document.getElementById("zip").value;
    if (!newZip) {
        alert("You must enter zip code");
    }
    completeUrl = `${url}${newZip}&appid=${apiKey}`;
    getTemp(completeUrl)
        .then((data) => {
            postData('/addtemp', { date: d, temp: data.main.temp, city: data.name, feelings: feelings })
                .then(
                    updateUI()
                )
        })

}

// get data from weatheropenmap api
const getTemp = async (baseurl) => {
    /* const response = await fetch(baseurl)
     return fetch(baseurl)
         .then((response) => {
             return response.json();
         })
         .catch((error) => {
             console.log(error);
         });
 */
    const response = await fetch(baseurl)
    try {
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

// edit the fetched data then post it
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    try {
        const newdata = await response.json();
        return newdata;
    }
    catch (error) {
        console.log("error", error);
    }
}

//update UI by the data stored on server
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerText = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.feelings;

    } catch (error) {
        console.log("error", error);
    }
}