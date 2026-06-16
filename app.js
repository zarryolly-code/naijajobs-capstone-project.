const container =
document.getElementById("jobContainer");
const searchInput =
document.getElementById("searchInput");

function showJobs(data) {
    container.innerHTML = "";

    data.forEach(job => {
        container.innerHTML += `
        <div class="job-card" onclick="openJob(${job.id})">
        <h3>${job.title}</h3>
        <p>${job.company}</p>
        <p>${job.location}</p>
        <p>${job.salary}</p>
        <span class="badge">${job.type}</span>
        </div> 
        `;
    });
}
let postedJobs =
JSON.parse(localStorage.getItem("postedJobs")) || [];

let allJobs = jobs.concat(postedJobs);

showJobs(allJobs);

// SEARCH FUNCTION
searchInput.addEventListener("input",(e) => {
    const value =
    e.target.value.toLowerCase();

    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(value)||
        job.company.toLowerCase().includes(value)
    );

    showJobs(filtered);
});

// CLICK JOB
function openJob(id) {
    localStorage.setItem("selectedJob", id);
    window.location.href = "job-detail.html";
}