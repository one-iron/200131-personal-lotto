
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

var result1 = [];
var color = ["red","orange","olive","green","teal","violet","yellow","pink","purple","blue"]


function out() {
  result1.unshift([]);
  for(i = 1; i <= 6; i++){
    result1[0].push(Math.floor(Math.random()*45 + 1));
  }
  var li = document.createElement("button");
  var no = document.createTextNode(result1[0].sort(function(a,b) {return a-b;
  }));
  li.appendChild(no);
  var cr = Math.floor(Math.random()*10)
  document.getElementById('result').appendChild(li).className = "ui inverted "+color[cr]+" button";
}

function reset2() {
  result1.splice(0, result1.length);
  var list = document.getElementById("result");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
