console.log('form prezzo del biglietto del treno')

// Creo una funzione che calcoli il prezzo del biglietto

function calculateTicketPrice (numkm, age) {
    const basePrice = numkm * 0.21

    let discountPercentage

	if (age < 18) {
		discountPercentage = 20
	} else if (age > 65) {
		discountPercentage = 40
	} else {
        discountPercentage = 0
	}

    const discount = (basePrice * discountPercentage) / 100
    const price = basePrice - discount

    // Arrotondare il prezzo a due cifre decimali
    const roundedPrice = price.toFixed(2);

    // Formattare il prezzo come valuta
    const formattedPrice = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
    }).format(roundedPrice);

    // Ritorno il prezzo formattato
    return formattedPrice;
}

// Esempio di chiamata alla funzione
// const ticketPrice = calculateTicketPrice(50, 70)
// console.log(ticketPrice)


// Richiamo il bottone per generare il prezzo
const generatePriceButton = document.getElementById('input_price')

// Definisco gli eventi al click del bottone che genera il prezzo
generatePriceButton.addEventListener('click', function() {
    console.log('ho premuto il bottone')
})





// Richiamo il bottone annullare il calcolo del prezzo
const abortPriceButton = document.getElementById('input_abort')

// Definisco gli eventi al click del bottone che annulla il form
abortPriceButton.addEventListener('click', function() {
    console.log('ho premuto il bottone')
})