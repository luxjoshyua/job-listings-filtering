import style from "./sass/index.scss";
var json = require("./js/data.json");
var data = json;
// console.log(data);

// populate the job boards
const jobsContainer = document.querySelector(".jobs-wrapper");
const createJobPosting = () => {
  data.forEach((job) => {
    console.log(job);
    const jobListing = document.querySelector(".job-item");
    const clone = jobListing.cloneNode(true);
    jobsContainer.appendChild(clone);
    // set image
    clone.querySelector(".logo").setAttribute("src", `${job.logo}`);
    clone.querySelector(".logo").setAttribute("width", "100%");
    // set company name
    clone.querySelector(".company").innerHTML = `${job.company}`;
    // set new status
    if (job.new) {
      clone.querySelector(".new").innerHTML = "New!";
    }
    // set featured status
    if (job.featured) {
      clone.querySelector(".featured").innerHTML = "Featured";
    }
    // set job title
    clone.querySelector(".job-title").innerHTML = `${job.position}`;
  });
};

createJobPosting();
