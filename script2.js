let reports = localStorage.getItem("reports");
reports = JSON.parse(reports);
const reportsContainer = document.getElementById("reportsContainer");
reports.forEach(function (report) {
    const reportDiv = document.createElement("div");
    reportDiv.className = "report-card";
    reportDiv.innerHTML = `
    <h3>${report.problem}</h3>
    <p>الاسم: ${report.name}</p>
    <p>الأولوية: ${report.priority}</p>
    <p>المكان: ${report.place}</p>
    <p>الوصف: ${report.description}</p>
    <p>الحالة: ${report.status}</p>
`;

    reportsContainer.appendChild(reportDiv);
});
