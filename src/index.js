const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => displayInfo(json['results'][0]) )
}

function displayInfo(demo) {
  fullname.textContent = `${demo.name.title} ${demo.name.first} ${demo.name.last}`;
  document.getElementById("email").textContent = demo.email
  document.getElementById("street").textContent = `${demo.location.street.number} ${demo.location.street.name}`
  document.getElementById("city").textContent = demo.location.city
  document.getElementById("state").textContent = demo.location.state
  document.getElementById("postcode").textContent = demo.location.postcode
  document.getElementById("phone").textContent = demo.phone
  document.getElementById("cell").textContent = demo.cell
  document.getElementById("date_of_birth").textContent = (new Date(demo.dob.date)).toDateString()
}

document.querySelector('button').addEventListener('click', () => fetchData());