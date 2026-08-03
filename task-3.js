function generateReceipt(customarName, items, total) {
  if (!Array.isArray(items) || items.length === 0) {
    return "Invalid";
  }

  let receipt = `Receipt for ${customarName}\n${items}\nTotal: ${total}`;
  return receipt;
}

console.log(generateReceipt("Rakib", ["Pen", "Book"], 150));
console.log(generateReceipt("Sadia", ["Milk"], 60));
console.log(generateReceipt("Tanvir", [], 0));
