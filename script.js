$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel({
 
      autoPlay: 3000,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      center: true,
      nav:true,
      loop:true,
      responsive: {
        600: {
          items: 4
        }
      }
     
     
      
      
      
 
  });
 
});
// FAQ
document.addEventListener('DOMContentLoaded', function () {
  const questionContainers = document.querySelectorAll('.question-container');

  questionContainers.forEach(container => {
      const question = container.querySelector('.question');
      const answer = container.querySelector('.answer');

      question.addEventListener('click', function () {
          container.classList.toggle('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // JavaScript code here
});