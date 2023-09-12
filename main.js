const inputCity = document.getElementById('inputCity')
const city = document.getElementById('city')
const temperature = document.getElementById('temperature')
const humidityText = document.getElementById('humidity-text')
const windText = document.getElementById('wind-text')
const cloudImage = document.getElementById('cloud-img')
const errorMessage = document.getElementById('error-msg')


const API = 'https://api.openweathermap.org/data/2.5/weather?q=vetapalem&appid=a8e71c9932b20c4ceb0aed183e6a83bb'
btn.onclick = () => {
    const enteredCity = inputCity.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=a8e71c9932b20c4ceb0aed183e6a83bb`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        inputCity.value = ''
        errorMessage.innerText = ''
        city.innerText = json.name
        let temp = Math.floor(json.main.temp - 273)
        let hum = json.main.humidity
        let windspeed = json.wind.speed
        let cloudData = json.weather[0].main
        temperature.innerText = `${temp}°C`
        humidityText.innerText = `${hum}%`
        windText.innerText = `${windspeed} KM/hour`
        if (cloudData == "Clouds"){
            cloudImage.src = "images/clouds.png"
        }
        else if (cloudData == "Clear"){
            cloudImage.src = "images/clear.png"
        }
        else if (cloudData == "Rain"){
            cloudImage.src = "images/rain.png"
        }
        else if (cloudData == "Drizzle"){
            cloudImage.src = "images/drizzle.png"
        }
        else if (cloudData == "Mist"){
            cloudImage.src = "images/mist.png"
        }
        else if (cloudData == "Snow"){
            cloudImage.src = "images/snow.png"
        }
    })

    .catch(() => {
        errorMessage.innerText = "Entered location was not found"
        temperature.innerText = '---'
        humidityText.innerText = '---'
        windText.innerText = '-----'
        cloudImage.src = ""
        city.innerText = "-----"
    })
    
}



