/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
var output = document.getElementById('output');

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
  if (key.keyCode == "65") {
    output.innerHTML = "You pressed the 'a' key. It's keycode is 65";
  } if (key.keyCode == "66") {
    output.innerHTML = "You pressed the 'b' key. It's keycode is 66"
  } if (key.keyCode == "67") {
    output.innerHTML = "You pressed the 'c' key. It's keycode is 67"
  } if (key.keyCode == "68") {
    output.innerHTML = "You pressed the 'd' key. It's keycode is 68"
  } if (key.keyCode == "69") {
    output.innerHTML = "You pressed the 'e' key. It's keycode is 69"
  } if (key.keyCode == "70") {
    output.innerHTML = "You pressed the 'f' key. It's keycode is 70"
  } if (key.keyCode == "71") {
    output.innerHTML = "You pressed the 'g' key. It's keycode is 71"
  } if (key.keyCode == "72") {
    output.innerHTML = "You pressed the 'h' key. It's keycode is 72"
  } if (key.keyCode == "73") {
    output.innerHTML = "You pressed the 'i' key. It's keycode is 73"
  } if (key.keyCode == "74") {
    output.innerHTML = "You pressed the 'j' key. It's keycode is 74"
  } if (key.keyCode == "75") {
    output.innerHTML = "You pressed the 'k' key. It's keycode is 75"
  } if (key.keyCode == "76") {
    output.innerHTML = "You pressed the 'l' key. It's keycode is 76"
  } if (key.keyCode == "77") {
    output.innerHTML = "You pressed the 'm' key. It's keycode is 77"
  } if (key.keyCode == "78") {
    output.innerHTML = "You pressed the 'n' key. It's keycode is 78"
  } if (key.keyCode == "79") {
    output.innerHTML = "You pressed the 'o' key. It's keycode is 79"
  } if (key.keyCode == "80") {
    output.innerHTML = "You pressed the 'p' key. It's keycode is 80"
  } if (key.keyCode == "81") {
    output.innerHTML = "You pressed the 'q' key. It's keycode is 81"
  } if (key.keyCode == "82") {
    output.innerHTML = "You pressed the 'r' key. It's keycode is 82"
  } if (key.keyCode == "83") {
    output.innerHTML = "You pressed the 's' key. It's keycode is 83"
  } if (key.keyCode == "84") {
    output.innerHTML = "You pressed the 't' key. It's keycode is 84"
  } if (key.keyCode == "85") {
    output.innerHTML = "You pressed the 'u' key. It's keycode is 85"
  } if (key.keyCode == "86") {
    output.innerHTML = "You pressed the 'v' key. It's keycode is 86"
  } if (key.keyCode == "87") {
    output.innerHTML = "You pressed the 'w' key. It's keycode is 87"
  } if (key.keyCode == "88") {
    output.innerHTML = "You pressed the 'x' key. It's keycode is 88"
  } if (key.keyCode == "89") {
    output.innerHTML = "You pressed the 'y' key. It's keycode is 89"
  } if (key.keyCode == "90") {
    output.innerHTML = "You pressed the 'z' key. It's keycode is 90"
  }
}