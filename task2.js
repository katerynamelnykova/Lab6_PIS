$(document).ready(function() {
    var apiKey = '4f670455dced9331d1cdf2d9e55ba4d1';
    var cityId = 703448;
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&appid=' + apiKey;

    $.getJSON(apiUrl, function(data) {
      // Отримання потрібних даних з об'єкту відповіді
      var temperature = data.main.temp;
      var feels = data.main.feels_like;
      var min = data.main.temp_min;
      var max = data.main.temp_max;
      var weatherDescription = data.weather[0].description;
      var speed = data.wind.speed;
      var deg = data.wind.deg;
      console.log(data)

      // Відображення даних на сторінці
      $('#description').html(`${weatherDescription}`)
      $('#temperature').html(`${temperature} K`)
      $('#fells-like').html(`${feels} K`)
      $('#min').html(`${min} K`)
      $('#max').html(`${max} K`)
      $('#speed').html(`${speed} м/с`)
      $('#deg').html(`${deg} °`)
    });
  });