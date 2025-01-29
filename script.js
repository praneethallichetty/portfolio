// // Smooth Scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
  
//       const target = document.querySelector(this.getAttribute('href'));
//       if (target) {
//         target.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start',
//         });
//       }
//     });
//   });
  
//   // Dynamic Navigation Highlighting
//   window.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('nav ul li a');
  
//     let currentSection = '';
//     sections.forEach(section => {
//       const sectionTop = section.offsetTop - 50;
//       const sectionHeight = section.offsetHeight;
  
//       if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//         currentSection = section.getAttribute('id');
//       }
//     });
  
//     navLinks.forEach(link => {
//       link.classList.remove('active');
//       // Make sure the section ID is valid before comparing
//       if (currentSection && link.getAttribute('href') === `#${currentSection}`) {
//         link.classList.add('active');
//       }
//     });
//   });
  
//   // Form Validation (Optional for Contact Form)
//   const contactForm = document.querySelector('#contact-form');
//   if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const name = document.querySelector('#name').value.trim();
//       const email = document.querySelector('#email').value.trim();
//       const message = document.querySelector('#message').value.trim();
  
//       if (!name || !email || !message) {
//         alert('Please fill in all fields.');
//       } else {
//         alert('Message sent successfully!');
//         contactForm.reset();
//       }
//     });
//   }
  