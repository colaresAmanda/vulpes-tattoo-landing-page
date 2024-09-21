

const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('menu');
const navLinks = document.getElementById('nav-links');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  menu.classList.toggle('open');

  if (menu.classList.contains('open')) {
    navLinks.style.display = 'flex'; // Show the links
  } else {
    navLinks.style.display = 'none'; // Hide the links
  }
});












document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.highlight-box-container');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the element is visible
  });

  boxes.forEach(box => {
    observer.observe(box);
  });
});


AOS.init();






function toggleFaq(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector('.icon');

  if (answer.style.display === "none" || answer.style.display === "") {
    // Hide all other FAQ answers
    document.querySelectorAll('.faq-answer').forEach((el) => {
      el.style.display = 'none';
    });
    // Reset all icons
    document.querySelectorAll('.icon').forEach((el) => {
      el.textContent = '▼';
    });

    // Show the clicked FAQ answer
    answer.style.display = "block";
    icon.textContent = '▲';
  } else {
    // Hide the clicked FAQ answer
    answer.style.display = "none";
    icon.textContent = '▼';
  }
}
