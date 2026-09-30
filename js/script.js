// ========================================
// MOBILE MENU
// ========================================

function toggleMenu() {

  const nav = document.getElementById("navMenu");

  nav.classList.toggle("active");

}


// ========================================
// COURSE MODAL
// ========================================

let selectedCourse = "";

function openCourse(courseName, price) {

  selectedCourse = courseName;

  document.getElementById("modalCourseName").textContent =
    courseName;

  document.getElementById("modalPrice").textContent =
    price;

  document.getElementById("courseModal")
    .classList.add("active");

}


function closeCourse() {

  document.getElementById("courseModal")
    .classList.remove("active");

}


// ========================================
// ENROLLMENT MODAL
// ========================================

function openEnrollment() {

  closeCourse();

  document.getElementById("enrollModal")
    .classList.add("active");

}


function closeEnrollment() {

  document.getElementById("enrollModal")
    .classList.remove("active");

}


// ========================================
// COURSE SEARCH
// ========================================

function searchCourses() {

  const search =
    document
      .getElementById("courseSearch")
      .value
      .toLowerCase();

  const courses =
    document.querySelectorAll(".course-card");

  courses.forEach(course => {

    const name =
      course.dataset.name.toLowerCase();

    if (name.includes(search)) {

      course.style.display = "block";

    } else {

      course.style.display = "none";

    }

  });

}


// ========================================
// CONTACT FORM
// ========================================

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
      document.getElementById("name").value;

    alert(
      `Thank you ${name}! Your message has been submitted.`
    );

    this.reset();

  });


// ========================================
// ENROLLMENT FORM
// ========================================

document
  .getElementById("enrollForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
      document.getElementById("studentName").value;

    alert(
      `Thank you ${name}! Your enrollment request for ${selectedCourse} has been received.`
    );

    this.reset();

    closeEnrollment();

  });


// ========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ========================================

window.addEventListener("click", function (event) {

  const courseModal =
    document.getElementById("courseModal");

  const enrollModal =
    document.getElementById("enrollModal");

  if (event.target === courseModal) {

    closeCourse();

  }

  if (event.target === enrollModal) {

    closeEnrollment();

  }

});