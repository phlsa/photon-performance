function ask(content, vars) {
  var overlay = document.createElement('div');
  overlay.className = "exp-overlay";
  var dialog = document.createElement('div');
  dialog.className = "exp-dialog";
  overlay.appendChild(dialog);
  
  dialog.innerHTML = content.join(' ');

  document.body.appendChild(overlay);
}

function scale() {
  var s = "<table><tr>";
  Array.prototype.slice.call(arguments).forEach(item => {
    s += "<tr>"+ item +"</tr>";
  });
  s += "</tr></table>";
  return s;
}

function text(txt) {
  return "<div class='text'>"+ txt +"</div>";
}