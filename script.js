document.querySelectorAll('.slide').forEach((button, index, buttons) => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const stage = document.querySelector('.slide-stage');
    if (!stage) return;
    const number = stage.querySelector('.slide-number');
    const counter = stage.querySelector('.viewer-controls span');
    const title = stage.querySelector('h2');
    const eyebrow = stage.querySelector('.slide-stage .eyebrow');
    const titles = [
      'Should the company implement its AI feature?',
      'Control vs Treatment: the experiment design',
      '100K users, defined metrics and clean experiment data',
      'From raw data to statistical evidence',
      'Testing whether observed differences are meaningful',
      'What changed between the two groups?',
      'Interactive analysis through the Tableau dashboard',
      'Turning statistical evidence into a business decision'
    ];
    if (number) number.textContent = String(index + 1).padStart(2, '0');
    if (counter) counter.textContent = `${index + 1} / ${buttons.length}`;
    if (title) title.textContent = titles[index];
    if (eyebrow) eyebrow.textContent = [
      'THE BUSINESS PROBLEM','EXPERIMENT DESIGN','DATA & METRICS','ANALYTICAL APPROACH',
      'STATISTICAL ANALYSIS','RESULTS','DASHBOARD','RECOMMENDATION'
    ][index];
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.project-card, .skill-grid article, .side-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  observer.observe(el);
});

document.querySelectorAll('.visible').forEach(el => {
  el.style.opacity = '1';
  el.style.transform = 'translateY(0)';
});
