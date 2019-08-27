// ==UserScript==
// @name     ZNotify
// @version  1
// @grant    none
// @match    http://somethingsomething.org/*
// ==/UserScript==

// MUST OPEN FRAME IN NEW TAB
var test = ['Schimansky', 'Popolsky'] // notify about these

window.addEventListener("load", function() {

  var acc = ''

  var list = document.getElementsByTagName('td')

  for (let item of list) {
    for (var i = 0; i < test.length; i++) {
      var s = test[i];
      if (item.textContent.includes(s) && item.textContent.includes('ANWESEND')) {
        acc += s.charAt(0)
      }
    }
  }

  if (acc.length > 0) {
    // when found any, blinken tab title
    var count = 0
    setInterval(function() {
      count++
      if (count % 2 == 0) {
        document.title = acc
      } else {
        document.title = '#'
      }
    }, 1200);
  }

  // refresh periodically
  setTimeout(function() {
    location.reload();
  }, 20 * 1000);
});


