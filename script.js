const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const date = new Date();

let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

day.innerText = `${date.getDate()},${dayNames[date.getDay()]}`;
month.innerText = monthNames[date.getMonth()];
year.innerText = date.getFullYear();

