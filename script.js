// ===== СКРИПТ ДЛЯ МОБІЛЬНОГО МЕНЮ =====

// Знаходимо елементи в DOM
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

// Слухаємо клік на кнопку-«гамбургер»
burger.addEventListener('click', () => {
  // Перемикаємо клас .active — CSS покаже/сховає меню
  navLinks.classList.toggle('active');
});

// При кліку на посилання — закриваємо мобільне меню
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== ПЛАВНА ПРОКРУТКА ДО СЕКЦІЙ =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

