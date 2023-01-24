
function getdata() {
    placenam = placename.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placenam}&appid=5b4bee0ba241d092159faf007e166080`).then(data => data.json()).then(data => displaydata(data))
}
function displaydata(placeDeails) {
    placeName = placeDeails.name
    placeId = placeDeails.id
    placeCode = placeDeails.cod
    cordLon = placeDeails.coord.lon
    cordLat = placeDeails.coord.lat
    sunRise = placeDeails.sys.sunrise
    sunSet = placeDeails.sys.sunset
    weatherType = placeDeails.weather[0].description
    weatherIcon = placeDeails.weather[0].icon
    normTemp = Math.round((placeDeails.main.temp - 32) * 5 / 9)
    minTemp = Math.round((placeDeails.main.temp_min - 32) * 5 / 9)
    maxTemp = Math.round((placeDeails.main.temp_max - 32) * 5 / 9)
    humidity = placeDeails.main.humidity
    pressure = placeDeails.main.pressure
    windSpeed = placeDeails.wind.speed
    windDirection = placeDeails.wind.deg

    result.innerHTML = ` 
                 <style>.wlcmpg{
                    opacity: 0;
                }
                 }</style>
                 <div class="col-md-12 col-lg-5  flex-fill ">
                 <p class="text-white ps-1"><strong>today's weather at</strong> </p>
                 <h3 class="text-center text-primary mb-5"
                     style="font-size: 3.5rem; font-weight: 900;">${placeName}
                 </h3>
                 <div class="d-flex flex-fill justify-content-around  text-white">
                     <p class="bg-secondary bg-opacity-25 ps-3 pe-3 rounded-4 mb-4">Id : ${placeId}</p>
                     <p class="bg-secondary bg-opacity-25 ps-3 pe-3 rounded-4 mb-4">location- 
                         lon : ${cordLon} ,
                         lat : ${cordLat}
                     </p>
                     <p class="bg-secondary bg-opacity-25 ps-3 pe-3 rounded-4 mb-4">Code : ${placeCode}</p>
                 </div>
                 <div class="d-flex flex-fill justify-content-evenly  text-white">
                     <p class="bg-secondary bg-opacity-25 ps-3 pe-3 rounded-4 ms-5 mb-4">
                         Sunrise : ${sunRise}
                     </p>
                     <p class="bg-secondary bg-opacity-25 ps-3 pe-3 rounded-4 me-5 mb-4">Sunset : ${sunSet}
                     </p>
                 </div>
                 <div class="d-flex flex-fill justify-content-evenly  text-white">
                     <p class="bg-secondary bg-opacity-25 ps-3 pe-3 rounded-4">Wind- speed :
                         ${windSpeed} and
                         Deg : ${windDirection}
                     </p>

                 </div>
             </div>
             <div class=" col-md-12 col-lg-3 flex-fill text-white">
                 <p class=" p-0 m-0  ps-5"><strong>Temprature</strong> - avg:</p>
                 <h1 class=" text-end me-4 " style="font-size: 6rem;">${normTemp}&#8451;
                 </h1>
                 <div class="d-flex">
                     <p class=" flex-fill ps-5 ">Min :<strong> ${minTemp} &#8451;</strong>
                     </p>
                     <p class=" flex-fill text-end ">Max :<strong> ${maxTemp} &#8451;</strong> </p>
                 </div>
                 <div class="d-flex text-center">
                     <p class=" flex-fill bg-success bg-opacity-25 ms-5 me-4 p-3 pe-3 rounded-4">
                         Humidity : ${humidity}
                     </p>
                     <p class="flex-fill bg-success bg-opacity-25 p-3  me-0 rounded-4">Air pressure :
                         ${pressure}
                     </p>
                 </div>
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