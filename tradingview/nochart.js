// ==UserScript==
// @name     Unnamed Script 193439
// @version  1
// @grant    none
// @match https://www.tradingview.com/*
// ==/UserScript==

var onTimeout = function() {
  var list = document.getElementsByTagName('span')
  for (let item of list) {
    if (item.innerHTML == 'See overview') {
      item.click()
    }
  } 
};


window.addEventListener("load", function() {     
  
                                                                                                                                                                                             
  var list = document.getElementsByTagName('button')
  
  for (let item of list) {
    var clas = item.getAttribute('class')
    if (clas.includes('js-header-search-select-button')) {
      item.click();
      setTimeout(onTimeout, 1000)
    }
  }  
});
