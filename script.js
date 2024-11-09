var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var form = document.getElementById('resume-form-container');
var resumeContainer = document.getElementById('resumeContainer');
var photo = document.getElementById('resume-photo');
var name = document.getElementById('resume-name');
var email = document.getElementById('resume-email');
var phone = document.getElementById('resume-phone');
var address = document.getElementById('resume-address');
var degree = document.getElementById('resume-degree');
var university = document.getElementById('resume-university');
var year = document.getElementById('resume-year');
var company = document.getElementById('resume-company');
var position = document.getElementById('resume-position');
var startDate = document.getElementById('resume-start-date');
var endDate = document.getElementById('resume-end-date');
var description = document.getElementById('resume-description');
var skill1 = document.getElementById('resume-skill1');
var skill2 = document.getElementById('resume-skill2');
var skill3 = document.getElementById('resume-skill3');
var language1 = document.getElementById('resume-language1');
var language2 = document.getElementById('resume-language2');
var language3 = document.getElementById('resume-language3');
var interest1 = document.getElementById('resume-interest1');
var interest2 = document.getElementById('resume-interest2');
var interest3 = document.getElementById('resume-interest3');
var submitBtn = document.querySelector('#submit-btn');
var editBtn = document.querySelector('#edit-btn');
var backBtn = document.querySelector('#back-btn');
var shareLinkBtn = document.querySelector('#shareLink-btn');
var downloadPdf = document.querySelector('#download-pdf');
form.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name1, email1, phone1, address1, degree1, university1, year1, company1, position1, startDate1, endDate1, description1, skill1Value, skill2Value, skill3Value, language1Value, language2Value, language3Value, interest1Value, interest2Value, interest3Value, photoInput, photoFile, photoBase64;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                name1 = document.getElementById('name').value;
                email1 = document.getElementById('email').value;
                phone1 = document.getElementById('phone').value;
                address1 = document.getElementById('address').value;
                degree1 = document.getElementById('degree').value;
                university1 = document.getElementById('university').value;
                year1 = document.getElementById('year').value;
                company1 = document.getElementById('company').value;
                position1 = document.getElementById('position').value;
                startDate1 = document.getElementById('start-date').value;
                endDate1 = document.getElementById('end-date').value;
                description1 = document.getElementById('description').value;
                skill1Value = document.getElementById('skill1').value;
                skill2Value = document.getElementById('skill2').value;
                skill3Value = document.getElementById('skill3').value;
                language1Value = document.getElementById('language1').value;
                language2Value = document.getElementById('language2').value;
                language3Value = document.getElementById('language3').value;
                interest1Value = document.getElementById('interest1').value;
                interest2Value = document.getElementById('interest2').value;
                interest3Value = document.getElementById('interest3').value;
                photoInput = document.getElementById('photo');
                photoFile = photoInput.files ? photoInput.files[0] : null;
                photoBase64 = '';
                if (!photoFile) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(photoFile)];
            case 1:
                photoBase64 = _b.sent();
                photo.src = photoBase64; // only set the photo source once
                localStorage.setItem('photo', photoBase64); // store photo in localStorage
                _b.label = 2;
            case 2:
                // Populate resume with form data
                (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                resumeContainer.classList.remove("hidden");
                name.textContent = name1;
                email.textContent = "Email: ".concat(email1);
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
                return [2 /*return*/];
        }
    });
}); });
function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { return resolve(reader.result); };
        reader.onerror = function (error) { return reject(error); };
        reader.readAsDataURL(file);
    });
}
