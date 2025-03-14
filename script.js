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

	for (let number of numbers) {
		for (let naipe of naipes) {
			newDeck.push({
				number,
				naipe,
			});
		}
	};   

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


const slipDeck = (deck) => {
    const deck1 = deck.slice(0, 26);
    const deck2 = deck.slice(26, 52);

    return [deck1, deck2];
};

const [deck1, deck2] = slipDeck(shuffleDeck(generateDeck()));
console.log(deck1);
console.log(deck2);

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

