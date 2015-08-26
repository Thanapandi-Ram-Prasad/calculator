var input = '';
var result = 0;
var before_number = "";
var before_numbertwo = "";
var before_numberthree = "";
var before_numberfour = "";
var before_numberfive = "";

document.getElementById('zero_btn').onclick = function(){
  input += '0';
  document.fm.display.value = input;
}

document.getElementById('one_btn').onclick = function(){
  input += '1';
  document.fm.display.value = input;
}

document.getElementById('two_btn').onclick = function(){
  input += '2';
  document.fm.display.value = input;
}

document.getElementById('three_btn').onclick = function(){
  input += '3';
  document.fm.display.value = input;
}

document.getElementById('four_btn').onclick = function(){
  input += '4';
  document.fm.display.value = input;
}

document.getElementById('five_btn').onclick = function(){
  input += '5';
  document.fm.display.value = input;
}

document.getElementById('six_btn').onclick = function(){
  input += '6';
  document.fm.display.value = input;
}

document.getElementById('seven_btn').onclick = function(){
  input += '7';
  document.fm.display.value = input;
}

document.getElementById('eight_btn').onclick = function(){
  input += '8';
  document.fm.display.value = input;
}

document.getElementById('nine_btn').onclick = function(){
  input += '9';
  document.fm.display.value = input;
}

document.getElementById('dot_btn').onclick = function(){
  input += '.';
  document.fm.display.value = input;
}

document.getElementById('plusminus_btn').onclick = function(){
  input += '-';
  document.fm.display.value = input;
}

document.getElementById('tax_btn').onclick = function(){
  result = parseFloat(input)*parseFloat(1.08);
  input = String(result);
  document.fm.display.value = input;
}

document.getElementById('ac_btn').onclick = function(){
  input = '';
  document.fm.display.value = input;
}

document.getElementById('plus_btn').onclick = function(){
  before_number = input;
  input = "";
  document.fm.display.value = input;
}

document.getElementById('minus_btn').onclick = function(){
  before_numbertwo = input;
  input = "";
  document.fm.display.value = input;
}

document.getElementById('multi_btn').onclick = function(){
  before_numberthree = input;
  input = "";
  document.fm.display.value = input;
}

document.getElementById('devide_btn').onclick = function(){
  before_numberfour = input;
  input = "";
  document.fm.display.value = input;
}

document.getElementById('parsent_btn').onclick = function(){
  before_numberfive = input;
  input = "";
  document.fm.display.value = input;
}

document.getElementById('equal_btn').onclick = function(){
  if(before_number != "") {
    result = parseFloat(before_number) + parseFloat(input);
    input = String(result);
    before_number = "";
    document.fm.display.value = input;
}
  else if(before_numbertwo != "") {
    result = parseFloat(before_numbertwo) - parseFloat(input);
    input = String(result);
    before_numbertwo = "";
    document.fm.display.value = input;
}
  else if(before_numberthree != "") {
    result = parseFloat(before_numberthree) * parseFloat(input);
    input = String(result);
    before_numberthree = "";
    document.fm.display.value = input;
}

  else if(before_numberfour != "") {
    result = parseFloat(before_numberfour) / parseFloat(input);
    input = String(result);
    before_numberfour = "";
    document.fm.display.value = input;
}

  else if(before_numberfive != "") {
    result = parseFloat(before_numberfive) % parseFloat(input);
    input = String(result);
    before_numberfive = "";
    document.fm.display.value = input;
}

}
