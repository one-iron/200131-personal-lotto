var result1 = [];
var random6num = [];
var winnums = [1,15,17,23,25,41];
var winnumscheck = [];
var color = ["red","orange","olive","green","brown","violet","yellow","pink","purple","blue"]

function _1headmenu(n) {
  var a_sel = document.querySelector(".ui.secondary.pointing.menu");
  var u_sel = document.querySelector("#_1body");

  for(i = 1; i <= a_sel.getElementsByTagName('a').length; i++){
    document.getElementById('_1headseconditem'+i).className = "item";
  }
  for(i = 0; i <= u_sel.getElementsByClassName('ui segment').length-1; i++){
    document.getElementById('_1bodybox'+i).style.display = "none";
  }



  if(n !== 0 && n !== 4){
    document.getElementById('_1headseconditem'+n).className = "active item";
    document.getElementById('_1bodybox'+n).style.display = "inline-block";
    document.getElementById('_1foot1').style.display = "inline-block";
    document.getElementById('_1foot2').style.display = "none";
    document.getElementById('_1headfirstbutt2').style.display = "none";
    document.getElementById('_1headfirstbutt').style.display = "inline-block";
  }
  else if (n == 0) {
    document.getElementById('_1bodybox'+n).style.display = "inline-block";
    document.getElementById('_1foot2').style.display = "_1foot1";
    document.getElementById('_1foot1').style.display = "inline-block";
    document.getElementById('_1foot2').style.display = "none";
    document.getElementById('_1headfirstbutt2').style.display = "none";
    document.getElementById('_1headfirstbutt').style.display = "inline-block";
  }
  else if (n == 4) {
    document.getElementById('_1bodybox'+n).style.display = "inline-block";
    document.getElementById('_1foot1').style.display = "none";
    document.getElementById('_1foot2').style.display = "inline-block";
    document.getElementById('_1headfirstbutt').style.display = "none";
    document.getElementById('_1headfirstbutt2').style.display = "inline-block";
  }
}
function out() {
  result1.unshift([]);
  for(i = 0; result1[0].length <= 5; i++){
    var num = Math.floor(Math.random() * 45 + 1);
    if(result1[0].indexOf(num) == -1 && random6num.join().indexOf(num) == -1){
      result1[0].push(num);
    }
  }
  var li = document.createElement("button");
  var no = document.createTextNode(result1[0].sort(function(a,b) {return a-b;
  }));
  li.appendChild(no);
  var cr = Math.floor(Math.random()*10)
  document.getElementById('result').appendChild(li).className = "ui inverted "+color[cr]+" button";
}
function dele() {
  var va = document.getElementById("selectmenu").value;
  if(va == "0"){
    random6()
  }
  else if (va == "1") {
    winnum();
  }
}

function random6() {
  var arr = [];
  for(i = 0; arr.length <= 5; i++){
    var randomnum = Math.floor(Math.random() * 45 + 1);
    if(arr.indexOf(randomnum) == -1){
      arr.push(randomnum);
      document.getElementById('n'+ randomnum).className = "ui basic button";
      document.getElementById('n'+ randomnum).style.textDecoration = "line-through red";
    }
    random6num.push(arr);
  }
  var li = document.createElement("button");
  var no = document.createTextNode(Math.floor(random6num.length/6)+ "번째 랜덤 번호 : "+arr.sort(function(a,b){return a-b;}))
  li.appendChild(no);
  document.getElementById('listnums').appendChild(li).className = "ui button";
}
function winnum(){
  if(winnumscheck.indexOf('0') == 0){
    alert('이미 최근 당첨 번호를 선택하셨습니다.')
  }
  else {
    for(i = 0; i <= 5; i++){
      document.getElementById('n'+ winnums[i]).className = "ui basic button";
      document.getElementById('n'+ winnums[i]).style.textDecoration = "line-through red";
    }
    random6num.push("["+winnums+"]");
    winnumscheck.push('0');
    var li = document.createElement("button");
    var no = document.createTextNode("최근 당첨 번호 : "+ winnums);
    li.appendChild(no);
    document.getElementById('listnums').appendChild(li).className = "ui button";
  }
}
function reset1(){
  winnumscheck.splice(0,winnumscheck.length);
  random6num.splice(0,random6num.length);
  for(i = 1; i <= 45; i++){
    document.getElementById('n'+ i).className="ui circular facebook icon button";
    document.getElementById('n'+ i).style.textDecoration = "none";
  }
  var list = document.getElementById("listnums");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
function reset2() {
  result1.splice(0, result1.length);
  var list = document.getElementById("result");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

function delnum(n) {
  if(random6num.indexOf(n) == -1){
    document.getElementById('n'+n).className = "ui basic button";
    document.getElementById('n'+n).style.textDecoration = "line-through red";
    random6num.push(n);
    var li = document.createElement("button");
    var no = document.createTextNode("직접 선택 번호 : "+ n);
    li.appendChild(no);
    document.getElementById('listnums').appendChild(li).className = "ui button";
  }
  else(
    alert('선택하신 번호는 이미 제외 항목에 포함 되어 있습니다.')
  )


}
