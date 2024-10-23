
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



// Richiamo il bottone per generare il prezzo
const generatePriceButton = document.getElementById('input_price')
// Richiamo il bottone annullare il calcolo del prezzo
const abortPriceButton = document.getElementById('input_abort')
// Richiamo il form
const form = document.querySelector('form')


// Definisco gli eventi al click del bottone che genera il prezzo
generatePriceButton.addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('ho premuto il bottone')

    // Raccolgo i dati dal form
    const name = document.getElementById('input-name').value
    const numkm = parseInt(document.getElementById('input-km').value)
    const age = document.getElementById('input-age').value

    // Esempio di utilizzo della funzione calculateTicketPrice
    const ticketPrice = calculateTicketPrice(numkm, age)
    console.log(`${name} - Prezzo: ${ticketPrice}`)
})



// Definisco gli eventi al click del bottone che annulla il form
abortPriceButton.addEventListener('click', function (event) {
    event.preventDefault()
    // console.log('ho premuto il bottone')

    // Resetto il form e il prezzo visualizzato
    form.reset()
})