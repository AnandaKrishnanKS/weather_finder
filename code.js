
function getdata() {
    placenam = placename.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placenam}&appid=5b4bee0ba241d092159faf007e166080`).then(data => data.json()).then(data => displaydata(data))
}
function displaydata(placeDeails) {
    placeName = placeDeails.name
    weatherType = placeDeails.weather[0].description
    weatherIcon = placeDeails.weather[0].icon
    normTemp = (placeDeails.main.temp - 32) * 5 / 9
    minTemp = placeDeails.main.temp_min
    maxTemp = placeDeails.main.temp_max
    humidity = placeDeails.main.humidity
    windSpeed = placeDeails.wind.speed
    windDirection = placeDeails.wind.deg

    result.innerHTML = `
                 <div>
                       <p>place name:${placeName}</p>
                       <p>weather Type:${weatherType} ${weatherIcon}</p>
                       <p>temprature Normal:${normTemp}&#8451; Min:${minTemp} Max:${maxTemp}</p>
                       <p>humidity:${humidity}</p>
                       <p>wind Speed:${windSpeed} Direction:${windDirection}</p>
                </div>
            `
}


//     "coord":{"lon":76.3428,"lat":10.0166},
//     "weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"}],
//     "base":"stations",
//     "main":{"temp":301.07,"feels_like":304.76,"temp_min":301.07,"temp_max":301.07,"pressure":1008,"humidity":78},
//     "visibility":3000,
//     "wind":{"speed":2.57,"deg":310},
//     "clouds":{"all":75},
//     "dt":1674556131,
//     "sys":{"type":1,"id":9211,"country":"IN","sunrise":1674523022,"sunset":1674564947},
//     "timezone":19800,
//     "id":1267254,
//     "name":"Kakkanad",
//     "cod":200