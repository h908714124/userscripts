// ==UserScript==
// @name        yt-nodistractions
// @namespace   h908714124
// @description Turn off most youtube distractions
// @include     https://www.youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

function click(fn, cb) {
  var intervalId = setInterval(function() {
    var x = fn();
    if (x) {
      x.click();
      clearInterval(intervalId);
      if (cb) {
        cb();
      }
    }
  }, 5000);  
}

function remove(fn) {
  var intervalId = setInterval(function() {
    var x = fn();
    if (x) {
      x.parentNode.removeChild(x);
      clearInterval(intervalId);  
    }
  }, 5000);  
}

function byId(id) {
  return function() {
    var el = document.getElementById(id);
    return el;
  }; 
};

// show full description
click(function() {
  return document.querySelector("paper-button#more");
});

// stop autoplay (it's always enabled without cookies)
click(byId("toggleButton"), function() {
  // remove the distracting suggestions
  remove(byId("related"));  
});

// stop autoplay (other way)
click(byId("autoplay-checkbox-label"), function() {
  // remove the distracting suggestions
  remove(byId("related"));
});

// remove comments (they won't load without cookies)
remove(byId("comments"));

// remove privacy reminder (it's always showing without cookies)
remove(byId("ticker"));
