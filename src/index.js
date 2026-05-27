let sydneyDateElement = document.querySelector("#sydneyDateElement");
let sydneyTimeElement = document.querySelector("#sydneyTimeElement");
sydneyDateElement.innerHTML = moment().format("dddd Do MMMM YYYY");
sydneyTimeElement.innerHTML = moment()
  .tz("Australia/Sydney")
  .format("h:mm:ss A");
