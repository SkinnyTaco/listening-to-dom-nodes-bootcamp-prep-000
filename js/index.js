// using this file is optional
// you can also load the code snippets in using your browser's console
let $ = document.querySelector();

let main = document.querySelector('main');
main.addEventListener('click', (e) => {
  main.style.fontWeight = 'bold';
  main.style.fontSize = '50';
  alert('I was click!');
});