function _1headmenu(n) {
  var a_sel = document.querySelector(".ui.secondary.pointing.menu");
  var u_sel = document.querySelector("#_1body");

  for(i = 1; i <= a_sel.getElementsByTagName('a').length; i++){
    document.getElementById('_1headseconditem'+i).className = "item";
  }
  for(i =0; i <= u_sel.getElementsByClassName('ui segment').length-1; i++){
    document.getElementById('_1bodybox'+i).style.display = "none";
  }
  if(n !== 0){
    document.getElementById('_1headseconditem'+n).className = "active item";
    document.getElementById('_1bodybox'+n).style.display = "inline-block";
  }
  else if (n == 0) {
    document.getElementById('_1bodybox'+n).style.display = "inline-block";
  }
}
