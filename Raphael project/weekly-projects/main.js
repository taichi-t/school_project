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
  const currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const currentDates = ("0" + currentDate.getDate()).slice(-2);
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() - 8);
  const limitYear = limitDate.getFullYear();
  const limitMonth = ("0" + (limitDate.getMonth() + 1)).slice(-2);
  const limitDates = ("0" + limitDate.getDate()).slice(-2);

  inputDate.max = `${currentYear}-${currentMonth}-${currentDates}`;
  inputDate.min = `${limitYear}-${limitMonth}-${limitDates}`;
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

const getDataFromApi = url => {
  return new Promise((resolve, reject) => {
    fetch(url).then(response => {
      if (response.status == 404) {
        console.log("city is not founded " + response.status);
        reject("failed");
      }

      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code:" + response.status
        );
        reject("failed");
      }

      response
        .json()
        .then(data => {
          resolve(data);
        })
        .catch(function(error) {
          console.log("this is a error" + " " + error);
        });
    });
  });
};

///////////////////get the converted rates data////////////////

buttonConvert.addEventListener("click", async () => {
  const fromCountry = document.getElementById("from").value;
  const toCountry = document.getElementById("to").value;
  const amount = Number(document.getElementById("amount").value);
  console.log(amount);

  getDataFromApi(
    `https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=USD_${fromCountry},USD_${toCountry}`
  ).then(data => {
    const toRate = data.results[`USD_${toCountry}`].val;
    const fromRate = data.results[`USD_${fromCountry}`].val;
    const convertedResult = (toRate / fromRate) * amount;
  });
});

///////////////////get the most recent exchange rate data////////////////

buttonLatest.addEventListener("click", () => {
  const chosenCountry = document.getElementById("chosenCountry").value;
  getDataFromApi(
    `https://free.currconv.com/api/v7/convert?apiKey=${apiKey}&q=USD_${chosenCountry}&compact=y`
  ).then(data => {
    const latestResult = data[`USD_${chosenCountry}`].val;
  });
});

///////////////////get the historycal rates////////////////

buttonHistory.addEventListener("click", () => {
  const chosenCountry2 = document.getElementById("chosenCountry2").value;
  const chosenDate = document.getElementById("date").value;

  console.log(chosenDate, chosenCountry2);
  getDataFromApi(
    `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=USD_${chosenCountry2},${chosenCountry2}_USD&compact=ultra&date=${chosenDate}`
  ).then(data => {
    const HistoryRate = data[`USD_${chosenCountry2}`][chosenDate];
  });
});
