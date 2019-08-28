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
        acc += s+ ', '
      }
    }
  }

  function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
      titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
  }

  if (acc.length > 0) {
    // when found any, scroll title
    titleScroller(acc)
  }

  // refresh periodically
  setTimeout(function() {
    location.reload();
  }, 30 * 1000);
});


