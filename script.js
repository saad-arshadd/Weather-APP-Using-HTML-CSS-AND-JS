const apikey = '846b6789371436a1e9e695c9e5003900';

async function fetchweather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    );
    const data = await response.json();
    console.log(data);
    updateweather(data);
}

function updateweather(data) {
    cityEL.textContent=data.name;
    windEL.textContent=`${data.wind.speed}km/h`;
    humEL.textContent=`${data.main.humidity}%`;
    visEL.textContent=`${data.visibility/1000}km`;
    temEL.textContent=`${data.main.temp}°`;
    updateEL.textContent=`${data.weather[0].description} `;
    const curr_date= new Date();
    dateEL.textContent= curr_date.toDateString();
    
}
const windEL = document.querySelector(".wi");
const cityEL = document.querySelector(".city");
const humEL = document.querySelector(".hum");
const visEL = document.querySelector(".vis");
const temEL = document.querySelector(".degree");
const updateEL = document.querySelector(".update");
const dateEL = document.querySelector(".date");
let display = document.getElementById('inputbox');
let btn = document.getElementById('btnn');

btn.addEventListener("click", function (event) {
    event.preventDefault();
    const city = display.value; 
    fetchweather(city);
});





