var input = document.querySelector('.input_text');
var main = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var maxTemperature = document.querySelector('.maxTemperature');
var minTemperature = document.querySelector('.minTemperature');
var pressure = document.querySelector('.pressure');
var humidity = document.querySelector('.humidity');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+
    '&appid=c1a242a1c6e5f95f947e25a002c519de')
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];
        var maxTemp = data['main']['temp_max'];
        var minTemp = data['main']['temp_min'];
        var pressureValue = data['main']['pressure'];
        var humidityValue = data['main']['humidity'];

        main.innerHTML = nameValue;
        desc.innerHTML = 'Description: ' + descValue;
        temp.innerHTML = 'Temperature: ' + tempValue + ' K';
        maxTemperature.innerHTML = 'Max Temperature: ' + maxTemp + ' K';
        minTemperature.innerHTML = 'Min Temperature: ' + minTemp + ' K';
        pressure.innerHTML = 'Pressure: ' + pressureValue + ' hPa';
        humidity.innerHTML = 'Humidity: ' + humidityValue + ' %';
        input.value = "";
    })
    .catch(err => {
        alert('Wrong city name,Try again...');
    });
});
