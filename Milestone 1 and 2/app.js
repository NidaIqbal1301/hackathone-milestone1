// Add interactivity for the "Skills" section toggle
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills-list");
    toggleButton.addEventListener("click", function () {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    });
});
