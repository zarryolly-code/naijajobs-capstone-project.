const form =
document.getElementById("jobForm");

form.addEventListener("submit",
    function(e) {
        e. preventDefault();

        const title =
        document.getElementById("title").value;
        const company =
        document.getElementById("company").value;
        const location =
        document.getElementById("location").value;
        const salary =
        document.getElementById("salary").value;
        const type =
        document.getElementById("type").value;
        const description =
        document.getElementById("description").value;

        const newJob = {
            id: Date.now(),
            title,
            company,
            location,
            salary,
            type,
            description
        };

        let postedJobs =
        JSON.parse(localStorage.getItem("postedJobs"))|| [];
        postedJobs.push(newJob);

        localStorage.setItem("postedJobs",JSON.stringify(postedJobs));

        alert("Job posted successfully!");

        form.reset();
    });