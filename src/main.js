const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('menu');
const navLinks = document.getElementById('nav-links');

// Handle mobile menu toggle
btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  menu.classList.toggle('open');

  if (menu.classList.contains('open')) {
    navLinks.style.display = 'flex'; // Show the links
  } else {
    navLinks.style.display = 'none'; // Hide the links
  }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Close the menu after clicking a link (for mobile)
    if (menu.classList.contains('open')) {
      btn.classList.remove('active');
      menu.classList.remove('open');
      navLinks.style.display = 'none';
    }
  });
});

// Highlight boxes using IntersectionObserver
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

// Initialize AOS (Animate On Scroll)
AOS.init();

// Toggle FAQ functionality
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
