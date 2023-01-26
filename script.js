let Mytext = document.querySelector('#mytext');
let count = document.querySelector('#count');
Mytext.addEventListener('input', () => {
  let Wordcount = (Mytext.value).length;
  count.textContent = `Total charater: ${Wordcount}`;
});
