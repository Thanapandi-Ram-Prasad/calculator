var input = '';
var result = 0;
var before_number = 0;
var flag = 0;
var dot_flag = 0;

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
  dot_flag += 1;
  if(input == "") {
    input = "0.";
    document.fm.display.value = input;
}
  else if(dot_flag >= 2) {
    window.alert('.は一度しか入力できません！');
}
  else{
    input += '.';
    document.fm.display.value = input;
}
}

document.getElementById('plusminus_btn').onclick = function(){
  if(input == ""){
  input += '-';
  document.fm.display.value = input;
}
  else{
    window.alert('マイナス配置が誤ってます！');
}
}

document.getElementById('tax_btn').onclick = function(){
  result = parseFloat(input)*parseFloat(1.08);
  input = String(result);
  document.fm.display.value = input;
}

document.getElementById('ac_btn').onclick = function(){
  input = '';
  before_number = 0;
  flag = 0;
  dot_flag = 0;
  document.fm.display.value = input;
}

document.getElementById('plus_btn').onclick = function(){
  dot_flag = 0;
  if(before_number == 0){
    before_number = parseFloat(input);
}
  if(flag == 1){
    before_number += parseFloat(input);
}
  else if(flag == 2){
    before_number -= parseFloat(input);
}
  else if(flag == 3){
    before_number *= parseFloat(input);
}
  else if(flag == 4){
    before_number /= parseFloat(input);
}
  else if(flag == 5){
    before_number %= parseFloat(input);
}
  flag = 1;
  input = "";
  document.fm.display.value = input;
}

document.getElementById('minus_btn').onclick = function(){
  dot_flag = 0;
  if(before_number == 0){
  before_number = parseFloat(input);
}
  if(flag == 1){
    before_number += parseFloat(input);
}
  else if(flag == 2){
    before_number -= parseFloat(input);
}
  else if(flag == 3){
    before_number *= parseFloat(input);
}
  else if(flag == 4){
    before_number /= parseFloat(input);
}
  else if(flag == 5){
    before_number %= parseFloat(input);
}
  flag = 2;
  input = "";
  document.fm.display.value = input;
}

document.getElementById('multi_btn').onclick = function(){
  dot_flag = 0;
  if(before_number == 0){
  before_number = parseFloat(input);
}
  if(flag == 1){
    before_number += parseFloat(input);
}
  else if(flag == 2){
    before_number -= parseFloat(input);
}
  else if(flag == 3){
    before_number *= parseFloat(input);
}
  else if(flag == 4){
    before_number /= parseFloat(input);
}
  else if(flag == 5){
    before_number %= parseFloat(input);
}
  flag = 3;
  input = "";
  document.fm.display.value = input;
}

document.getElementById('devide_btn').onclick = function(){
  dot_flag = 0;
  if(before_number == 0){
  before_number = parseFloat(input);
}
  if(flag == 1){
    before_number += parseFloat(input);
}
  else if(flag == 2){
    before_number -= parseFloat(input);
}
  else if(flag == 3){
    before_number *= parseFloat(input);
}
  else if(flag == 4){
    before_number /= parseFloat(input);
}
  else if(flag == 5){
    before_number %= parseFloat(input);
}
  flag = 4;
  input = "";
  document.fm.display.value = input;
}

document.getElementById('parsent_btn').onclick = function(){
  dot_flag = 0;
  if(before_number == 0){
  before_number = parseFloat(input);
}
  if(flag == 1){
    before_number += parseFloat(input);
}
  else if(flag == 2){
    before_number -= parseFloat(input);
}
  else if(flag == 3){
    before_number *= parseFloat(input);
}
  else if(flag == 4){
    before_number /= parseFloat(input);
}
  else if(flag == 5){
    before_number %= parseFloat(input);
}
  flag = 5;
  input = "";
  document.fm.display.value = input;
}

document.getElementById('equal_btn').onclick = function(){
  if(flag == 1) {
    result = before_number + parseFloat(input);
    input = String(result);
    document.fm.display.value = input;
    before_number = 0;
    flag = 0;
  }
  else if(flag == 2) {
    result = before_number - parseFloat(input);
    input = String(result);
    document.fm.display.value = input;
    before_number = 0;
    flag = 0;
  }
  else if(flag == 3) {
    result = before_number * parseFloat(input);
    input = String(result);
    document.fm.display.value = input;
    before_number = 0;
    flag = 0;
  }

  else if(flag == 4) {
    result = before_number / parseFloat(input);
    input = String(result);
    document.fm.display.value = input;
    before_number = 0;
    flag = 0;
  }

  else if(flag == 5) {
    result = before_number % parseFloat(input);
    input = String(result);
    document.fm.display.value = input;
    before_number = 0;
    flag = 0;
  }

}
