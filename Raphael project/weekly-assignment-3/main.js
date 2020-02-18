const button = document.getElementById("button");
const imagePlace = document.getElementById("imagePlace");
const earth = document.getElementById("img_earth");
const countryName = document.getElementById("country_name");
const tempreture = document.getElementById("tempreture");

const apiKey = APIKEY;

window.addEventListener("load", () => {
  earth.style.visibility = "hidden";
  getDataFromApi(
    `http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=${apiKey}`
  );
});

button.addEventListener("click", () => {
  const cityName = document.getElementById("input").value;
  getDataFromApi(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
  );
});

getDataFromApi = url => {
  fetch(url).then(response => {
    if (response.status == 404) {
      document.body.style.backgroundColor = "#000000";
      earth.style.visibility = "visible";
      imagePlace.src = "./invalid.svg";
      tempreture.innerHTML = "The city is not found";
      tempreture.style.color = "white";
      console.log("city is not founded " + response.status);
      return;
    }

    if (response.status !== 200) {
      earth.style.visibility = "hidden";
      tempreture.style.color = "white";
      console.log(
        "Looks like there was a problem. Status Code:" + response.status
      );
      return;
    }

    response
      .json()
      .then(data => {
        earth.style.visibility = "hidden";
        tempreture.style.color = "black";
        const city = data.name;
        const currentweather = data.weather[0].main;
        const feelsLike = data.main["feels_like"];

        switch (currentweather) {
          case "Clouds":
            document.body.style.backgroundColor = "#00000079";
            imagePlace.src = "./clouds.svg";
            countryName.innerHTML = city;
            tempreture.innerHTML = `${feelsLike}&#8451;`;
            return;
          case "Clear":
            document.body.style.backgroundColor = "#ff7b0079";
            imagePlace.src = "./clear.svg";
            countryName.innerHTML = city;
            tempreture.innerHTML = `${feelsLike}&#8451;`;
            return;
          case "Snow":
            document.body.style.backgroundColor = "#b5d2ff79";
            imagePlace.src = "./snow.svg";
            countryName.innerHTML = city;
            tempreture.innerHTML = `${feelsLike}&#8451;`;
            return;
          case "Rain":
            document.body.style.backgroundColor = "#4063ff79";
            imagePlace.src = "./rain.svg";
            countryName.innerHTML = city;
            tempreture.innerHTML = `${feelsLike}&#8451;`;
            return;
          case "Drizzle":
            document.body.style.backgroundColor = "#d1f4ff79";
            imagePlace.src = "./drizzle.svg";
            countryName.innerHTML = city;
            tempreture.innerHTML = `${feelsLike}&#8451;`;
            return;
        }

        console.log(city, currentweather, feelsLike);
      })
      .catch(function(error) {
        console.log("this is a error" + " " + error);
      });
  });
};

formattingJson = data => {};

// The information that the app should show is Name of the city, currently weather, Feel
// Like, etc.
