let Game = {
    title: "Pacman",
    description: "Eat all the dots",
    releaseDate: "1980",
    platform:{
         originalRelease:"Arcade",
         ports80s: "Atari 2600, 5200, 7800, Colecovision, Intellivision, Commodore 64, Apple II, MS-DOS",
        ports90s: "Gameboy, NES, Genesis",
        ports00s: "PS2, Xbox, Gamecube",
        ports10s: "iOS, Android"
        },
    ogDeveloper: "Namco",
    ogPublisher: "Midway",
    genre: "Maze",
    rating: "E",}
    let quantity = 100;
    let price = 10.00;
    let salesTax = 0.125;


    const {title, releaseDate, platform, ogDeveloper, ogPublisher, genre, rating} = Game;
console.log(`The game ${title} was released in ${releaseDate} on the ${platform.originalRelease} platform.
    the amount of copies in store were${quantity} sold for ${price} with sales tax of ${salesTax} which totaled to ${ price + (price * salesTax.toFixed(2) ) }.`);

  