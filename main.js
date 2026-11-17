

function toggleAssignment(id) {
  const assignment = document.getElementById(id);

  assignment.classList.toggle("open");
}


// course schedule with lectues 

const lectures = [
  {
    number: 1,
    title: "TEXT",
    description: " An introduction to how I see it and who I am. And what I’m currently doing.",
    date: "1/11"
  },
  {
    number: 2,
    title: "THE LABEL",
    description: "Trust and the way words might participate in meaning",
    date: "1/25"
  },
  {
    number: 3,
    title: "TYPOGRAPHY — PART ONE",
    description: "Some histories and some language. MA 01",
    date: "2/1"
  },
  {
    number: 4,
    title: "TYPOGRAPHY — PART TWO",
    description: "The deeper understanding and some vocabulary.",
    date: "2/8"
  },
  {
    number: 5,
    title: "DESIGN PRINCIPLES",
    description: "Movements in Design and Art history.",
    date: "2/15"
  },
  {
    number: 6,
    title: "DESIGN PRINCIPLES — PART TWO",
    description: "Dimensions Print - Part One - GRIDS etc. MA 02",
    date: "2/22"
  },
  {
    number: 7,
    title: "SEMIOTICS",
    description: "Representations.",
    date: "3/1"
  },
  {
    number: 8,
    title: "SEMIOTICS",
    description: "Signs and Signifiers..",
    date: "3/8"
  },
  {
    number: 9,
    title: "BRANDS",
    description: "",
    date: "3/22"
  },
  {
    number: 10,
    title: "PROFESSIONAL WORK",
    description: "",
    date: "3/29"
  },
  {
    number: 11,
    title: "CRITIQUE",
    description: "",
    date: "4/5"
  },
  {
    number: 12,
    title: "DEPTH",
    description: "MA 03",
    date: "4/12"
  },
  {
    number: 13,
    title: "RESOURCES",
    description: "",
    date: "4/19"
  },
  {
    number: 14,
    title: " NO FINAL",
    description: "",
    date: "HAGL"
  }

];


// display lecs 

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
    </div>
  `;

  scheduleContainer.appendChild(lectureCard);

});
