const namesArray = ["Guadalupe", "Ollie", "Aki"];

function writeCards (namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        console.log(thankYouCards.push (`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`));
    }
    return thankYouCards;
}
writeCards(namesArray,'surprise');

function countDown (startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }
    console.log(startingNumber);
}
