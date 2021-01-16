const BUG_INTRO_DATE = "1/27/20";
let now = new Date();

function treatAsUTC(date) {
  var result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
}

function daysBetween(startDate, endDate) {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

const genNumber = () => {
  let days = daysBetween(BUG_INTRO_DATE, now);
  document.querySelector("#days").style.setProperty("--num", Math.round(days));
};

setTimeout(genNumber);
