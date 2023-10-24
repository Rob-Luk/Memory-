const btnPlay = document.querySelector('.startGame');
const addCards = document.querySelector('.cards');
let cards = [...document.querySelectorAll('.card')];
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



};

// licznik kliknięć myszką

const mouseMove = () => {
	let clicks = 0;
	console.log(clicks);

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

		card.classList.add(cardsArray[position]);
		cardsArray.splice(position, 1);
	});

	setTimeout(function () {
		cards.forEach((card) => {
			card.classList.add('hidden');
			card.addEventListener('click', showCards);
		});
	}, 1000);
};

btnPlay.addEventListener('click', playGame);
