const form = document.getElementById('resume-form-container') as HTMLFormElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLDivElement;
const photo = document.getElementById('resume-photo') as HTMLImageElement;
const name = document.getElementById('resume-name') as HTMLSpanElement;
const email = document.getElementById('resume-email') as HTMLSpanElement;
const phone = document.getElementById('resume-phone') as HTMLSpanElement;
const address = document.getElementById('resume-address') as HTMLSpanElement;
const degree = document.getElementById('resume-degree') as HTMLSpanElement;
const university = document.getElementById('resume-university') as HTMLSpanElement;
const year = document.getElementById('resume-year') as HTMLSpanElement;
const company = document.getElementById('resume-company') as HTMLSpanElement;
const position = document.getElementById('resume-position') as HTMLSpanElement;
const startDate = document.getElementById('resume-start-date') as HTMLSpanElement;
const endDate = document.getElementById('resume-end-date') as HTMLSpanElement;
const description = document.getElementById('resume-description') as HTMLSpanElement;
const skill1 = document.getElementById('resume-skill1') as HTMLSpanElement;
const skill2 = document.getElementById('resume-skill2') as HTMLSpanElement;
const skill3 = document.getElementById('resume-skill3') as HTMLSpanElement;
const language1 = document.getElementById('resume-language1') as HTMLSpanElement;
const language2 = document.getElementById('resume-language2') as HTMLSpanElement;
const language3 = document.getElementById('resume-language3') as HTMLSpanElement;
const interest1 = document.getElementById('resume-interest1') as HTMLSpanElement;
const interest2 = document.getElementById('resume-interest2') as HTMLSpanElement;
const interest3 = document.getElementById('resume-interest3') as HTMLSpanElement;

const submitBtn = document.querySelector('#submit-btn') as HTMLButtonElement;
const editBtn = document.querySelector('#edit-btn') as HTMLButtonElement;
const backBtn = document.querySelector('#back-btn') as HTMLButtonElement;
const shareLinkBtn = document.querySelector('#shareLink-btn') as HTMLButtonElement;
const downloadPdf = document.querySelector('#download-pdf') as HTMLButtonElement;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Retrieve input values
  const name1 = (document.getElementById('name') as HTMLInputElement).value;
  const email1 = (document.getElementById('email') as HTMLInputElement).value;
  const phone1 = (document.getElementById('phone') as HTMLInputElement).value;
  const address1 = (document.getElementById('address') as HTMLInputElement).value;
  const degree1 = (document.getElementById('degree') as HTMLInputElement).value;
  const university1 = (document.getElementById('university') as HTMLInputElement).value;
  const year1 = (document.getElementById('year') as HTMLInputElement).value;
  const company1 = (document.getElementById('company') as HTMLInputElement).value;
  const position1 = (document.getElementById('position') as HTMLInputElement).value;
  const startDate1 = (document.getElementById('start-date') as HTMLInputElement).value;
  const endDate1 = (document.getElementById('end-date') as HTMLInputElement).value;
  const description1 = (document.getElementById('description') as HTMLTextAreaElement).value;
  const skill1Value = (document.getElementById('skill1') as HTMLInputElement).value;
  const skill2Value = (document.getElementById('skill2') as HTMLInputElement).value;
  const skill3Value = (document.getElementById('skill3') as HTMLInputElement).value;
  const language1Value = (document.getElementById('language1') as HTMLInputElement).value;
  const language2Value = (document.getElementById('language2') as HTMLInputElement).value;
  const language3Value = (document.getElementById('language3') as HTMLInputElement).value;
  const interest1Value = (document.getElementById('interest1') as HTMLInputElement).value;
  const interest2Value = (document.getElementById('interest2') as HTMLInputElement).value;
  const interest3Value = (document.getElementById('interest3') as HTMLInputElement).value;

  // Handle photo upload
  const photoInput = document.getElementById('photo') as HTMLInputElement;
  const photoFile = photoInput.files ? photoInput.files[0] : null;
  
  let photoBase64 = '';
  if (photoFile) {
    photoBase64 = await fileToBase64(photoFile);
    photo.src = photoBase64; // only set the photo source once
    localStorage.setItem('photo', photoBase64); // store photo in localStorage
  }

  // Populate resume with form data
  document.querySelector(".container")?.classList.add("hidden");
  resumeContainer.classList.remove("hidden");

  name.textContent = name1;
  email.textContent = `Email: ${email1}`;
  phone.textContent = phone1;
  address.textContent = address1;
  degree.textContent = degree1;
  university.textContent = university1;
  year.textContent = year1;
  company.textContent = company1;
  position.textContent = position1;
  startDate.textContent = startDate1;
  endDate.textContent = endDate1;
  description.textContent = description1;
  skill1.textContent = skill1Value;
  skill2.textContent = skill2Value;
  skill3.textContent = skill3Value;
  language1.textContent = language1Value;
  language2.textContent = language2Value;
  language3.textContent = language3Value;
  interest1.textContent = interest1Value;
  interest2.textContent = interest2Value;
  interest3.textContent = interest3Value;

  // Hide submit button and show other buttons
  form.classList.add("hidden");
  submitBtn.classList.add("hidden");
  editBtn.classList.remove("hidden");
  backBtn.classList.remove("hidden");
  shareLinkBtn.classList.remove("hidden");
  downloadPdf.classList.remove("hidden");
});

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}
