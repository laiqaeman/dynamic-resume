// Get references to the form and display area
const Resume = document.getElementById('resume-form') as HTMLFormElement;
const resume = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
Resume.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // prevent page reload

  //  Collect input values
  const name = (document.getElementById('Name') as HTMLInputElement).value;
  const email = (document.getElementById('Email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const experience = (document.getElementById('experience') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;
  const phone = (document.getElementById('Phone') as HTMLInputElement).value;

  // Generate the Resume Content Dynamically
  const resumeHTML = `
    <h2><b>Resume</b></h2>

    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
  `;

  // Display the Generated Resume
  if (resume) {
    resume.innerHTML = resumeHTML;
  } else {
    console.error("The resume display element is missing.");
  }
});