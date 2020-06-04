const jobListing = document.querySelectorAll(".job-item");
const searchInput = document.getElementById("search");
import { db, data } from "../createJobListing";
// console.log("here is sanitised db", db);

searchInput.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();
  //   console.log(searchValue);

  //   check if search value matches any values within the db object
  let results = [];

  //   loop through the entire object
  for (let items of Object.entries(db)) {
    // console.log("here are my items", items);
    // if there is a match
    // console.log("here is search value", searchValue, items[1]);
    // match the second item, which is where the sanitised data is
    if (items[1].includes(searchValue)) {
      //   console.log("we've got a match!");
      //   push into the results array
      results.push(searchValue.toLowerCase());
    }
  }

  filterMatches(results);

  // console.log("here are my results", results);
});

const filterMatches = (results) => {
  // should be using job.dom reference instead of querySelectorAll
  console.log("results", results);
  for (let items of Object.entries(data)) {
    console.log("here is my job dom reference", items, items[1].dom);
    const jobDOM = items[1].dom;
    // check for the attribute we're searching, then compare to our results
    // results[0] is a string, hence we need to use a method that works with strings eg. includes()
    if (jobDOM.getAttribute("data-db").includes(results[0])) {
      jobDOM.style.display = "block";
    } else {
      jobDOM.style.display = "none";
    }
  }
};
