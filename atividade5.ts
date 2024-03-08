/*
Escreva um programa que inverta os caracteres de um string.
*/

function reverseString(originalText: string){
  let newText = "";
  const lengthText = originalText.length;
  
  for(let i=lengthText-1;i>=0;i--){
    newText += originalText[i]
  }

  return {originalText, newText};
}

const text = "papagaio";
const {newText, originalText} = reverseString(text);

console.log(`Palavra original: ${originalText} \n Palavra Invertida: ${newText}`);