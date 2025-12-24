document.addEventListener('DOMContentLoaded', function() {
  const competencyCards = document.querySelectorAll('.competency-card');

  competencyCards.forEach(card => {
    const link = card.querySelector('.competency-card__link');
    const description = card.querySelector('.competency-card__description');

    if (link && description) {
      description.style.maxHeight = 'none';
      const actualHeight = description.scrollHeight;
      description.style.maxHeight = '';

      if (actualHeight <= 54) {
        link.style.display = 'none';
      } else {
        link.addEventListener('click', function(e) {
          e.preventDefault();

          description.classList.toggle('expanded');

          if (description.classList.contains('expanded')) {
            link.textContent = 'Свернуть';
          } else {
            link.textContent = 'Читать подробнее';
          }
        });
      }
    }
  });
});

