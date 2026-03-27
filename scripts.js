// Animação de fade-in ao rolar a página
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Animação das barras de progresso das habilidades ao rolar
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = bar.style.width;
      });
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skills-grid').forEach(el => barObserver.observe(el));