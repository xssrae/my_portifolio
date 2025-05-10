const text = "Junior Software Engineer";
let i = 0;

function typeWriter() {
  const element = document.querySelector(".typewriter");
  if (!element) return;

  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
window.addEventListener("load", typeWriter);


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
    }
  });
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


document.querySelectorAll(".ripple").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const rect = this.getBoundingClientRect();
    circle.className = "ripple-circle";
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

window.addEventListener("load", () => {
  document.querySelectorAll('.project-card').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, i * 150);
  });
});
