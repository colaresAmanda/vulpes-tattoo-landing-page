// document.addEventListener('DOMContentLoaded', () => {
//   const ulElement = document.getElementById('fadeInUl') as HTMLElement

//   function handleScroll() {
//     const ulPosition = ulElement.getBoundingClientRect().top
//     const screenPosition = window.innerHeight / 1.3

//     if (ulPosition < screenPosition) {
//       ulElement.classList.add('opacity-100', 'translate-y-0', 'animate-fadeIn')
//     }
//   }

//   window.addEventListener('scroll', handleScroll)
// })

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
