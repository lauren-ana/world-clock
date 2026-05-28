function updateTime() {
  let time = moment();

  let sydneyDateElement = document.querySelector("#sydneyDateElement");
  let sydneyTimeElement = document.querySelector("#sydneyTimeElement");
  sydneyDateElement.innerHTML = time.format("dddd Do MMMM YYYY");
  sydneyTimeElement.innerHTML = `${time.tz("Australia/Sydney").format("h:mm:ss")} <span class="AM-PM">${time.format("A")}</span>`;

  let losAngelesDateElement = document.querySelector("#losAngelesDateElement");
  let losAngelesTimeElement = document.querySelector("#losAngelesTimeElement");
  losAngelesDateElement.innerHTML = time.format("dddd Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = `${time.tz("America/Los_Angeles").format("h:mm:ss")} <span class="AM-PM">${time.format("A")}</span>`;

  let tokyoyDateElement = document.querySelector("#tokyoDateElement");
  let tokyoTimeElement = document.querySelector("#tokyoTimeElement");
  tokyoDateElement.innerHTML = time.format("dddd Do MMMM YYYY");
  tokyoTimeElement.innerHTML = `${time.tz("Asia/Tokyo").format("h:mm:ss")} <span class="AM-PM">${time.format("A")}</span>`;

  let parisDateElement = document.querySelector("#parisDateElement");
  let parisTimeElement = document.querySelector("#parisTimeElement");
  parisDateElement.innerHTML = time.format("dddd Do MMMM YYYY");
  parisTimeElement.innerHTML = `${time.tz("Europe/Paris").format("h:mm:ss")} <span class="AM-PM">${time.format("A")}</span>`;
}

updateTime();
setInterval(updateTime, 1000);
