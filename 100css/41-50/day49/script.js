const frame = document.querySelector('.frame')
const hero = document.querySelector('.dot')

frame.addEventListener('mousemove', e => {
  hero.style.left = `${e.offsetX}px`
  hero.style.top = `${e.offsetY}px`
});

frame.addEventListener('mouseleave', _ => {
  hero.style.left = '50%'
  hero.style.top = '50%'
});