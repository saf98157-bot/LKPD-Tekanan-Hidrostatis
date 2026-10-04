document.addEventListener('DOMContentLoaded', () => {
  const rho = document.getElementById('rho');
  const g = document.getElementById('g');
  const h = document.getElementById('h');
  const result = document.getElementById('result');
  const calcBtn = document.getElementById('calcBtn');

  function calculate() {
    const rhoValue = Number(rho.value);
    const gValue = Number(g.value);
    const hValue = Number(h.value);

    if (!rhoValue || !gValue || !hValue || hValue < 0) {
      result.textContent = 'Masukkan angka yang valid untuk ρ, g, dan h.';
      return;
    }

    const p = rhoValue * gValue * hValue;
    result.textContent = `Tekanan hidrostatis = ρ × g × h = ${rhoValue} × ${gValue} × ${hValue} = ${p.toFixed(2)} Pa`;
  }

  calcBtn.addEventListener('click', calculate);
});

window.addEventListener('beforeprint', () => {
  document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', () => {
  document.body.classList.remove('print-mode');
});
