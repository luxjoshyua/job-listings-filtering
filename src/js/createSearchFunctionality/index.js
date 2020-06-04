const jobListing = document.querySelectorAll(".job-item");
const searchInput = document.getElementById("search");
import { db, data } from "../createJobListing";
// console.log("here is sanitised db", db);

searchInput.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();
  //   console.log(searchValue);
  if (searchValue.length < 1) {
    toggleAll("block");
    return;
  }
  //   check if search value matches any values within the db object
  let results = [];

  //   loop through the entire object
  for (let items of Object.entries(db)) {
    // console.log("here are my items", items);
    // if there is a match
    // console.log("here is search value", searchValue, items[1]);
    // match the second item, which is where the sanitised data is
    if (items[1].includes(searchValue)) {
      // console.log("we've got a match!");
      //   push into the results array
      results.push(searchValue.toLowerCase());
    }
  }
  if (results.length > 0) {
    filterMatches(results);
  } else {
    // turn off all DOM elements once we start filtering
    toggleAll("none");
  }
});

const filterMatches = (results) => {
  // should be using job.dom reference instead of querySelectorAll
  //   console.log("results", results);
  for (let items of Object.entries(data)) {
    const jobDOM = items[1].dom;
    // check for the attribute we're searching, then compare to our results
    // results[0] is a string, hence we need to use a method that works with strings eg. includes()

    let tAttr = jobDOM.getAttribute("data-db");
    tAttr = tAttr.split(" ");

    if (tAttr.indexOf(results[0]) !== -1) {
      //   console.log("SHOW ME: ", jobDOM);
      jobDOM.style.display = "block";
    }
  }
};

const toggleAll = (property) => {
  //   console.log("toggle: ", property);
  for (let items of Object.entries(data)) {
    items[1].dom.style.display = property;
  }
};
