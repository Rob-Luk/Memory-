const btnPlay = document.querySelector('.startGame');
const addCards = document.querySelector('.cards');
let cards = document.querySelectorAll('.card');
const moves = document.querySelector('.moves');
const cardsArray = [
  'pumpkin',
  'pumpkin',
  'babaJaga',
  'babaJaga',
  'house',
  'house',
  'scareCrow',
  'scareCrow',
  'ghost',
  'ghost',
  'happyHaloween',
  'happyHaloween',
  'shoes',
  'shoes',
  'web',
  'web',
  'bat',
  'bat',
];

const activeCards = [];
let activeCard = '';

const gamepairs = cards.length / 2;
const result = 0;

// logika gry

const showCards = function () {
  activeCard = this;
  activeCard.classList.remove('hidden');

  if (activeCards.length === 0) {
    activeCards[0] = activeCard;

    return;
  } else {
    cards.forEach((card) => card.removeEventListener('click', showCards));
    activeCards[1] = activeCard;

    if (activeCards[0].className !== activeCards[1].className) {
      setTimeout(function () {
        activeCards.forEach((card) => {
          card.classList.add('hidden');
        });

        activeCard = '';
        activeCards.length = 0;

        cards.forEach((card) => card.addEventListener('click', showCards));
      }, 1000);
    }
  }
};
// licznik kliknięć myszką

const mouseMove = () => {
  let clicks = 0;

  const click = () => {
    clicks++;
    moves.textContent = `Moves: ${clicks}`;
  };

  return click;
};

const clicksScore = mouseMove();

// główna funckja

const playGame = () => {
  cards.forEach((card) => {
    card.addEventListener('click', clicksScore);

    const position = Math.floor(Math.random() * cardsArray.length);

    card.classList.add(cardsArray[position], 'card-general');
    cardsArray.splice(position, 1);
  });

  setTimeout(function () {
    cards.forEach((card) => {
      card.classList.add('hidden');
      card.addEventListener('click', showCards);
    });
  }, 800);
};

btnPlay.addEventListener('click', playGame);
