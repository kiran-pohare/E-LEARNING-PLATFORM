const lessonsData = {
    js: [
        { title: "Intro to JS", video: "https://www.youtube.com/embed/W6NZfCO5SIk" },
       # { title: "important to JS", video: "https://www.youtube.com/embed/W6NZfCO5SIk" },##
        { title: "Variables", video: "https://www.youtube.com/embed/Bv_5Zv5c-Ts" },
        { title: "Functions", video: "https://www.youtube.com/embed/PoRJizFvM7s" }
    ],
    html: [
        { title: "HTML Basics", video: "https://www.youtube.com/embed/pQN-pnXPaVg" },
        { title: "CSS Basics", video: "https://www.youtube.com/embed/yfoY53QXEnI" }
    ],
    react: [
        { title: "React Intro", video: "https://www.youtube.com/embed/bMknfKXIFA8" },
        { title: "Components", video: "https://www.youtube.com/embed/Ke90Tje7VS0" }
    ]
};

// Get course from URL
const params = new URLSearchParams(window.location.search);
const course = params.get("course");

const lessonList = document.getElementById("lessonList");
const videoPlayer = document.getElementById("videoPlayer");
const progressBar = document.getElementById("progress");

let completed = 0;

function loadLessons() {
    const lessons = lessonsData[course];

    lessons.forEach((lesson, index) => {
        const li = document.createElement("li");
        li.textContent = lesson.title;

        li.onclick = () => {
            videoPlayer.src = lesson.video;

            completed++;
            updateProgress(lessons.length);
        };

        lessonList.appendChild(li);
    });
}

function updateProgress(total) {
    let percent = (completed / total) * 100;
    progressBar.style.width = percent + "%";
}

// Load first video automatically
function init() {
    if (!course || !lessonsData[course]) return;

    loadLessons();
    videoPlayer.src = lessonsData[course][0].video;
}

init();