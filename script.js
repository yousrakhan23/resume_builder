"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const form = document.getElementById('resume-form-container');
const resumeContainer = document.getElementById('resumeContainer');
// const resume = document.getElementById('resume') as HTMLDivElement;
const photo = document.getElementById('resume-photo');
const name = document.getElementById('resume-name');
const email = document.getElementById('resume-email');
const phone = document.getElementById('resume-phone');
const address = document.getElementById('resume-address');
const degree = document.getElementById('resume-degree');
const university = document.getElementById('resume-university');
const year = document.getElementById('resume-year');
const company = document.getElementById('resume-company');
const position = document.getElementById('resume-position');
const startDate = document.getElementById('resume-start-date');
const endDate = document.getElementById('resume-end-date');
const description = document.getElementById('resume-description');
const skill1 = document.getElementById('resume-skill1');
const skill2 = document.getElementById('resume-skill2');
const skill3 = document.getElementById('resume-skill3');
const language1 = document.getElementById('resume-language1');
const language2 = document.getElementById('resume-language2');
const language3 = document.getElementById('resume-language3');
const interest1 = document.getElementById('resume-interest1');
const interest2 = document.getElementById('resume-interest2');
const interest3 = document.getElementById('resume-interest3');
const editBtn = document.querySelector('edit-btn');
const backBtn = document.querySelector('back-btn');
const shareLinkBtn = document.querySelector('shareLink-btn');
const downloadPdf = document.querySelector('download-pdf');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // Retrieve input values
    const name1 = document.getElementById('name').value;
    const email1 = document.getElementById('email').value;
    const phone1 = document.getElementById('phone').value;
    const address1 = document.getElementById('address').value;
    const degree1 = document.getElementById('degree').value;
    const university1 = document.getElementById('university').value;
    const year1 = document.getElementById('year').value;
    const company1 = document.getElementById('company').value;
    const position1 = document.getElementById('position').value;
    const startDate1 = document.getElementById('start-date').value;
    const endDate1 = document.getElementById('end-date').value;
    const description1 = document.getElementById('description').value;
    const skill1Value = document.getElementById('skill1').value;
    const skill2Value = document.getElementById('skill2').value;
    const skill3Value = document.getElementById('skill3').value;
    const language1Value = document.getElementById('language1').value;
    const language2Value = document.getElementById('language2').value;
    const language3Value = document.getElementById('language3').value;
    const interest1Value = document.getElementById('interest1').value;
    const interest2Value = document.getElementById('interest2').value;
    const interest3Value = document.getElementById('interest3').value;
    // Handle photo upload
    const photoInput = document.getElementById('photo');
    const photoFile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = '';
    if (photoFile) {
        photoBase64 = await fileToBase64(photoFile);
        photo.src = photoBase64;
        // localStorage.setItem('photo', photoBase64);
        // photo.src = photoBase64;
    }
    // Populate resume with form data
    // document.querySelector(".container")?.classList.add("hidden");
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
});
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}
