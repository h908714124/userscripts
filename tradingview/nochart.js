// ==UserScript==
// @name     Unnamed Script 193439
// @version  1
// @grant    none
// @match https://www.tradingview.com/*
// ==/UserScript==


window.addEventListener("load", function() {     
  
                                                                                                                                                                                             
  var list = document.getElementsByTagName('button')
  
  for (let item of list) {
    if (clas.includes('js-header-search-select-button')) {
      item.click()
    }
  }  
});

