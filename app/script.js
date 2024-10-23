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

    // Controllo se la card riepilogativa esiste già
    if (document.querySelector('.data-card')) {
        console.log('La card riepilogativa è già stata generata.');
        return // Esco dalla funzione se la card esiste già
    }

    // Raccolgo i dati dal form
    const name = document.getElementById('input-name').value
    const numkm = parseInt(document.getElementById('input-km').value)
    const age = document.getElementById('input-age').value

    // Trasformo la stringa dell'età in un numero
    if (age === 'Minorenne') {
        age <= 17
    } else if (age === 'Over 65') {
        age >= 66;
    } else (age === 'Maggiorenne') 

    // Esempio di utilizzo della funzione calculateTicketPrice
    const ticketPrice = calculateTicketPrice(numkm, age)
    console.log(`${name} - Prezzo: ${ticketPrice}`)

    // Creo il titolo per la nuova card
    const summaryCardTitle = document.createElement('h1')
    // Assegno le classi al nuovo titolo
    summaryCardTitle.className = 'm-4 text-center text-white'
    // Inserisco il contenuto nel tag
    summaryCardTitle.innerHTML = 'Il tuo biglietto'
    // Aggiungo il titolo al DOM
    // Assegno l'id della nuova card e lo appendo/inserisco nella row
    document.querySelector('.row').appendChild(summaryCardTitle)

    // Creazione la row dove andrà la card
    const summaryCardRow = document.createElement('div')
    // Assegno le classi css alla row
    summaryCardRow.className = 'row align-items-center justify-content-between'
            
    // Aggiungo la row al DOM
    // Assegno la nuova row la appendo/inserisco alla row (quindi va dopo la row esistente)
    document.querySelector('.row').appendChild(summaryCardRow)


    // Creazione della card riepilogativa
    const summaryCard = document.createElement('div')
    // Assegno le classi css al nuovo div creato
    summaryCard.className = 'data-card bg-light p-5 mt-3 d-flex align-items-center justify-content-between text-center rounded'
    // Inserisco il contenuto nel div
    summaryCard.innerHTML = 
        `
            <h2>Riepilogo del Biglietto</h2>
            <p><strong>Complete Name:</strong> ${name}</p>
            <p><strong>Km:</strong> ${numkm}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Final Price:</strong> ${ticketPrice}</p>
        `

    // Aggiunta della card riepilogativa al DOM
    // Assegno l'id della nuova card e la appendo/inserisco in container/row, così va dopo la row esistente
    document.querySelector('.container .row').appendChild(summaryCard)
})


// Definisco gli eventi al click del bottone che annulla il form
abortPriceButton.addEventListener('click', function (event) {
    event.preventDefault()

    // Resetto il form e il prezzo visualizzato
    form.reset()

    // Rimuovo la card riepilogativa se esiste
    const existingCard = document.querySelector('.data-card')
    if (existingCard) {
        existingCard.remove()
    }

    // Rimuovo il titolo se esiste
    const existingTitle = document.querySelector('h1.m-4.text-center.text-white')
    if (existingTitle) {
        existingTitle.remove()
    }
})


