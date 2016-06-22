chrome.runtime.onMessage.addListener((msg, sender, sendResponse) ->
  if msg.size and Number.isInteger(msg.size)
    size = "#{msg.size}%"
  else
    size = "100%"

  console.log("Messege Recieved #{msg.size}")
  contents = document.getElementsByClassName("itemsShowBody_articleColumn")
  slide = contents[0]
  slide.style.fontSize = size
  return
)
