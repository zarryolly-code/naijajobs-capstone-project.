const container =
document.getElementById("jobsContainer");

jobs.forEach(job => {
    container.innerHTML += `
    <div class="job-card">
     <h3>${job.title}</h3>
     <p>${job.company}</p>
     <p>${job.location}</p>
     <p>${job.salary}</p>
    </div>
    `;
});