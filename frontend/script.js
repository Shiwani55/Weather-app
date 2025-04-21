
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const unit = document.getElementById("unitSelector").value;
  if (!city) return alert("Enter a city name!");

  try {
    const res = await fetch(`https://weather-app-2-5mw2.onrender.com/weather?city=${city}`);
    const data = await res.json();

    const temp = unit === "F" ? data.current.temp_f + " °F" : data.current.temp_c + " °C";

    document.getElementById("location").innerText = `${data.location.name}, ${data.location.country}`;
    document.getElementById("icon").src = data.current.condition.icon;
    document.getElementById("temp").innerText = `Temperature: ${temp}`;
    document.getElementById("desc").innerText = `Condition: ${data.current.condition.text}`;
    document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
    document.getElementById("wind").innerText = `Wind: ${data.current.wind_kph} kph`;
    document.getElementById("time").innerText = `Local Time: ${data.location.localtime}`;

    document.getElementById("weatherDisplay").classList.remove("hidden");
  } catch (err) {
    alert("Error fetching weather!");
    console.error(err);
  }
}
