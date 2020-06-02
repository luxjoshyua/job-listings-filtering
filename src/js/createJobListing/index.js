var json = require("../data.json");
var data = json;
// console.log(data);
// import img1 from "../../assets/images/photosnap.svg";

// populate the job boards
const jobsContainer = document.querySelector(".jobs-wrapper");
const createJobPosting = () => {
  data.forEach((job) => {
    // console.log(job);
    const jobListing = document.querySelector(".job-item");
    const clone = jobListing.cloneNode(true);
    jobsContainer.appendChild(clone);

    // set image
    // console.log(job.logo);
    clone.querySelector(".logo-outer img").setAttribute("src", `${job.logo}`);
    clone.querySelector(".logo-outer img").setAttribute("width", "100%");

    // set company name
    clone.querySelector(".company").innerHTML = `${job.company}`;
    // set new status
    if (job.new) {
      clone.querySelector(".new").innerHTML = "New!";
    } else {
      clone.querySelector(".new").style.display = "none";
    }
    // set featured status
    if (job.featured) {
      clone.querySelector(".featured").innerHTML = "Featured";

      clone
        .querySelector(".inner")
        .parentElement.classList.add("featured-item");
    } else {
      clone.querySelector(".featured").style.display = "none";
    }

    // set job title
    clone.querySelector(".job-title").innerHTML = `${job.position}`;
    // set posted at
    clone.querySelector(".posted-at").innerHTML = `${job.postedAt}`;
    // set contract
    clone.querySelector(".contract").innerHTML = `${job.contract}`;
    // set location
    clone.querySelector(".location").innerHTML = `${job.location}`;

    // set role
    const roleSpan = document.createElement("span");
    roleSpan.innerHTML = `${job.role}`;
    roleSpan.classList.add("roles-background");
    clone.querySelector(".roles-wrapper").appendChild(roleSpan);
    // set level
    const levelSpan = document.createElement("span");
    levelSpan.innerHTML = `${job.level}`;
    levelSpan.classList.add("levels-background");
    clone.querySelector(".levels-wrapper").appendChild(levelSpan);
    // set languages
    job.languages.forEach((language) => {
      const languageSpan = document.createElement("span");
      languageSpan.innerHTML = `${language}`;
      languageSpan.classList.add("languages-background");
      clone.querySelector(".languages-wrapper").appendChild(languageSpan);
    });
    // set tools
    job.tools.forEach((tool) => {
      const toolSpan = document.createElement("span");
      toolSpan.innerHTML = `${tool}`;
      toolSpan.classList.add("tools-background");
      clone.querySelector(".tools-wrapper").appendChild(toolSpan);
    });
  });
};

createJobPosting();
