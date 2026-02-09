const studentName = document.getElementById("studentName");
const courseSelect = document.getElementById("course");
const enrollBtn = document.getElementById("enrollBtn");
const enrollList = document.getElementById("enrollList");
const total = document.getElementById("total");
const message = document.getElementById("message");

/* ARRAY TO STORE ENROLLMENTS */
let enrollments = [];

enrollBtn.addEventListener("click", enrollStudent);

function enrollStudent() {
    message.textContent = "";

    const name = studentName.value.trim();
    const course = courseSelect.value;

    if (name.length < 3) {
        message.textContent = "Student name must be at least 3 characters.";
        return;
    }

    if (course === "") {
        message.textContent = "Please select a course.";
        return;
    }

    enrollments.push({
        student: name,
        course: course
    });

    displayEnrollments();

    studentName.value = "";
    courseSelect.value = "";
}

function displayEnrollments() {
    enrollList.innerHTML = "";

    enrollments.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.student} enrolled in ${item.course}`;
        enrollList.appendChild(li);
    });

    total.textContent = enrollments.length;
}
