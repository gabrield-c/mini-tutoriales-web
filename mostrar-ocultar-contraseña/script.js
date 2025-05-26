const toggleBtn = document.getElementById('toggle');
const passwordInput = document.getElementById('password');

toggleBtn.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  toggleBtn.textContent = isPassword ? 'Ocultar' : 'Mostrar';
});




