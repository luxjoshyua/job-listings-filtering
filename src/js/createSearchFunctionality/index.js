const jobListing = document.querySelectorAll(".job-item");
const searchInput = document.getElementById("search");
import { db } from "../createJobListing";
// console.log(db);

searchInput.addEventListener("keyup", (e) => {
  //   console.log(e);
  const searchValue = e.target.value;

  //   check if search value matches any values within the db object
  if (searchValue.includes(db)) {
    console.log("We have a match!");
  } else {
    return false;
  }

  // if there is a match, show that job tile, hide the others

  //   console.log(searchValue);
});

// level function

// languages function

// loop through json feed
// get company, position, role, level, contract, location, languages, tools

// new object

// then remove duplicates
