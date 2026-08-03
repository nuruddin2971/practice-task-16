function bookTicket(movie, seats = 1, pricePerSeat = 300) {
  if (typeof movie !== "string" || (seats && pricePerSeat < 0)) {
    return "Invalid";
  }
  let total = 1;
  total = seats * pricePerSeat;
  return total;
}

console.log(bookTicket("Dune"));
console.log(bookTicket("Dune", 3));
console.log(bookTicket("Dune", 2, 450));
console.log(bookTicket(123, 2));
