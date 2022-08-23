const isPolyndromV2 = (text: string): boolean => {
  let reversedText: string = "";
  const loverText: string = text.toLowerCase();
  for (let i = text.length; i > 0; i--) {
    reversedText += loverText[i - 1];
  }
  return reversedText === loverText;
};



let polyndromVar = isPolyndromV2("Kaba3k");
console.log( polyndromVar ? "The text is and text is poliynomal " : "The text is but text is not polinomal ")