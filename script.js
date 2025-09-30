// Simple interactive toggle for skills
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelector("#skills ul");
  const heading = document.querySelector("#skills h3");

  heading.addEventListener("click", () => {
    skills.style.display = skills.style.display === "none" ? "block" : "none";
  });
});
