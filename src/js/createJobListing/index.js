var json = require("../data.json");
var data = json;

export let db = {
  company: [],
  position: [],
  role: [],
  level: [],
  contract: [],
  location: [],
  languages: [],
  tool: [],
};

// populate the job boards
const jobsContainer = document.querySelector(".jobs-wrapper");
const createJobPosting = () => {
  data.forEach((job) => {
    const jobListing = document.querySelector(".job-item");
    const clone = jobListing.cloneNode(true);
    jobsContainer.appendChild(clone);
    // set image
    clone.querySelector(".logo-outer img").setAttribute("src", `${job.logo}`);
    clone.querySelector(".logo-outer img").setAttribute("width", "100%");
    // set company name
    clone.querySelector(".company").innerHTML = `${job.company}`;
    clone.setAttribute(
      "data-db",
      clone.getAttribute("data-db")
        ? clone.getAttribute("data-db") + " " + job.company.toLowerCase()
        : job.company.toLowerCase()
    );
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
    clone.setAttribute(
      "data-db",
      clone.getAttribute("data-db")
        ? clone.getAttribute("data-db") + " " + job.position.toLowerCase()
        : job.position.toLowerCase()
    );
    // set posted at
    clone.querySelector(".posted-at").innerHTML = `${job.postedAt}`;
    // set contract
    clone.querySelector(".contract").innerHTML = `${job.contract}`;
    clone.setAttribute(
      "data-db",
      clone.getAttribute("data-db")
        ? clone.getAttribute("data-db") + " " + job.contract.toLowerCase()
        : job.contract.toLowerCase()
    );
    // set location
    clone.querySelector(".location").innerHTML = `${job.location}`;
    clone.setAttribute(
      "data-db",
      clone.getAttribute("data-db")
        ? clone.getAttribute("data-db") + " " + job.location.toLowerCase()
        : job.location.toLowerCase()
    );
    // set role
    const roleSpan = document.createElement("span");
    roleSpan.innerHTML = `${job.role}`;
    roleSpan.className = `${job.role}`;
    roleSpan.classList.add("roles-background");
    clone.querySelector(".roles-wrapper").appendChild(roleSpan);
    clone.setAttribute(
      "data-db",
      clone.getAttribute("data-db")
        ? clone.getAttribute("data-db") + " " + job.role.toLowerCase()
        : job.role.toLowerCase()
    );
    // set level
    const levelSpan = document.createElement("span");
    levelSpan.innerHTML = `${job.level}`;
    levelSpan.className = `${job.level}`;
    levelSpan.classList.add("levels-background");
    clone.querySelector(".levels-wrapper").appendChild(levelSpan);
    clone.setAttribute(
      "data-db",
      clone.getAttribute("data-db"),
      clone.getAttribute("data-db") + " " + job.level.toLowerCase()
    );
    // set languages
    job.languages.forEach((language) => {
      const languageSpan = document.createElement("span");
      languageSpan.innerHTML = `${language}`;
      languageSpan.className = `${language}`;
      languageSpan.classList.add("languages-background");
      clone.querySelector(".languages-wrapper").appendChild(languageSpan);
      clone.setAttribute(
        "data-db",
        clone.getAttribute("data-db")
          ? clone.getAttribute("data-db") + " " + language.toLowerCase()
          : language.toLowerCase()
      );
      db.languages.push(language);
    });
    // set tools
    job.tools.forEach((tool) => {
      const toolSpan = document.createElement("span");
      toolSpan.innerHTML = `${tool}`;
      toolSpan.className = `${tool}`;
      toolSpan.classList.add("tools-background");
      clone.querySelector(".tools-wrapper").appendChild(toolSpan);
      clone.setAttribute(
        "data-db",
        clone.getAttribute("data-db")
          ? clone.getAttribute("data-db") + " " + tool.toLowerCase()
          : tool.toLowerCase()
      );
      db.tool.push(tool);
    });

    // new object here {}
    db.company.push(job.company);
    db.contract.push(job.contract);
    // languages
    db.level.push(job.level);
    db.location.push(job.location);
    db.position.push(job.position);
    db.role.push(job.role);
    // tools

    // remove contract duplicates
    const contractArray = db.contract;
    const uniqueContractSet = new Set(contractArray);
    const backToContractArray = [...uniqueContractSet];
    // console.log(backToContractArray);

    // remove languages duplicates
    const languageArray = db.languages;
    const uniqueLanguageSet = new Set(languageArray);
    const backToLanguageArray = [...uniqueLanguageSet];
    // console.log(backToLanguageArray);

    // remove level duplicates
    const levelArray = db.level;
    const uniqueLevelSet = new Set(levelArray);
    const backToLevelArray = [...uniqueLevelSet];
    // console.log(backToLevelArray);

    // remove location duplicates
    const locationArray = db.location;
    const uniqueLocationSet = new Set(locationArray);
    const backToLocationArray = [...uniqueLocationSet];
    // console.log(backToLocationArray);

    // remove position duplicates
    const positionArray = db.position;
    const uniquePositionSet = new Set(positionArray);
    const backToPositionArray = [...uniquePositionSet];
    // console.log(backToPositionArray);

    // remove role duplicates
    const roleArray = db.role;
    const uniqueRoleSet = new Set(roleArray);
    const backToRoleArray = [...uniqueRoleSet];
    // console.log(backToRoleArray);

    // remove tool duplicates
    const toolArray = db.tool;
    const uniqueToolSet = new Set(toolArray);
    const backToToolArray = [...uniqueToolSet];
    // console.log(backToToolArray);

    // I need to figure out how to push my sanitised array into my db object, and replace the current arrays that are there
    // console.log(db.tool);

    job.dom = clone;
  });

  //   console.log("how is my db looking", db);
};

// once populated, remove the duplicates in the db object

createJobPosting();
