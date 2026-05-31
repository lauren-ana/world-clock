function updateTime() {
  let time = moment();

  let sydneyTime = moment().tz("Australia/Sydney");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  let tokyoTime = moment().tz("Asia/Tokyo");
  let parisTime = moment().tz("Europe/Paris");

  let sydneyDateElement = document.querySelector("#sydneyDateElement");
  let sydneyTimeElement = document.querySelector("#sydneyTimeElement");
  sydneyDateElement.innerHTML = time.format("dddd Do MMMM YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format("h:mm:ss")} <span class="AM-PM">${time.format("A")}</span>`;

  let losAngelesDateElement = document.querySelector("#losAngelesDateElement");
  let losAngelesTimeElement = document.querySelector("#losAngelesTimeElement");
  losAngelesDateElement.innerHTML = time.format("dddd Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")} <span class="AM-PM">${time.format("A")}</span>`;

  let tokyoDateElement = document.querySelector("#tokyoDateElement");
  let tokyoTimeElement = document.querySelector("#tokyoTimeElement");
  tokyoDateElement.innerHTML = time.format("dddd Do MMMM YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format("h:mm:ss")} <span class="AM-PM">${time.format("A")}</span>`;

  let parisDateElement = document.querySelector("#parisDateElement");
  let parisTimeElement = document.querySelector("#parisTimeElement");
  parisDateElement.innerHTML = time.format("dddd Do MMMM YYYY");
  parisTimeElement.innerHTML = `${parisTime.format("h:mm:ss")} <span class="AM-PM">${time.format("A")}</span>`;
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", function () {
  let selectedValue = citySelect.value;

  document.querySelectorAll(".display-time").forEach(function (div) {
    div.classList.remove("selected");
  });

  let matchingDiv = document.querySelector(`#${selectedValue}`);
  if (matchingDiv) {
    matchingDiv.classList.add("selected");
  }
});

updateTime();
setInterval(updateTime, 1000);
