/* Global Variables */
const url = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "67f28016d91f6a14e0e35476de0e72b7&units=imperial";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

document.getElementById("generate").addEventListener('click', generateData);

// generate temp
function generateData(e) {
    const newZip = document.getElementById("zip").value;
    const feel = document.getElementById("feelings").value;
    completeUrl = `${url}${newZip}&appid=${apiKey}`;
    getTemp(completeUrl)
        .then((data) => {
            console.log("data", data);
            postData('/addtemp', { temp: data.main.temp, feelings: feel })
                .then((data) => console.log("from post", data));
            console.log("after");
            // return { temp: data.main.temp, feelings: feel }
        })

}

const getTemp = async (baseurl) => {
    const response = await fetch(baseurl)
    return fetch(baseurl)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log(error);
        });

    /*const response = await fetch(baseurl)
    try {
        const data = await response.json();
        console.log("data2", data);
        return data;
    }
    catch (error) {
        console.log(error);
    }*/
}


const postData = async (url = '', data = {}) => {
    // console.log("from post client", data);
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
        console.log("new", newdata);
        return newdata;
    }
    catch (error) {
        console.log("error", error);
    }
}

