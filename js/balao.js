window.addEventListener('load', function () {
  const cardPresentes = document.querySelector('.card-presentes');

  if (cardPresentes) {
    cardPresentes.addEventListener('click', function (event) {
      event.preventDefault(); // não navegar
      cardPresentes.classList.toggle('show-balao');
    });
  }
});


window.addEventListener('load', function () {
  const cardConfirmacao = document.querySelector('.card-confirmacao');

  if (cardConfirmacao) {
    cardConfirmacao.addEventListener('click', function (event) {
      event.preventDefault(); // não navegar
      cardConfirmacao.classList.toggle('show-balao');
    });
  }
});