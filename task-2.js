function bookTicket(movie, seats = 1, pricePerSeat = 300) {
  if (typeof movie !== "string" || (seats && pricePerSeat < 0)) {
    return "Invalid";
  }
  let total = 1;
  total = seats * pricePerSeat;
  return total;
}

const resutl1 = bookTicket("Dune");
const resutl2 = bookTicket("Dune", 3);
const resutl3 = bookTicket("Dune", 2, 450);
const resutl4 = bookTicket(123, 2);

console.log("Dune: 1 seat(s), Total Tk:", resutl1);
console.log("Dune: 3 seat(s), Total Tk:", resutl2);
console.log("Dune: 2 seat(s), Total Tk:", resutl3);
console.log(resutl4);
