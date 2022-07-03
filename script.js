function Buttonclick(val) {
  console.log(val);
  document.getElementById("screen").value += val;
}
function allcleardisplay() {
  document.getElementById("screen").value = "";
}

function Equalclick() {
  var text = document.getElementById("screen").value;
  var result = eval(text);
  document.getElementById("screen").value = result;
}
