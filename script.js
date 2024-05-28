const input = document.querySelector(".input-box");
const searchbtn = document.getElementById("searchbtn");
const wetherimage = document.querySelector(".wetherimage");
const tempature = document.querySelector(".tempature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humudity");
const windspeed = document.querySelector(".whind-sepeed");
 async function checwether(city){
    const api_key = "9950d4a6d31df8b6b97f4805fda8fb7f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const wether_data = await fetch(`${url}`).then(response => response.json());
    console.log(wether_data);
    tempature.innerHTML = `${Math.round(wether_data.main.temp - 273.15)}`;
    description.innerHTML =`${wether_data.weather[0].description}`;
    humidity.innerHTML = `${wether_data.main.humidity}%`;
    windspeed.innerHTML = `${wether_data.wind.speed}Km/H`;
}
searchbtn.addEventListener('click',()=>{
    checwether(input.value)
});


