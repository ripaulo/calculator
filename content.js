const results = document.querySelector('.result');
const confirm = document.querySelector('.equal');

function insert(value) {
  results.innerHTML += value;
}

function clean() {
  results.innerHTML = '';
}

function backspace() {
  if (results.textContent) {
    let result = document.getElementById('result')
    results.innerHTML = result.substring(0, result.length -1)
  }
}


//function confirm() {
  //  document.getElementById("results").innerHTML = eval (results.innerHTML)
//}
