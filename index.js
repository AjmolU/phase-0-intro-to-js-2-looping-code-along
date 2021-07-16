// Code your solutions in this file
function writeCards(names, text) {
  const newArr = [];
  for (let name of names) {
    newArr.push(`Thank you, ${name}, for the wonderful ${text} gift!`);
  }
  return newArr;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}