document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

function greet(time) {
  const timeNum = time.split(':');
  const hour = parseInt(timeNum[0], 10);
  if (hour < 12) { return 'Good Morning'; }
}

function displayMessage(greeting) {
  
}
