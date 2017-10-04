// ==UserScript==
// @name        yt-nodistractions
// @namespace   h908714124
// @description Turn off most youtube distractions
// @include     https://www.youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

function click(id, callback) {
  var intervalId = setInterval(function() {
    var x = document.getElementById(id);
    if (x) {
      x.click();
      clearInterval(intervalId);  
      if (callback) {
        callback();
      }
    }
  }, 5000);  
}

function remove(id, callback) {
  var intervalId = setInterval(function() {
    var x = document.getElementById(id);
    if (x) {
      x.parentNode.removeChild(x);
      clearInterval(intervalId);  
      if (callback) {
        callback();
      }
    }
  }, 5000);  
}

click("toggleButton", function() {
  remove("related", function() {
    remove("comments", function() {
      remove("ticker");
    });
  });
});

