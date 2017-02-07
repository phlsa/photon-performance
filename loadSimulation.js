function simulateLoad(loadTime) {
  var segmentLength = loadTime/100;
  var styleElem = document.createElement('style');
  
  range(0, 100).forEach(function(i) {
    setTimeout(function() {
      get('body').classList.add('t-'+i);
      elem('.s-'+i).forEach(function(e) {
        e.classList.remove('s-'+i);
      });
    }, segmentLength*i);
  });

  var txt = '';
  range(0, 100).forEach(function(i) {
    txt += '.s-'+i+' {display:none} \n';
  });
  styleElem.innerText = txt;
  get('head').appendChild(styleElem);
}