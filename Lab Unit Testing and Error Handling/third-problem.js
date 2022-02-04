function printDeckOfCards(cards) {
    let result = [];
        try {
            for (const cardInput of cards) {
                const face = cardInput.slice(0, cardInput.length - 1);
                const suit = cardInput.slice(cardInput.length - 1);
                const card = createCard(face, suit);
                result.push(card.toString());
            }

            console.log(result.join(' '));
        } catch (error) {
            console.log(error.message);
        }

    function createCard(face, suit){
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; 
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
        if (!faces.includes(face) || !Object.keys(suits).includes(suit)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }
        let card = {
            face,
            suit: suits[suit],
            toString: function() {
    
                return `${this.face}${this.suit}`;
    
            }
        };
        return card;
    }
  }
  printDeckOfCards([['5S', '3D', 'QD', '1C']]);