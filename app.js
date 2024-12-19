// Get references to the form and display area
var Resume = document.getElementById('resume-form');
var resume = document.getElementById('resume-display');
// Handle form submission
Resume.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    //  Collect input values
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var phone = document.getElementById('Phone').value;
    // Generate the Resume Content Dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    // Display the Generated Resume
    if (resume) {
        resume.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});