const reverse = (text: string): string => {
  let textChar: number = text.length;
  let newText: string = "";
  let i: number = 0;
  for (i = textChar; textChar > 0; i--) {  
    newText += text[textChar - 1];
    textChar -= 1; 
  } 
  return newText;
};
const reverseSec = (text: string): string => {
  let textChar: number = text.length;
  let newText: string = "";
  let i: number = 0;
  while(0 < textChar) { 
    newText += text[textChar - 1]
    i += 1;
    textChar -= 1;
  } 
  return newText;
};
console.log(reverse("Hello,"));
console.log(reverseSec("Just do it!"));