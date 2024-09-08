let _a, _b, _c;
let educationData = [
    {
        diploma: "Cloud Applied Generative AI Engineer",
        institution: "Governor Initiative For Artificial Intelligence and Computing",
        year: "2024",
    },
    {
        diploma: "Marketing",
        institution: "BanoQabil",
        year: "2023",
    },
];
let skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React.js",
    "Next.js",
];
let workExperienceData = [
    {
        position: "Frontend Developer",
        company: "Young Dev",
        years: "2023 - 2024",
        description: "I'm an enthusiastic and ambitious fresh developer, eager to apply my skills and knowledge to build innovative solutions. With a strong foundation in programming languages and web development frameworks, I'm excited to learn and grow as a developer. I'm passionate about creating user-friendly and efficient digital experiences, and I'm looking forward to contributing to exciting projects and collaborating with like-minded individuals",
    },
];
function populateEducation() {
    let _a;
    let educationSection = (_a = document.getElementById("education-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".card-grid");
    if (educationSection) {
        educationData.forEach(function (edu) {
            var educationCard = document.createElement("div");
            educationCard.classList.add("card");
            educationCard.classList.add("education-card");
            educationCard.innerHTML = "\n                  <h3 class=\"card-title\">".concat(edu.diploma, "</h3>\n                  <p class=\"card-subtitle\">").concat(edu.institution, "</p>\n                  <p class=\"card-details\">").concat(edu.year, "</p>\n              ");
            educationSection.appendChild(educationCard);
        });
    }
}
function populateSkills() {
    let _a;
    let skillsSection = (_a = document.getElementById("skills-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".skill-list");
    if (skillsSection) {
        skillsData.forEach(function (skill) {
            var skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skillsSection.appendChild(skillItem);
        });
    }
}
function populateWorkExperience() {
    let _a;
    let workExperienceSection = (_a = document.getElementById("work-experience-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".card-grid");
    if (workExperienceSection) {
        workExperienceData.forEach(function (work) {
            var workCard = document.createElement("div");
            workCard.classList.add("card");
            workCard.classList.add("work-experience-card");
            workCard.innerHTML = "\n                  <h3 class=\"card-title\">".concat(work.position, "</h3>\n                  <p class=\"card-subtitle\">").concat(work.company, "</p>\n                  <p class=\"card-details\">").concat(work.years, "</p>\n                  <p class=\"card-details\">").concat(work.description, "</p>\n              ");
            workExperienceSection.appendChild(workCard);
        });
    }
}
function activateTab(tabId) {
    let sections = document.querySelectorAll(".content-section");
    sections.forEach(function (section) { return section.classList.remove("active"); });
    let activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.classList.add("active");
    }
}
(_a = document.getElementById("education-tab")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return activateTab("education-content"); });
(_b = document.getElementById("skills-tab")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return activateTab("skills-content"); });
(_c = document.getElementById("experience-tab")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return activateTab("work-experience-content"); });

populateEducation();
populateSkills();
populateWorkExperience();