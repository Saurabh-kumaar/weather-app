
const apiKey = "730f5d34b402c049c90a42b9548adf2e";

function getWeather() {
  const city = document.getElementById("cityInput").value; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 


fetch(url)
  .then(response => response.json()) 
  .then(data => {
    const temp = data.main.temp; 
    const weather = data.weather[0].description; 
    const icon = data.weather[0].icon; 
    const windSpeed = data.wind.speed; 
    const country = data.sys.country; 



    document.getElementById("result").innerHTML =  ` <div class="mt-4 p-4 bg-white rounded-xl shadow-md text-gray-800 w-full max-w-md mx-auto">
          <div class="flex flex-col items-center space-y-2">
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon" class="w-20 h-20">
            <h2 class="text-xl font-bold">${city}, ${country}</h2>
            <p class="text-lg">🌡️ Temperature: <span class="font-semibold">${temp}°C</span></p>
            <p class="text-lg">🌥️ Condition: <span class="capitalize font-semibold">${weather}</span></p>
            <p class="text-lg">💨 Wind Speed: <span class="font-semibold">${windSpeed} m/s</span></p>
          </div>
        </div>
      `;
  })








  .catch(error => {
    document.getElementById("result").innerHTML = `
    <p class="text-red-600 font-bold mt-4"> City not found. Please try again. </p> 
    `; 
  });
} 




