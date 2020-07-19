const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => console.log(json) )
}

fetchData()