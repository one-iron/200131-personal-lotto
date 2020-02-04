var rnb = []; //recommend number box
var rwn = [5, 12, 25, 26, 38, 45]; // recent won number
var rdn = []; //random delete number
var rdn2 = []; //랜덤 번호 종합
var sn = []; //setting Number 선택번호 추가할 시 이 곳으로
var rwnCheck = 0; //
var rdnCheck = 0; //
var sdnCheck = 0; // select delete number 문법 왜 이따구로 썼냐 진짜 아오 semantic 구리네 delete selcted number라 해야지 누구냐 이거 이름지은사람
var outCheck = 0; //



function check() {
  outCheck++;
  document.getElementById("outBox").innerHTML = outCheck;
  if(rwnCheck > 0 && rdnCheck > 0){
    return out2();
  }
  if(rwnCheck > 0 && rdnCheck === 0){
    return out1_1();
  }
  if(rwnCheck === 0 && rdnCheck > 0){
    return out1_2();
  }
  if(rwnCheck ===0 && rdnCheck === 0){
    return out();
  }
}

function out2(){ // 최근 당첨번호 && 랜덤 여섯번호 제외
  rnb.unshift([]);
  for(var i = 0; rnb[0].length < 6; i++){
    var rn = Math.floor(Math.random() * 45 + 1);
    if(rnb[0].indexOf(rn) == -1 && rwn.indexOf(rn) == -1 && rdn2.indexOf(rn) == -1){
      rnb[0].push(rn);
    }
  }
  for(var j = 0; j <6; j++){
    var para = document.createElement("span");
    var rnbSort = rnb[0].sort(function(a,b){return a-b;});
    para.innerHTML = rnbSort[j] + "&nbsp;" ;
    document.getElementById("p").appendChild(para);
  }
  if(outCheck % 5 === 0){
    var rns = document.querySelectorAll("span");
    var m = outCheck / 5 - 1;
    rns[24 + (30 * m)].style.border = "1px black dashed";
    rns[24 + (30 * m)].style.borderRight = "none";
    rns[24 + (30 * m)].style.borderLeft = "none";
    rns[24 + (30 * m)].style.borderTop = "none";
    rns[25 + (30 * m)].style.border = "1px black dashed";
    rns[25 + (30 * m)].style.borderRight = "none";
    rns[25 + (30 * m)].style.borderLeft = "none";
    rns[25 + (30 * m)].style.borderTop = "none";
    rns[26 + (30 * m)].style.border = "1px black dashed";
    rns[26 + (30 * m)].style.borderRight = "none";
    rns[26 + (30 * m)].style.borderLeft = "none";
    rns[26 + (30 * m)].style.borderTop = "none";
    rns[27 + (30 * m)].style.border = "1px black dashed";
    rns[27 + (30 * m)].style.borderRight = "none";
    rns[27 + (30 * m)].style.borderLeft = "none";
    rns[27 + (30 * m)].style.borderTop = "none";
    rns[28 + (30 * m)].style.border = "1px black dashed";
    rns[28 + (30 * m)].style.borderRight = "none";
    rns[28 + (30 * m)].style.borderLeft = "none";
    rns[28 + (30 * m)].style.borderTop = "none";
    rns[29 + (30 * m)].style.border = "1px black dashed";
    rns[29 + (30 * m)].style.borderRight = "none";
    rns[29 + (30 * m)].style.borderLeft = "none";
    rns[29 + (30 * m)].style.borderTop = "none";
  }
}

function out1_1(){ // 최근 당첨번호 제외
  rnb.unshift([]);
  for(var i = 0; rnb[0].length < 6; i++){
    var rn = Math.floor(Math.random() * 45 + 1);
    if(rnb[0].indexOf(rn) == -1 && rwn.indexOf(rn) == -1 && rdn2.indexOf(rn) == -1){
      rnb[0].push(rn);
    }
  }
  for(var j = 0; j <6; j++){
    var para = document.createElement("span");
    var rnbSort = rnb[0].sort(function(a,b){return a-b;});
    para.innerHTML = rnbSort[j] + "&nbsp;" ;
    document.getElementById("p").appendChild(para);
  }
  if(outCheck % 5 === 0){
    var rns = document.querySelectorAll("span");
    var m = outCheck / 5 - 1;
    rns[24 + (30 * m)].style.border = "1px black dashed";
    rns[24 + (30 * m)].style.borderRight = "none";
    rns[24 + (30 * m)].style.borderLeft = "none";
    rns[24 + (30 * m)].style.borderTop = "none";
    rns[25 + (30 * m)].style.border = "1px black dashed";
    rns[25 + (30 * m)].style.borderRight = "none";
    rns[25 + (30 * m)].style.borderLeft = "none";
    rns[25 + (30 * m)].style.borderTop = "none";
    rns[26 + (30 * m)].style.border = "1px black dashed";
    rns[26 + (30 * m)].style.borderRight = "none";
    rns[26 + (30 * m)].style.borderLeft = "none";
    rns[26 + (30 * m)].style.borderTop = "none";
    rns[27 + (30 * m)].style.border = "1px black dashed";
    rns[27 + (30 * m)].style.borderRight = "none";
    rns[27 + (30 * m)].style.borderLeft = "none";
    rns[27 + (30 * m)].style.borderTop = "none";
    rns[28 + (30 * m)].style.border = "1px black dashed";
    rns[28 + (30 * m)].style.borderRight = "none";
    rns[28 + (30 * m)].style.borderLeft = "none";
    rns[28 + (30 * m)].style.borderTop = "none";
    rns[29 + (30 * m)].style.border = "1px black dashed";
    rns[29 + (30 * m)].style.borderRight = "none";
    rns[29 + (30 * m)].style.borderLeft = "none";
    rns[29 + (30 * m)].style.borderTop = "none";
  }
}

function out1_2(){ // 랜덤 여섯 번호 제외
  rnb.unshift([]);
  for(var i = 0; rnb[0].length < 6; i++){
    var rn = Math.floor(Math.random() * 45 + 1);
    if(rnb[0].indexOf(rn) == -1 && rdn2.indexOf(rn) == -1){
      rnb[0].push(rn);
    }
  }
  for(var j = 0; j <6; j++){
    var para = document.createElement("span");
    var rnbSort = rnb[0].sort(function(a,b){return a-b;});
    para.innerHTML = rnbSort[j] + "&nbsp;" ;
    document.getElementById("p").appendChild(para);
  }
  if(outCheck % 5 === 0){
    var rns = document.querySelectorAll("span");
    var m = outCheck / 5 - 1;
    rns[24 + (30 * m)].style.border = "1px black dashed";
    rns[24 + (30 * m)].style.borderRight = "none";
    rns[24 + (30 * m)].style.borderLeft = "none";
    rns[24 + (30 * m)].style.borderTop = "none";
    rns[25 + (30 * m)].style.border = "1px black dashed";
    rns[25 + (30 * m)].style.borderRight = "none";
    rns[25 + (30 * m)].style.borderLeft = "none";
    rns[25 + (30 * m)].style.borderTop = "none";
    rns[26 + (30 * m)].style.border = "1px black dashed";
    rns[26 + (30 * m)].style.borderRight = "none";
    rns[26 + (30 * m)].style.borderLeft = "none";
    rns[26 + (30 * m)].style.borderTop = "none";
    rns[27 + (30 * m)].style.border = "1px black dashed";
    rns[27 + (30 * m)].style.borderRight = "none";
    rns[27 + (30 * m)].style.borderLeft = "none";
    rns[27 + (30 * m)].style.borderTop = "none";
    rns[28 + (30 * m)].style.border = "1px black dashed";
    rns[28 + (30 * m)].style.borderRight = "none";
    rns[28 + (30 * m)].style.borderLeft = "none";
    rns[28 + (30 * m)].style.borderTop = "none";
    rns[29 + (30 * m)].style.border = "1px black dashed";
    rns[29 + (30 * m)].style.borderRight = "none";
    rns[29 + (30 * m)].style.borderLeft = "none";
    rns[29 + (30 * m)].style.borderTop = "none";
  }
}

function out(){ // 아무 조건 없음
  rnb.unshift([]);
  for(var i = 0; rnb[0].length < 6; i++){
    var rn = Math.floor(Math.random() * 45 + 1);
    if(rnb[0].indexOf(rn) == -1 && rdn2.indexOf(rn) == -1){
      rnb[0].push(rn);
    }
  }


  for(var j = 0; j <6; j++){
    var para = document.createElement("span");
    var rnbSort = rnb[0].sort(function(a,b){return a-b;});
    para.innerHTML = rnbSort[j] + "&nbsp;" ;
    document.getElementById("p").appendChild(para);
  }

  if(outCheck % 5 === 0){
    var rns = document.querySelectorAll("span");
    var m = outCheck / 5 - 1;
    rns[24 + (30 * m)].style.border = "1px black dashed";
    rns[24 + (30 * m)].style.borderRight = "none";
    rns[24 + (30 * m)].style.borderLeft = "none";
    rns[24 + (30 * m)].style.borderTop = "none";
    rns[25 + (30 * m)].style.border = "1px black dashed";
    rns[25 + (30 * m)].style.borderRight = "none";
    rns[25 + (30 * m)].style.borderLeft = "none";
    rns[25 + (30 * m)].style.borderTop = "none";
    rns[26 + (30 * m)].style.border = "1px black dashed";
    rns[26 + (30 * m)].style.borderRight = "none";
    rns[26 + (30 * m)].style.borderLeft = "none";
    rns[26 + (30 * m)].style.borderTop = "none";
    rns[27 + (30 * m)].style.border = "1px black dashed";
    rns[27 + (30 * m)].style.borderRight = "none";
    rns[27 + (30 * m)].style.borderLeft = "none";
    rns[27 + (30 * m)].style.borderTop = "none";
    rns[28 + (30 * m)].style.border = "1px black dashed";
    rns[28 + (30 * m)].style.borderRight = "none";
    rns[28 + (30 * m)].style.borderLeft = "none";
    rns[28 + (30 * m)].style.borderTop = "none";
    rns[29 + (30 * m)].style.border = "1px black dashed";
    rns[29 + (30 * m)].style.borderRight = "none";
    rns[29 + (30 * m)].style.borderLeft = "none";
    rns[29 + (30 * m)].style.borderTop = "none";
  }



}

function rwnb() { // 최근 당첨번호 리스트 올리기
  rwnCheck = 1;
  document.getElementById("rwnBox").innerHTML = rwnCheck;
  for(var i = 0; i <= rwn.length-1; i++){
    document.getElementById("on"+rwn[i]).style.color = "black";
    document.getElementById("on"+rwn[i]).style.backgroundColor = "black";
  }
}

function rdnb(){ // 랜덤 여섯번호 만들기
  rdn.unshift([]);
  for(var i = 0; rdn[0].length < 6; i++){
    var rn = Math.floor(Math.random() * 45 + 1);
    if(rdn[0].indexOf(rn) == -1){
      rdn[0].push(rn);
      rdn2.push(rn);
    }
  }
  rdnCheck++;
  document.getElementById("rdnBox").innerHTML = rdnCheck;
  for(var i = 0; i <= rdn[0].length-1; i++){
    document.getElementById("on"+rdn[0][i]).style.color = "black";
    document.getElementById("on"+rdn[0][i]).style.backgroundColor = "black";
  }
}

function onc(n){ // 번호 선택 함수 
   if(rdn2.indexOf(n) >= 0 || rwnCheck !== 0){
      alert(`선택하신 번호(${n})는 이미 제외되어 있습니다. 😄`);
    }
    else if(rdn2.indexOf(n) == -1){
     rdn2.push(n);
     sdnCheck++;
     document.getElementById("sdnBox").innerHTML = sdnCheck;
     document.getElementById("on"+n).style.color = "black";
     document.getElementById("on"+n).style.backgroundColor = "black";
    }
  }




function reset() {
  var list = document.getElementById("p");
  while (list.hasChildNodes()) {
  list.removeChild(list.firstChild);
  }
  rnb.splice(0,rnb.length);
  rdn.splice(0,rdn.length);
  rdn2.splice(0,rdn2.length);
  rwnCheck = 0;
  rdnCheck = 0;
  outCheck = 0;
  sdnCheck = 0;
  document.getElementById("rwnBox").innerHTML = rwnCheck;
  document.getElementById("rdnBox").innerHTML = rdnCheck;
  document.getElementById("outBox").innerHTML = outCheck;
  document.getElementById("sdnBox").innerHTML = sdnCheck;
  for(var i = 1; i <= 45; i++){
    document.getElementById('on'+i).style.color = "red";
    document.getElementById('on'+i).style.backgroundColor = "white";
  }
}

function reset2() {
  var list = document.getElementById("p");
  while (list.hasChildNodes()) {
  list.removeChild(list.firstChild);
  }
  rnb.splice(0,rnb.length);
  outCheck = 0;
  document.getElementById("outBox").innerHTML = outCheck;
}

function alert1() {
  alert('제외하고 싶은 번호를 직접 클릭해 주세요.😄')
}

