function instruction(content, vars) {
  clearInstructions();
  var instruction = document.createElement('div');
  instruction.className = "exp-instruction";

  instruction.innerHTML = content.join(' ');

  // handle extra vars
  if (vars) {
    if (vars.nextButton) {
      var nb = document.createElement('button');
      nb.innerText = vars.nextButtonLabel || "Next Step";
      nb.className = "exp-button";
      nb.addEventListener('click', vars.nextButton);
      instruction.appendChild(nb);
    }
  }
  document.body.appendChild(instruction);
}

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

function clearInstructions() {
  Array.prototype.slice.call(document.querySelectorAll('.exp-instruction, .exp-overlay'), 0).forEach(item => {
    item.parentNode.removeChild(item);
  })
}