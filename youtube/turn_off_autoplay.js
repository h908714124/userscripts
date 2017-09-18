// ==UserScript==
// @name        autoplay
// @namespace   h908714124
// @description Turn off youtube autoplay, without allowing cookies
// @include     https://www.youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

var intervalId = setInterval(function() {
  var foo = document.getElementById("toggleButton");
  if (foo) {
    foo.click();
    clearInterval(intervalId);
  }
}, 5000);
