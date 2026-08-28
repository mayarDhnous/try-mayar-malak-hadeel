const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("id1").value;
    const Problem = document.getElementById("myid").value;
    const priority = document.getElementById("divid1").value;
    const place = document.getElementById("divid2").value;
    const dis = document.getElementById("id2").value;

    const report = {
        name: name,
        problem: Problem,
        priority: priority,
        place: place,
        description: dis,
        status: "قيد التنفيذ"
    };
    let reports = localStorage.getItem("reports");

    if (reports) {
        reports = JSON.parse(reports);
    } else {
        reports = [];
    }
    reports.push(report);
    localStorage.setItem("reports", JSON.stringify(reports));
    console.log(reports);

});
