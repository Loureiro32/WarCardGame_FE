const generateDeck = () => {
	const newDeck = [];

	const naipes = ["diamond", "heart", "spade", "club"];
	const numbers = [
		"A",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"J",
		"Q",
		"K",
	];
	for (let naipe of naipes) {
		numbers.forEach((number, value) => {
			value++;
			newDeck.push({
				number,
				naipe,
				value,
			});
		});
	}
	return newDeck;
};

const shuffleDeck = (deck) => {
	for (let i = deck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}
	return deck;
};

console.log(shuffleDeck(generateDeck()));

const splitDeck = (deck) => {
	const deck1 = deck.slice(0, 26);
	const deck2 = deck.slice(26, 52);

	return [deck1, deck2];
};

const [deck1, deck2] = splitDeck(shuffleDeck(generateDeck()));
console.table(deck1);
console.table(deck2);

function compareCards() {
	let card1 = deck1.shift();
	let card2 = deck2.shift();
	console.log("Player 1: ", card1);
	console.log("Player 2: ", card2);
	if (card1.value > card2.value) {
		deck1.push(card1, card2);
		console.log("Player 1 wins");
	} else if (card1.value < card2.value) {
		deck2.push(card1, card2);
		console.log("Player 2 wins");
	} else {

		console.log("It's a tie");
        console.log(deck1.length);
        console.log(deck2.length);
        contestTie(deck1, deck2);   
	}
}

function contestTie(deck1, deck2) {
	let cards1 = deck1.splice(0, 4);
	let cards2 = deck2.splice(0, 4);
	let card1 = deck1.shift();
	let card2 = deck2.shift();
	if (card1.value > card2.value) {
		deck1.push(card1, card2, ...cards1, ...cards2);
		console.log("Player 1 wins");
	} else if (card1.value < card2.value) {
		deck2.push(card1, card2, ...cards1, ...cards2);
		console.log("Player 2 wins");
	} else if (card1.value === card2.value) {
        
		console.log("It's a tie");
		contestTie();
	}
}

function playGame() {
    let round = 0;
    while(deck1.length > 0 && deck2.length > 0) {
        round++;
        console.log("Round: ", round);
        compareCards();
    }
}



const Card = (cardData) => {
	const element = document.createElement("div");

	element.innerHTML = `
    <div class="grid-item">
        <div class="top-left">${cardData.number}<br>
            <div class="${cardData.naipe}-bottom"></div>
        </div>
        <div class="${cardData.naipe}"></div>
        <div></div>
        <div class="${cardData.naipe}"></div>
        <div></div>
        <div></div>
        <div class="${cardData.naipe}"></div>
        <div class="${cardData.naipe} topposition"></div>
        <div class="${cardData.naipe}"></div>
        <div></div>
        <div></div>
        <div class="${cardData.naipe} rotate"></div>
        <div class="${cardData.naipe} rotate bottomposition"></div>
        <div class="${cardData.naipe} rotate"></div>
        <div></div>
        <div></div>
        <div class="${cardData.naipe} rotate"></div>
        <div></div>
        <div class="${cardData.naipe} rotate"></div>
        <div class="bottom-right">${cardData.number}<br>
            <div class="${cardData.naipe}-bottom"></div>
        </div>`;

	return element;
};

const [div] = document.getElementsByClassName("grid-container");

const [div2] = document.getElementsByClassName("grid-container2");

deck1.forEach((card) => {
	const cardElement = Card(card);
	div.appendChild(cardElement);
});

deck2.forEach((card) => {
	const cardElement = Card(card);
	div2.appendChild(cardElement);
});
