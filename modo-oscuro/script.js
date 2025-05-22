let enModoOscuro = false;

function toggleModo() {
  const body = document.body;
  const btn = document.getElementById('toggleBtn');

  if (!enModoOscuro) {
    body.classList.add('animar-a-oscuro');
    setTimeout(() => {
      body.classList.remove('animar-a-oscuro');
      body.classList.add('modo-nocturno');
      enModoOscuro = true;
      btn.textContent = "☀️ Modo Claro";
    }, 2000);
  } else {
    body.classList.add('animar-a-claro');
    setTimeout(() => {
      body.classList.remove('animar-a-claro');
      body.classList.remove('modo-nocturno');
      enModoOscuro = false;
      btn.textContent = "🌙 Modo Nocturno";
    }, 2000);
  }
}
