const jobListing = document.querySelectorAll(".job-item");
const searchInput = document.getElementById("search");
import { db } from "../createJobListing";
console.log("here is sanitised db", db);
var objectLength = Object.keys(db).length;
// console.log(objectLength);

searchInput.addEventListener("keyup", (e) => {
  const searchValue = e.target.value;

  //   check if search value matches any values within the db object
  let results = [];

  //   loop through the entire object
  for (let items of Object.entries(db)) {
    // console.log(typeof items);
    // if there is a match
    console.log("here is search value", searchValue);

    if (items.includes(searchValue)) {
      console.log("we've got a match!");
      //   push into the results array
      results.push(items);
    }
  }

  console.log("here are my results", results);
});

// level function

// languages function

// loop through json feed
// get company, position, role, level, contract, location, languages, tools

// new object

// then remove duplicates
