// Generated by CoffeeScript 1.10.0
(function() {
  chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    var contents, size, slide;
    if (msg.size && Number.isInteger(msg.size)) {
      size = msg.size + "%";
    } else {
      size = "100%";
    }
    console.log("Messege Recieved " + msg.size);
    contents = document.getElementsByClassName("itemsShowBody_articleColumn");
    slide = contents[0];
    slide.style.fontSize = size;
  });

}).call(this);
