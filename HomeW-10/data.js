fetch('https://api.openweathermap.org/data/2.5/weather?id=480562&appid=03ff352cc7f15a964bb660b25b053e0c')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.weather-name').textContent = data.name;
        document.querySelector('.weather-degree').innerHTML = Math.round(data.main.temp - 273) + "&deg;";
        document.querySelector('.weather-clouds').textContent = data.weather[0]["description"];
        document.querySelector('.features li').innerHTML = `<img src="https://api.openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.svg">`;
    })
    .catch(function () {

    })

    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}