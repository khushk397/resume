document.getElementById("resume-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const degree = document.getElementById("degree").value;
  const institution = document.getElementById("institution").value;
  const gradYear = document.getElementById("grad-year").value;
  const skills = document.getElementById("skills").value.split(',');
  const projectTitle = document.getElementById("project-title").value;
  const projectDesc = document.getElementById("project-desc").value;

  // Set values in resume preview
  document.getElementById("preview-name").textContent = name;
  document.getElementById("preview-email").textContent = email;
  document.getElementById("preview-phone").textContent = phone;
  document.getElementById("preview-education").textContent = `${degree}, ${institution} (${gradYear})`;

  // Skills list
  const skillsList = document.getElementById("preview-skills");
  skillsList.innerHTML = ""; // Clear previous
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.trim();
    skillsList.appendChild(li);
  });

  // Projects
  document.getElementById("preview-project-title").textContent = projectTitle;
  document.getElementById("preview-project-desc").textContent = projectDesc;

  // Show resume
  document.getElementById("resume-preview").classList.remove("hidden");
});
