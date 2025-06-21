const phrases = ['Web Developer', 'Designer', 'Student'];
let i = 0, j = 0, isDeleting = false;
const el = document.getElementById('typed-text');

function type() {
  const current = phrases[i];
  el.textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();


