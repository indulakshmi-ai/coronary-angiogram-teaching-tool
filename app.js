const cases = {
  case1: {
    title: "Case 1",
    image: "assets/examples/case1.png",
    teachingPoint: "Look for the left main bifurcation into LAD and LCx.",
    vessels: ["LAD", "LCx"],
    labels: [
      { text: "LAD", top: "38%", left: "48%" },
      { text: "LCx", top: "48%", left: "35%" }
    ]
  },
  case2: {
    title: "Case 2",
    image: "assets/examples/case2.png",
    teachingPoint: "This view highlights the right coronary artery.",
    vessels: ["RCA"],
    labels: [
      { text: "RCA", top: "45%", left: "55%" }
    ]
  },
  case3: {
    title: "Case 3",
    image: "assets/examples/case3.png",
    teachingPoint: "Identify branching and compare LAD versus diagonal branch direction.",
    vessels: ["LAD", "Diagonal"],
    labels: [
      { text: "LAD", top: "35%", left: "50%" },
      { text: "Diagonal", top: "28%", left: "60%" }
    ]
  }
};

function loadCase(caseId) {
  const current = cases[caseId];
  document.getElementById("angiogram").src = current.image;
  document.getElementById("case-title").textContent = current.title;
  document.getElementById("teaching-point").textContent = current.teachingPoint;

  const vesselList = document.getElementById("vessel-list");
  vesselList.innerHTML = "";
  current.vessels.forEach(vessel => {
    const li = document.createElement("li");
    li.textContent = vessel;
    vesselList.appendChild(li);
  });

  const labels = document.getElementById("labels");
  labels.innerHTML = "";
  current.labels.forEach(label => {
    const div = document.createElement("div");
    div.className = "label";
    div.textContent = label.text;
    div.style.top = label.top;
    div.style.left = label.left;
    labels.appendChild(div);
  });
}

loadCase("case1");
