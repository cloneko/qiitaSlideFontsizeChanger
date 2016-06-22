// Generated by CoffeeScript 1.10.0
(function() {
  var sizeChange;

  window.onload = function() {
    var btn, size;
    size = document.getElementById("size");
    btn = document.getElementById("btn");
    btn.addEventListener("click", function() {
      return sizeChange(size.value);
    });
  };

  sizeChange = function(number) {
    console.log(number);
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      return chrome.tabs.sendMessage(tabs[0].id, {
        size: parseInt(number)
      });
    });
    return true;
  };

}).call(this);