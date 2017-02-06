function elem(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}

function get(selector) {
  return document.querySelectorAll(selector)[0];
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

function range(low, high) {
  var ar = [];
  for (var i=low; i<=high; i++) {
    ar.push(i);
  }
  return ar;
}