// vichan
myInterval = setInterval(function () {
  var el = document.getElementById("auto_update_status")
  if (!el) {
    return
  }
  el.checked = false
  clearInterval(myInterval)
}, 1000)

