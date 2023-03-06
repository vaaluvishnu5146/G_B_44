// API
const url = "https://api-thirukkural.vercel.app/api?num=";

// COUNTER TO FETCH THIRUKKURAM
let num = 1;

// DOM NODE
const section = document.getElementById("section");
const subheading = document.getElementById("sub-heading");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

// FUNCTION TO GET DATA FROM SERVER
async function IOOperation(id = 1, cb = () => {}) {
  const response = await fetch(url + id);
  const data = await response.json();

  if (data) {
    cb(data);
  }
}

// CALLER FUNCTION
function fetchKural(id) {
  if (id) {
    IOOperation(id, updateApp);
  } else {
    IOOperation(num, updateApp);
  }
}

fetchKural();

// HELPS TO UPDATE THE UI WITH THIRUKKURAL
function updateApp(data = {}) {
  section.innerText = data["sect_tam"] || "NA";
  subheading.innerHTML = data["number"] || "NA";
  line1.innerText = data["line1"] || "NA";
  line2.innerText = data["line2"] || "NA";
  num++;
}
