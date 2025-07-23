/*
 * Client‑side behaviours for the productivity site.
 * Handles scroll‑based progress indication, section navigation highlighting and
 * quiz interactions.
 */

// Wait until DOM is ready
// Only attach DOM event listeners when running in a browser environment. When this
// module is imported in a Node test, `document` will be undefined, so the
// listeners will be skipped.
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progressBar');
  const sidebarLinks = Array.from(document.querySelectorAll('.sidebar a'));
  const sections = Array.from(document.querySelectorAll('main .section'));

  // Update the progress bar and highlight active nav item
  function updateProgress() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    if (progressBar) {
      progressBar.style.width = Math.min(100, progress * 100) + '%';
    }
    // Highlight current section
    let currentSectionId = '';
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentSectionId = section.id;
        break;
      }
    }
    sidebarLinks.forEach((link) => {
      if (link.getAttribute('href').substring(1) === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateProgress);
  updateProgress();

  // Quiz logic
  function initQuizzes() {
    const quizzes = document.querySelectorAll('.quiz');
    quizzes.forEach((quiz) => {
      const button = quiz.querySelector('.quiz-submit');
      const feedbackElem = quiz.querySelector('.quiz-feedback');
      if (!button || !feedbackElem) return;
      const correctAnswer = button.getAttribute('data-answer');
      button.addEventListener('click', () => {
        const selected = quiz.querySelector('input[type="radio"]:checked');
        if (!selected) {
          feedbackElem.textContent = 'Please select an answer.';
          feedbackElem.style.color = '#f4a261';
          return;
        }
        if (selected.value === correctAnswer) {
          feedbackElem.textContent = 'Correct!';
          feedbackElem.style.color = '#2a9d8f';
        } else {
          feedbackElem.textContent = 'Incorrect—try again.';
          feedbackElem.style.color = '#e76f51';
        }
      });
    });
  }

    initQuizzes();
  });
}

/*
 * Helper exported for tests: calculates progress based on scrollTop and scrollHeight.
 * This pure function allows a simple unit test without DOM.
 */
function calculateProgress(scrollTop, scrollHeight) {
  if (scrollHeight <= 0) return 0;
  const progress = scrollTop / scrollHeight;
  return progress > 1 ? 1 : progress;
}

// Expose helper for testing
if (typeof module !== 'undefined') {
  module.exports = { calculateProgress };
}