type Education = {
    diploma: string;
    institution: string;
    year: string;
  };
  
  type Skill = string;
  
  type WorkExperience = {
    position: string;
    company: string;
    years: string;
    description: string;
  };
  
  let educationDataa: Education[] = [
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
  
  let skillsDataa: Skill[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React.js",
    "Next.js",
  ];
  
  let workExperienceDataa: WorkExperience[] = [
    {
      position: "Frontend Developer",
      company: "Young Dev",
      years: "2023 - 2024",
      description:
        "I'm an enthusiastic and ambitious fresh developer, eager to apply my skills and knowledge to build innovative solutions. With a strong foundation in programming languages and web development frameworks, I'm excited to learn and grow as a developer. I'm passionate about creating user-friendly and efficient digital experiences, and I'm looking forward to contributing to exciting projects and collaborating with like-minded individuals",
    },
  ];
  
  function populateEducationn() {
    const educationSection = document.getElementById("education-content")?.querySelector(".card-grid");
    if (educationSection) {
      educationData.forEach((edu) => {
        const educationCard = document.createElement("div");
        educationCard.classList.add("card");
        educationCard.classList.add("education-card");
  
        educationCard.innerHTML = `
                  <h3 class="card-title">${edu.diploma}</h3>
                  <p class="card-subtitle">${edu.institution}</p>
                  <p class="card-details">${edu.year}</p>
              `;
  
        educationSection.appendChild(educationCard);
      });
    }
  }
  
  function populateSkillss() {
    const skillsSection = document.getElementById("skills-content")?.querySelector(".skill-list");
    if (skillsSection) {
      skillsData.forEach((skill) => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsSection.appendChild(skillItem);
      });
    }
  }
  
  function populateWorkExperiencee() {
    const workExperienceSection = document.getElementById("work-experience-content")?.querySelector(".card-grid");
    if (workExperienceSection) {
      workExperienceData.forEach((work) => {
        const workCard = document.createElement("div");
        workCard.classList.add("card");
        workCard.classList.add("work-experience-card");
  
        workCard.innerHTML = `
                  <h3 class="card-title">${work.position}</h3>
                  <p class="card-subtitle">${work.company}</p>
                  <p class="card-details">${work.years}</p>
                  <p class="card-details">${work.description}</p>
              `;
  
        workExperienceSection.appendChild(workCard);
      });
    }
  }
  
  function activateTabb(tabId: string) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => section.classList.remove("active"));
  
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
      activeSection.classList.add("active");
    }
  }
  
  document.getElementById("education-tab")?.addEventListener("click", () => activateTab("education-content"));
  document.getElementById("skills-tab")?.addEventListener("click", () => activateTab("skills-content"));
  document.getElementById("experience-tab")?.addEventListener("click", () => activateTab("work-experience-content"));
  
 
  populateEducation();
  populateSkills();
  populateWorkExperience();
  