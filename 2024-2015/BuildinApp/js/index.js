const contents = [
    {
        title: "1. Drawing Preparation",
        text: "Our expert architects and engineers prepare high-quality building plans, ensuring they meet DTCP and local authority guidelines.This includes:",
        points: ["Site plan", "Floor plan", "Structural drawings", "Elevation and section drawings", "Service drawings (plumbing, electrical, etc.)"]
    },
    {
        title: "2. Licensed Surveyor Assistance",
        text: "Our Licensed Surveyors assist in conducting land surveys, preparing survey drawings, and verifying land records to support your approval applications.",
        points: []
    },
    {
        title: "3. DTCP Approval (Tamil Nadu)",
        text: "The Directorate of Town and Country Planning (DTCP) approval is essential for land development and building construction. Our team ensures:",
        points: ["Submission of required documents to DTCP", "Compliance with zoning regulations", "Coordination with authorities for a smooth approval process"]
    },
    {
        title: "4. Structural Stability Certification",
        text: "Our Structural Engineers provide certification confirming that the proposed construction meets the necessary stability and safety requirements.",
        points: []
    },
    {
        title: "5. Residential & Commercial Building Approval",
        text: "We assist in obtaining approvals for:",
        points: ["Residential buildings (individual houses, apartments, villas)","Commercial complexes, offices, and retail spaces","Industrial and warehouse buildings"]
    },
    {
        title: "6. Land Use and Zoning Approvals",
        text: "Ensuring that your land is zoned for your intended use is crucial. Our team handles:",
        points: ["Land conversion approvals","Zoning verification","Compliance with master plans"]
    }
];

function showContent(index) {
    const contentDisplay = document.getElementById("content-display");
    const content = contents[index];

    let pointsHTML = content.points.length > 0 ? 
        `<div class="points">` + content.points.map(point => `<div><i class="fas fa-circle"></i> ${point}</div>`).join('') + `</div>` : '';

    contentDisplay.innerHTML = `<h3>${content.title}</h3><p>${content.text}</p>${pointsHTML}`;

    document.querySelectorAll(".box").forEach(box => box.classList.remove("active"));
    document.querySelectorAll(".box")[index].classList.add("active");
}
