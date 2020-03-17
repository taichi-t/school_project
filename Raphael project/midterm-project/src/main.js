export const getDataFromApi = (url) => {
  fetch(url).then((response) => {
    if (response.status === 404) {
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
      .then((data) => {
        console.log(data);
      })
      .catch(function (error) {
        console.log("this is a error" + error);
      });
  });
};
