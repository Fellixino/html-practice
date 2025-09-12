const btn = document.createElement('button');
btn.textContent = 'Нажми меня';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
  alert('Ты молодец! Клик сработал.');
});
