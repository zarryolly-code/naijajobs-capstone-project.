const jobId =
localStorage.getItem("selectedJob");

const selectedJob = jobs.find(job => job.id == jobId);

const detailContainer =
document.getElementById("jobDetail");

if (selectedJob) {
    detailContainer.innerHTML = `
    <h1>${selectedJob.title}</h1>
    
    <h3>${selectedJob.company}</h3>

    <p><strong>Location:</strong> ${selectedJob.location}</p>

    <p><strong>Salary:</strong> ${selectedJob.salary}</p>

    <p><strong>Type:</strong> ${selectedJob.type}</p>

    <hr>

    <h3>Job Description</h3>

    <p>${selectedJob.description}</p>
    <br>

    <button onclick="applyJob()">Apply Now</button>
`;
}
else {
    detailContainer.innerHTML = `
    <h2>Job Not Found</h2>
    <p>Please return to the Jobs page.</p>
    `;
}

function applyJob() {
    alert("Application submitted successfully!");
}