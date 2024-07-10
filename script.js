let form = document.getElementById("data-form");

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let smallerMonths = [2, 4, 6, 9, 11];
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentDate = date.getDate();

let dayErr = document.getElementById("day-error");
let monthErr = document.getElementById("month-error");
let yearErr = document.getElementById("year-error");

let submitBtn = document.getElementById("submit");

let resultYears = document.getElementById("result-years");
let resultMonths = document.getElementById("result-months");
let resultDays = document.getElementById("result-days");

let refreshBtn = document.getElementById("refresh");

//  Age Calculation Logic
const calcAge = (day, month, year) => {
  const inputDate = new Date(`${year}-${month}-${day}`);

  let yearDiff = parseInt(currentYear - inputDate.getFullYear());
  let monthDiff = currentMonth - inputDate.getMonth() - 1;
  let dayDiff = currentDate - inputDate.getDate();

  if (dayDiff < 0) {
    monthDiff--;
    dayDiff += new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  }

  if (monthDiff < 1) {
    yearDiff -= 1;
    monthDiff += 12;
  }

  // Result Output
  resultYears.style.display = "block";
  resultMonths.style.display = "block";
  resultDays.style.display = "block";
  resultYears.textContent = `${yearDiff} ${yearDiff < 2 ? "year" : "years"}`;
  resultMonths.textContent = `${monthDiff} ${
    monthDiff < 2 ? "month" : "months"
  }`;
  resultDays.textContent = `${dayDiff} ${dayDiff < 2 ? "day" : "days"}`;
};

// On Submit Validation Logic
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let dayValue = parseInt(day.value);
  let monthValue = parseInt(month.value);
  let yearValue = parseInt(year.value);

  // Day Validation
  if (!dayValue && dayValue !== 0) {
    // Blank Day Check
    day.style.border = "1px solid red";
    day.style.backgroundColor = "pink";
    dayErr.style.display = "block";
    dayErr.textContent = "Required";
  } else if (!monthValue && monthValue !== 0) {
    // Blank Month Check
    month.style.border = "1px solid red";
    month.style.backgroundColor = "pink";
    monthErr.style.display = "block";
    monthErr.textContent = "Required";
  } else if (!yearValue && yearValue !== 0) {
    // Blank Year Check
    year.style.border = "1px solid red";
    year.style.backgroundColor = "pink";
    yearErr.style.display = "block";
    yearErr.textContent = "Required";
  } else if (dayValue > 31 || dayValue < 1) {
    // If Day is more than 31 or less than 1
    day.style.border = "1px solid red";
    day.style.backgroundColor = "pink";
    dayErr.style.display = "block";
    dayErr.textContent = "Invalid Day";
  } else if (dayValue > 28 && monthValue == 2 && yearValue % 4 !== 0) {
    // Leap year Feg date check
    day.style.border = "1px solid red";
    day.style.backgroundColor = "pink";
    dayErr.style.display = "block";
    dayErr.textContent = "Invalid Day";
  } else if (dayValue > 29 && monthValue === 2 && yearValue % 4 === 0) {
    // Leap year 29 Feb check
    day.style.border = "1px solid red";
    day.style.backgroundColor = "pink";
    dayErr.style.display = "block";
    dayErr.textContent = "Invalid Day";
  } else if (
    // Check date for 30 day months
    dayValue > 30 &&
    smallerMonths.indexOf(parseInt(monthValue)) != -1
  ) {
    day.style.border = "1px solid red";
    day.style.backgroundColor = "pink";
    dayErr.style.display = "block";
    dayErr.textContent = "Invalid Day";
  } else if (monthValue > 12 || monthValue < 1) {
    // Valid Month Check
    month.style.border = "1px solid red";
    month.style.backgroundColor = "pink";
    monthErr.style.display = "block";
    monthErr.textContent = "Invalid Month";
  } else if (yearValue < 1900 || yearValue > currentYear) {
    // Valid Year check
    year.style.border = "1px solid red";
    year.style.backgroundColor = "pink";
    yearErr.style.display = "block";
    yearErr.textContent = "Invalid Year";
  } else if (parseInt(yearValue) === currentYear && monthValue > currentMonth) {
    // Check for year greater than current year
    month.style.border = "1px solid red";
    month.style.backgroundColor = "pink";
  } else {
    //  Calculate Age
    calcAge(dayValue, monthValue, yearValue);
  }
});

// OnBlur Validation Logic

day.addEventListener("blur", () => {
  if (day.value === "" || day.value === null) {
    day.style.border = "1px solid red";
    day.style.backgroundColor = "pink";
    day.style.boxShadow = "2px 3px 5px red";
    dayErr.style.display = "block";
    dayErr.textContent = "Required";
  } else if (parseInt(day.value) > 31 || parseInt(day.value) < 1) {
    day.style.border = "1px solid red";
    // day.style.backgroundColor = "pink";
    day.style.boxShadow = "2px 3px 5px red";
    dayErr.style.display = "block";
    dayErr.textContent = "Invalid Day";
  } else {
    day.style.border = "none";
    day.style.backgroundColor = "transparent";
    day.style.boxShadow = "2px 3px 5px darkslategray";
    dayErr.style.display = "none";
    dayErr.textContent = "";
  }
});

month.addEventListener("blur", () => {
  if (month.value === "" || month.value === null) {
    month.style.border = "1px solid red";
    month.style.backgroundColor = "pink";
    month.style.boxShadow = "2px 3px 5px red";
    monthErr.style.display = "block";
    monthErr.textContent = "Required";
  } else if (parseInt(month.value) > 12 || parseInt(month.value) < 1) {
    month.style.border = "1px solid red";
    month.style.backgroundColor = "pink";
    month.style.boxShadow = "2px 3px 5px red";
    monthErr.style.display = "block";
    monthErr.textContent = "Invalid Month";
  } else {
    month.style.border = "none";
    month.style.backgroundColor = "transparent";
    month.style.boxShadow = "2px 3px 5px darkslategray";
    monthErr.style.display = "none";
    monthErr.textContent = "";
  }
});

year.addEventListener("blur", () => {
  if (year.value === "" || year.value === null) {
    year.style.border = "1px solid red";
    year.style.backgroundColor = "pink";
    year.style.boxShadow = "2px 3px 5px red";
    yearErr.style.display = "block";
    yearErr.textContent = "Required";
  } else if (
    parseInt(year.value) > currentYear ||
    parseInt(year.value) < 1900
  ) {
    year.style.border = "1px solid red";
    year.style.backgroundColor = "pink";
    year.style.boxShadow = "2px 3px 5px red";
    yearErr.style.display = "block";
    yearErr.textContent = "Invalid Year";
  } else {
    year.style.border = "none";
    year.style.backgroundColor = "transparent";
    year.style.boxShadow = "2px 3px 5px darkslategray";
    yearErr.style.display = "none";
    yearErr.textContent = "";
  }
});

//  Refresh page

refreshBtn.addEventListener("click", () => window.location.reload());
