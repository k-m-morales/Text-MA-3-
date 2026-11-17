
// INTERACTIVE ASSIGNMENT CARDS

function toggleAssignment(id) {
  const assignment = document.getElementById(id);

  assignment.classList.toggle("open");
}


// COURSE SCHEDULE

// These are original syllabus dates.
// Verify and replace them for the next semester.

const lectures = [
  {
    number: 1,
    title: "TEXT",
    description: "Introduction to the instructor, course, and text.",
    date: "8/24"
  },
  {
    number: 2,
    title: "THE LABEL",
    description: "Trust and the role of words in meaning.",
    date: "8/31"
  },
  {
    number: 3,
    title: "TYPOGRAPHY — PART ONE",
    description: "Typography history and terminology.",
    date: "9/14"
  },
  {
    number: 4,
    title: "TYPOGRAPHY — PART TWO",
    description: "Deeper typography concepts and vocabulary.",
    date: "9/21"
  },
  {
    number: 5,
    title: "DESIGN PRINCIPLES",
    description: "Movements in design and art history.",
    date: "9/28"
  },
  {
    number: 6,
    title: "DESIGN PRINCIPLES — PART TWO",
    description: "Two-dimensional print design and grids.",
    date: "10/5"
  },
  {
    number: 7,
    title: "SEMIOTICS — REPRESENTATIONS",
    description: "Representations and visual meaning.",
    date: "10/12"
  },
  {
    number: 8,
    title: "SEMIOTICS — SIGNS AND SIGNIFIERS",
    description: "How signs communicate meaning.",
    date: "10/19"
  },
  {
    number: 9,
    title: "BRANDS",
    description: "Brand communication and identity.",
    date: "10/26"
  },
  {
    number: 10,
    title: "PROFESSIONAL WORK",
    description: "Professional creative practice.",
    date: "11/2"
  },
  {
    number: 11,
    title: "CRITIQUE",
    description: "Critique and evaluation.",
    date: "11/9"
  },
  {
    number: 12,
    title: "DEPTH",
    description: "Exploring design concepts in greater depth.",
    date: "11/16"
  },
  {
    number: 13,
    title: "RESOURCES",
    description: "Resources session run by learning assistants.",
    date: "11/30"
  }
];


// DISPLAY LECTURES ON WEBSITE

const scheduleContainer =
  document.getElementById("schedule-container");

lectures.forEach(function(lecture) {

  const lectureCard = document.createElement("div");

  lectureCard.classList.add("lecture");

  lectureCard.innerHTML = `
    <div>
      <h3>${lecture.number}. ${lecture.title}</h3>
      <p>${lecture.description}</p>
    </div>

    <div class="lecture-date">
      ${lecture.date}
      <br>
      <small>Verify date</small>
    </div>
  `;

  scheduleContainer.appendChild(lectureCard);

});
