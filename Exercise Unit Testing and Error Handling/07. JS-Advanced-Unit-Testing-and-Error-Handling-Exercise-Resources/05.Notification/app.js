function notify(message) {
  const root = document.getElementById('notification');
  root.style.display = 'block';
  root.textContent = message;
  root.addEventListener('click', hideDiv);

  function hideDiv(e){
    e.target.style.display = 'none';
  }
}