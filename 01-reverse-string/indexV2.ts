const reverseV2 = (text: string): string => { 
  let newText: string = "";
  for ( let  i = text.length; i > 0; i--) {  
    newText += text[i - 1];
  }
  return newText;
};
const reverseSecV2 = (text: string): string => {
  let textLength: number = text.length;
  let newText: string = ""; 
  while(textLength > 0) { 
    newText += text[textLength - 1] 
    textLength -= 1; 
  } 
  return newText;
};
console.log(reverseV2("Hello, merhaba"));
console.log(reverseSecV2("Just do it!"));