const search = async () => {
  let city_name = input.value;
  console.log(city_name);

  if (city_name) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=823791877b1865073831da387f36ee59&units=metric`
    );
    response.json().then((lists) => {
      console.log(lists);

      let city = lists.name;
      console.log(city);

      let condition = lists.weather[0].main;
      console.log(condition);

      let temp = lists.main.temp;
      console.log(temp);

      let humidity = lists.main.humidity;
      console.log(humidity);

      let wind = lists.wind.speed;
      console.log(wind);

      let icon = lists.weather[0].icon;
      console.log(icon);

      output.innerHTML = `<div class="city">
<h2>City Name</h2>
<div> ${city}</div>
</div>
<div class="condition">
<h2>Feels like</h2> 
<div> ${condition}</div>
</div>
<div class="temp"><h2>Temperature</h2>
<div> ${temp}°C</div>
</div><br>
<div class="humidity"><h2>Humidity</h2>
<div> ${humidity}%</div>
</div>
<div class="wind"><h2>Wind Speed</h2>
<div> ${wind}km/h</div>
</div><br>
<div class="icon">
<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">

<div> </div>
</div>
</div>
</div>`;
    });
  }
};
