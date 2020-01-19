var list1 = []; /* 알고리즘 클릭 후 처음 들어가져있는 배열(중복클릭 금지 효과) */
var list2 = []; /* 알고리즘 클릭 후 선택까지 클릭하면 출력하기 전에 들어가져있는 배열(출력 함수 방식 거르는 효과)*/
var correctList = [];
var not = [];
var not2 = [];

function ALGO1(){
  var correctNum = [[4,9,17,18,26,42],[9,13,28,31,39,41],[1,4,14,18,29,37]];
  var x = document.getElementById("sel1");
  var k = x.selectedIndex;
  if(correctList.indexOf(k) == -1){
    correctList.push(k);
    list1.push(1);
    not.push(correctNum[k-1]);
    var h = document.createElement("li");
    var t = document.createTextNode( x.options[k].text +" : "+ not[not.length-1]);
    h.appendChild(t);
    document.getElementById("main1List").appendChild(h);
  }
  else if(k == 0){
    alert("Please select");
  }
  else(alert("선택하신 당첨번호는 이미 선택되어 있습니다." + " " + correctNum[k-1]));
}
function ALGO2(){
  var arr = [];
  if(not2.length == 4){
    alert('5천원 어치 뽑으셨습니다.')
  }
  else if (not2.length == 9) {
    alert('만원어치 뽑으셨습니다.')
  }
  else if (not2.length == 16) {
    alert('제외 숫자가 많아지면 많아질 수록 추천 번호는 비슷하게 나옵니다.')
  }
  else if (not2.length == 20) {
    alert('대단하다 대단해..꼭 1등 당첨되길 바랍니다. 제외하는 숫자가 너무 많아서 출력되는 번호가 거의 비슷할겁니다. 그만 추가하세요.')
  }
  for(i = 0; arr.length <= 5; i++){
    var num = Math.floor(Math.random() * 45 + 1);
    if(arr.indexOf(num) == -1){
      arr.push(num);
    }
  }
  var h = document.createElement("li");
  var t = document.createTextNode("무작위 여섯 숫자" + (not2.length+1) +"번째" + " : " + arr.sort(function(a,b){return a-b;}));
  list1.push(2);
  not2.push(arr);
  h.appendChild(t);
  document.getElementById("main1List").appendChild(h);
}

function al(n){
  var h = document.createElement("li");
  var t = document.createTextNode("ALGO" + n );
  if(list1.indexOf(n) == -1 && list2.indexOf(n) == -1){
    list1.push(n);
    h.appendChild(t);
    document.getElementById("main1List").appendChild(h);
  }
  else(alert("You already selected ALGO" + n))
}
function sel(){
  var elmnt = document.getElementById("main1List");
  var cln = elmnt.cloneNode(true);
  for(i = 0; i <= list1.length - 1; i++){
    if(list2.indexOf(list1[i]) == -1){
      list2.push(list1[i]);
      document.getElementById("main2List").appendChild(cln);
    }
  }
}
function reset1(){
  var list = document.getElementById("main1List");
  list1.splice(0,list1.length);
  not.splice(0,not.length);
  not2.splice(0,not2.length);
  correctList.splice(0,correctList.length);
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

function reset2(){
  var list = document.getElementById("main2List");
  list2.splice(0,list2.length);
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
function check(){
  if(list2.indexOf(1) > -1 || list2.indexOf(2) > -1){
    algo1();
  }
  else if (list2.indexOf(1) == -1) {
    start();
  }

function algo1(){
  var arr = [];
  for(i = 0; arr.length <= 5; i++){
    var num = Math.floor(Math.random() * 45 + 1);
    if(arr.indexOf(num) == -1 && not.join().indexOf(num) == -1 && not2.join().indexOf(num) == -1){
      arr.push(num);
    }
  }
  var h = document.createElement("li");
  var t = document.createTextNode(arr.sort(function(a,b){return a-b;}));
  h.appendChild(t);
  document.getElementById("result").appendChild(h);
}
function start(){
  var arr = [];
  for(i = 0; arr.length <= 5; i++){
    var num = Math.floor(Math.random() * 45 + 1);
    if(arr.indexOf(num) == -1){
      arr.push(num);
    }
  }
}

  var h = document.createElement("li");
  var t = document.createTextNode(arr.sort(function(a,b){return a-b;}));
  h.appendChild(t);
  document.getElementById("result").appendChild(h);
}

function reset3(){
  var list = document.getElementById("result");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
