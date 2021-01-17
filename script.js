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

//CSS property attribute not supported on FireFox or IOS

// const genNumber = () => {
//   let days = daysBetween(BUG_INTRO_DATE, now);
//   document.querySelector("#days").style.setProperty("--num", Math.round(days));
// };

// setTimeout(genNumber);

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

let numDays = daysBetween(BUG_INTRO_DATE, now);
const obj = document.getElementById("days");
animateValue(obj, 0, numDays, 5000);
