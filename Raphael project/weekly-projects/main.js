const apiKey = API_KEY;
const countries = arrayCountries;
const buttonLatest = document.getElementById("button_Latest");
const buttonHistory = document.getElementById("button_History");
const buttonConvert = document.getElementById("button_Convert");
const inputDate = document.getElementById("date");
const Data = [];

window.onload = function() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDates = currentDate.getDate();

  inputDate.max = `${currentYear}-${currentMonth}-${currentDates}`;
  inputDate.defaultValue = `${currentYear}-${currentMonth}-${currentDates}`;
};

createSelects = outputId => {
  const selects = document.getElementById(outputId);

  for (let i = 0; i < countries.length; i++) {
    const option = document.createElement("option");
    option.text = countries[i];
    option.value = countries[i];
    selects.appendChild(option);
  }
};
createSelects("from");
createSelects("to");
createSelects("chosenCountry");
createSelects("chosenCountry2");

getDataFromApi = url => {
  fetch(url).then(response => {
    if (response.status == 404) {
      console.log("city is not founded " + response.status);
      return;
    }

    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code:" + response.status
      );
      return;
    }

    response
      .json()
      .then(data => {
        return data;
      })
      .catch(function(error) {
        console.log("this is a error" + " " + error);
      });
  });
};

///////////////////get the converted rates data////////////////

buttonConvert.addEventListener("click", () => {
  const fromCountry = document.getElementById("from").value;
  const toCountry = document.getElementById("to").value;
  getDataFromApi(
    `http://apilayer.net/api/live?access_key=${apiKey}&currencies=${fromCountry}&source=USD&format=1`
  );
});

///////////////////get the most recent exchange rate data////////////////

buttonLatest.addEventListener("click", () => {
  const chosenCountry = document.getElementById("chosenCountry").value;
  getDataFromApi(
    `http://apilayer.net/api/live?access_key=${apiKey}&currencies=${chosenCountry}&source=USD&format=1`
  );
});

///////////////////get the historycal rates////////////////

buttonHistory.addEventListener("click", () => {
  const chosenCountry2 = document.getElementById("chosenCountry2").value;
  const chosenDate = document.getElementById("date").value;

  console.log(chosenDate, chosenCountry2);
  getDataFromApi(
    `http://api.currencylayer.com/historical?access_key=${apiKey}&date=${chosenDate}&currencies=${chosenCountry2}`
  );
});
